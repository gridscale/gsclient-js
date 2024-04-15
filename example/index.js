//#if isBrowserify
var process = {};
//#else
var process = require('process');
//#endif
// browserify-ignore-end
var colors = require('colors');

var gridscale = require('@gridscale/gsclient-js').gridscale;
var client;



/**
 * creates the client and fires sample requests
 * @param _token string - the API Token
 * @param _user_uuid string - the User-UUID to which the token belongs
 */
function createClient(_token, _user_uuid) {
  client = new gridscale.Client(_token, _user_uuid);

  listServers(["power=false"], "Stopped Servers:");
  listServers(["power=true"], "Running Servers:");
  listStorages("Storages:");
  listMarketplaceApps("Marketplace Apps:");
}




/**
 * fetches the servers with given filters and outputs a list
 * @param _filters string[] - optional filters for the request. field + operator + testValue
 * @param _headline string - optional headline to display
 */
function listServers(_filters = [], _headline = "") {
  client.Server.list({
      page: 0,
      limit : 10,
      sort: "name",
      fields: ["name","object_uuid","power"],
      filter: _filters
  }).then((_request) => {
    // request was successful
    output(_headline, 'bold');
    for (var x in _request.result.servers) {
      if (_request.result.servers.hasOwnProperty(x)) {
        let _server = _request.result.servers[x];
        output(_server.object_uuid + ": " + _server.name, _server.power ? 'green': 'red');
      }
    }
  }).
  catch((_error) => {
    // handle the error
    output("An error occured", 'bgRed');
    if (_error.name == 'GridscaleError' && _error.result && _error.result.response) {
      output(_error.message + ": " + _error.result.response.status + " - " + _error.result.response.statusText, 'red');

    } else {
      output("Unknown error " + _error.message);
    }
  });
}

/**
 * fetches the marketplace applications and outputs a list
 * @param _headline string - optional headline to display
 */
function listMarketplaceApps(_headline = "") {
  client.MarketplaceApplication.list({}).then((_request) => {
    // request was successful
    output(_headline, 'bold');
    for (var x in _request.result.applications) {
      if (_request.result.applications.hasOwnProperty(x)) {
        let _application = _request.result.applications[x];
        output(_application.object_uuid + ": " + _application.name, 'blue');
      }
    }
  }).
    catch((_error) => {
      // handle the error
      output("An error occured", 'bgRed');
      if (_error.name == 'GridscaleError' && _error.result && _error.result.response) {
        output(_error.message + ": " + _error.result.response.status + " - " + _error.result.response.statusText, 'red');

      } else {
        output("Unknown error " + _error.message);
      }
    });
}

/**
 * fetches the servers and outputs a list
 * @param _headline string - optional headline to display
 */
function listStorages(_headline = "") {
  client.Storage.list({
      page: 0,
      limit : 10,
      sort: "name",
      fields: ["name","object_uuid"]
  }).then((_request) => {
    // request was successful
    output(_headline, 'bold');
    for (var x in _request.result.storages) {
      if (_request.result.storages.hasOwnProperty(x)) {
        let _storage = _request.result.storages[x];
        output(_storage.object_uuid + ": " + _storage.name, 'magenta');
      }
    }
  }).
  catch((_error) => {
    // handle the error
    output("An error occured", 'bgRed');
    if (_error.name == 'GridscaleError' && _error.result && _error.result.response) {
      output(_error.message + ": " + _error.result.response.status + " - " + _error.result.response.statusText, 'red');

    } else {
      output("Unknown error " + _error.message);
    }
  });
}



/**
 * outputs text with colors in browser or in console for node
 * @param txt string
 * @param color string
 */
function output(txt = "", color = "white") {
  if (typeof(document) !== 'undefined' && document.body) {
    var div = document.createElement('div');
    div.textContent = txt;

    if (color.indexOf('bg') === 0)          div.style.backgroundColor = color.substr(2).toLowerCase();
    else if (['bold'].indexOf(color) >= 0)  div.style.fontWeight = color;
    else                                    div.style.color = color;

    document.body.appendChild(div);

  } else {
    console.log(colors[color](txt));
  }
}



// ask for credentials
if (typeof(document) !== 'undefined' && document.body) {
  // for browser ...

  var intro = document.createElement('p');
  intro.innerHTML = 'Welcome to the gridscale API client example! You will now be asked for an API-Token and an User-UUID. Please log in to the gridscale panel (<a href="https://my.gridscale.io" target="_blank">https://my.gridscale.io</a>) and navigate to the "API-Keys" section to generate one. Read access is enough. The User-UUID is also displayed here.';
  intro.setAttribute('class', 'intro');
  document.body.appendChild(intro);

  var form = document.createElement('form');

  var inputToken = document.createElement('input');
  inputToken.setAttribute('name', 'token');
  inputToken.setAttribute('placeholder', 'API-Token');
  inputToken.setAttribute('required', true);

  var inputUser = document.createElement('input');
  inputUser.setAttribute('name', 'user');
  inputUser.setAttribute('placeholder', 'User-UUID');
  inputUser.setAttribute('required', true);

  var button = document.createElement('input');
  button.setAttribute('type', 'submit');
  button.setAttribute('value', 'Start request');

  form.appendChild(inputToken);
  form.appendChild(inputUser);
  form.appendChild(button);

  document.body.appendChild(form);

  form.onsubmit = function(e) {
    e.preventDefault();
    var p = document.createElement('p');
    p.textContent = "Fetching server list";
    document.body.appendChild(p);
    createClient(inputToken.value.trim(), inputUser.value.trim());
  }

} else {
  // for node
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  output('Welcome to the gridscale API client example! You will now be asked for an API-Token and an User-UUID. Please log in to the gridscale panel (https://my.gridscale.io) and navigate to the "API-Keys" section to generate one. Read access es enough. The User-UUID is also displayed here."', 'cyan');
  output();

  readline.question('Please enter an API-Token: ', (_token) => {
    readline.question('Please enter the User-UUID: ', (_uuid) => {
      readline.close();
      createClient(_token.trim(), _uuid.trim());
    });
  });
}
