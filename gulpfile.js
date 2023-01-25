const gulp = require("gulp");
var exec = require("child_process").exec;

const copyBackend = (cb) => {
  return gulp
    .src(["backend/**", "!backend/node_modules/**"])
    .pipe(gulp.dest("build/"));
};

const installPackages = (cb) => {
  process.chdir("build");
  exec("npm i", () => {
    process.chdir("../");
    cb();
  });
};

const buildFrontend = (cb) => {
  process.chdir("frontend");
  exec("npm i && npm run build", () => {
    process.chdir("../");
    cb();
  });
};

const copyFrontend = async () => {
  return gulp.src("frontend/build/**").pipe(gulp.dest("build/public/"));
};

exports.default = gulp.series(
  copyBackend,
  installPackages,
  buildFrontend,
  copyFrontend
);
