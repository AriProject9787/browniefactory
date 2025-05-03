navigator.geolocation.watchPosition(position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
  
    // Send live location to Firebase
    const db = window.firebaseDB;
    const ref = firebase.database().ref("deliveryBoy/location");
    ref.set({ lat, lng });
  
    // Show map
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat, lng },
      zoom: 15
    });
    new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: "You are here"
    });
  });
  