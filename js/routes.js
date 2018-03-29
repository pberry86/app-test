angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    .state('payment', {
      url: '/payment',
      templateUrl: 'templates/payment.html',
      controller: 'PaymentCtrl'
    })

      .state('tabsController.cautions', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/cautions.html',
        controller: 'cautionsCtrl'
      }
    }
  })

  .state('tabsController.qRDS', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/qRDS.html',
        controller: 'qRDSCtrl'
      }
    }
  })

  .state('tabsController.basics', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/basics.html',
        controller: 'basicsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.seizures', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/seizures.html',
        controller: 'seizuresCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.definition', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/definition.html',
        controller: 'definitionCtrl'
      }
    }
  })

  .state('tabsController.usageOfQRDS', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/usageOfQRDS.html',
        controller: 'usageOfQRDSCtrl'
      }
    }
  })

  .state('safetyColours', {
    url: '/page9',
    templateUrl: 'templates/safetyColours.html',
    controller: 'safetyColoursCtrl'
  })

  .state('tabsController.qRDSFromBook', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/qRDSFromBook.html',
        controller: 'qRDSFromBookCtrl'
      }
    }
  })

  .state('tabsController.vocabulary', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/vocabulary.html',
        controller: 'vocabularyCtrl'
      }
    }
  })

  .state('about', {
    url: '/page12',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('tabsController.dilution', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/dilution.html',
        controller: 'dilutionCtrl'
      }
    }
  })

  .state('tabsController.lavender', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/lavender.html',
        controller: 'lavenderCtrl'
      }
    }
  })

  .state('tabsController.teaTree', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/teaTree.html',
        controller: 'teaTreeCtrl'
      }
    }
  })

  .state('tabsController.scotchPine', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/scotchPine.html',
        controller: 'scotchPineCtrl'
      }
    }
  })

  .state('tabsController.sweetOrange', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/sweetOrange.html',
        controller: 'sweetOrangeCtrl'
      }
    }
  })

  .state('tabsController.eucalyptusGlobulus', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/eucalyptusGlobulus.html',
        controller: 'eucalyptusGlobulusCtrl'
      }
    }
  })

  .state('tabsController.blackPepper', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/blackPepper.html',
        controller: 'blackPepperCtrl'
      }
    }
  })

  .state('tabsController.myrrh', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/myrrh.html',
        controller: 'myrrhCtrl'
      }
    }
  })

  .state('tabsController.rose', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/rose.html',
        controller: 'roseCtrl'
      }
    }
  })

  .state('tabsController.sweetMarjoram', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/sweetMarjoram.html',
        controller: 'sweetMarjoramCtrl'
      }
    }
  })

  .state('tabsController.dillSeed', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/dillSeed.html',
        controller: 'dillSeedCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.ingestion'
      2) Using $state.go programatically:
        $state.go('tabsController.ingestion');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page24
      /page1/tab3/page24
  */
  .state('tabsController.ingestion', {
    url: '/page24',
    views: {
      'tab2': {
        templateUrl: 'templates/ingestion.html',
        controller: 'ingestionCtrl'
      },
      'tab3': {
        templateUrl: 'templates/ingestion.html',
        controller: 'ingestionCtrl'
      }
    }
  })

  .state('tabsController.carrierOils', {
    url: '/page25',
    views: {
      'tab2': {
        templateUrl: 'templates/carrierOils.html',
        controller: 'carrierOilsCtrl'
      }
    }
  })

  .state('tabsController.distilling', {
    url: '/page26',
    views: {
      'tab2': {
        templateUrl: 'templates/distilling.html',
        controller: 'distillingCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.babies'
      2) Using $state.go programatically:
        $state.go('tabsController.babies');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page27
      /page1/tab3/page27
  */
  .state('tabsController.babies', {
    url: '/page27',
    views: {
      'tab2': {
        templateUrl: 'templates/babies.html',
        controller: 'babiesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/babies.html',
        controller: 'babiesCtrl'
      }
    }
  })

  .state('tabsController.pets', {
    url: '/page28',
    views: {
      'tab3': {
        templateUrl: 'templates/pets.html',
        controller: 'petsCtrl'
      }
    }
  })

  .state('tabsController.drugInteractions', {
    url: '/page29',
    views: {
      'tab3': {
        templateUrl: 'templates/drugInteractions.html',
        controller: 'drugInteractionsCtrl'
      }
    }
  })

  .state('tabsController.medicalConditions', {
    url: '/page30',
    views: {
      'tab3': {
        templateUrl: 'templates/medicalConditions.html',
        controller: 'medicalConditionsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.pregnancyAndBreastfeeding'
      2) Using $state.go programatically:
        $state.go('tabsController.pregnancyAndBreastfeeding');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page31
      /page1/tab3/page31
  */
  .state('tabsController.pregnancyAndBreastfeeding', {
    url: '/page31',
    views: {
      'tab2': {
        templateUrl: 'templates/pregnancyAndBreastfeeding.html',
        controller: 'pregnancyAndBreastfeedingCtrl'
      },
      'tab3': {
        templateUrl: 'templates/pregnancyAndBreastfeeding.html',
        controller: 'pregnancyAndBreastfeedingCtrl'
      }
    }
  })

  .state('tabsController.hydrosols', {
    url: '/page32',
    views: {
      'tab2': {
        templateUrl: 'templates/hydrosols.html',
        controller: 'hydrosolsCtrl'
      }
    }
  })

  .state('tabsController.history', {
    url: '/page33',
    views: {
      'tab2': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController.citrus', {
    url: '/page34',
    views: {
      'tab1': {
        templateUrl: 'templates/citrus.html',
        controller: 'citrusCtrl'
      }
    }
  })

  .state('tabsController.bergamot', {
    url: '/page35',
    views: {
      'tab1': {
        templateUrl: 'templates/bergamot.html',
        controller: 'bergamotCtrl'
      }
    }
  })

  .state('tabsController.grapefruit', {
    url: '/page36',
    views: {
      'tab1': {
        templateUrl: 'templates/grapefruit.html',
        controller: 'grapefruitCtrl'
      }
    }
  })

  .state('tabsController.lemon', {
    url: '/page37',
    views: {
      'tab1': {
        templateUrl: 'templates/lemon.html',
        controller: 'lemonCtrl'
      }
    }
  })

  .state('tabsController.lime', {
    url: '/page38',
    views: {
      'tab1': {
        templateUrl: 'templates/lime.html',
        controller: 'limeCtrl'
      }
    }
  })

  .state('tabsController.orange', {
    url: '/page39',
    views: {
      'tab1': {
        templateUrl: 'templates/orange.html',
        controller: 'orangeCtrl'
      }
    }
  })

  .state('tabsController.temperateSpicesHerbs', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/temperateSpicesHerbs.html',
        controller: 'temperateSpicesHerbsCtrl'
      }
    }
  })

  .state('tabsController.tropicalSpicesHerbs', {
    url: '/page41',
    views: {
      'tab1': {
        templateUrl: 'templates/tropicalSpicesHerbs.html',
        controller: 'tropicalSpicesHerbsCtrl'
      }
    }
  })

  .state('tabsController.evergreens', {
    url: '/page42',
    views: {
      'tab1': {
        templateUrl: 'templates/evergreens.html',
        controller: 'evergreensCtrl'
      }
    }
  })

  .state('tabsController.resins', {
    url: '/page43',
    views: {
      'tab1': {
        templateUrl: 'templates/resins.html',
        controller: 'resinsCtrl'
      }
    }
  })

  .state('tabsController.trees', {
    url: '/page44',
    views: {
      'tab1': {
        templateUrl: 'templates/trees.html',
        controller: 'treesCtrl'
      }
    }
  })

  .state('tabsController.florals', {
    url: '/page45',
    views: {
      'tab1': {
        templateUrl: 'templates/florals.html',
        controller: 'floralsCtrl'
      }
    }
  })

  .state('tabsController.absoluteOtto', {
    url: '/page46',
    views: {
      'tab1': {
        templateUrl: 'templates/absoluteOtto.html',
        controller: 'absoluteOttoCtrl'
      }
    }
  })

  .state('tabsController.jasmine', {
    url: '/page49',
    views: {
      'tab1': {
        templateUrl: 'templates/jasmine.html',
        controller: 'jasmineCtrl'
      }
    }
  })

  .state('tabsController.elemi', {
    url: '/page50',
    views: {
      'tab1': {
        templateUrl: 'templates/elemi.html',
        controller: 'elemiCtrl'
      }
    }
  })

  .state('tabsController.frankincense', {
    url: '/page51',
    views: {
      'tab1': {
        templateUrl: 'templates/frankincense.html',
        controller: 'frankincenseCtrl'
      }
    }
  })

  .state('tabsController.labdanum', {
    url: '/page52',
    views: {
      'tab1': {
        templateUrl: 'templates/labdanum.html',
        controller: 'labdanumCtrl'
      }
    }
  })

  .state('tabsController.juniperBerry', {
    url: '/page53',
    views: {
      'tab1': {
        templateUrl: 'templates/juniperBerry.html',
        controller: 'juniperBerryCtrl'
      }
    }
  })

  .state('tabsController.camphor', {
    url: '/page54',
    views: {
      'tab1': {
        templateUrl: 'templates/camphor.html',
        controller: 'camphorCtrl'
      }
    }
  })

  .state('tabsController.cedarwoodVirginiana', {
    url: '/page55',
    views: {
      'tab1': {
        templateUrl: 'templates/cedarwoodVirginiana.html',
        controller: 'cedarwoodVirginianaCtrl'
      }
    }
  })

  .state('tabsController.rosewood', {
    url: '/page56',
    views: {
      'tab1': {
        templateUrl: 'templates/rosewood.html',
        controller: 'rosewoodCtrl'
      }
    }
  })

  .state('tabsController.sandalwood', {
    url: '/page57',
    views: {
      'tab1': {
        templateUrl: 'templates/sandalwood.html',
        controller: 'sandalwoodCtrl'
      }
    }
  })

  .state('tabsController.whiteBirch', {
    url: '/page58',
    views: {
      'tab1': {
        templateUrl: 'templates/whiteBirch.html',
        controller: 'whiteBirchCtrl'
      }
    }
  })

  .state('tabsController.chamomileRoman', {
    url: '/page48',
    views: {
      'tab1': {
        templateUrl: 'templates/chamomileRoman.html',
        controller: 'chamomileRomanCtrl'
      }
    }
  })

  .state('tabsController.chamomileGerman', {
    url: '/page59',
    views: {
      'tab1': {
        templateUrl: 'templates/chamomileGerman.html',
        controller: 'chamomileGermanCtrl'
      }
    }
  })

  .state('tabsController.geranium', {
    url: '/page60',
    views: {
      'tab1': {
        templateUrl: 'templates/geranium.html',
        controller: 'geraniumCtrl'
      }
    }
  })

  .state('tabsController.roseGeranium', {
    url: '/page61',
    views: {
      'tab1': {
        templateUrl: 'templates/roseGeranium.html',
        controller: 'roseGeraniumCtrl'
      }
    }
  })

  .state('tabsController.tagetes', {
    url: '/page62',
    views: {
      'tab1': {
        templateUrl: 'templates/tagetes.html',
        controller: 'tagetesCtrl'
      }
    }
  })

  .state('tabsController.yarrow', {
    url: '/page63',
    views: {
      'tab1': {
        templateUrl: 'templates/yarrow.html',
        controller: 'yarrowCtrl'
      }
    }
  })

  .state('tabsController.ylangYlang', {
    url: '/page64',
    views: {
      'tab1': {
        templateUrl: 'templates/ylangYlang.html',
        controller: 'ylangYlangCtrl'
      }
    }
  })

  .state('tabsController.ginger', {
    url: '/page65',
    views: {
      'tab1': {
        templateUrl: 'templates/ginger.html',
        controller: 'gingerCtrl'
      }
    }
  })

  .state('tabsController.starAnise', {
    url: '/page66',
    views: {
      'tab1': {
        templateUrl: 'templates/starAnise.html',
        controller: 'starAniseCtrl'
      }
    }
  })

  .state('tabsController.anise', {
    url: '/page67',
    views: {
      'tab1': {
        templateUrl: 'templates/anise.html',
        controller: 'aniseCtrl'
      }
    }
  })

  .state('tabsController.nutmeg', {
    url: '/page68',
    views: {
      'tab1': {
        templateUrl: 'templates/nutmeg.html',
        controller: 'nutmegCtrl'
      }
    }
  })

  .state('tabsController.cinnamonLeaf', {
    url: '/page69',
    views: {
      'tab1': {
        templateUrl: 'templates/cinnamonLeaf.html',
        controller: 'cinnamonLeafCtrl'
      }
    }
  })

  .state('tabsController.blackPepper2', {
    url: '/page70',
    views: {
      'tab1': {
        templateUrl: 'templates/blackPepper2.html',
        controller: 'blackPepper2Ctrl'
      }
    }
  })

  .state('tabsController.cloveLeaf', {
    url: '/page71',
    views: {
      'tab1': {
        templateUrl: 'templates/cloveLeaf.html',
        controller: 'cloveLeafCtrl'
      }
    }
  })

  .state('tabsController.allspice', {
    url: '/page72',
    views: {
      'tab1': {
        templateUrl: 'templates/allspice.html',
        controller: 'allspiceCtrl'
      }
    }
  })

  .state('tabsController.caraway', {
    url: '/page73',
    views: {
      'tab1': {
        templateUrl: 'templates/caraway.html',
        controller: 'carawayCtrl'
      }
    }
  })

  .state('tabsController.cardamom', {
    url: '/page74',
    views: {
      'tab1': {
        templateUrl: 'templates/cardamom.html',
        controller: 'cardamomCtrl'
      }
    }
  })

  .state('tabsController.lemongrass', {
    url: '/page75',
    views: {
      'tab1': {
        templateUrl: 'templates/lemongrass.html',
        controller: 'lemongrassCtrl'
      }
    }
  })

  .state('tabsController.sage', {
    url: '/page76',
    views: {
      'tab1': {
        templateUrl: 'templates/sage.html',
        controller: 'sageCtrl'
      }
    }
  })

  .state('tabsController.rosemary', {
    url: '/page77',
    views: {
      'tab1': {
        templateUrl: 'templates/rosemary.html',
        controller: 'rosemaryCtrl'
      }
    }
  })

  .state('tabsController.peppermint', {
    url: '/page78',
    views: {
      'tab1': {
        templateUrl: 'templates/peppermint.html',
        controller: 'peppermintCtrl'
      }
    }
  })

  .state('tabsController.spearmint', {
    url: '/page79',
    views: {
      'tab1': {
        templateUrl: 'templates/spearmint.html',
        controller: 'spearmintCtrl'
      }
    }
  })

  .state('tabsController.terragon', {
    url: '/page80',
    views: {
      'tab1': {
        templateUrl: 'templates/terragon.html',
        controller: 'terragonCtrl'
      }
    }
  })

  .state('tabsController.thyme', {
    url: '/page81',
    views: {
      'tab1': {
        templateUrl: 'templates/thyme.html',
        controller: 'thymeCtrl'
      }
    }
  })

  .state('tabsController.marjoram', {
    url: '/page82',
    views: {
      'tab1': {
        templateUrl: 'templates/marjoram.html',
        controller: 'marjoramCtrl'
      }
    }
  })

  .state('tabsController.oregano', {
    url: '/page83',
    views: {
      'tab1': {
        templateUrl: 'templates/oregano.html',
        controller: 'oreganoCtrl'
      }
    }
  })

  .state('tabsController.fennelSweet', {
    url: '/page84',
    views: {
      'tab1': {
        templateUrl: 'templates/fennelSweet.html',
        controller: 'fennelSweetCtrl'
      }
    }
  })

  .state('tabsController.garlic', {
    url: '/page85',
    views: {
      'tab1': {
        templateUrl: 'templates/garlic.html',
        controller: 'garlicCtrl'
      }
    }
  })

  .state('tabsController.basilSweet', {
    url: '/page86',
    views: {
      'tab1': {
        templateUrl: 'templates/basilSweet.html',
        controller: 'basilSweetCtrl'
      }
    }
  })

  .state('grasses', {
    url: '/page87',
    templateUrl: 'templates/grasses.html',
    controller: 'grassesCtrl'
  })

  .state('eucalyptusSpecies', {
    url: '/page88',
    templateUrl: 'templates/eucalyptusSpecies.html',
    controller: 'eucalyptusSpeciesCtrl'
  })

  .state('tabsController.cypress', {
    url: '/page89',
    views: {
      'tab1': {
        templateUrl: 'templates/cypress.html',
        controller: 'cypressCtrl'
      }
    }
  })

  .state('tabsController.neroliOrangeBlossom', {
    url: '/page90',
    views: {
      'tab1': {
        templateUrl: 'templates/neroliOrangeBlossom.html',
        controller: 'neroliOrangeBlossomCtrl'
      }
    }
  })

  .state('tabsController.petitgrain', {
    url: '/page91',
    views: {
      'tab1': {
        templateUrl: 'templates/petitgrain.html',
        controller: 'petitgrainCtrl'
      }
    }
  })

  .state('tabsController.galbanum', {
    url: '/page92',
    views: {
      'tab1': {
        templateUrl: 'templates/galbanum.html',
        controller: 'galbanumCtrl'
      }
    }
  })

  .state('tabsController.clarySage', {
    url: '/page93',
    views: {
      'tab1': {
        templateUrl: 'templates/clarySage.html',
        controller: 'clarySageCtrl'
      }
    }
  })

  .state('tabsController.helichrysum', {
    url: '/page94',
    views: {
      'tab1': {
        templateUrl: 'templates/helichrysum.html',
        controller: 'helichrysumCtrl'
      }
    }
  })

  .state('tabsController.hyssop', {
    url: '/page95',
    views: {
      'tab1': {
        templateUrl: 'templates/hyssop.html',
        controller: 'hyssopCtrl'
      }
    }
  })

  .state('tabsController.bay', {
    url: '/page96',
    views: {
      'tab1': {
        templateUrl: 'templates/bay.html',
        controller: 'bayCtrl'
      }
    }
  })

  .state('tabsController.cajeput', {
    url: '/page97',
    views: {
      'tab1': {
        templateUrl: 'templates/cajeput.html',
        controller: 'cajeputCtrl'
      }
    }
  })

  .state('tabsController.myrtle', {
    url: '/page98',
    views: {
      'tab1': {
        templateUrl: 'templates/myrtle.html',
        controller: 'myrtleCtrl'
      }
    }
  })

  .state('tabsController.cassiaBark', {
    url: '/page99',
    views: {
      'tab1': {
        templateUrl: 'templates/cassiaBark.html',
        controller: 'cassiaBarkCtrl'
      }
    }
  })

  .state('tabsController.patchouli', {
    url: '/page100',
    views: {
      'tab1': {
        templateUrl: 'templates/patchouli.html',
        controller: 'patchouliCtrl'
      }
    }
  })

  .state('tabsController.spikenard', {
    url: '/page101',
    views: {
      'tab1': {
        templateUrl: 'templates/spikenard.html',
        controller: 'spikenardCtrl'
      }
    }
  })

  .state('tabsController.angelicaRoot', {
    url: '/page102',
    views: {
      'tab1': {
        templateUrl: 'templates/angelicaRoot.html',
        controller: 'angelicaRootCtrl'
      }
    }
  })

  .state('tabsController.coriander', {
    url: '/page103',
    views: {
      'tab1': {
        templateUrl: 'templates/coriander.html',
        controller: 'corianderCtrl'
      }
    }
  })

  .state('tabsController.lemonBalmMelissa', {
    url: '/page104',
    views: {
      'tab1': {
        templateUrl: 'templates/lemonBalmMelissa.html',
        controller: 'lemonBalmMelissaCtrl'
      }
    }
  })

  .state('niaouli', {
    url: '/page105',
    templateUrl: 'templates/niaouli.html',
    controller: 'niaouliCtrl'
  })

// $urlRouterProvider.otherwise('/page1/page4')
$urlRouterProvider.otherwise('/login')


});
