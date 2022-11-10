
/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';
import 'jquery-validation';
import 'dotdotdot-js';
import 'slick-carousel/slick/slick.min';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import slick from './modules/slick';
import initializeTabs from './modules/tabs';
import inputmask from './modules/inputmask'
import validation from './modules/validation';
import dotdotdot from './modules/dotdotdot';


const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();

        // myModule();

        inputmask();
        validation();
        dotdotdot();
        slick();

    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});

document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();

});

