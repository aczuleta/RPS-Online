'use strict';
  //['prettify', 'cssbeautifier', 'exec:format_ts', 'json-format:format']
const tasksList = ['prettify', 'cssbeautifier','json-format:format'];

module.exports = grunt => {

    //We load all the grunt dependencies we are going to use
    require("load-grunt-tasks")(grunt);

    //We initialize the configurations for each task
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

    //We register the task in order to use with the grunt command
    grunt.registerTask('pre-commit', 'Formatting and styling code', function () {
        let tasks = tasksList;
        grunt.log.writeln('Beautifying...');
        tasks.forEach(function (task) {
            grunt.log.writeln('Step ' + task);
            grunt.task.run(task);
            grunt.log.writeln('Done');
        });
    });
};
