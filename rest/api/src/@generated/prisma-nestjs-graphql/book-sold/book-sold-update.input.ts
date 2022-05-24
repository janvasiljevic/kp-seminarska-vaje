import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BookUpdateOneRequiredWithoutSoldBookInput } from '../book/book-update-one-required-without-sold-book.input';
import { BookStoreUpdateOneRequiredWithoutBooksSoldInput } from '../book-store/book-store-update-one-required-without-books-sold.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class BookSoldUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BookUpdateOneRequiredWithoutSoldBookInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutSoldBookInput;

  @Field(() => BookStoreUpdateOneRequiredWithoutBooksSoldInput, {
    nullable: true,
  })
  bookStore?: BookStoreUpdateOneRequiredWithoutBooksSoldInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  profit?: FloatFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  soldBy?: StringFieldUpdateOperationsInput;
}
