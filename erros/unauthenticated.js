import CustomAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";
class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.Unauthenticated;
  }
}
export default Unauthenticated;
