/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/

/** Map relative paths to URLs. */
const map: any = {
    'moment': 'vendor/moment/moment.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap'
};

/** User packages configuration. */
const packages: any = {
    'vendor/ng2-bootstrap': {
        defaultExtension: 'js'
    }
};


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms', 
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
    'rxjs',
    'ng2-bootstrap',

  // App specific barrels.
  'app',
  'app/shared',
  'app/common/header',
  'app/home',
  'app/about',
  'app/about/dlg-about',


  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
    if (barrelName == 'ng2-bootstrap')
        cliSystemConfigPackages[barrelName] = { main: 'ng2-bootstrap' };
    else cliSystemConfigPackages[barrelName] = { main: 'index' };
});


/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'ng2-bootstrap': 'vendor/ng2-bootstrap',
        'moment': 'vendor/moment/moment.js',
        'main': 'main.js'
    },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
