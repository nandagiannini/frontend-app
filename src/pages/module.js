import Config       from './config.js'
import Contact      from './controller/contact.js'
import Explore      from './controller/explore.js'
import Donate       from './controller/donate.js'
import DonateBillet from './controller/donate.billet.js'

export default angular
  .module('pages', [])
  .config(Config)
  .controller('Contact', Contact)
  .controller('Explore', Explore)
  .controller('Donate', Donate)
  .controller('DonateBillet', DonateBillet)
