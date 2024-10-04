import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoyaltyService } from "./royalty.service";
import { RoyaltyControllerBase } from "./base/royalty.controller.base";

@swagger.ApiTags("royalties")
@common.Controller("royalties")
export class RoyaltyController extends RoyaltyControllerBase {
  constructor(protected readonly service: RoyaltyService) {
    super(service);
  }
}
