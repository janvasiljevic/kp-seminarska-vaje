import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BookStoreUpdateOneRequiredWithoutBookInventoryInput } from '../book-store/book-store-update-one-required-without-book-inventory.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class BookInventoryUpdateWithoutBookInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  count?: IntFieldUpdateOperationsInput;

  @Field(() => BookStoreUpdateOneRequiredWithoutBookInventoryInput, {
    nullable: true,
  })
  bookStore?: BookStoreUpdateOneRequiredWithoutBookInventoryInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  price?: FloatFieldUpdateOperationsInput;
}
