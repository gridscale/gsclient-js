module.exports = function (grunt) {
    grunt.initConfig({

        clean: {

            dev: ['dist/dev/'],
            prod: ['dist/prod']
        },
        
        browserify: {
            dev: {
                files: {
                    'dist/dev/gridscale.js': ['lib/gridscale.ts'],
                    'dist/dev/web.js': ['lib/web.ts']
                },
                options: {
                    browserifyOptions: {
                        debug: true,
                        standalone: 'gridscale'
                    },
                    plugin : ['tsify']
                }
            },
            prod: {
                files: {
                    'dist/prod/gridscale.js': ['lib/gridscale.ts'],
                    'dist/prod/web.js': ['lib/web.ts']
                },
                options: {
                    browserifyOptions: {
                        debug: false,
                        standalone: 'gridscale'
                    },
                    plugin : ['tsify']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('js_dev', [ 'clean:dev', 'browserify:dev']);
    grunt.registerTask('js_prod', [ 'clean:prod', 'browserify:prod']);
};