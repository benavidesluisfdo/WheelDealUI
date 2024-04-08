import config from 'config.js';
import { CalculatePriceRequest } from 'models/calculatePriceRequest';
import { CalculatePriceResponse } from 'models/calculatePriceResponse';

export class VehicleService {
  async postData(data: CalculatePriceRequest): Promise<CalculatePriceResponse> {
    try {
      const response = await fetch(`${config.URLS_BACKEND}/api/vehicle/calculate-price`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }
}
