let gulp=require('gulp');
let shell=require('gulp-shell');
let eslint=require('gulp-eslint');
let fs=require('fs');
let mocha = require('gulp-mocha');

gulp.task('run',shell.task([
    'node ./src/app.js'
]))

gulp.task('lint',()=>{
    return gulp.src(['./src/app.js','!node_modules/**']) //fetch the files
    .pipe(eslint()) // point the next thing we want to do, chaining the command
    .pipe(eslint.format()) //to display in terminal
    .pipe(eslint.format('html', fs.createWriteStream('lintReports/lint_report.html')))
    .pipe(eslint.format('checkstyle', fs.createWriteStream('lintReports/checkstyle.xml')))
    .pipe(eslint.failAfterError())
})

gulp.task('test', () => {
    return gulp.src(['test/*.js'])// fetching all test case files
      .pipe(mocha(
        {
          reporter: 'mocha-junit-reporter', //npm package
          reporterOptions: {
            mochaFile: './testReport/JUnit/file.xml',
            jenkinsMode:true
          }
        }
      )) //running mocha
      .on('error', console.error)
  });
  
  gulp.task('coverage', shell.task([
    'nyc --reporter=lcov --reporter=text mocha'
  ])); 

  
  