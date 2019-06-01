'use strict';
module.exports = grunt => {
    grunt.initConfig({
        exec: {
            format_ts: {
                cmd: 'tsfmt -r'
            }
        },
        prettify: {
            options: {
                indent: 4,
                indent_inner_html: true
            },
            all: {
                expand: true,
                src: [
                    'src/index.html',
                    'src/*/*.component.html',
                    'src/*/*/*.component.html',
                    'src/*/*/*/*.component.html',
                    'src/*/*/*/*/*.component.html'
                ]
            }
        },
        cssbeautifier: {
            files: ["src/**/*.css"],
            options: {
                openbrace: 'end-of-line',
                indent: '   '
            }
        },
        'json-format': {
            format: {
                options: {
                    indent: 4,
                    remove: ['_comment']
                },
                files: [
                    {
                        expand: true,
                        src: [
                            '*.json'
                        ]
                    }
                ]
            }
        }
    });
    //hago npm tasts
    require("load-grunt-tasks")(grunt);
    //registrando task
    grunt.registerTask('pre-commit', 'Poniendo el código bonito', function () {
        let tasks = ['prettify', 'cssbeautifier', 'exec:format_ts', 'json-format:format'];
        grunt.log.writeln('Beautifying...');
        tasks.forEach(function (task) {
            grunt.log.writeln('Step ' + task);
            grunt.task.run(task);
            grunt.log.writeln('Done');
        });
    });
};
