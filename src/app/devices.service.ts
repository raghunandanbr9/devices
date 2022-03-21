import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor() {}
  devices: any = [
    {
      id: 1,
      name: 'mobile',
      status: 'Available',
      temp: '1 Celcius',
      img: './assets/android.png',
    },
    {
      id: 2,
      name: 'Tablet ',
      status: 'Offline',
      temp: '3 Celcius',
      img: './assets/tab1.png',
    },
    {
      id: 3,
      name: 'Laptop',
      status: 'Available',
      temp: '1 Celcius',
      img: './assets/lap1.png',
    },
    {
      id: 4,
      name: 'Device4',
      status: 'Offline',
      temp: '10 Celcius',
      img: './assets/color.png',
    },
    {
      id: 5,
      name: 'Device 5',
      status: 'Offline',
      temp: '1 Celcius',
      img: './assets/color-lap.png',
    },
    {
      id: 6,
      name: 'Device 6',
      status: 'Available',
      temp: '1 Celcius',
      img: './assets/tab2.png',
    },
    {
      id: 7,
      name: 'Device 7',
      status: 'Available',
      temp: '1 Celcius',
      img: './assets/mobile.png',
    },
    {
      id: 8,
      name: 'Device 8',
      status: 'Available',
      temp: '1 Celcius',
      img: './assets/tab3.png',
    },
    {
      id: 9,
      name: 'Device 9',
      status: 'Available',
      temp: '1 Celcius',
      img: './assets/computer.png',
    },
  ];


  /**
   * 
   * Fetching list of devices 
   */

  getDevices() {
    return this.devices;
  }

  /**
   * 
   * Fetching specific device
   *  
   */
  getDeviceDetails(id: number) {
    return this.devices.find((x: any) => x.id === id);
  }

  /**
   * 
   * fetching random 3 devices as recent ones
   * 
     */
  getRecent() {
    let arr = this.devices;
    let res = [];
    let c = 0
    while (c < 3) {
      let c1: any = arr[Math.floor(Math.random() * arr.length)];
      let index = res.findIndex((x: any) => x.id == c1.id);
      if (index === -1) {
        res.push(c1);
      }
      c++
    }

    return res;
  }
}
