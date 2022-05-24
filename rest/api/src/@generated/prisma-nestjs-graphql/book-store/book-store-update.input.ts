import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BookInventoryUpdateManyWithoutBookStoreInput } from '../book-inventory/book-inventory-update-many-without-book-store.input';
import { BookSoldUpdateManyWithoutBookStoreInput } from '../book-sold/book-sold-update-many-without-book-store.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class BookStoreUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: StringFieldUpdateOperationsInput;

  @Field(() => BookInventoryUpdateManyWithoutBookStoreInput, { nullable: true })
  bookInventory?: BookInventoryUpdateManyWithoutBookStoreInput;

  @Field(() => BookSoldUpdateManyWithoutBookStoreInput, { nullable: true })
  booksSold?: BookSoldUpdateManyWithoutBookStoreInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  totalProfit?: FloatFieldUpdateOperationsInput;
}
