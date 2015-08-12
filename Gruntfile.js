module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      copyPure: {
        files: [
          {
            src: "node_modules/purecss/build/*.css",
            dest: "build/",
            expand: true,
            flatten: true,
            rename: function(dest, src) {
              return dest + src.replace(/\.css$/, ".scss");
            }
          }
        ]
      },
      movescssfiles: {
        files: [
          {
            src: "scss/**.scss",
            dest: "build/",
            flatten: true,
            expand: true,
          }
        ]
      },
      createPureSubfolders: {
        files: [
          {expand: true, flatten: true, src: ["build/base**"], dest: "build/base/"},
          {expand: true, flatten: true, src: ["build/buttons**"], dest: "build/buttons/"},
          {expand: true, flatten: true, src: ["build/forms**"], dest: "build/forms/"},
          {expand: true, flatten: true, src: ["build/grids**"], dest: "build/grids/"},
          {expand: true, flatten: true, src: ["build/menus**"], dest: "build/menus/"},
          {expand: true, flatten: true, src: ["build/tables**"], dest: "build/tables/"}
        ]
      }
    },
    clean: {
      removeMinScripts: {
        src: [ "build/*-min.scss"]
      },
      removeOldSCSSFiles: {
        src: [ "build/*.scss"]
      },
      clearBuild: {
        src: ["build/"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-rename");

  grunt.registerTask("sassinated", function() {
    grunt.log.writeln("                                            ");
    grunt.log.writeln("    .---.                       .        .  ");
    grunt.log.writeln("    \\___  ,-. ,-. ,-. . ,-. ,-. |- ,-. ,-| ");
    grunt.log.writeln("        \\ ,-| `-. `-. | | | ,-| |  |-' | | ");
    grunt.log.writeln("    `---' `-^ `-' `-' ' ' ' `-^ `' `-' `-^  ");
    grunt.log.writeln("                                            ");
    grunt.log.writeln("                                            ");
  });

  grunt.registerTask("default", [
    "clean:clearBuild",
    "copy:copyPure",
    "clean:removeMinScripts",
    "copy:createPureSubfolders",
    "clean:removeOldSCSSFiles",
    "copy:movescssfiles",
    "sassinated"
  ]);

}
