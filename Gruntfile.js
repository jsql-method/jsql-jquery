/*
 * jsql
 *
 * Copyright (c) 2018 JSQL
 * Licensed under the ISC license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            files: ['dist'],
            publish: ['dist/jsql-jquery.js', 'dist/jsql-jquery-bundle.js']
        },

        concat: {
			options: {
				separator: ';'
			},
            distAlone: {
				src: ['node_modules/jsql-core/jsql-core.min.js', 'src/jsql-jquery.js'],
				dest: 'dist/jsql-jquery.js'
			},
            distBundle: {
                src: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/jsql-core/jsql-core.min.js', 'src/jsql-jquery.js'],
                dest: 'dist/jsql-jquery-bundle.js'
            },
            localAlone: {
                src: ['../jsql-js-core/dist/jsql-core.min.js', 'src/jsql-jquery.js'],
                dest: 'dist/jsql-jquery.js'
            },
            localBundle: {
                src: ['node_modules/jquery/dist/jquery.min.js', '../jsql-js-core/dist/jsql-core.min.js', 'src/jsql-jquery.js'],
                dest: 'dist/jsql-jquery-bundle.js'
            }
		},

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/jsql-jquery.min.js': ['dist/jsql-jquery.js'],
                    'dist/jsql-jquery-bundle.min.js': ['dist/jsql-jquery-bundle.js']
                }
            }
        },

        copy: {

            dist: {

                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['isc.md', 'package.json'],
                        dest: './dist'
                    }
                ]

            }

        }

    });

	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('dev', ['concat:localAlone', 'concat:localBundle', 'uglify']);
    grunt.registerTask('default', ['clean:files', 'concat:distAlone', 'concat:distBundle', 'uglify', 'copy', 'clean:publish']);

};
