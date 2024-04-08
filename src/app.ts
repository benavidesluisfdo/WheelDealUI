import { CalculatePriceResponse } from './models/calculatePriceResponse';
import { CalculatePriceRequest } from "models/calculatePriceRequest";
import { VehicleService } from 'services/vehicle-service';

export class App {
  private heading: string;
  private model: CalculatePriceRequest;
  private response: any;
  private error: any;
  private vehicleService: VehicleService;

  constructor(
    //private service: Vehicle1Service
  ) {
    this.heading = 'Wheel Deal';
    this.model = { basePrice: 0, vehicleType: '' }; // Initialize your model appropriately
    this.vehicleService = new VehicleService();
  }

  public async calculatePrice(): Promise<void> {
    try {
      if (!this.model.basePrice || !this.model.vehicleType) {
        throw new Error('Base price and type are required.');
      }
      this.response = await this.vehicleService.postData(this.model);
      this.error = null;
      console.log('Response:', this.response);
    } catch (error) {
      this.error = error;
      this.response = null;
      console.error('Error posting data:', error);
    }
  }

}
