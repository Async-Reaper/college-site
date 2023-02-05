import pkg from 'gulp';
import cleanCss from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import {deleteAsync} from 'del'
import concat from 'gulp-concat';
import minHTML from 'gulp-htmlmin'

const sass = gulpSass(dartSass);
const {src, dest, series} = pkg;

function html() {
    return src('src/*.html')
        .pipe(minHTML({ collapseWhitespace: true }))
        .pipe('dist')
}

function css() {
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(concat('style.min.css'))
        .pipe(dest('dist/css'))
}

function js() {
    return src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(dest('dist/js/'))
}

async function deleteFolder() {
    return await deleteAsync('dist')
}

const seriesTask = series(deleteFolder, html, css, js)
export default seriesTask