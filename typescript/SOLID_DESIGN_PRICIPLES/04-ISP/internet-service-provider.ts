interface InternetService {
  provideInternet(): void;
}

interface TvService {
  provideTv(): void;
}

interface PhoneService {
  providePhone(): void;
}

class LocalISP implements InternetService {
  provideInternet(): void {
    console.log("Providing basic internet service");
  }
}

class MegaISP implements InternetService, TvService, PhoneService {
  provideInternet(): void {
    console.log("Providing premium internet service");
  }
  provideTv(): void {
    console.log("Providing TV service");
  }
  providePhone(): void {
    console.log("Providing phone service");
  }
}

//Usage
const localISP = new LocalISP();
localISP.provideInternet(); // Output: Providing basic internet service
const megaISP = new MegaISP();
megaISP.provideInternet(); // Output: Providing premium internet service
megaISP.provideTv(); // // Output: Providing TV service
megaISP.providePhone(); // Output: Providing phone service
