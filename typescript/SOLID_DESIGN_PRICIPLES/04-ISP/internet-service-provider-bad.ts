interface InternetServiceProvider {
  provideInternet(): void;
  provideTv(): void;
  providePhone(): void;
}

class BasicISP implements InternetServiceProvider {
  provideInternet(): void {
    console.log("Providing basic internet service");
  }
  provideTv(): void {
    throw new Error("Basic ISP does not provide TV service"); //❌ voilation of ISP as it forces the client to implement methods that they do not use.
  }
  providePhone(): void {
    throw new Error("Basic ISP does not provide phone service"); //❌ voilation of ISP as it forces the client to implement methods that they do not use.
  }
}

class PremiumISP implements InternetServiceProvider {
  provideInternet(): void {
    console.log("Providing premium internet service");
  }
  provideTv(): void {
    console.log("Providing TV service");
  }
  providePhone(): void {
    console.log("Providing phone service");
  }
} // Usage const basicISP = new BasicISP(); basicISP.provideInternet(); // Output: Providing basic internet service // basicISP.provideTv(); // Throws error: Basic ISP does not provide TV service const premiumISP = new PremiumISP(); premiumISP.provideInternet(); // Output: Providing premium internet service premiumISP.provideTv(); // Output: Providing TV service premiumISP.providePhone(); // Output: Providing phone service
