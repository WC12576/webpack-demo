import _ from 'lodash'
import $ from 'jquery'
import * as NO1 from './main'
import './index.css'

NO1.sayHi()

  function component() {
    var $div = $('<div/>')

   // Lodash, now imported by this script
   $div.html ( _.join(['Hello', 'webpack'], ' ') )

    return $div
  }

  $(document.body).append(component())