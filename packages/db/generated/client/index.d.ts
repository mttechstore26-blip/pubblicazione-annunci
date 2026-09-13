
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model AiAnalysis
 * 
 */
export type AiAnalysis = $Result.DefaultSelection<Prisma.$AiAnalysisPayload>
/**
 * Model PublicationLog
 * 
 */
export type PublicationLog = $Result.DefaultSelection<Prisma.$PublicationLogPayload>
/**
 * Model ProductTemplate
 * 
 */
export type ProductTemplate = $Result.DefaultSelection<Prisma.$ProductTemplatePayload>
/**
 * Model ProductHistoryEvent
 * 
 */
export type ProductHistoryEvent = $Result.DefaultSelection<Prisma.$ProductHistoryEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
  DRAFT: 'DRAFT',
  TO_PUBLISH: 'TO_PUBLISH',
  PUBLISHED: 'PUBLISHED',
  SOLD: 'SOLD',
  ARCHIVED: 'ARCHIVED'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const Platform: {
  SUBITO: 'SUBITO',
  VINTED: 'VINTED'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const ListingStatus: {
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED',
  REMOVED: 'REMOVED'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const PublicationResult: {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  PARTIAL: 'PARTIAL'
};

export type PublicationResult = (typeof PublicationResult)[keyof typeof PublicationResult]

}

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type PublicationResult = $Enums.PublicationResult

export const PublicationResult: typeof $Enums.PublicationResult

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs>;

  /**
   * `prisma.aiAnalysis`: Exposes CRUD operations for the **AiAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiAnalyses
    * const aiAnalyses = await prisma.aiAnalysis.findMany()
    * ```
    */
  get aiAnalysis(): Prisma.AiAnalysisDelegate<ExtArgs>;

  /**
   * `prisma.publicationLog`: Exposes CRUD operations for the **PublicationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicationLogs
    * const publicationLogs = await prisma.publicationLog.findMany()
    * ```
    */
  get publicationLog(): Prisma.PublicationLogDelegate<ExtArgs>;

  /**
   * `prisma.productTemplate`: Exposes CRUD operations for the **ProductTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTemplates
    * const productTemplates = await prisma.productTemplate.findMany()
    * ```
    */
  get productTemplate(): Prisma.ProductTemplateDelegate<ExtArgs>;

  /**
   * `prisma.productHistoryEvent`: Exposes CRUD operations for the **ProductHistoryEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductHistoryEvents
    * const productHistoryEvents = await prisma.productHistoryEvent.findMany()
    * ```
    */
  get productHistoryEvent(): Prisma.ProductHistoryEventDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    ProductImage: 'ProductImage',
    Listing: 'Listing',
    AiAnalysis: 'AiAnalysis',
    PublicationLog: 'PublicationLog',
    ProductTemplate: 'ProductTemplate',
    ProductHistoryEvent: 'ProductHistoryEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "product" | "productImage" | "listing" | "aiAnalysis" | "publicationLog" | "productTemplate" | "productHistoryEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      AiAnalysis: {
        payload: Prisma.$AiAnalysisPayload<ExtArgs>
        fields: Prisma.AiAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>
          }
          findFirst: {
            args: Prisma.AiAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>
          }
          findMany: {
            args: Prisma.AiAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>[]
          }
          create: {
            args: Prisma.AiAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>
          }
          createMany: {
            args: Prisma.AiAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>[]
          }
          delete: {
            args: Prisma.AiAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>
          }
          update: {
            args: Prisma.AiAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AiAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiAnalysisPayload>
          }
          aggregate: {
            args: Prisma.AiAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiAnalysis>
          }
          groupBy: {
            args: Prisma.AiAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AiAnalysisCountAggregateOutputType> | number
          }
        }
      }
      PublicationLog: {
        payload: Prisma.$PublicationLogPayload<ExtArgs>
        fields: Prisma.PublicationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>
          }
          findFirst: {
            args: Prisma.PublicationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>
          }
          findMany: {
            args: Prisma.PublicationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>[]
          }
          create: {
            args: Prisma.PublicationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>
          }
          createMany: {
            args: Prisma.PublicationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>[]
          }
          delete: {
            args: Prisma.PublicationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>
          }
          update: {
            args: Prisma.PublicationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>
          }
          deleteMany: {
            args: Prisma.PublicationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PublicationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationLogPayload>
          }
          aggregate: {
            args: Prisma.PublicationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicationLog>
          }
          groupBy: {
            args: Prisma.PublicationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationLogCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationLogCountAggregateOutputType> | number
          }
        }
      }
      ProductTemplate: {
        payload: Prisma.$ProductTemplatePayload<ExtArgs>
        fields: Prisma.ProductTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>
          }
          findFirst: {
            args: Prisma.ProductTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>
          }
          findMany: {
            args: Prisma.ProductTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>[]
          }
          create: {
            args: Prisma.ProductTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>
          }
          createMany: {
            args: Prisma.ProductTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>[]
          }
          delete: {
            args: Prisma.ProductTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>
          }
          update: {
            args: Prisma.ProductTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ProductTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTemplatePayload>
          }
          aggregate: {
            args: Prisma.ProductTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductTemplate>
          }
          groupBy: {
            args: Prisma.ProductTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ProductTemplateCountAggregateOutputType> | number
          }
        }
      }
      ProductHistoryEvent: {
        payload: Prisma.$ProductHistoryEventPayload<ExtArgs>
        fields: Prisma.ProductHistoryEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductHistoryEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductHistoryEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>
          }
          findFirst: {
            args: Prisma.ProductHistoryEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductHistoryEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>
          }
          findMany: {
            args: Prisma.ProductHistoryEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>[]
          }
          create: {
            args: Prisma.ProductHistoryEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>
          }
          createMany: {
            args: Prisma.ProductHistoryEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductHistoryEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>[]
          }
          delete: {
            args: Prisma.ProductHistoryEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>
          }
          update: {
            args: Prisma.ProductHistoryEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>
          }
          deleteMany: {
            args: Prisma.ProductHistoryEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductHistoryEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductHistoryEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryEventPayload>
          }
          aggregate: {
            args: Prisma.ProductHistoryEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductHistoryEvent>
          }
          groupBy: {
            args: Prisma.ProductHistoryEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductHistoryEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductHistoryEventCountArgs<ExtArgs>
            result: $Utils.Optional<ProductHistoryEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number
    listings: number
    aiAnalyses: number
    historyEvents: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    listings?: boolean | ProductCountOutputTypeCountListingsArgs
    aiAnalyses?: boolean | ProductCountOutputTypeCountAiAnalysesArgs
    historyEvents?: boolean | ProductCountOutputTypeCountHistoryEventsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAiAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiAnalysisWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountHistoryEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductHistoryEventWhereInput
  }


  /**
   * Count Type ProductTemplateCountOutputType
   */

  export type ProductTemplateCountOutputType = {
    products: number
  }

  export type ProductTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductTemplateCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductTemplateCountOutputType without action
   */
  export type ProductTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplateCountOutputType
     */
    select?: ProductTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductTemplateCountOutputType without action
   */
  export type ProductTemplateCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    purchaseCost: Decimal | null
    suggestedPrice: Decimal | null
    salePrice: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    purchaseCost: Decimal | null
    suggestedPrice: Decimal | null
    salePrice: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    subcategory: string | null
    brand: string | null
    model: string | null
    variant: string | null
    color: string | null
    condition: string | null
    purchaseCost: Decimal | null
    suggestedPrice: Decimal | null
    salePrice: Decimal | null
    status: $Enums.ProductStatus | null
    templateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    subcategory: string | null
    brand: string | null
    model: string | null
    variant: string | null
    color: string | null
    condition: string | null
    purchaseCost: Decimal | null
    suggestedPrice: Decimal | null
    salePrice: Decimal | null
    status: $Enums.ProductStatus | null
    templateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    subcategory: number
    brand: number
    model: number
    variant: number
    color: number
    condition: number
    purchaseCost: number
    suggestedPrice: number
    salePrice: number
    status: number
    templateId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    purchaseCost?: true
    suggestedPrice?: true
    salePrice?: true
  }

  export type ProductSumAggregateInputType = {
    purchaseCost?: true
    suggestedPrice?: true
    salePrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    subcategory?: true
    brand?: true
    model?: true
    variant?: true
    color?: true
    condition?: true
    purchaseCost?: true
    suggestedPrice?: true
    salePrice?: true
    status?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    subcategory?: true
    brand?: true
    model?: true
    variant?: true
    color?: true
    condition?: true
    purchaseCost?: true
    suggestedPrice?: true
    salePrice?: true
    status?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    subcategory?: true
    brand?: true
    model?: true
    variant?: true
    color?: true
    condition?: true
    purchaseCost?: true
    suggestedPrice?: true
    salePrice?: true
    status?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    title: string
    description: string | null
    category: string | null
    subcategory: string | null
    brand: string | null
    model: string | null
    variant: string | null
    color: string | null
    condition: string | null
    purchaseCost: Decimal | null
    suggestedPrice: Decimal | null
    salePrice: Decimal | null
    status: $Enums.ProductStatus
    templateId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    subcategory?: boolean
    brand?: boolean
    model?: boolean
    variant?: boolean
    color?: boolean
    condition?: boolean
    purchaseCost?: boolean
    suggestedPrice?: boolean
    salePrice?: boolean
    status?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | Product$templateArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    listings?: boolean | Product$listingsArgs<ExtArgs>
    aiAnalyses?: boolean | Product$aiAnalysesArgs<ExtArgs>
    historyEvents?: boolean | Product$historyEventsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    subcategory?: boolean
    brand?: boolean
    model?: boolean
    variant?: boolean
    color?: boolean
    condition?: boolean
    purchaseCost?: boolean
    suggestedPrice?: boolean
    salePrice?: boolean
    status?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | Product$templateArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    subcategory?: boolean
    brand?: boolean
    model?: boolean
    variant?: boolean
    color?: boolean
    condition?: boolean
    purchaseCost?: boolean
    suggestedPrice?: boolean
    salePrice?: boolean
    status?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | Product$templateArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    listings?: boolean | Product$listingsArgs<ExtArgs>
    aiAnalyses?: boolean | Product$aiAnalysesArgs<ExtArgs>
    historyEvents?: boolean | Product$historyEventsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | Product$templateArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      template: Prisma.$ProductTemplatePayload<ExtArgs> | null
      images: Prisma.$ProductImagePayload<ExtArgs>[]
      listings: Prisma.$ListingPayload<ExtArgs>[]
      aiAnalyses: Prisma.$AiAnalysisPayload<ExtArgs>[]
      historyEvents: Prisma.$ProductHistoryEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      category: string | null
      subcategory: string | null
      brand: string | null
      model: string | null
      variant: string | null
      color: string | null
      condition: string | null
      purchaseCost: Prisma.Decimal | null
      suggestedPrice: Prisma.Decimal | null
      salePrice: Prisma.Decimal | null
      status: $Enums.ProductStatus
      templateId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends Product$templateArgs<ExtArgs> = {}>(args?: Subset<T, Product$templateArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany"> | Null>
    listings<T extends Product$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Product$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany"> | Null>
    aiAnalyses<T extends Product$aiAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, Product$aiAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "findMany"> | Null>
    historyEvents<T extends Product$historyEventsArgs<ExtArgs> = {}>(args?: Subset<T, Product$historyEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly subcategory: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly model: FieldRef<"Product", 'String'>
    readonly variant: FieldRef<"Product", 'String'>
    readonly color: FieldRef<"Product", 'String'>
    readonly condition: FieldRef<"Product", 'String'>
    readonly purchaseCost: FieldRef<"Product", 'Decimal'>
    readonly suggestedPrice: FieldRef<"Product", 'Decimal'>
    readonly salePrice: FieldRef<"Product", 'Decimal'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly templateId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.template
   */
  export type Product$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    where?: ProductTemplateWhereInput
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.listings
   */
  export type Product$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Product.aiAnalyses
   */
  export type Product$aiAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    where?: AiAnalysisWhereInput
    orderBy?: AiAnalysisOrderByWithRelationInput | AiAnalysisOrderByWithRelationInput[]
    cursor?: AiAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiAnalysisScalarFieldEnum | AiAnalysisScalarFieldEnum[]
  }

  /**
   * Product.historyEvents
   */
  export type Product$historyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    where?: ProductHistoryEventWhereInput
    orderBy?: ProductHistoryEventOrderByWithRelationInput | ProductHistoryEventOrderByWithRelationInput[]
    cursor?: ProductHistoryEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductHistoryEventScalarFieldEnum | ProductHistoryEventScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    order: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    order: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    productId: string | null
    imageUrl: string | null
    isCover: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    imageUrl: string | null
    isCover: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    imageUrl: number
    isCover: number
    order: number
    createdAt: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    order?: true
  }

  export type ProductImageSumAggregateInputType = {
    order?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    isCover?: true
    order?: true
    createdAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    isCover?: true
    order?: true
    createdAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    isCover?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: string
    productId: string
    imageUrl: string
    isCover: boolean
    order: number
    createdAt: Date
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    isCover?: boolean
    order?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    isCover?: boolean
    order?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    isCover?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      imageUrl: string
      isCover: boolean
      order: number
      createdAt: Date
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */ 
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'String'>
    readonly productId: FieldRef<"ProductImage", 'String'>
    readonly imageUrl: FieldRef<"ProductImage", 'String'>
    readonly isCover: FieldRef<"ProductImage", 'Boolean'>
    readonly order: FieldRef<"ProductImage", 'Int'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ListingSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    productId: string | null
    platform: $Enums.Platform | null
    platformListingId: string | null
    platformUrl: string | null
    price: Decimal | null
    status: $Enums.ListingStatus | null
    idempotencyKey: string | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    platform: $Enums.Platform | null
    platformListingId: string | null
    platformUrl: string | null
    price: Decimal | null
    status: $Enums.ListingStatus | null
    idempotencyKey: string | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    productId: number
    platform: number
    platformListingId: number
    platformUrl: number
    price: number
    status: number
    payload: number
    idempotencyKey: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    price?: true
  }

  export type ListingSumAggregateInputType = {
    price?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    productId?: true
    platform?: true
    platformListingId?: true
    platformUrl?: true
    price?: true
    status?: true
    idempotencyKey?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    productId?: true
    platform?: true
    platformListingId?: true
    platformUrl?: true
    price?: true
    status?: true
    idempotencyKey?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    productId?: true
    platform?: true
    platformListingId?: true
    platformUrl?: true
    price?: true
    status?: true
    payload?: true
    idempotencyKey?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    productId: string
    platform: $Enums.Platform
    platformListingId: string | null
    platformUrl: string | null
    price: Decimal
    status: $Enums.ListingStatus
    payload: JsonValue | null
    idempotencyKey: string
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    platform?: boolean
    platformListingId?: boolean
    platformUrl?: boolean
    price?: boolean
    status?: boolean
    payload?: boolean
    idempotencyKey?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    platform?: boolean
    platformListingId?: boolean
    platformUrl?: boolean
    price?: boolean
    status?: boolean
    payload?: boolean
    idempotencyKey?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    productId?: boolean
    platform?: boolean
    platformListingId?: boolean
    platformUrl?: boolean
    price?: boolean
    status?: boolean
    payload?: boolean
    idempotencyKey?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      platform: $Enums.Platform
      platformListingId: string | null
      platformUrl: string | null
      price: Prisma.Decimal
      status: $Enums.ListingStatus
      payload: Prisma.JsonValue | null
      idempotencyKey: string
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Listing model
   */ 
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly productId: FieldRef<"Listing", 'String'>
    readonly platform: FieldRef<"Listing", 'Platform'>
    readonly platformListingId: FieldRef<"Listing", 'String'>
    readonly platformUrl: FieldRef<"Listing", 'String'>
    readonly price: FieldRef<"Listing", 'Decimal'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly payload: FieldRef<"Listing", 'Json'>
    readonly idempotencyKey: FieldRef<"Listing", 'String'>
    readonly lastError: FieldRef<"Listing", 'String'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model AiAnalysis
   */

  export type AggregateAiAnalysis = {
    _count: AiAnalysisCountAggregateOutputType | null
    _avg: AiAnalysisAvgAggregateOutputType | null
    _sum: AiAnalysisSumAggregateOutputType | null
    _min: AiAnalysisMinAggregateOutputType | null
    _max: AiAnalysisMaxAggregateOutputType | null
  }

  export type AiAnalysisAvgAggregateOutputType = {
    confidence: number | null
  }

  export type AiAnalysisSumAggregateOutputType = {
    confidence: number | null
  }

  export type AiAnalysisMinAggregateOutputType = {
    id: string | null
    productId: string | null
    confidence: number | null
    aiModel: string | null
    createdAt: Date | null
  }

  export type AiAnalysisMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    confidence: number | null
    aiModel: string | null
    createdAt: Date | null
  }

  export type AiAnalysisCountAggregateOutputType = {
    id: number
    productId: number
    result: number
    confidence: number
    aiModel: number
    createdAt: number
    _all: number
  }


  export type AiAnalysisAvgAggregateInputType = {
    confidence?: true
  }

  export type AiAnalysisSumAggregateInputType = {
    confidence?: true
  }

  export type AiAnalysisMinAggregateInputType = {
    id?: true
    productId?: true
    confidence?: true
    aiModel?: true
    createdAt?: true
  }

  export type AiAnalysisMaxAggregateInputType = {
    id?: true
    productId?: true
    confidence?: true
    aiModel?: true
    createdAt?: true
  }

  export type AiAnalysisCountAggregateInputType = {
    id?: true
    productId?: true
    result?: true
    confidence?: true
    aiModel?: true
    createdAt?: true
    _all?: true
  }

  export type AiAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiAnalysis to aggregate.
     */
    where?: AiAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAnalyses to fetch.
     */
    orderBy?: AiAnalysisOrderByWithRelationInput | AiAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiAnalyses
    **/
    _count?: true | AiAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiAnalysisMaxAggregateInputType
  }

  export type GetAiAnalysisAggregateType<T extends AiAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAiAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiAnalysis[P]>
      : GetScalarType<T[P], AggregateAiAnalysis[P]>
  }




  export type AiAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiAnalysisWhereInput
    orderBy?: AiAnalysisOrderByWithAggregationInput | AiAnalysisOrderByWithAggregationInput[]
    by: AiAnalysisScalarFieldEnum[] | AiAnalysisScalarFieldEnum
    having?: AiAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiAnalysisCountAggregateInputType | true
    _avg?: AiAnalysisAvgAggregateInputType
    _sum?: AiAnalysisSumAggregateInputType
    _min?: AiAnalysisMinAggregateInputType
    _max?: AiAnalysisMaxAggregateInputType
  }

  export type AiAnalysisGroupByOutputType = {
    id: string
    productId: string
    result: JsonValue
    confidence: number | null
    aiModel: string
    createdAt: Date
    _count: AiAnalysisCountAggregateOutputType | null
    _avg: AiAnalysisAvgAggregateOutputType | null
    _sum: AiAnalysisSumAggregateOutputType | null
    _min: AiAnalysisMinAggregateOutputType | null
    _max: AiAnalysisMaxAggregateOutputType | null
  }

  type GetAiAnalysisGroupByPayload<T extends AiAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AiAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AiAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    result?: boolean
    confidence?: boolean
    aiModel?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiAnalysis"]>

  export type AiAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    result?: boolean
    confidence?: boolean
    aiModel?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiAnalysis"]>

  export type AiAnalysisSelectScalar = {
    id?: boolean
    productId?: boolean
    result?: boolean
    confidence?: boolean
    aiModel?: boolean
    createdAt?: boolean
  }

  export type AiAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type AiAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $AiAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiAnalysis"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      result: Prisma.JsonValue
      confidence: number | null
      aiModel: string
      createdAt: Date
    }, ExtArgs["result"]["aiAnalysis"]>
    composites: {}
  }

  type AiAnalysisGetPayload<S extends boolean | null | undefined | AiAnalysisDefaultArgs> = $Result.GetResult<Prisma.$AiAnalysisPayload, S>

  type AiAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiAnalysisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiAnalysisCountAggregateInputType | true
    }

  export interface AiAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiAnalysis'], meta: { name: 'AiAnalysis' } }
    /**
     * Find zero or one AiAnalysis that matches the filter.
     * @param {AiAnalysisFindUniqueArgs} args - Arguments to find a AiAnalysis
     * @example
     * // Get one AiAnalysis
     * const aiAnalysis = await prisma.aiAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiAnalysisFindUniqueArgs>(args: SelectSubset<T, AiAnalysisFindUniqueArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AiAnalysis that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiAnalysisFindUniqueOrThrowArgs} args - Arguments to find a AiAnalysis
     * @example
     * // Get one AiAnalysis
     * const aiAnalysis = await prisma.aiAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AiAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AiAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAnalysisFindFirstArgs} args - Arguments to find a AiAnalysis
     * @example
     * // Get one AiAnalysis
     * const aiAnalysis = await prisma.aiAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiAnalysisFindFirstArgs>(args?: SelectSubset<T, AiAnalysisFindFirstArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AiAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAnalysisFindFirstOrThrowArgs} args - Arguments to find a AiAnalysis
     * @example
     * // Get one AiAnalysis
     * const aiAnalysis = await prisma.aiAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AiAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AiAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiAnalyses
     * const aiAnalyses = await prisma.aiAnalysis.findMany()
     * 
     * // Get first 10 AiAnalyses
     * const aiAnalyses = await prisma.aiAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiAnalysisWithIdOnly = await prisma.aiAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiAnalysisFindManyArgs>(args?: SelectSubset<T, AiAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AiAnalysis.
     * @param {AiAnalysisCreateArgs} args - Arguments to create a AiAnalysis.
     * @example
     * // Create one AiAnalysis
     * const AiAnalysis = await prisma.aiAnalysis.create({
     *   data: {
     *     // ... data to create a AiAnalysis
     *   }
     * })
     * 
     */
    create<T extends AiAnalysisCreateArgs>(args: SelectSubset<T, AiAnalysisCreateArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AiAnalyses.
     * @param {AiAnalysisCreateManyArgs} args - Arguments to create many AiAnalyses.
     * @example
     * // Create many AiAnalyses
     * const aiAnalysis = await prisma.aiAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiAnalysisCreateManyArgs>(args?: SelectSubset<T, AiAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiAnalyses and returns the data saved in the database.
     * @param {AiAnalysisCreateManyAndReturnArgs} args - Arguments to create many AiAnalyses.
     * @example
     * // Create many AiAnalyses
     * const aiAnalysis = await prisma.aiAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiAnalyses and only return the `id`
     * const aiAnalysisWithIdOnly = await prisma.aiAnalysis.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AiAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AiAnalysis.
     * @param {AiAnalysisDeleteArgs} args - Arguments to delete one AiAnalysis.
     * @example
     * // Delete one AiAnalysis
     * const AiAnalysis = await prisma.aiAnalysis.delete({
     *   where: {
     *     // ... filter to delete one AiAnalysis
     *   }
     * })
     * 
     */
    delete<T extends AiAnalysisDeleteArgs>(args: SelectSubset<T, AiAnalysisDeleteArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AiAnalysis.
     * @param {AiAnalysisUpdateArgs} args - Arguments to update one AiAnalysis.
     * @example
     * // Update one AiAnalysis
     * const aiAnalysis = await prisma.aiAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiAnalysisUpdateArgs>(args: SelectSubset<T, AiAnalysisUpdateArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AiAnalyses.
     * @param {AiAnalysisDeleteManyArgs} args - Arguments to filter AiAnalyses to delete.
     * @example
     * // Delete a few AiAnalyses
     * const { count } = await prisma.aiAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiAnalysisDeleteManyArgs>(args?: SelectSubset<T, AiAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiAnalyses
     * const aiAnalysis = await prisma.aiAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiAnalysisUpdateManyArgs>(args: SelectSubset<T, AiAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiAnalysis.
     * @param {AiAnalysisUpsertArgs} args - Arguments to update or create a AiAnalysis.
     * @example
     * // Update or create a AiAnalysis
     * const aiAnalysis = await prisma.aiAnalysis.upsert({
     *   create: {
     *     // ... data to create a AiAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends AiAnalysisUpsertArgs>(args: SelectSubset<T, AiAnalysisUpsertArgs<ExtArgs>>): Prisma__AiAnalysisClient<$Result.GetResult<Prisma.$AiAnalysisPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AiAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAnalysisCountArgs} args - Arguments to filter AiAnalyses to count.
     * @example
     * // Count the number of AiAnalyses
     * const count = await prisma.aiAnalysis.count({
     *   where: {
     *     // ... the filter for the AiAnalyses we want to count
     *   }
     * })
    **/
    count<T extends AiAnalysisCountArgs>(
      args?: Subset<T, AiAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiAnalysisAggregateArgs>(args: Subset<T, AiAnalysisAggregateArgs>): Prisma.PrismaPromise<GetAiAnalysisAggregateType<T>>

    /**
     * Group by AiAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AiAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiAnalysis model
   */
  readonly fields: AiAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiAnalysis model
   */ 
  interface AiAnalysisFieldRefs {
    readonly id: FieldRef<"AiAnalysis", 'String'>
    readonly productId: FieldRef<"AiAnalysis", 'String'>
    readonly result: FieldRef<"AiAnalysis", 'Json'>
    readonly confidence: FieldRef<"AiAnalysis", 'Float'>
    readonly aiModel: FieldRef<"AiAnalysis", 'String'>
    readonly createdAt: FieldRef<"AiAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiAnalysis findUnique
   */
  export type AiAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AiAnalysis to fetch.
     */
    where: AiAnalysisWhereUniqueInput
  }

  /**
   * AiAnalysis findUniqueOrThrow
   */
  export type AiAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AiAnalysis to fetch.
     */
    where: AiAnalysisWhereUniqueInput
  }

  /**
   * AiAnalysis findFirst
   */
  export type AiAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AiAnalysis to fetch.
     */
    where?: AiAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAnalyses to fetch.
     */
    orderBy?: AiAnalysisOrderByWithRelationInput | AiAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiAnalyses.
     */
    cursor?: AiAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiAnalyses.
     */
    distinct?: AiAnalysisScalarFieldEnum | AiAnalysisScalarFieldEnum[]
  }

  /**
   * AiAnalysis findFirstOrThrow
   */
  export type AiAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AiAnalysis to fetch.
     */
    where?: AiAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAnalyses to fetch.
     */
    orderBy?: AiAnalysisOrderByWithRelationInput | AiAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiAnalyses.
     */
    cursor?: AiAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiAnalyses.
     */
    distinct?: AiAnalysisScalarFieldEnum | AiAnalysisScalarFieldEnum[]
  }

  /**
   * AiAnalysis findMany
   */
  export type AiAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AiAnalyses to fetch.
     */
    where?: AiAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiAnalyses to fetch.
     */
    orderBy?: AiAnalysisOrderByWithRelationInput | AiAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiAnalyses.
     */
    cursor?: AiAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiAnalyses.
     */
    skip?: number
    distinct?: AiAnalysisScalarFieldEnum | AiAnalysisScalarFieldEnum[]
  }

  /**
   * AiAnalysis create
   */
  export type AiAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a AiAnalysis.
     */
    data: XOR<AiAnalysisCreateInput, AiAnalysisUncheckedCreateInput>
  }

  /**
   * AiAnalysis createMany
   */
  export type AiAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiAnalyses.
     */
    data: AiAnalysisCreateManyInput | AiAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiAnalysis createManyAndReturn
   */
  export type AiAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AiAnalyses.
     */
    data: AiAnalysisCreateManyInput | AiAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiAnalysis update
   */
  export type AiAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a AiAnalysis.
     */
    data: XOR<AiAnalysisUpdateInput, AiAnalysisUncheckedUpdateInput>
    /**
     * Choose, which AiAnalysis to update.
     */
    where: AiAnalysisWhereUniqueInput
  }

  /**
   * AiAnalysis updateMany
   */
  export type AiAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiAnalyses.
     */
    data: XOR<AiAnalysisUpdateManyMutationInput, AiAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which AiAnalyses to update
     */
    where?: AiAnalysisWhereInput
  }

  /**
   * AiAnalysis upsert
   */
  export type AiAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the AiAnalysis to update in case it exists.
     */
    where: AiAnalysisWhereUniqueInput
    /**
     * In case the AiAnalysis found by the `where` argument doesn't exist, create a new AiAnalysis with this data.
     */
    create: XOR<AiAnalysisCreateInput, AiAnalysisUncheckedCreateInput>
    /**
     * In case the AiAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiAnalysisUpdateInput, AiAnalysisUncheckedUpdateInput>
  }

  /**
   * AiAnalysis delete
   */
  export type AiAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
    /**
     * Filter which AiAnalysis to delete.
     */
    where: AiAnalysisWhereUniqueInput
  }

  /**
   * AiAnalysis deleteMany
   */
  export type AiAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiAnalyses to delete
     */
    where?: AiAnalysisWhereInput
  }

  /**
   * AiAnalysis without action
   */
  export type AiAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiAnalysis
     */
    select?: AiAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model PublicationLog
   */

  export type AggregatePublicationLog = {
    _count: PublicationLogCountAggregateOutputType | null
    _min: PublicationLogMinAggregateOutputType | null
    _max: PublicationLogMaxAggregateOutputType | null
  }

  export type PublicationLogMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    platform: $Enums.Platform | null
    result: $Enums.PublicationResult | null
    error: string | null
    timestamp: Date | null
  }

  export type PublicationLogMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    platform: $Enums.Platform | null
    result: $Enums.PublicationResult | null
    error: string | null
    timestamp: Date | null
  }

  export type PublicationLogCountAggregateOutputType = {
    id: number
    listingId: number
    platform: number
    result: number
    error: number
    timestamp: number
    _all: number
  }


  export type PublicationLogMinAggregateInputType = {
    id?: true
    listingId?: true
    platform?: true
    result?: true
    error?: true
    timestamp?: true
  }

  export type PublicationLogMaxAggregateInputType = {
    id?: true
    listingId?: true
    platform?: true
    result?: true
    error?: true
    timestamp?: true
  }

  export type PublicationLogCountAggregateInputType = {
    id?: true
    listingId?: true
    platform?: true
    result?: true
    error?: true
    timestamp?: true
    _all?: true
  }

  export type PublicationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicationLog to aggregate.
     */
    where?: PublicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationLogs to fetch.
     */
    orderBy?: PublicationLogOrderByWithRelationInput | PublicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicationLogs
    **/
    _count?: true | PublicationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationLogMaxAggregateInputType
  }

  export type GetPublicationLogAggregateType<T extends PublicationLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicationLog[P]>
      : GetScalarType<T[P], AggregatePublicationLog[P]>
  }




  export type PublicationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationLogWhereInput
    orderBy?: PublicationLogOrderByWithAggregationInput | PublicationLogOrderByWithAggregationInput[]
    by: PublicationLogScalarFieldEnum[] | PublicationLogScalarFieldEnum
    having?: PublicationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationLogCountAggregateInputType | true
    _min?: PublicationLogMinAggregateInputType
    _max?: PublicationLogMaxAggregateInputType
  }

  export type PublicationLogGroupByOutputType = {
    id: string
    listingId: string | null
    platform: $Enums.Platform
    result: $Enums.PublicationResult
    error: string | null
    timestamp: Date
    _count: PublicationLogCountAggregateOutputType | null
    _min: PublicationLogMinAggregateOutputType | null
    _max: PublicationLogMaxAggregateOutputType | null
  }

  type GetPublicationLogGroupByPayload<T extends PublicationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationLogGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationLogGroupByOutputType[P]>
        }
      >
    >


  export type PublicationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    platform?: boolean
    result?: boolean
    error?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["publicationLog"]>

  export type PublicationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    platform?: boolean
    result?: boolean
    error?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["publicationLog"]>

  export type PublicationLogSelectScalar = {
    id?: boolean
    listingId?: boolean
    platform?: boolean
    result?: boolean
    error?: boolean
    timestamp?: boolean
  }


  export type $PublicationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicationLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string | null
      platform: $Enums.Platform
      result: $Enums.PublicationResult
      error: string | null
      timestamp: Date
    }, ExtArgs["result"]["publicationLog"]>
    composites: {}
  }

  type PublicationLogGetPayload<S extends boolean | null | undefined | PublicationLogDefaultArgs> = $Result.GetResult<Prisma.$PublicationLogPayload, S>

  type PublicationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublicationLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublicationLogCountAggregateInputType | true
    }

  export interface PublicationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicationLog'], meta: { name: 'PublicationLog' } }
    /**
     * Find zero or one PublicationLog that matches the filter.
     * @param {PublicationLogFindUniqueArgs} args - Arguments to find a PublicationLog
     * @example
     * // Get one PublicationLog
     * const publicationLog = await prisma.publicationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationLogFindUniqueArgs>(args: SelectSubset<T, PublicationLogFindUniqueArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PublicationLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PublicationLogFindUniqueOrThrowArgs} args - Arguments to find a PublicationLog
     * @example
     * // Get one PublicationLog
     * const publicationLog = await prisma.publicationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PublicationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationLogFindFirstArgs} args - Arguments to find a PublicationLog
     * @example
     * // Get one PublicationLog
     * const publicationLog = await prisma.publicationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationLogFindFirstArgs>(args?: SelectSubset<T, PublicationLogFindFirstArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PublicationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationLogFindFirstOrThrowArgs} args - Arguments to find a PublicationLog
     * @example
     * // Get one PublicationLog
     * const publicationLog = await prisma.publicationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PublicationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicationLogs
     * const publicationLogs = await prisma.publicationLog.findMany()
     * 
     * // Get first 10 PublicationLogs
     * const publicationLogs = await prisma.publicationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationLogWithIdOnly = await prisma.publicationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationLogFindManyArgs>(args?: SelectSubset<T, PublicationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PublicationLog.
     * @param {PublicationLogCreateArgs} args - Arguments to create a PublicationLog.
     * @example
     * // Create one PublicationLog
     * const PublicationLog = await prisma.publicationLog.create({
     *   data: {
     *     // ... data to create a PublicationLog
     *   }
     * })
     * 
     */
    create<T extends PublicationLogCreateArgs>(args: SelectSubset<T, PublicationLogCreateArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PublicationLogs.
     * @param {PublicationLogCreateManyArgs} args - Arguments to create many PublicationLogs.
     * @example
     * // Create many PublicationLogs
     * const publicationLog = await prisma.publicationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationLogCreateManyArgs>(args?: SelectSubset<T, PublicationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicationLogs and returns the data saved in the database.
     * @param {PublicationLogCreateManyAndReturnArgs} args - Arguments to create many PublicationLogs.
     * @example
     * // Create many PublicationLogs
     * const publicationLog = await prisma.publicationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicationLogs and only return the `id`
     * const publicationLogWithIdOnly = await prisma.publicationLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PublicationLog.
     * @param {PublicationLogDeleteArgs} args - Arguments to delete one PublicationLog.
     * @example
     * // Delete one PublicationLog
     * const PublicationLog = await prisma.publicationLog.delete({
     *   where: {
     *     // ... filter to delete one PublicationLog
     *   }
     * })
     * 
     */
    delete<T extends PublicationLogDeleteArgs>(args: SelectSubset<T, PublicationLogDeleteArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PublicationLog.
     * @param {PublicationLogUpdateArgs} args - Arguments to update one PublicationLog.
     * @example
     * // Update one PublicationLog
     * const publicationLog = await prisma.publicationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationLogUpdateArgs>(args: SelectSubset<T, PublicationLogUpdateArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PublicationLogs.
     * @param {PublicationLogDeleteManyArgs} args - Arguments to filter PublicationLogs to delete.
     * @example
     * // Delete a few PublicationLogs
     * const { count } = await prisma.publicationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationLogDeleteManyArgs>(args?: SelectSubset<T, PublicationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicationLogs
     * const publicationLog = await prisma.publicationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationLogUpdateManyArgs>(args: SelectSubset<T, PublicationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicationLog.
     * @param {PublicationLogUpsertArgs} args - Arguments to update or create a PublicationLog.
     * @example
     * // Update or create a PublicationLog
     * const publicationLog = await prisma.publicationLog.upsert({
     *   create: {
     *     // ... data to create a PublicationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicationLog we want to update
     *   }
     * })
     */
    upsert<T extends PublicationLogUpsertArgs>(args: SelectSubset<T, PublicationLogUpsertArgs<ExtArgs>>): Prisma__PublicationLogClient<$Result.GetResult<Prisma.$PublicationLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PublicationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationLogCountArgs} args - Arguments to filter PublicationLogs to count.
     * @example
     * // Count the number of PublicationLogs
     * const count = await prisma.publicationLog.count({
     *   where: {
     *     // ... the filter for the PublicationLogs we want to count
     *   }
     * })
    **/
    count<T extends PublicationLogCountArgs>(
      args?: Subset<T, PublicationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationLogAggregateArgs>(args: Subset<T, PublicationLogAggregateArgs>): Prisma.PrismaPromise<GetPublicationLogAggregateType<T>>

    /**
     * Group by PublicationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationLogGroupByArgs['orderBy'] }
        : { orderBy?: PublicationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicationLog model
   */
  readonly fields: PublicationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicationLog model
   */ 
  interface PublicationLogFieldRefs {
    readonly id: FieldRef<"PublicationLog", 'String'>
    readonly listingId: FieldRef<"PublicationLog", 'String'>
    readonly platform: FieldRef<"PublicationLog", 'Platform'>
    readonly result: FieldRef<"PublicationLog", 'PublicationResult'>
    readonly error: FieldRef<"PublicationLog", 'String'>
    readonly timestamp: FieldRef<"PublicationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicationLog findUnique
   */
  export type PublicationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * Filter, which PublicationLog to fetch.
     */
    where: PublicationLogWhereUniqueInput
  }

  /**
   * PublicationLog findUniqueOrThrow
   */
  export type PublicationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * Filter, which PublicationLog to fetch.
     */
    where: PublicationLogWhereUniqueInput
  }

  /**
   * PublicationLog findFirst
   */
  export type PublicationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * Filter, which PublicationLog to fetch.
     */
    where?: PublicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationLogs to fetch.
     */
    orderBy?: PublicationLogOrderByWithRelationInput | PublicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationLogs.
     */
    cursor?: PublicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationLogs.
     */
    distinct?: PublicationLogScalarFieldEnum | PublicationLogScalarFieldEnum[]
  }

  /**
   * PublicationLog findFirstOrThrow
   */
  export type PublicationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * Filter, which PublicationLog to fetch.
     */
    where?: PublicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationLogs to fetch.
     */
    orderBy?: PublicationLogOrderByWithRelationInput | PublicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationLogs.
     */
    cursor?: PublicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationLogs.
     */
    distinct?: PublicationLogScalarFieldEnum | PublicationLogScalarFieldEnum[]
  }

  /**
   * PublicationLog findMany
   */
  export type PublicationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * Filter, which PublicationLogs to fetch.
     */
    where?: PublicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationLogs to fetch.
     */
    orderBy?: PublicationLogOrderByWithRelationInput | PublicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicationLogs.
     */
    cursor?: PublicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationLogs.
     */
    skip?: number
    distinct?: PublicationLogScalarFieldEnum | PublicationLogScalarFieldEnum[]
  }

  /**
   * PublicationLog create
   */
  export type PublicationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * The data needed to create a PublicationLog.
     */
    data: XOR<PublicationLogCreateInput, PublicationLogUncheckedCreateInput>
  }

  /**
   * PublicationLog createMany
   */
  export type PublicationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicationLogs.
     */
    data: PublicationLogCreateManyInput | PublicationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicationLog createManyAndReturn
   */
  export type PublicationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PublicationLogs.
     */
    data: PublicationLogCreateManyInput | PublicationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicationLog update
   */
  export type PublicationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * The data needed to update a PublicationLog.
     */
    data: XOR<PublicationLogUpdateInput, PublicationLogUncheckedUpdateInput>
    /**
     * Choose, which PublicationLog to update.
     */
    where: PublicationLogWhereUniqueInput
  }

  /**
   * PublicationLog updateMany
   */
  export type PublicationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicationLogs.
     */
    data: XOR<PublicationLogUpdateManyMutationInput, PublicationLogUncheckedUpdateManyInput>
    /**
     * Filter which PublicationLogs to update
     */
    where?: PublicationLogWhereInput
  }

  /**
   * PublicationLog upsert
   */
  export type PublicationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * The filter to search for the PublicationLog to update in case it exists.
     */
    where: PublicationLogWhereUniqueInput
    /**
     * In case the PublicationLog found by the `where` argument doesn't exist, create a new PublicationLog with this data.
     */
    create: XOR<PublicationLogCreateInput, PublicationLogUncheckedCreateInput>
    /**
     * In case the PublicationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationLogUpdateInput, PublicationLogUncheckedUpdateInput>
  }

  /**
   * PublicationLog delete
   */
  export type PublicationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
    /**
     * Filter which PublicationLog to delete.
     */
    where: PublicationLogWhereUniqueInput
  }

  /**
   * PublicationLog deleteMany
   */
  export type PublicationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicationLogs to delete
     */
    where?: PublicationLogWhereInput
  }

  /**
   * PublicationLog without action
   */
  export type PublicationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationLog
     */
    select?: PublicationLogSelect<ExtArgs> | null
  }


  /**
   * Model ProductTemplate
   */

  export type AggregateProductTemplate = {
    _count: ProductTemplateCountAggregateOutputType | null
    _avg: ProductTemplateAvgAggregateOutputType | null
    _sum: ProductTemplateSumAggregateOutputType | null
    _min: ProductTemplateMinAggregateOutputType | null
    _max: ProductTemplateMaxAggregateOutputType | null
  }

  export type ProductTemplateAvgAggregateOutputType = {
    priceRangeMin: Decimal | null
    priceRangeMax: Decimal | null
    timesUsed: number | null
  }

  export type ProductTemplateSumAggregateOutputType = {
    priceRangeMin: Decimal | null
    priceRangeMax: Decimal | null
    timesUsed: number | null
  }

  export type ProductTemplateMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    category: string | null
    descriptionPattern: string | null
    priceRangeMin: Decimal | null
    priceRangeMax: Decimal | null
    timesUsed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductTemplateMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    category: string | null
    descriptionPattern: string | null
    priceRangeMin: Decimal | null
    priceRangeMax: Decimal | null
    timesUsed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductTemplateCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    category: number
    defaultAttributes: number
    subitoAttributes: number
    vintedAttributes: number
    descriptionPattern: number
    priceRangeMin: number
    priceRangeMax: number
    timesUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductTemplateAvgAggregateInputType = {
    priceRangeMin?: true
    priceRangeMax?: true
    timesUsed?: true
  }

  export type ProductTemplateSumAggregateInputType = {
    priceRangeMin?: true
    priceRangeMax?: true
    timesUsed?: true
  }

  export type ProductTemplateMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    category?: true
    descriptionPattern?: true
    priceRangeMin?: true
    priceRangeMax?: true
    timesUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductTemplateMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    category?: true
    descriptionPattern?: true
    priceRangeMin?: true
    priceRangeMax?: true
    timesUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductTemplateCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    category?: true
    defaultAttributes?: true
    subitoAttributes?: true
    vintedAttributes?: true
    descriptionPattern?: true
    priceRangeMin?: true
    priceRangeMax?: true
    timesUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTemplate to aggregate.
     */
    where?: ProductTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTemplates to fetch.
     */
    orderBy?: ProductTemplateOrderByWithRelationInput | ProductTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTemplates
    **/
    _count?: true | ProductTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTemplateMaxAggregateInputType
  }

  export type GetProductTemplateAggregateType<T extends ProductTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateProductTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductTemplate[P]>
      : GetScalarType<T[P], AggregateProductTemplate[P]>
  }




  export type ProductTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTemplateWhereInput
    orderBy?: ProductTemplateOrderByWithAggregationInput | ProductTemplateOrderByWithAggregationInput[]
    by: ProductTemplateScalarFieldEnum[] | ProductTemplateScalarFieldEnum
    having?: ProductTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTemplateCountAggregateInputType | true
    _avg?: ProductTemplateAvgAggregateInputType
    _sum?: ProductTemplateSumAggregateInputType
    _min?: ProductTemplateMinAggregateInputType
    _max?: ProductTemplateMaxAggregateInputType
  }

  export type ProductTemplateGroupByOutputType = {
    id: string
    brand: string
    model: string
    category: string
    defaultAttributes: JsonValue
    subitoAttributes: JsonValue | null
    vintedAttributes: JsonValue | null
    descriptionPattern: string | null
    priceRangeMin: Decimal | null
    priceRangeMax: Decimal | null
    timesUsed: number
    createdAt: Date
    updatedAt: Date
    _count: ProductTemplateCountAggregateOutputType | null
    _avg: ProductTemplateAvgAggregateOutputType | null
    _sum: ProductTemplateSumAggregateOutputType | null
    _min: ProductTemplateMinAggregateOutputType | null
    _max: ProductTemplateMaxAggregateOutputType | null
  }

  type GetProductTemplateGroupByPayload<T extends ProductTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ProductTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    category?: boolean
    defaultAttributes?: boolean
    subitoAttributes?: boolean
    vintedAttributes?: boolean
    descriptionPattern?: boolean
    priceRangeMin?: boolean
    priceRangeMax?: boolean
    timesUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | ProductTemplate$productsArgs<ExtArgs>
    _count?: boolean | ProductTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productTemplate"]>

  export type ProductTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    category?: boolean
    defaultAttributes?: boolean
    subitoAttributes?: boolean
    vintedAttributes?: boolean
    descriptionPattern?: boolean
    priceRangeMin?: boolean
    priceRangeMax?: boolean
    timesUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productTemplate"]>

  export type ProductTemplateSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    category?: boolean
    defaultAttributes?: boolean
    subitoAttributes?: boolean
    vintedAttributes?: boolean
    descriptionPattern?: boolean
    priceRangeMin?: boolean
    priceRangeMax?: boolean
    timesUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductTemplate$productsArgs<ExtArgs>
    _count?: boolean | ProductTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductTemplate"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      model: string
      category: string
      defaultAttributes: Prisma.JsonValue
      subitoAttributes: Prisma.JsonValue | null
      vintedAttributes: Prisma.JsonValue | null
      descriptionPattern: string | null
      priceRangeMin: Prisma.Decimal | null
      priceRangeMax: Prisma.Decimal | null
      timesUsed: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productTemplate"]>
    composites: {}
  }

  type ProductTemplateGetPayload<S extends boolean | null | undefined | ProductTemplateDefaultArgs> = $Result.GetResult<Prisma.$ProductTemplatePayload, S>

  type ProductTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductTemplateCountAggregateInputType | true
    }

  export interface ProductTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductTemplate'], meta: { name: 'ProductTemplate' } }
    /**
     * Find zero or one ProductTemplate that matches the filter.
     * @param {ProductTemplateFindUniqueArgs} args - Arguments to find a ProductTemplate
     * @example
     * // Get one ProductTemplate
     * const productTemplate = await prisma.productTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductTemplateFindUniqueArgs>(args: SelectSubset<T, ProductTemplateFindUniqueArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductTemplateFindUniqueOrThrowArgs} args - Arguments to find a ProductTemplate
     * @example
     * // Get one ProductTemplate
     * const productTemplate = await prisma.productTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTemplateFindFirstArgs} args - Arguments to find a ProductTemplate
     * @example
     * // Get one ProductTemplate
     * const productTemplate = await prisma.productTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductTemplateFindFirstArgs>(args?: SelectSubset<T, ProductTemplateFindFirstArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTemplateFindFirstOrThrowArgs} args - Arguments to find a ProductTemplate
     * @example
     * // Get one ProductTemplate
     * const productTemplate = await prisma.productTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTemplates
     * const productTemplates = await prisma.productTemplate.findMany()
     * 
     * // Get first 10 ProductTemplates
     * const productTemplates = await prisma.productTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTemplateWithIdOnly = await prisma.productTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductTemplateFindManyArgs>(args?: SelectSubset<T, ProductTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductTemplate.
     * @param {ProductTemplateCreateArgs} args - Arguments to create a ProductTemplate.
     * @example
     * // Create one ProductTemplate
     * const ProductTemplate = await prisma.productTemplate.create({
     *   data: {
     *     // ... data to create a ProductTemplate
     *   }
     * })
     * 
     */
    create<T extends ProductTemplateCreateArgs>(args: SelectSubset<T, ProductTemplateCreateArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductTemplates.
     * @param {ProductTemplateCreateManyArgs} args - Arguments to create many ProductTemplates.
     * @example
     * // Create many ProductTemplates
     * const productTemplate = await prisma.productTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductTemplateCreateManyArgs>(args?: SelectSubset<T, ProductTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductTemplates and returns the data saved in the database.
     * @param {ProductTemplateCreateManyAndReturnArgs} args - Arguments to create many ProductTemplates.
     * @example
     * // Create many ProductTemplates
     * const productTemplate = await prisma.productTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductTemplates and only return the `id`
     * const productTemplateWithIdOnly = await prisma.productTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductTemplate.
     * @param {ProductTemplateDeleteArgs} args - Arguments to delete one ProductTemplate.
     * @example
     * // Delete one ProductTemplate
     * const ProductTemplate = await prisma.productTemplate.delete({
     *   where: {
     *     // ... filter to delete one ProductTemplate
     *   }
     * })
     * 
     */
    delete<T extends ProductTemplateDeleteArgs>(args: SelectSubset<T, ProductTemplateDeleteArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductTemplate.
     * @param {ProductTemplateUpdateArgs} args - Arguments to update one ProductTemplate.
     * @example
     * // Update one ProductTemplate
     * const productTemplate = await prisma.productTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductTemplateUpdateArgs>(args: SelectSubset<T, ProductTemplateUpdateArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductTemplates.
     * @param {ProductTemplateDeleteManyArgs} args - Arguments to filter ProductTemplates to delete.
     * @example
     * // Delete a few ProductTemplates
     * const { count } = await prisma.productTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductTemplateDeleteManyArgs>(args?: SelectSubset<T, ProductTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTemplates
     * const productTemplate = await prisma.productTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductTemplateUpdateManyArgs>(args: SelectSubset<T, ProductTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductTemplate.
     * @param {ProductTemplateUpsertArgs} args - Arguments to update or create a ProductTemplate.
     * @example
     * // Update or create a ProductTemplate
     * const productTemplate = await prisma.productTemplate.upsert({
     *   create: {
     *     // ... data to create a ProductTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ProductTemplateUpsertArgs>(args: SelectSubset<T, ProductTemplateUpsertArgs<ExtArgs>>): Prisma__ProductTemplateClient<$Result.GetResult<Prisma.$ProductTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTemplateCountArgs} args - Arguments to filter ProductTemplates to count.
     * @example
     * // Count the number of ProductTemplates
     * const count = await prisma.productTemplate.count({
     *   where: {
     *     // ... the filter for the ProductTemplates we want to count
     *   }
     * })
    **/
    count<T extends ProductTemplateCountArgs>(
      args?: Subset<T, ProductTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTemplateAggregateArgs>(args: Subset<T, ProductTemplateAggregateArgs>): Prisma.PrismaPromise<GetProductTemplateAggregateType<T>>

    /**
     * Group by ProductTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ProductTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductTemplate model
   */
  readonly fields: ProductTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductTemplate$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductTemplate$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductTemplate model
   */ 
  interface ProductTemplateFieldRefs {
    readonly id: FieldRef<"ProductTemplate", 'String'>
    readonly brand: FieldRef<"ProductTemplate", 'String'>
    readonly model: FieldRef<"ProductTemplate", 'String'>
    readonly category: FieldRef<"ProductTemplate", 'String'>
    readonly defaultAttributes: FieldRef<"ProductTemplate", 'Json'>
    readonly subitoAttributes: FieldRef<"ProductTemplate", 'Json'>
    readonly vintedAttributes: FieldRef<"ProductTemplate", 'Json'>
    readonly descriptionPattern: FieldRef<"ProductTemplate", 'String'>
    readonly priceRangeMin: FieldRef<"ProductTemplate", 'Decimal'>
    readonly priceRangeMax: FieldRef<"ProductTemplate", 'Decimal'>
    readonly timesUsed: FieldRef<"ProductTemplate", 'Int'>
    readonly createdAt: FieldRef<"ProductTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductTemplate findUnique
   */
  export type ProductTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProductTemplate to fetch.
     */
    where: ProductTemplateWhereUniqueInput
  }

  /**
   * ProductTemplate findUniqueOrThrow
   */
  export type ProductTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProductTemplate to fetch.
     */
    where: ProductTemplateWhereUniqueInput
  }

  /**
   * ProductTemplate findFirst
   */
  export type ProductTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProductTemplate to fetch.
     */
    where?: ProductTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTemplates to fetch.
     */
    orderBy?: ProductTemplateOrderByWithRelationInput | ProductTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTemplates.
     */
    cursor?: ProductTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTemplates.
     */
    distinct?: ProductTemplateScalarFieldEnum | ProductTemplateScalarFieldEnum[]
  }

  /**
   * ProductTemplate findFirstOrThrow
   */
  export type ProductTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProductTemplate to fetch.
     */
    where?: ProductTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTemplates to fetch.
     */
    orderBy?: ProductTemplateOrderByWithRelationInput | ProductTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTemplates.
     */
    cursor?: ProductTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTemplates.
     */
    distinct?: ProductTemplateScalarFieldEnum | ProductTemplateScalarFieldEnum[]
  }

  /**
   * ProductTemplate findMany
   */
  export type ProductTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProductTemplates to fetch.
     */
    where?: ProductTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTemplates to fetch.
     */
    orderBy?: ProductTemplateOrderByWithRelationInput | ProductTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTemplates.
     */
    cursor?: ProductTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTemplates.
     */
    skip?: number
    distinct?: ProductTemplateScalarFieldEnum | ProductTemplateScalarFieldEnum[]
  }

  /**
   * ProductTemplate create
   */
  export type ProductTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductTemplate.
     */
    data: XOR<ProductTemplateCreateInput, ProductTemplateUncheckedCreateInput>
  }

  /**
   * ProductTemplate createMany
   */
  export type ProductTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTemplates.
     */
    data: ProductTemplateCreateManyInput | ProductTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductTemplate createManyAndReturn
   */
  export type ProductTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductTemplates.
     */
    data: ProductTemplateCreateManyInput | ProductTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductTemplate update
   */
  export type ProductTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductTemplate.
     */
    data: XOR<ProductTemplateUpdateInput, ProductTemplateUncheckedUpdateInput>
    /**
     * Choose, which ProductTemplate to update.
     */
    where: ProductTemplateWhereUniqueInput
  }

  /**
   * ProductTemplate updateMany
   */
  export type ProductTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTemplates.
     */
    data: XOR<ProductTemplateUpdateManyMutationInput, ProductTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ProductTemplates to update
     */
    where?: ProductTemplateWhereInput
  }

  /**
   * ProductTemplate upsert
   */
  export type ProductTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductTemplate to update in case it exists.
     */
    where: ProductTemplateWhereUniqueInput
    /**
     * In case the ProductTemplate found by the `where` argument doesn't exist, create a new ProductTemplate with this data.
     */
    create: XOR<ProductTemplateCreateInput, ProductTemplateUncheckedCreateInput>
    /**
     * In case the ProductTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTemplateUpdateInput, ProductTemplateUncheckedUpdateInput>
  }

  /**
   * ProductTemplate delete
   */
  export type ProductTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
    /**
     * Filter which ProductTemplate to delete.
     */
    where: ProductTemplateWhereUniqueInput
  }

  /**
   * ProductTemplate deleteMany
   */
  export type ProductTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTemplates to delete
     */
    where?: ProductTemplateWhereInput
  }

  /**
   * ProductTemplate.products
   */
  export type ProductTemplate$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductTemplate without action
   */
  export type ProductTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTemplate
     */
    select?: ProductTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTemplateInclude<ExtArgs> | null
  }


  /**
   * Model ProductHistoryEvent
   */

  export type AggregateProductHistoryEvent = {
    _count: ProductHistoryEventCountAggregateOutputType | null
    _min: ProductHistoryEventMinAggregateOutputType | null
    _max: ProductHistoryEventMaxAggregateOutputType | null
  }

  export type ProductHistoryEventMinAggregateOutputType = {
    id: string | null
    productId: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type ProductHistoryEventMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type ProductHistoryEventCountAggregateOutputType = {
    id: number
    productId: number
    eventType: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ProductHistoryEventMinAggregateInputType = {
    id?: true
    productId?: true
    eventType?: true
    createdAt?: true
  }

  export type ProductHistoryEventMaxAggregateInputType = {
    id?: true
    productId?: true
    eventType?: true
    createdAt?: true
  }

  export type ProductHistoryEventCountAggregateInputType = {
    id?: true
    productId?: true
    eventType?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ProductHistoryEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductHistoryEvent to aggregate.
     */
    where?: ProductHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistoryEvents to fetch.
     */
    orderBy?: ProductHistoryEventOrderByWithRelationInput | ProductHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistoryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductHistoryEvents
    **/
    _count?: true | ProductHistoryEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductHistoryEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductHistoryEventMaxAggregateInputType
  }

  export type GetProductHistoryEventAggregateType<T extends ProductHistoryEventAggregateArgs> = {
        [P in keyof T & keyof AggregateProductHistoryEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductHistoryEvent[P]>
      : GetScalarType<T[P], AggregateProductHistoryEvent[P]>
  }




  export type ProductHistoryEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductHistoryEventWhereInput
    orderBy?: ProductHistoryEventOrderByWithAggregationInput | ProductHistoryEventOrderByWithAggregationInput[]
    by: ProductHistoryEventScalarFieldEnum[] | ProductHistoryEventScalarFieldEnum
    having?: ProductHistoryEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductHistoryEventCountAggregateInputType | true
    _min?: ProductHistoryEventMinAggregateInputType
    _max?: ProductHistoryEventMaxAggregateInputType
  }

  export type ProductHistoryEventGroupByOutputType = {
    id: string
    productId: string
    eventType: string
    metadata: JsonValue | null
    createdAt: Date
    _count: ProductHistoryEventCountAggregateOutputType | null
    _min: ProductHistoryEventMinAggregateOutputType | null
    _max: ProductHistoryEventMaxAggregateOutputType | null
  }

  type GetProductHistoryEventGroupByPayload<T extends ProductHistoryEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductHistoryEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductHistoryEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductHistoryEventGroupByOutputType[P]>
            : GetScalarType<T[P], ProductHistoryEventGroupByOutputType[P]>
        }
      >
    >


  export type ProductHistoryEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productHistoryEvent"]>

  export type ProductHistoryEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productHistoryEvent"]>

  export type ProductHistoryEventSelectScalar = {
    id?: boolean
    productId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ProductHistoryEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductHistoryEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductHistoryEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductHistoryEvent"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      eventType: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["productHistoryEvent"]>
    composites: {}
  }

  type ProductHistoryEventGetPayload<S extends boolean | null | undefined | ProductHistoryEventDefaultArgs> = $Result.GetResult<Prisma.$ProductHistoryEventPayload, S>

  type ProductHistoryEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductHistoryEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductHistoryEventCountAggregateInputType | true
    }

  export interface ProductHistoryEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductHistoryEvent'], meta: { name: 'ProductHistoryEvent' } }
    /**
     * Find zero or one ProductHistoryEvent that matches the filter.
     * @param {ProductHistoryEventFindUniqueArgs} args - Arguments to find a ProductHistoryEvent
     * @example
     * // Get one ProductHistoryEvent
     * const productHistoryEvent = await prisma.productHistoryEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductHistoryEventFindUniqueArgs>(args: SelectSubset<T, ProductHistoryEventFindUniqueArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductHistoryEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductHistoryEventFindUniqueOrThrowArgs} args - Arguments to find a ProductHistoryEvent
     * @example
     * // Get one ProductHistoryEvent
     * const productHistoryEvent = await prisma.productHistoryEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductHistoryEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductHistoryEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductHistoryEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryEventFindFirstArgs} args - Arguments to find a ProductHistoryEvent
     * @example
     * // Get one ProductHistoryEvent
     * const productHistoryEvent = await prisma.productHistoryEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductHistoryEventFindFirstArgs>(args?: SelectSubset<T, ProductHistoryEventFindFirstArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductHistoryEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryEventFindFirstOrThrowArgs} args - Arguments to find a ProductHistoryEvent
     * @example
     * // Get one ProductHistoryEvent
     * const productHistoryEvent = await prisma.productHistoryEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductHistoryEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductHistoryEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductHistoryEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductHistoryEvents
     * const productHistoryEvents = await prisma.productHistoryEvent.findMany()
     * 
     * // Get first 10 ProductHistoryEvents
     * const productHistoryEvents = await prisma.productHistoryEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productHistoryEventWithIdOnly = await prisma.productHistoryEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductHistoryEventFindManyArgs>(args?: SelectSubset<T, ProductHistoryEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductHistoryEvent.
     * @param {ProductHistoryEventCreateArgs} args - Arguments to create a ProductHistoryEvent.
     * @example
     * // Create one ProductHistoryEvent
     * const ProductHistoryEvent = await prisma.productHistoryEvent.create({
     *   data: {
     *     // ... data to create a ProductHistoryEvent
     *   }
     * })
     * 
     */
    create<T extends ProductHistoryEventCreateArgs>(args: SelectSubset<T, ProductHistoryEventCreateArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductHistoryEvents.
     * @param {ProductHistoryEventCreateManyArgs} args - Arguments to create many ProductHistoryEvents.
     * @example
     * // Create many ProductHistoryEvents
     * const productHistoryEvent = await prisma.productHistoryEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductHistoryEventCreateManyArgs>(args?: SelectSubset<T, ProductHistoryEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductHistoryEvents and returns the data saved in the database.
     * @param {ProductHistoryEventCreateManyAndReturnArgs} args - Arguments to create many ProductHistoryEvents.
     * @example
     * // Create many ProductHistoryEvents
     * const productHistoryEvent = await prisma.productHistoryEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductHistoryEvents and only return the `id`
     * const productHistoryEventWithIdOnly = await prisma.productHistoryEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductHistoryEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductHistoryEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductHistoryEvent.
     * @param {ProductHistoryEventDeleteArgs} args - Arguments to delete one ProductHistoryEvent.
     * @example
     * // Delete one ProductHistoryEvent
     * const ProductHistoryEvent = await prisma.productHistoryEvent.delete({
     *   where: {
     *     // ... filter to delete one ProductHistoryEvent
     *   }
     * })
     * 
     */
    delete<T extends ProductHistoryEventDeleteArgs>(args: SelectSubset<T, ProductHistoryEventDeleteArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductHistoryEvent.
     * @param {ProductHistoryEventUpdateArgs} args - Arguments to update one ProductHistoryEvent.
     * @example
     * // Update one ProductHistoryEvent
     * const productHistoryEvent = await prisma.productHistoryEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductHistoryEventUpdateArgs>(args: SelectSubset<T, ProductHistoryEventUpdateArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductHistoryEvents.
     * @param {ProductHistoryEventDeleteManyArgs} args - Arguments to filter ProductHistoryEvents to delete.
     * @example
     * // Delete a few ProductHistoryEvents
     * const { count } = await prisma.productHistoryEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductHistoryEventDeleteManyArgs>(args?: SelectSubset<T, ProductHistoryEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductHistoryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductHistoryEvents
     * const productHistoryEvent = await prisma.productHistoryEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductHistoryEventUpdateManyArgs>(args: SelectSubset<T, ProductHistoryEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductHistoryEvent.
     * @param {ProductHistoryEventUpsertArgs} args - Arguments to update or create a ProductHistoryEvent.
     * @example
     * // Update or create a ProductHistoryEvent
     * const productHistoryEvent = await prisma.productHistoryEvent.upsert({
     *   create: {
     *     // ... data to create a ProductHistoryEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductHistoryEvent we want to update
     *   }
     * })
     */
    upsert<T extends ProductHistoryEventUpsertArgs>(args: SelectSubset<T, ProductHistoryEventUpsertArgs<ExtArgs>>): Prisma__ProductHistoryEventClient<$Result.GetResult<Prisma.$ProductHistoryEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductHistoryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryEventCountArgs} args - Arguments to filter ProductHistoryEvents to count.
     * @example
     * // Count the number of ProductHistoryEvents
     * const count = await prisma.productHistoryEvent.count({
     *   where: {
     *     // ... the filter for the ProductHistoryEvents we want to count
     *   }
     * })
    **/
    count<T extends ProductHistoryEventCountArgs>(
      args?: Subset<T, ProductHistoryEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductHistoryEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductHistoryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductHistoryEventAggregateArgs>(args: Subset<T, ProductHistoryEventAggregateArgs>): Prisma.PrismaPromise<GetProductHistoryEventAggregateType<T>>

    /**
     * Group by ProductHistoryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductHistoryEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductHistoryEventGroupByArgs['orderBy'] }
        : { orderBy?: ProductHistoryEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductHistoryEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductHistoryEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductHistoryEvent model
   */
  readonly fields: ProductHistoryEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductHistoryEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductHistoryEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductHistoryEvent model
   */ 
  interface ProductHistoryEventFieldRefs {
    readonly id: FieldRef<"ProductHistoryEvent", 'String'>
    readonly productId: FieldRef<"ProductHistoryEvent", 'String'>
    readonly eventType: FieldRef<"ProductHistoryEvent", 'String'>
    readonly metadata: FieldRef<"ProductHistoryEvent", 'Json'>
    readonly createdAt: FieldRef<"ProductHistoryEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductHistoryEvent findUnique
   */
  export type ProductHistoryEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistoryEvent to fetch.
     */
    where: ProductHistoryEventWhereUniqueInput
  }

  /**
   * ProductHistoryEvent findUniqueOrThrow
   */
  export type ProductHistoryEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistoryEvent to fetch.
     */
    where: ProductHistoryEventWhereUniqueInput
  }

  /**
   * ProductHistoryEvent findFirst
   */
  export type ProductHistoryEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistoryEvent to fetch.
     */
    where?: ProductHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistoryEvents to fetch.
     */
    orderBy?: ProductHistoryEventOrderByWithRelationInput | ProductHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductHistoryEvents.
     */
    cursor?: ProductHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistoryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductHistoryEvents.
     */
    distinct?: ProductHistoryEventScalarFieldEnum | ProductHistoryEventScalarFieldEnum[]
  }

  /**
   * ProductHistoryEvent findFirstOrThrow
   */
  export type ProductHistoryEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistoryEvent to fetch.
     */
    where?: ProductHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistoryEvents to fetch.
     */
    orderBy?: ProductHistoryEventOrderByWithRelationInput | ProductHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductHistoryEvents.
     */
    cursor?: ProductHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistoryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductHistoryEvents.
     */
    distinct?: ProductHistoryEventScalarFieldEnum | ProductHistoryEventScalarFieldEnum[]
  }

  /**
   * ProductHistoryEvent findMany
   */
  export type ProductHistoryEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistoryEvents to fetch.
     */
    where?: ProductHistoryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistoryEvents to fetch.
     */
    orderBy?: ProductHistoryEventOrderByWithRelationInput | ProductHistoryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductHistoryEvents.
     */
    cursor?: ProductHistoryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistoryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistoryEvents.
     */
    skip?: number
    distinct?: ProductHistoryEventScalarFieldEnum | ProductHistoryEventScalarFieldEnum[]
  }

  /**
   * ProductHistoryEvent create
   */
  export type ProductHistoryEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductHistoryEvent.
     */
    data: XOR<ProductHistoryEventCreateInput, ProductHistoryEventUncheckedCreateInput>
  }

  /**
   * ProductHistoryEvent createMany
   */
  export type ProductHistoryEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductHistoryEvents.
     */
    data: ProductHistoryEventCreateManyInput | ProductHistoryEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductHistoryEvent createManyAndReturn
   */
  export type ProductHistoryEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductHistoryEvents.
     */
    data: ProductHistoryEventCreateManyInput | ProductHistoryEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductHistoryEvent update
   */
  export type ProductHistoryEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductHistoryEvent.
     */
    data: XOR<ProductHistoryEventUpdateInput, ProductHistoryEventUncheckedUpdateInput>
    /**
     * Choose, which ProductHistoryEvent to update.
     */
    where: ProductHistoryEventWhereUniqueInput
  }

  /**
   * ProductHistoryEvent updateMany
   */
  export type ProductHistoryEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductHistoryEvents.
     */
    data: XOR<ProductHistoryEventUpdateManyMutationInput, ProductHistoryEventUncheckedUpdateManyInput>
    /**
     * Filter which ProductHistoryEvents to update
     */
    where?: ProductHistoryEventWhereInput
  }

  /**
   * ProductHistoryEvent upsert
   */
  export type ProductHistoryEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductHistoryEvent to update in case it exists.
     */
    where: ProductHistoryEventWhereUniqueInput
    /**
     * In case the ProductHistoryEvent found by the `where` argument doesn't exist, create a new ProductHistoryEvent with this data.
     */
    create: XOR<ProductHistoryEventCreateInput, ProductHistoryEventUncheckedCreateInput>
    /**
     * In case the ProductHistoryEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductHistoryEventUpdateInput, ProductHistoryEventUncheckedUpdateInput>
  }

  /**
   * ProductHistoryEvent delete
   */
  export type ProductHistoryEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
    /**
     * Filter which ProductHistoryEvent to delete.
     */
    where: ProductHistoryEventWhereUniqueInput
  }

  /**
   * ProductHistoryEvent deleteMany
   */
  export type ProductHistoryEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductHistoryEvents to delete
     */
    where?: ProductHistoryEventWhereInput
  }

  /**
   * ProductHistoryEvent without action
   */
  export type ProductHistoryEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistoryEvent
     */
    select?: ProductHistoryEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    subcategory: 'subcategory',
    brand: 'brand',
    model: 'model',
    variant: 'variant',
    color: 'color',
    condition: 'condition',
    purchaseCost: 'purchaseCost',
    suggestedPrice: 'suggestedPrice',
    salePrice: 'salePrice',
    status: 'status',
    templateId: 'templateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    imageUrl: 'imageUrl',
    isCover: 'isCover',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    platform: 'platform',
    platformListingId: 'platformListingId',
    platformUrl: 'platformUrl',
    price: 'price',
    status: 'status',
    payload: 'payload',
    idempotencyKey: 'idempotencyKey',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const AiAnalysisScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    result: 'result',
    confidence: 'confidence',
    aiModel: 'aiModel',
    createdAt: 'createdAt'
  };

  export type AiAnalysisScalarFieldEnum = (typeof AiAnalysisScalarFieldEnum)[keyof typeof AiAnalysisScalarFieldEnum]


  export const PublicationLogScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    platform: 'platform',
    result: 'result',
    error: 'error',
    timestamp: 'timestamp'
  };

  export type PublicationLogScalarFieldEnum = (typeof PublicationLogScalarFieldEnum)[keyof typeof PublicationLogScalarFieldEnum]


  export const ProductTemplateScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    category: 'category',
    defaultAttributes: 'defaultAttributes',
    subitoAttributes: 'subitoAttributes',
    vintedAttributes: 'vintedAttributes',
    descriptionPattern: 'descriptionPattern',
    priceRangeMin: 'priceRangeMin',
    priceRangeMax: 'priceRangeMax',
    timesUsed: 'timesUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductTemplateScalarFieldEnum = (typeof ProductTemplateScalarFieldEnum)[keyof typeof ProductTemplateScalarFieldEnum]


  export const ProductHistoryEventScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    eventType: 'eventType',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ProductHistoryEventScalarFieldEnum = (typeof ProductHistoryEventScalarFieldEnum)[keyof typeof ProductHistoryEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PublicationResult'
   */
  export type EnumPublicationResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationResult'>
    


  /**
   * Reference to a field of type 'PublicationResult[]'
   */
  export type ListEnumPublicationResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationResult[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    subcategory?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    model?: StringNullableFilter<"Product"> | string | null
    variant?: StringNullableFilter<"Product"> | string | null
    color?: StringNullableFilter<"Product"> | string | null
    condition?: StringNullableFilter<"Product"> | string | null
    purchaseCost?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    salePrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    templateId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    template?: XOR<ProductTemplateNullableRelationFilter, ProductTemplateWhereInput> | null
    images?: ProductImageListRelationFilter
    listings?: ListingListRelationFilter
    aiAnalyses?: AiAnalysisListRelationFilter
    historyEvents?: ProductHistoryEventListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    purchaseCost?: SortOrderInput | SortOrder
    suggestedPrice?: SortOrderInput | SortOrder
    salePrice?: SortOrderInput | SortOrder
    status?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    template?: ProductTemplateOrderByWithRelationInput
    images?: ProductImageOrderByRelationAggregateInput
    listings?: ListingOrderByRelationAggregateInput
    aiAnalyses?: AiAnalysisOrderByRelationAggregateInput
    historyEvents?: ProductHistoryEventOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    subcategory?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    model?: StringNullableFilter<"Product"> | string | null
    variant?: StringNullableFilter<"Product"> | string | null
    color?: StringNullableFilter<"Product"> | string | null
    condition?: StringNullableFilter<"Product"> | string | null
    purchaseCost?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    salePrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    templateId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    template?: XOR<ProductTemplateNullableRelationFilter, ProductTemplateWhereInput> | null
    images?: ProductImageListRelationFilter
    listings?: ListingListRelationFilter
    aiAnalyses?: AiAnalysisListRelationFilter
    historyEvents?: ProductHistoryEventListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    purchaseCost?: SortOrderInput | SortOrder
    suggestedPrice?: SortOrderInput | SortOrder
    salePrice?: SortOrderInput | SortOrder
    status?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    subcategory?: StringNullableWithAggregatesFilter<"Product"> | string | null
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    model?: StringNullableWithAggregatesFilter<"Product"> | string | null
    variant?: StringNullableWithAggregatesFilter<"Product"> | string | null
    color?: StringNullableWithAggregatesFilter<"Product"> | string | null
    condition?: StringNullableWithAggregatesFilter<"Product"> | string | null
    purchaseCost?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    salePrice?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    templateId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    imageUrl?: StringFilter<"ProductImage"> | string
    isCover?: BoolFilter<"ProductImage"> | boolean
    order?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    isCover?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: StringFilter<"ProductImage"> | string
    imageUrl?: StringFilter<"ProductImage"> | string
    isCover?: BoolFilter<"ProductImage"> | boolean
    order?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    isCover?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductImage"> | string
    productId?: StringWithAggregatesFilter<"ProductImage"> | string
    imageUrl?: StringWithAggregatesFilter<"ProductImage"> | string
    isCover?: BoolWithAggregatesFilter<"ProductImage"> | boolean
    order?: IntWithAggregatesFilter<"ProductImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    productId?: StringFilter<"Listing"> | string
    platform?: EnumPlatformFilter<"Listing"> | $Enums.Platform
    platformListingId?: StringNullableFilter<"Listing"> | string | null
    platformUrl?: StringNullableFilter<"Listing"> | string | null
    price?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    payload?: JsonNullableFilter<"Listing">
    idempotencyKey?: StringFilter<"Listing"> | string
    lastError?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    platform?: SortOrder
    platformListingId?: SortOrderInput | SortOrder
    platformUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    status?: SortOrder
    payload?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotencyKey?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    productId?: StringFilter<"Listing"> | string
    platform?: EnumPlatformFilter<"Listing"> | $Enums.Platform
    platformListingId?: StringNullableFilter<"Listing"> | string | null
    platformUrl?: StringNullableFilter<"Listing"> | string | null
    price?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    payload?: JsonNullableFilter<"Listing">
    lastError?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "idempotencyKey">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    platform?: SortOrder
    platformListingId?: SortOrderInput | SortOrder
    platformUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    status?: SortOrder
    payload?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    productId?: StringWithAggregatesFilter<"Listing"> | string
    platform?: EnumPlatformWithAggregatesFilter<"Listing"> | $Enums.Platform
    platformListingId?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    platformUrl?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    price?: DecimalWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    payload?: JsonNullableWithAggregatesFilter<"Listing">
    idempotencyKey?: StringWithAggregatesFilter<"Listing"> | string
    lastError?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type AiAnalysisWhereInput = {
    AND?: AiAnalysisWhereInput | AiAnalysisWhereInput[]
    OR?: AiAnalysisWhereInput[]
    NOT?: AiAnalysisWhereInput | AiAnalysisWhereInput[]
    id?: StringFilter<"AiAnalysis"> | string
    productId?: StringFilter<"AiAnalysis"> | string
    result?: JsonFilter<"AiAnalysis">
    confidence?: FloatNullableFilter<"AiAnalysis"> | number | null
    aiModel?: StringFilter<"AiAnalysis"> | string
    createdAt?: DateTimeFilter<"AiAnalysis"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type AiAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    result?: SortOrder
    confidence?: SortOrderInput | SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type AiAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiAnalysisWhereInput | AiAnalysisWhereInput[]
    OR?: AiAnalysisWhereInput[]
    NOT?: AiAnalysisWhereInput | AiAnalysisWhereInput[]
    productId?: StringFilter<"AiAnalysis"> | string
    result?: JsonFilter<"AiAnalysis">
    confidence?: FloatNullableFilter<"AiAnalysis"> | number | null
    aiModel?: StringFilter<"AiAnalysis"> | string
    createdAt?: DateTimeFilter<"AiAnalysis"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type AiAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    result?: SortOrder
    confidence?: SortOrderInput | SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    _count?: AiAnalysisCountOrderByAggregateInput
    _avg?: AiAnalysisAvgOrderByAggregateInput
    _max?: AiAnalysisMaxOrderByAggregateInput
    _min?: AiAnalysisMinOrderByAggregateInput
    _sum?: AiAnalysisSumOrderByAggregateInput
  }

  export type AiAnalysisScalarWhereWithAggregatesInput = {
    AND?: AiAnalysisScalarWhereWithAggregatesInput | AiAnalysisScalarWhereWithAggregatesInput[]
    OR?: AiAnalysisScalarWhereWithAggregatesInput[]
    NOT?: AiAnalysisScalarWhereWithAggregatesInput | AiAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiAnalysis"> | string
    productId?: StringWithAggregatesFilter<"AiAnalysis"> | string
    result?: JsonWithAggregatesFilter<"AiAnalysis">
    confidence?: FloatNullableWithAggregatesFilter<"AiAnalysis"> | number | null
    aiModel?: StringWithAggregatesFilter<"AiAnalysis"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiAnalysis"> | Date | string
  }

  export type PublicationLogWhereInput = {
    AND?: PublicationLogWhereInput | PublicationLogWhereInput[]
    OR?: PublicationLogWhereInput[]
    NOT?: PublicationLogWhereInput | PublicationLogWhereInput[]
    id?: StringFilter<"PublicationLog"> | string
    listingId?: StringNullableFilter<"PublicationLog"> | string | null
    platform?: EnumPlatformFilter<"PublicationLog"> | $Enums.Platform
    result?: EnumPublicationResultFilter<"PublicationLog"> | $Enums.PublicationResult
    error?: StringNullableFilter<"PublicationLog"> | string | null
    timestamp?: DateTimeFilter<"PublicationLog"> | Date | string
  }

  export type PublicationLogOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrderInput | SortOrder
    platform?: SortOrder
    result?: SortOrder
    error?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type PublicationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicationLogWhereInput | PublicationLogWhereInput[]
    OR?: PublicationLogWhereInput[]
    NOT?: PublicationLogWhereInput | PublicationLogWhereInput[]
    listingId?: StringNullableFilter<"PublicationLog"> | string | null
    platform?: EnumPlatformFilter<"PublicationLog"> | $Enums.Platform
    result?: EnumPublicationResultFilter<"PublicationLog"> | $Enums.PublicationResult
    error?: StringNullableFilter<"PublicationLog"> | string | null
    timestamp?: DateTimeFilter<"PublicationLog"> | Date | string
  }, "id">

  export type PublicationLogOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrderInput | SortOrder
    platform?: SortOrder
    result?: SortOrder
    error?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: PublicationLogCountOrderByAggregateInput
    _max?: PublicationLogMaxOrderByAggregateInput
    _min?: PublicationLogMinOrderByAggregateInput
  }

  export type PublicationLogScalarWhereWithAggregatesInput = {
    AND?: PublicationLogScalarWhereWithAggregatesInput | PublicationLogScalarWhereWithAggregatesInput[]
    OR?: PublicationLogScalarWhereWithAggregatesInput[]
    NOT?: PublicationLogScalarWhereWithAggregatesInput | PublicationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicationLog"> | string
    listingId?: StringNullableWithAggregatesFilter<"PublicationLog"> | string | null
    platform?: EnumPlatformWithAggregatesFilter<"PublicationLog"> | $Enums.Platform
    result?: EnumPublicationResultWithAggregatesFilter<"PublicationLog"> | $Enums.PublicationResult
    error?: StringNullableWithAggregatesFilter<"PublicationLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"PublicationLog"> | Date | string
  }

  export type ProductTemplateWhereInput = {
    AND?: ProductTemplateWhereInput | ProductTemplateWhereInput[]
    OR?: ProductTemplateWhereInput[]
    NOT?: ProductTemplateWhereInput | ProductTemplateWhereInput[]
    id?: StringFilter<"ProductTemplate"> | string
    brand?: StringFilter<"ProductTemplate"> | string
    model?: StringFilter<"ProductTemplate"> | string
    category?: StringFilter<"ProductTemplate"> | string
    defaultAttributes?: JsonFilter<"ProductTemplate">
    subitoAttributes?: JsonNullableFilter<"ProductTemplate">
    vintedAttributes?: JsonNullableFilter<"ProductTemplate">
    descriptionPattern?: StringNullableFilter<"ProductTemplate"> | string | null
    priceRangeMin?: DecimalNullableFilter<"ProductTemplate"> | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: DecimalNullableFilter<"ProductTemplate"> | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFilter<"ProductTemplate"> | number
    createdAt?: DateTimeFilter<"ProductTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProductTemplate"> | Date | string
    products?: ProductListRelationFilter
  }

  export type ProductTemplateOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    defaultAttributes?: SortOrder
    subitoAttributes?: SortOrderInput | SortOrder
    vintedAttributes?: SortOrderInput | SortOrder
    descriptionPattern?: SortOrderInput | SortOrder
    priceRangeMin?: SortOrderInput | SortOrder
    priceRangeMax?: SortOrderInput | SortOrder
    timesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type ProductTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    brand_model?: ProductTemplateBrandModelCompoundUniqueInput
    AND?: ProductTemplateWhereInput | ProductTemplateWhereInput[]
    OR?: ProductTemplateWhereInput[]
    NOT?: ProductTemplateWhereInput | ProductTemplateWhereInput[]
    brand?: StringFilter<"ProductTemplate"> | string
    model?: StringFilter<"ProductTemplate"> | string
    category?: StringFilter<"ProductTemplate"> | string
    defaultAttributes?: JsonFilter<"ProductTemplate">
    subitoAttributes?: JsonNullableFilter<"ProductTemplate">
    vintedAttributes?: JsonNullableFilter<"ProductTemplate">
    descriptionPattern?: StringNullableFilter<"ProductTemplate"> | string | null
    priceRangeMin?: DecimalNullableFilter<"ProductTemplate"> | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: DecimalNullableFilter<"ProductTemplate"> | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFilter<"ProductTemplate"> | number
    createdAt?: DateTimeFilter<"ProductTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProductTemplate"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "brand_model">

  export type ProductTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    defaultAttributes?: SortOrder
    subitoAttributes?: SortOrderInput | SortOrder
    vintedAttributes?: SortOrderInput | SortOrder
    descriptionPattern?: SortOrderInput | SortOrder
    priceRangeMin?: SortOrderInput | SortOrder
    priceRangeMax?: SortOrderInput | SortOrder
    timesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductTemplateCountOrderByAggregateInput
    _avg?: ProductTemplateAvgOrderByAggregateInput
    _max?: ProductTemplateMaxOrderByAggregateInput
    _min?: ProductTemplateMinOrderByAggregateInput
    _sum?: ProductTemplateSumOrderByAggregateInput
  }

  export type ProductTemplateScalarWhereWithAggregatesInput = {
    AND?: ProductTemplateScalarWhereWithAggregatesInput | ProductTemplateScalarWhereWithAggregatesInput[]
    OR?: ProductTemplateScalarWhereWithAggregatesInput[]
    NOT?: ProductTemplateScalarWhereWithAggregatesInput | ProductTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductTemplate"> | string
    brand?: StringWithAggregatesFilter<"ProductTemplate"> | string
    model?: StringWithAggregatesFilter<"ProductTemplate"> | string
    category?: StringWithAggregatesFilter<"ProductTemplate"> | string
    defaultAttributes?: JsonWithAggregatesFilter<"ProductTemplate">
    subitoAttributes?: JsonNullableWithAggregatesFilter<"ProductTemplate">
    vintedAttributes?: JsonNullableWithAggregatesFilter<"ProductTemplate">
    descriptionPattern?: StringNullableWithAggregatesFilter<"ProductTemplate"> | string | null
    priceRangeMin?: DecimalNullableWithAggregatesFilter<"ProductTemplate"> | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: DecimalNullableWithAggregatesFilter<"ProductTemplate"> | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntWithAggregatesFilter<"ProductTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductTemplate"> | Date | string
  }

  export type ProductHistoryEventWhereInput = {
    AND?: ProductHistoryEventWhereInput | ProductHistoryEventWhereInput[]
    OR?: ProductHistoryEventWhereInput[]
    NOT?: ProductHistoryEventWhereInput | ProductHistoryEventWhereInput[]
    id?: StringFilter<"ProductHistoryEvent"> | string
    productId?: StringFilter<"ProductHistoryEvent"> | string
    eventType?: StringFilter<"ProductHistoryEvent"> | string
    metadata?: JsonNullableFilter<"ProductHistoryEvent">
    createdAt?: DateTimeFilter<"ProductHistoryEvent"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductHistoryEventOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    eventType?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductHistoryEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductHistoryEventWhereInput | ProductHistoryEventWhereInput[]
    OR?: ProductHistoryEventWhereInput[]
    NOT?: ProductHistoryEventWhereInput | ProductHistoryEventWhereInput[]
    productId?: StringFilter<"ProductHistoryEvent"> | string
    eventType?: StringFilter<"ProductHistoryEvent"> | string
    metadata?: JsonNullableFilter<"ProductHistoryEvent">
    createdAt?: DateTimeFilter<"ProductHistoryEvent"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductHistoryEventOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    eventType?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductHistoryEventCountOrderByAggregateInput
    _max?: ProductHistoryEventMaxOrderByAggregateInput
    _min?: ProductHistoryEventMinOrderByAggregateInput
  }

  export type ProductHistoryEventScalarWhereWithAggregatesInput = {
    AND?: ProductHistoryEventScalarWhereWithAggregatesInput | ProductHistoryEventScalarWhereWithAggregatesInput[]
    OR?: ProductHistoryEventScalarWhereWithAggregatesInput[]
    NOT?: ProductHistoryEventScalarWhereWithAggregatesInput | ProductHistoryEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductHistoryEvent"> | string
    productId?: StringWithAggregatesFilter<"ProductHistoryEvent"> | string
    eventType?: StringWithAggregatesFilter<"ProductHistoryEvent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"ProductHistoryEvent">
    createdAt?: DateTimeWithAggregatesFilter<"ProductHistoryEvent"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: ProductTemplateCreateNestedOneWithoutProductsInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    listings?: ListingCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    listings?: ListingUncheckedCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisUncheckedCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: ProductTemplateUpdateOneWithoutProductsNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    listings?: ListingUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    listings?: ListingUncheckedUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUncheckedUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateInput = {
    id?: string
    imageUrl: string
    isCover?: boolean
    order: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: string
    productId: string
    imageUrl: string
    isCover?: boolean
    order: number
    createdAt?: Date | string
  }

  export type ProductImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyInput = {
    id?: string
    productId: string
    imageUrl: string
    isCover?: boolean
    order: number
    createdAt?: Date | string
  }

  export type ProductImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    platform: $Enums.Platform
    platformListingId?: string | null
    platformUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey: string
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    productId: string
    platform: $Enums.Platform
    platformListingId?: string | null
    platformUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey: string
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformListingId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformListingId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateManyInput = {
    id?: string
    productId: string
    platform: $Enums.Platform
    platformListingId?: string | null
    platformUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey: string
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformListingId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformListingId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAnalysisCreateInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    aiModel: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAiAnalysesInput
  }

  export type AiAnalysisUncheckedCreateInput = {
    id?: string
    productId: string
    result: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    aiModel: string
    createdAt?: Date | string
  }

  export type AiAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAiAnalysesNestedInput
  }

  export type AiAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAnalysisCreateManyInput = {
    id?: string
    productId: string
    result: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    aiModel: string
    createdAt?: Date | string
  }

  export type AiAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationLogCreateInput = {
    id?: string
    listingId?: string | null
    platform: $Enums.Platform
    result: $Enums.PublicationResult
    error?: string | null
    timestamp?: Date | string
  }

  export type PublicationLogUncheckedCreateInput = {
    id?: string
    listingId?: string | null
    platform: $Enums.Platform
    result: $Enums.PublicationResult
    error?: string | null
    timestamp?: Date | string
  }

  export type PublicationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    result?: EnumPublicationResultFieldUpdateOperationsInput | $Enums.PublicationResult
    error?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    result?: EnumPublicationResultFieldUpdateOperationsInput | $Enums.PublicationResult
    error?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationLogCreateManyInput = {
    id?: string
    listingId?: string | null
    platform: $Enums.Platform
    result: $Enums.PublicationResult
    error?: string | null
    timestamp?: Date | string
  }

  export type PublicationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    result?: EnumPublicationResultFieldUpdateOperationsInput | $Enums.PublicationResult
    error?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    result?: EnumPublicationResultFieldUpdateOperationsInput | $Enums.PublicationResult
    error?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTemplateCreateInput = {
    id?: string
    brand: string
    model: string
    category: string
    defaultAttributes: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: string | null
    priceRangeMin?: Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: Decimal | DecimalJsLike | number | string | null
    timesUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutTemplateInput
  }

  export type ProductTemplateUncheckedCreateInput = {
    id?: string
    brand: string
    model: string
    category: string
    defaultAttributes: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: string | null
    priceRangeMin?: Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: Decimal | DecimalJsLike | number | string | null
    timesUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ProductTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    defaultAttributes?: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: NullableStringFieldUpdateOperationsInput | string | null
    priceRangeMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutTemplateNestedInput
  }

  export type ProductTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    defaultAttributes?: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: NullableStringFieldUpdateOperationsInput | string | null
    priceRangeMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ProductTemplateCreateManyInput = {
    id?: string
    brand: string
    model: string
    category: string
    defaultAttributes: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: string | null
    priceRangeMin?: Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: Decimal | DecimalJsLike | number | string | null
    timesUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    defaultAttributes?: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: NullableStringFieldUpdateOperationsInput | string | null
    priceRangeMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    defaultAttributes?: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: NullableStringFieldUpdateOperationsInput | string | null
    priceRangeMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryEventCreateInput = {
    id?: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutHistoryEventsInput
  }

  export type ProductHistoryEventUncheckedCreateInput = {
    id?: string
    productId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductHistoryEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutHistoryEventsNestedInput
  }

  export type ProductHistoryEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryEventCreateManyInput = {
    id?: string
    productId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductHistoryEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductTemplateNullableRelationFilter = {
    is?: ProductTemplateWhereInput | null
    isNot?: ProductTemplateWhereInput | null
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type AiAnalysisListRelationFilter = {
    every?: AiAnalysisWhereInput
    some?: AiAnalysisWhereInput
    none?: AiAnalysisWhereInput
  }

  export type ProductHistoryEventListRelationFilter = {
    every?: ProductHistoryEventWhereInput
    some?: ProductHistoryEventWhereInput
    none?: ProductHistoryEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductHistoryEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    variant?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    purchaseCost?: SortOrder
    suggestedPrice?: SortOrder
    salePrice?: SortOrder
    status?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    purchaseCost?: SortOrder
    suggestedPrice?: SortOrder
    salePrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    variant?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    purchaseCost?: SortOrder
    suggestedPrice?: SortOrder
    salePrice?: SortOrder
    status?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    variant?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    purchaseCost?: SortOrder
    suggestedPrice?: SortOrder
    salePrice?: SortOrder
    status?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    purchaseCost?: SortOrder
    suggestedPrice?: SortOrder
    salePrice?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    isCover?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    isCover?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    isCover?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    platform?: SortOrder
    platformListingId?: SortOrder
    platformUrl?: SortOrder
    price?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    idempotencyKey?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    platform?: SortOrder
    platformListingId?: SortOrder
    platformUrl?: SortOrder
    price?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    platform?: SortOrder
    platformListingId?: SortOrder
    platformUrl?: SortOrder
    price?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AiAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    result?: SortOrder
    confidence?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
  }

  export type AiAnalysisAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type AiAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    confidence?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
  }

  export type AiAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    confidence?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
  }

  export type AiAnalysisSumOrderByAggregateInput = {
    confidence?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumPublicationResultFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationResult | EnumPublicationResultFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationResultFilter<$PrismaModel> | $Enums.PublicationResult
  }

  export type PublicationLogCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    platform?: SortOrder
    result?: SortOrder
    error?: SortOrder
    timestamp?: SortOrder
  }

  export type PublicationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    platform?: SortOrder
    result?: SortOrder
    error?: SortOrder
    timestamp?: SortOrder
  }

  export type PublicationLogMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    platform?: SortOrder
    result?: SortOrder
    error?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumPublicationResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationResult | EnumPublicationResultFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationResultWithAggregatesFilter<$PrismaModel> | $Enums.PublicationResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationResultFilter<$PrismaModel>
    _max?: NestedEnumPublicationResultFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductTemplateBrandModelCompoundUniqueInput = {
    brand: string
    model: string
  }

  export type ProductTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    defaultAttributes?: SortOrder
    subitoAttributes?: SortOrder
    vintedAttributes?: SortOrder
    descriptionPattern?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    timesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTemplateAvgOrderByAggregateInput = {
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    timesUsed?: SortOrder
  }

  export type ProductTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    descriptionPattern?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    timesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    descriptionPattern?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    timesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTemplateSumOrderByAggregateInput = {
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    timesUsed?: SortOrder
  }

  export type ProductHistoryEventCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    eventType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHistoryEventMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHistoryEventMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductTemplateCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductTemplateCreateWithoutProductsInput, ProductTemplateUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductTemplateCreateOrConnectWithoutProductsInput
    connect?: ProductTemplateWhereUniqueInput
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutProductInput = {
    create?: XOR<ListingCreateWithoutProductInput, ListingUncheckedCreateWithoutProductInput> | ListingCreateWithoutProductInput[] | ListingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutProductInput | ListingCreateOrConnectWithoutProductInput[]
    createMany?: ListingCreateManyProductInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type AiAnalysisCreateNestedManyWithoutProductInput = {
    create?: XOR<AiAnalysisCreateWithoutProductInput, AiAnalysisUncheckedCreateWithoutProductInput> | AiAnalysisCreateWithoutProductInput[] | AiAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiAnalysisCreateOrConnectWithoutProductInput | AiAnalysisCreateOrConnectWithoutProductInput[]
    createMany?: AiAnalysisCreateManyProductInputEnvelope
    connect?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
  }

  export type ProductHistoryEventCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductHistoryEventCreateWithoutProductInput, ProductHistoryEventUncheckedCreateWithoutProductInput> | ProductHistoryEventCreateWithoutProductInput[] | ProductHistoryEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryEventCreateOrConnectWithoutProductInput | ProductHistoryEventCreateOrConnectWithoutProductInput[]
    createMany?: ProductHistoryEventCreateManyProductInputEnvelope
    connect?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ListingCreateWithoutProductInput, ListingUncheckedCreateWithoutProductInput> | ListingCreateWithoutProductInput[] | ListingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutProductInput | ListingCreateOrConnectWithoutProductInput[]
    createMany?: ListingCreateManyProductInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type AiAnalysisUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<AiAnalysisCreateWithoutProductInput, AiAnalysisUncheckedCreateWithoutProductInput> | AiAnalysisCreateWithoutProductInput[] | AiAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiAnalysisCreateOrConnectWithoutProductInput | AiAnalysisCreateOrConnectWithoutProductInput[]
    createMany?: AiAnalysisCreateManyProductInputEnvelope
    connect?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
  }

  export type ProductHistoryEventUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductHistoryEventCreateWithoutProductInput, ProductHistoryEventUncheckedCreateWithoutProductInput> | ProductHistoryEventCreateWithoutProductInput[] | ProductHistoryEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryEventCreateOrConnectWithoutProductInput | ProductHistoryEventCreateOrConnectWithoutProductInput[]
    createMany?: ProductHistoryEventCreateManyProductInputEnvelope
    connect?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductTemplateUpdateOneWithoutProductsNestedInput = {
    create?: XOR<ProductTemplateCreateWithoutProductsInput, ProductTemplateUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductTemplateCreateOrConnectWithoutProductsInput
    upsert?: ProductTemplateUpsertWithoutProductsInput
    disconnect?: ProductTemplateWhereInput | boolean
    delete?: ProductTemplateWhereInput | boolean
    connect?: ProductTemplateWhereUniqueInput
    update?: XOR<XOR<ProductTemplateUpdateToOneWithWhereWithoutProductsInput, ProductTemplateUpdateWithoutProductsInput>, ProductTemplateUncheckedUpdateWithoutProductsInput>
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutProductNestedInput = {
    create?: XOR<ListingCreateWithoutProductInput, ListingUncheckedCreateWithoutProductInput> | ListingCreateWithoutProductInput[] | ListingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutProductInput | ListingCreateOrConnectWithoutProductInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutProductInput | ListingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ListingCreateManyProductInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutProductInput | ListingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutProductInput | ListingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type AiAnalysisUpdateManyWithoutProductNestedInput = {
    create?: XOR<AiAnalysisCreateWithoutProductInput, AiAnalysisUncheckedCreateWithoutProductInput> | AiAnalysisCreateWithoutProductInput[] | AiAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiAnalysisCreateOrConnectWithoutProductInput | AiAnalysisCreateOrConnectWithoutProductInput[]
    upsert?: AiAnalysisUpsertWithWhereUniqueWithoutProductInput | AiAnalysisUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AiAnalysisCreateManyProductInputEnvelope
    set?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    disconnect?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    delete?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    connect?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    update?: AiAnalysisUpdateWithWhereUniqueWithoutProductInput | AiAnalysisUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AiAnalysisUpdateManyWithWhereWithoutProductInput | AiAnalysisUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AiAnalysisScalarWhereInput | AiAnalysisScalarWhereInput[]
  }

  export type ProductHistoryEventUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductHistoryEventCreateWithoutProductInput, ProductHistoryEventUncheckedCreateWithoutProductInput> | ProductHistoryEventCreateWithoutProductInput[] | ProductHistoryEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryEventCreateOrConnectWithoutProductInput | ProductHistoryEventCreateOrConnectWithoutProductInput[]
    upsert?: ProductHistoryEventUpsertWithWhereUniqueWithoutProductInput | ProductHistoryEventUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductHistoryEventCreateManyProductInputEnvelope
    set?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    disconnect?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    delete?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    connect?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    update?: ProductHistoryEventUpdateWithWhereUniqueWithoutProductInput | ProductHistoryEventUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductHistoryEventUpdateManyWithWhereWithoutProductInput | ProductHistoryEventUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductHistoryEventScalarWhereInput | ProductHistoryEventScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ListingCreateWithoutProductInput, ListingUncheckedCreateWithoutProductInput> | ListingCreateWithoutProductInput[] | ListingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutProductInput | ListingCreateOrConnectWithoutProductInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutProductInput | ListingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ListingCreateManyProductInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutProductInput | ListingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutProductInput | ListingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type AiAnalysisUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<AiAnalysisCreateWithoutProductInput, AiAnalysisUncheckedCreateWithoutProductInput> | AiAnalysisCreateWithoutProductInput[] | AiAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiAnalysisCreateOrConnectWithoutProductInput | AiAnalysisCreateOrConnectWithoutProductInput[]
    upsert?: AiAnalysisUpsertWithWhereUniqueWithoutProductInput | AiAnalysisUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AiAnalysisCreateManyProductInputEnvelope
    set?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    disconnect?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    delete?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    connect?: AiAnalysisWhereUniqueInput | AiAnalysisWhereUniqueInput[]
    update?: AiAnalysisUpdateWithWhereUniqueWithoutProductInput | AiAnalysisUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AiAnalysisUpdateManyWithWhereWithoutProductInput | AiAnalysisUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AiAnalysisScalarWhereInput | AiAnalysisScalarWhereInput[]
  }

  export type ProductHistoryEventUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductHistoryEventCreateWithoutProductInput, ProductHistoryEventUncheckedCreateWithoutProductInput> | ProductHistoryEventCreateWithoutProductInput[] | ProductHistoryEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryEventCreateOrConnectWithoutProductInput | ProductHistoryEventCreateOrConnectWithoutProductInput[]
    upsert?: ProductHistoryEventUpsertWithWhereUniqueWithoutProductInput | ProductHistoryEventUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductHistoryEventCreateManyProductInputEnvelope
    set?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    disconnect?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    delete?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    connect?: ProductHistoryEventWhereUniqueInput | ProductHistoryEventWhereUniqueInput[]
    update?: ProductHistoryEventUpdateWithWhereUniqueWithoutProductInput | ProductHistoryEventUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductHistoryEventUpdateManyWithWhereWithoutProductInput | ProductHistoryEventUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductHistoryEventScalarWhereInput | ProductHistoryEventScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductCreateNestedOneWithoutListingsInput = {
    create?: XOR<ProductCreateWithoutListingsInput, ProductUncheckedCreateWithoutListingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutListingsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type ProductUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<ProductCreateWithoutListingsInput, ProductUncheckedCreateWithoutListingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutListingsInput
    upsert?: ProductUpsertWithoutListingsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutListingsInput, ProductUpdateWithoutListingsInput>, ProductUncheckedUpdateWithoutListingsInput>
  }

  export type ProductCreateNestedOneWithoutAiAnalysesInput = {
    create?: XOR<ProductCreateWithoutAiAnalysesInput, ProductUncheckedCreateWithoutAiAnalysesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAiAnalysesInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutAiAnalysesNestedInput = {
    create?: XOR<ProductCreateWithoutAiAnalysesInput, ProductUncheckedCreateWithoutAiAnalysesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAiAnalysesInput
    upsert?: ProductUpsertWithoutAiAnalysesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAiAnalysesInput, ProductUpdateWithoutAiAnalysesInput>, ProductUncheckedUpdateWithoutAiAnalysesInput>
  }

  export type EnumPublicationResultFieldUpdateOperationsInput = {
    set?: $Enums.PublicationResult
  }

  export type ProductCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ProductCreateWithoutTemplateInput, ProductUncheckedCreateWithoutTemplateInput> | ProductCreateWithoutTemplateInput[] | ProductUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTemplateInput | ProductCreateOrConnectWithoutTemplateInput[]
    createMany?: ProductCreateManyTemplateInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ProductCreateWithoutTemplateInput, ProductUncheckedCreateWithoutTemplateInput> | ProductCreateWithoutTemplateInput[] | ProductUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTemplateInput | ProductCreateOrConnectWithoutTemplateInput[]
    createMany?: ProductCreateManyTemplateInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ProductCreateWithoutTemplateInput, ProductUncheckedCreateWithoutTemplateInput> | ProductCreateWithoutTemplateInput[] | ProductUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTemplateInput | ProductCreateOrConnectWithoutTemplateInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTemplateInput | ProductUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ProductCreateManyTemplateInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTemplateInput | ProductUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTemplateInput | ProductUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ProductCreateWithoutTemplateInput, ProductUncheckedCreateWithoutTemplateInput> | ProductCreateWithoutTemplateInput[] | ProductUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTemplateInput | ProductCreateOrConnectWithoutTemplateInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTemplateInput | ProductUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ProductCreateManyTemplateInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTemplateInput | ProductUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTemplateInput | ProductUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutHistoryEventsInput = {
    create?: XOR<ProductCreateWithoutHistoryEventsInput, ProductUncheckedCreateWithoutHistoryEventsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutHistoryEventsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutHistoryEventsNestedInput = {
    create?: XOR<ProductCreateWithoutHistoryEventsInput, ProductUncheckedCreateWithoutHistoryEventsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutHistoryEventsInput
    upsert?: ProductUpsertWithoutHistoryEventsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutHistoryEventsInput, ProductUpdateWithoutHistoryEventsInput>, ProductUncheckedUpdateWithoutHistoryEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumPublicationResultFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationResult | EnumPublicationResultFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationResultFilter<$PrismaModel> | $Enums.PublicationResult
  }

  export type NestedEnumPublicationResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationResult | EnumPublicationResultFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationResult[] | ListEnumPublicationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationResultWithAggregatesFilter<$PrismaModel> | $Enums.PublicationResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationResultFilter<$PrismaModel>
    _max?: NestedEnumPublicationResultFilter<$PrismaModel>
  }

  export type ProductTemplateCreateWithoutProductsInput = {
    id?: string
    brand: string
    model: string
    category: string
    defaultAttributes: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: string | null
    priceRangeMin?: Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: Decimal | DecimalJsLike | number | string | null
    timesUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTemplateUncheckedCreateWithoutProductsInput = {
    id?: string
    brand: string
    model: string
    category: string
    defaultAttributes: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: string | null
    priceRangeMin?: Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: Decimal | DecimalJsLike | number | string | null
    timesUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTemplateCreateOrConnectWithoutProductsInput = {
    where: ProductTemplateWhereUniqueInput
    create: XOR<ProductTemplateCreateWithoutProductsInput, ProductTemplateUncheckedCreateWithoutProductsInput>
  }

  export type ProductImageCreateWithoutProductInput = {
    id?: string
    imageUrl: string
    isCover?: boolean
    order: number
    createdAt?: Date | string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: string
    imageUrl: string
    isCover?: boolean
    order: number
    createdAt?: Date | string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutProductInput = {
    id?: string
    platform: $Enums.Platform
    platformListingId?: string | null
    platformUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey: string
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUncheckedCreateWithoutProductInput = {
    id?: string
    platform: $Enums.Platform
    platformListingId?: string | null
    platformUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey: string
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingCreateOrConnectWithoutProductInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutProductInput, ListingUncheckedCreateWithoutProductInput>
  }

  export type ListingCreateManyProductInputEnvelope = {
    data: ListingCreateManyProductInput | ListingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type AiAnalysisCreateWithoutProductInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    aiModel: string
    createdAt?: Date | string
  }

  export type AiAnalysisUncheckedCreateWithoutProductInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    aiModel: string
    createdAt?: Date | string
  }

  export type AiAnalysisCreateOrConnectWithoutProductInput = {
    where: AiAnalysisWhereUniqueInput
    create: XOR<AiAnalysisCreateWithoutProductInput, AiAnalysisUncheckedCreateWithoutProductInput>
  }

  export type AiAnalysisCreateManyProductInputEnvelope = {
    data: AiAnalysisCreateManyProductInput | AiAnalysisCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductHistoryEventCreateWithoutProductInput = {
    id?: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductHistoryEventUncheckedCreateWithoutProductInput = {
    id?: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductHistoryEventCreateOrConnectWithoutProductInput = {
    where: ProductHistoryEventWhereUniqueInput
    create: XOR<ProductHistoryEventCreateWithoutProductInput, ProductHistoryEventUncheckedCreateWithoutProductInput>
  }

  export type ProductHistoryEventCreateManyProductInputEnvelope = {
    data: ProductHistoryEventCreateManyProductInput | ProductHistoryEventCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductTemplateUpsertWithoutProductsInput = {
    update: XOR<ProductTemplateUpdateWithoutProductsInput, ProductTemplateUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductTemplateCreateWithoutProductsInput, ProductTemplateUncheckedCreateWithoutProductsInput>
    where?: ProductTemplateWhereInput
  }

  export type ProductTemplateUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductTemplateWhereInput
    data: XOR<ProductTemplateUpdateWithoutProductsInput, ProductTemplateUncheckedUpdateWithoutProductsInput>
  }

  export type ProductTemplateUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    defaultAttributes?: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: NullableStringFieldUpdateOperationsInput | string | null
    priceRangeMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTemplateUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    defaultAttributes?: JsonNullValueInput | InputJsonValue
    subitoAttributes?: NullableJsonNullValueInput | InputJsonValue
    vintedAttributes?: NullableJsonNullValueInput | InputJsonValue
    descriptionPattern?: NullableStringFieldUpdateOperationsInput | string | null
    priceRangeMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceRangeMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    imageUrl?: StringFilter<"ProductImage"> | string
    isCover?: BoolFilter<"ProductImage"> | boolean
    order?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
  }

  export type ListingUpsertWithWhereUniqueWithoutProductInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutProductInput, ListingUncheckedUpdateWithoutProductInput>
    create: XOR<ListingCreateWithoutProductInput, ListingUncheckedCreateWithoutProductInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutProductInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutProductInput, ListingUncheckedUpdateWithoutProductInput>
  }

  export type ListingUpdateManyWithWhereWithoutProductInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutProductInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    productId?: StringFilter<"Listing"> | string
    platform?: EnumPlatformFilter<"Listing"> | $Enums.Platform
    platformListingId?: StringNullableFilter<"Listing"> | string | null
    platformUrl?: StringNullableFilter<"Listing"> | string | null
    price?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    payload?: JsonNullableFilter<"Listing">
    idempotencyKey?: StringFilter<"Listing"> | string
    lastError?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type AiAnalysisUpsertWithWhereUniqueWithoutProductInput = {
    where: AiAnalysisWhereUniqueInput
    update: XOR<AiAnalysisUpdateWithoutProductInput, AiAnalysisUncheckedUpdateWithoutProductInput>
    create: XOR<AiAnalysisCreateWithoutProductInput, AiAnalysisUncheckedCreateWithoutProductInput>
  }

  export type AiAnalysisUpdateWithWhereUniqueWithoutProductInput = {
    where: AiAnalysisWhereUniqueInput
    data: XOR<AiAnalysisUpdateWithoutProductInput, AiAnalysisUncheckedUpdateWithoutProductInput>
  }

  export type AiAnalysisUpdateManyWithWhereWithoutProductInput = {
    where: AiAnalysisScalarWhereInput
    data: XOR<AiAnalysisUpdateManyMutationInput, AiAnalysisUncheckedUpdateManyWithoutProductInput>
  }

  export type AiAnalysisScalarWhereInput = {
    AND?: AiAnalysisScalarWhereInput | AiAnalysisScalarWhereInput[]
    OR?: AiAnalysisScalarWhereInput[]
    NOT?: AiAnalysisScalarWhereInput | AiAnalysisScalarWhereInput[]
    id?: StringFilter<"AiAnalysis"> | string
    productId?: StringFilter<"AiAnalysis"> | string
    result?: JsonFilter<"AiAnalysis">
    confidence?: FloatNullableFilter<"AiAnalysis"> | number | null
    aiModel?: StringFilter<"AiAnalysis"> | string
    createdAt?: DateTimeFilter<"AiAnalysis"> | Date | string
  }

  export type ProductHistoryEventUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductHistoryEventWhereUniqueInput
    update: XOR<ProductHistoryEventUpdateWithoutProductInput, ProductHistoryEventUncheckedUpdateWithoutProductInput>
    create: XOR<ProductHistoryEventCreateWithoutProductInput, ProductHistoryEventUncheckedCreateWithoutProductInput>
  }

  export type ProductHistoryEventUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductHistoryEventWhereUniqueInput
    data: XOR<ProductHistoryEventUpdateWithoutProductInput, ProductHistoryEventUncheckedUpdateWithoutProductInput>
  }

  export type ProductHistoryEventUpdateManyWithWhereWithoutProductInput = {
    where: ProductHistoryEventScalarWhereInput
    data: XOR<ProductHistoryEventUpdateManyMutationInput, ProductHistoryEventUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductHistoryEventScalarWhereInput = {
    AND?: ProductHistoryEventScalarWhereInput | ProductHistoryEventScalarWhereInput[]
    OR?: ProductHistoryEventScalarWhereInput[]
    NOT?: ProductHistoryEventScalarWhereInput | ProductHistoryEventScalarWhereInput[]
    id?: StringFilter<"ProductHistoryEvent"> | string
    productId?: StringFilter<"ProductHistoryEvent"> | string
    eventType?: StringFilter<"ProductHistoryEvent"> | string
    metadata?: JsonNullableFilter<"ProductHistoryEvent">
    createdAt?: DateTimeFilter<"ProductHistoryEvent"> | Date | string
  }

  export type ProductCreateWithoutImagesInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: ProductTemplateCreateNestedOneWithoutProductsInput
    listings?: ListingCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisUncheckedCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: ProductTemplateUpdateOneWithoutProductsNestedInput
    listings?: ListingUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUncheckedUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutListingsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: ProductTemplateCreateNestedOneWithoutProductsInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutListingsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisUncheckedCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutListingsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutListingsInput, ProductUncheckedCreateWithoutListingsInput>
  }

  export type ProductUpsertWithoutListingsInput = {
    update: XOR<ProductUpdateWithoutListingsInput, ProductUncheckedUpdateWithoutListingsInput>
    create: XOR<ProductCreateWithoutListingsInput, ProductUncheckedCreateWithoutListingsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutListingsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutListingsInput, ProductUncheckedUpdateWithoutListingsInput>
  }

  export type ProductUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: ProductTemplateUpdateOneWithoutProductsNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUncheckedUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutAiAnalysesInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: ProductTemplateCreateNestedOneWithoutProductsInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    listings?: ListingCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAiAnalysesInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    listings?: ListingUncheckedCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAiAnalysesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAiAnalysesInput, ProductUncheckedCreateWithoutAiAnalysesInput>
  }

  export type ProductUpsertWithoutAiAnalysesInput = {
    update: XOR<ProductUpdateWithoutAiAnalysesInput, ProductUncheckedUpdateWithoutAiAnalysesInput>
    create: XOR<ProductCreateWithoutAiAnalysesInput, ProductUncheckedCreateWithoutAiAnalysesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAiAnalysesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAiAnalysesInput, ProductUncheckedUpdateWithoutAiAnalysesInput>
  }

  export type ProductUpdateWithoutAiAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: ProductTemplateUpdateOneWithoutProductsNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    listings?: ListingUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAiAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    listings?: ListingUncheckedUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutTemplateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
    listings?: ListingCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTemplateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    listings?: ListingUncheckedCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisUncheckedCreateNestedManyWithoutProductInput
    historyEvents?: ProductHistoryEventUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTemplateInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTemplateInput, ProductUncheckedCreateWithoutTemplateInput>
  }

  export type ProductCreateManyTemplateInputEnvelope = {
    data: ProductCreateManyTemplateInput | ProductCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutTemplateInput, ProductUncheckedUpdateWithoutTemplateInput>
    create: XOR<ProductCreateWithoutTemplateInput, ProductUncheckedCreateWithoutTemplateInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutTemplateInput, ProductUncheckedUpdateWithoutTemplateInput>
  }

  export type ProductUpdateManyWithWhereWithoutTemplateInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutTemplateInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    subcategory?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    model?: StringNullableFilter<"Product"> | string | null
    variant?: StringNullableFilter<"Product"> | string | null
    color?: StringNullableFilter<"Product"> | string | null
    condition?: StringNullableFilter<"Product"> | string | null
    purchaseCost?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    salePrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    templateId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductCreateWithoutHistoryEventsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: ProductTemplateCreateNestedOneWithoutProductsInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    listings?: ListingCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutHistoryEventsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    listings?: ListingUncheckedCreateNestedManyWithoutProductInput
    aiAnalyses?: AiAnalysisUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutHistoryEventsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutHistoryEventsInput, ProductUncheckedCreateWithoutHistoryEventsInput>
  }

  export type ProductUpsertWithoutHistoryEventsInput = {
    update: XOR<ProductUpdateWithoutHistoryEventsInput, ProductUncheckedUpdateWithoutHistoryEventsInput>
    create: XOR<ProductCreateWithoutHistoryEventsInput, ProductUncheckedCreateWithoutHistoryEventsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutHistoryEventsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutHistoryEventsInput, ProductUncheckedUpdateWithoutHistoryEventsInput>
  }

  export type ProductUpdateWithoutHistoryEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: ProductTemplateUpdateOneWithoutProductsNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    listings?: ListingUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutHistoryEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    listings?: ListingUncheckedUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductImageCreateManyProductInput = {
    id?: string
    imageUrl: string
    isCover?: boolean
    order: number
    createdAt?: Date | string
  }

  export type ListingCreateManyProductInput = {
    id?: string
    platform: $Enums.Platform
    platformListingId?: string | null
    platformUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey: string
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiAnalysisCreateManyProductInput = {
    id?: string
    result: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    aiModel: string
    createdAt?: Date | string
  }

  export type ProductHistoryEventCreateManyProductInput = {
    id?: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformListingId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformListingId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformListingId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAnalysisUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAnalysisUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiAnalysisUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryEventUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryEventUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryEventUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyTemplateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    subcategory?: string | null
    brand?: string | null
    model?: string | null
    variant?: string | null
    color?: string | null
    condition?: string | null
    purchaseCost?: Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    salePrice?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
    listings?: ListingUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    listings?: ListingUncheckedUpdateManyWithoutProductNestedInput
    aiAnalyses?: AiAnalysisUncheckedUpdateManyWithoutProductNestedInput
    historyEvents?: ProductHistoryEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    salePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductTemplateCountOutputTypeDefaultArgs instead
     */
    export type ProductTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductImageDefaultArgs instead
     */
    export type ProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListingDefaultArgs instead
     */
    export type ListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiAnalysisDefaultArgs instead
     */
    export type AiAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiAnalysisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicationLogDefaultArgs instead
     */
    export type PublicationLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicationLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductTemplateDefaultArgs instead
     */
    export type ProductTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductHistoryEventDefaultArgs instead
     */
    export type ProductHistoryEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductHistoryEventDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}