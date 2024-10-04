import { Module } from "@nestjs/common";
import { RoyaltyModuleBase } from "./base/royalty.module.base";
import { RoyaltyService } from "./royalty.service";
import { RoyaltyController } from "./royalty.controller";

@Module({
  imports: [RoyaltyModuleBase],
  controllers: [RoyaltyController],
  providers: [RoyaltyService],
  exports: [RoyaltyService],
})
export class RoyaltyModule {}
