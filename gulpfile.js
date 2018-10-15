const gulp = require('gulp')
const pandoc = require('gulp-pandoc')

gulp.task('conspectus', () => {
  gulp
    .src('conspectus/*.md')
    .pipe(
      pandoc({
        from: 'markdown',
        to: 'pdf',
        ext: '.pdf',
        args: [ '--smart', '--mathjax' ]
      })
    )
    .pipe(gulp.dest('build/conspectus'))
})
