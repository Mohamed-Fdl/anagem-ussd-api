import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoyaltyServiceBase } from "./base/royalty.service.base";

@Injectable()
export class RoyaltyService extends RoyaltyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
