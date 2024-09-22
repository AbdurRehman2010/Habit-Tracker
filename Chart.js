if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification("Time to complete your Gotham duty!");
    }
  });
}
