APPTIME=()=>{
    

    const MONITORINGLINK = 'your_monitoring_link'; // Replace with your actual monitoring link
    const MODE = 'cors'; // Replace with your desired mode
    
    // Check if the user has already visited the page
    const visitStartTime = localStorage.getItem('visitStartTime');
    let timeSpentData = [];
    
    if (!visitStartTime) {
            // If it's the first visit or the page was reopened, store the current time in local storage
            localStorage.setItem('visitStartTime', new Date().getTime());
    } else {
            // If the page was reopened, reset the time spent data
            timeSpentData = [];
    }
    
    // Function to calculate and update time spent
    function updateTimeSpent() {
            // Calculate the time spent on the page
         const currentTime = new Date().getTime();
        const startTime = parseInt(localStorage.getItem('visitStartTime'), 10);
        const timeSpentMillis = currentTime - startTime;
    
            // Convert milliseconds to hours, minutes, seconds, days, and months
        const millisecondsInSecond = 1000;
        const millisecondsInMinute = millisecondsInSecond * 60;
        const millisecondsInHour = millisecondsInMinute * 60;
        const millisecondsInDay = millisecondsInHour * 24;
        const millisecondsInMonth = millisecondsInDay * 30; // Approximation for a month
    
        const hours = Math.floor(timeSpentMillis / millisecondsInHour);
        const minutes = Math.floor((timeSpentMillis % millisecondsInHour) / millisecondsInMinute);
        const seconds = Math.floor((timeSpentMillis % millisecondsInMinute) / millisecondsInSecond);            const days = Math.floor(timeSpentMillis / millisecondsInDay);
        const months = Math.floor(timeSpentMillis / millisecondsInMonth);
    
            // Create a JSON object with the time spent data
        const timeSpentObject = {
            hours,
            minutes,
            seconds,
            days,
            months
        };
    
            // Add the JSON object to the array
        timeSpentData.push(timeSpentObject);
    
            // Save the time spent data array to local storage
            localStorage.setItem('timeSpentData', JSON.stringify(timeSpentData));
    
            // PUSH THE DATA TO THE DATABASE
            APPUSAGE();
        }
    
        // Update time spent every minute (adjust the interval as needed)
        const updateInterval = 60000; // 60,000 milliseconds = 1 minute
        setInterval(updateTimeSpent, updateInterval);
    
        // Capture the beforeunload event to reset visitStartTime when the user closes the site
        window.addEventListener('beforeunload', () => {
            localStorage.removeItem('visitStartTime');
        });
    
    // To retrieve the time spent data array later, you can use:
    // const storedTimeSpentData = localStorage.getItem('timeSpentData');
    // const parsedTimeSpentData = JSON.parse(storedTimeSpentData);

}

const APPUSAGE=()=>{

    localStorage.setItem('AppOpened','True');

    localStorage.setItem('AppOpenedTime',new Date);

    let AppMode="";

    let ParentalControl='';

    if (localStorage.getItem('Mode')==='Dark') {

        AppMode='Dark'
        
    } else {
        
        AppMode='Light'
     
    }    
    
    if (parentalControlEnabled) {

        ParentalControl=JSON.stringify(parentalControlEnabled);
        
    
    } else {
        
        ParentalControl='OFF';
     
    } 

     const SAVEDDATA = localStorage.getItem('SavedMovies');

     const WATCHEDDATA = localStorage.getItem('WatchedMovies');

    // Check if there are any saved movies in local storage

    let SavedMovies='';

    if (SAVEDDATA) {

        SavedMovies = SAVEDDATA;

    }else{

        SavedMovies='null';

    }

    let WatchedMovies='';

    if (WATCHEDDATA) {

        WatchedMovies = WATCHEDDATA;

    }else{

        WatchedMovies='null';

    }

    const Premium = localStorage.getItem('Premium');

    UserPremium='';

    if (Premium) {

        UserPremium = 'TRUE';

    }else{

        UserPremium = 'FALSE';

    }

    const storedTimeSpentData = localStorage.getItem('timeSpentData');
    const parsedTimeSpentData = storedTimeSpentData;

    let CurrentlyWatching='';
    if (localStorage.getItem('CurrentlyWatching')) {

        CurrentlyWatching=localStorage.getItem('CurrentlyWatching');
        
    } else {
        
        CurrentlyWatching='null'
    }
    
    let CurrentlyWatchingDate='';

    if (localStorage.getItem('CurrentlyWatchingDate')) {
        
        CurrentlyWatchingDate=localStorage.getItem('CurrentlyWatchingDate');

    } else {
        
        CurrentlyWatchingDate='null';

    }

    const ADVERTSDATA = {
        "AdvertName": 'null',
        "AdvertsLink": 'null',
        "AdvertsClickedTime": new Date(),
        "Email": localStorage.getItem('UserEmail'),
        "AppVersion": localStorage.getItem('AppVersion'),
        "AppMode": AppMode,
        "AdvertsID": 'null',
        "ParentalControl": ParentalControl,
        "LogginedIn": localStorage.getItem('LoggedIn'),
        "SavedMovies":SavedMovies,
        "OpenedApp":localStorage.getItem('AppOpened'),
        "OpenedAppTime":localStorage.getItem('AppOpenedTime'),
        "UserPremium":UserPremium,
        "WatchedMovies":WatchedMovies,
        "WatchTime":parsedTimeSpentData,
        "CurrentlyWatching":CurrentlyWatching,
        "CurrentlyWatchingDate":CurrentlyWatchingDate,
        "Device": {
            "Browser": {
                "Name": getBrowserName(),
                "Version": getBrowserVersion()
            },
            "OS": {
                "Name": getOSName(),
                "Version": getOSVersion()
            },
            "ScreenWidth": screen.width,
            "ScreenHeight": screen.height
        }
    };
    
    // Function to get browser name
    function getBrowserName() {

        return navigator.appName;

    }
    
    // Function to get browser version
    function getBrowserVersion() {

        return navigator.appVersion;

    }
    
    // Function to get OS name
    function getOSName() {

        return navigator.platform;

    }
    
    // Function to get OS version
    function getOSVersion() {

        return navigator.userAgent;

    }
    
    // SEND LINK DATA TO DATABASE AS IT OPENS
    fetch(MONITORINGLINK, {

        method: "POST",

        mode: MODE,

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(ADVERTSDATA)

    })

        .then(data => {
            
            console.log('Data Sent')

        })

        .catch(error => console.log(error));

}

