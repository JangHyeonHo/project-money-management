
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
 * Model household
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type household = $Result.DefaultSelection<Prisma.$householdPayload>
/**
 * Model household_categories
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type household_categories = $Result.DefaultSelection<Prisma.$household_categoriesPayload>
/**
 * Model asset
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type asset = $Result.DefaultSelection<Prisma.$assetPayload>
/**
 * Model user
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Households
 * const households = await prisma.household.findMany()
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
   * // Fetch zero or more Households
   * const households = await prisma.household.findMany()
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
   * `prisma.household`: Exposes CRUD operations for the **household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.householdDelegate<ExtArgs>;

  /**
   * `prisma.household_categories`: Exposes CRUD operations for the **household_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Household_categories
    * const household_categories = await prisma.household_categories.findMany()
    * ```
    */
  get household_categories(): Prisma.household_categoriesDelegate<ExtArgs>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.assetDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;
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
    household: 'household',
    household_categories: 'household_categories',
    asset: 'asset',
    user: 'user'
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
      modelProps: "household" | "household_categories" | "asset" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      household: {
        payload: Prisma.$householdPayload<ExtArgs>
        fields: Prisma.householdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.householdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.householdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>
          }
          findFirst: {
            args: Prisma.householdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.householdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>
          }
          findMany: {
            args: Prisma.householdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>[]
          }
          create: {
            args: Prisma.householdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>
          }
          createMany: {
            args: Prisma.householdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.householdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>[]
          }
          delete: {
            args: Prisma.householdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>
          }
          update: {
            args: Prisma.householdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>
          }
          deleteMany: {
            args: Prisma.householdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.householdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.householdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$householdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.householdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.householdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      household_categories: {
        payload: Prisma.$household_categoriesPayload<ExtArgs>
        fields: Prisma.household_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.household_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.household_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>
          }
          findFirst: {
            args: Prisma.household_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.household_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>
          }
          findMany: {
            args: Prisma.household_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>[]
          }
          create: {
            args: Prisma.household_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>
          }
          createMany: {
            args: Prisma.household_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.household_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>[]
          }
          delete: {
            args: Prisma.household_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>
          }
          update: {
            args: Prisma.household_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.household_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.household_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.household_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$household_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Household_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold_categories>
          }
          groupBy: {
            args: Prisma.household_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Household_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.household_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Household_categoriesCountAggregateOutputType> | number
          }
        }
      }
      asset: {
        payload: Prisma.$assetPayload<ExtArgs>
        fields: Prisma.assetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>
          }
          findFirst: {
            args: Prisma.assetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>
          }
          findMany: {
            args: Prisma.assetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>[]
          }
          create: {
            args: Prisma.assetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>
          }
          createMany: {
            args: Prisma.assetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.assetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>[]
          }
          delete: {
            args: Prisma.assetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>
          }
          update: {
            args: Prisma.assetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>
          }
          deleteMany: {
            args: Prisma.assetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.assetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.assetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.assetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
   * Count Type Household_categoriesCountOutputType
   */

  export type Household_categoriesCountOutputType = {
    household: number
  }

  export type Household_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | Household_categoriesCountOutputTypeCountHouseholdArgs
  }

  // Custom InputTypes
  /**
   * Household_categoriesCountOutputType without action
   */
  export type Household_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household_categoriesCountOutputType
     */
    select?: Household_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Household_categoriesCountOutputType without action
   */
  export type Household_categoriesCountOutputTypeCountHouseholdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: householdWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    household: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | AssetCountOutputTypeCountHouseholdArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountHouseholdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: householdWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    asset: number
    household: number
    household_categories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | UserCountOutputTypeCountAssetArgs
    household?: boolean | UserCountOutputTypeCountHouseholdArgs
    household_categories?: boolean | UserCountOutputTypeCountHousehold_categoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHouseholdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: householdWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHousehold_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: household_categoriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _avg: HouseholdAvgAggregateOutputType | null
    _sum: HouseholdSumAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdAvgAggregateOutputType = {
    household_amount: number | null
    household_category: number | null
  }

  export type HouseholdSumAggregateOutputType = {
    household_amount: number | null
    household_category: number | null
  }

  export type HouseholdMinAggregateOutputType = {
    id: string | null
    issue_date: Date | null
    asset_id: string | null
    user_id: string | null
    household_type: string | null
    household_amount: number | null
    household_comment: string | null
    image_path: string | null
    image_text: string | null
    created_at: Date | null
    updated_at: Date | null
    household_category: number | null
    household_category_userid: string | null
    household_name: string | null
  }

  export type HouseholdMaxAggregateOutputType = {
    id: string | null
    issue_date: Date | null
    asset_id: string | null
    user_id: string | null
    household_type: string | null
    household_amount: number | null
    household_comment: string | null
    image_path: string | null
    image_text: string | null
    created_at: Date | null
    updated_at: Date | null
    household_category: number | null
    household_category_userid: string | null
    household_name: string | null
  }

  export type HouseholdCountAggregateOutputType = {
    id: number
    issue_date: number
    asset_id: number
    user_id: number
    household_type: number
    household_amount: number
    household_comment: number
    image_path: number
    image_text: number
    created_at: number
    updated_at: number
    household_category: number
    household_category_userid: number
    household_name: number
    _all: number
  }


  export type HouseholdAvgAggregateInputType = {
    household_amount?: true
    household_category?: true
  }

  export type HouseholdSumAggregateInputType = {
    household_amount?: true
    household_category?: true
  }

  export type HouseholdMinAggregateInputType = {
    id?: true
    issue_date?: true
    asset_id?: true
    user_id?: true
    household_type?: true
    household_amount?: true
    household_comment?: true
    image_path?: true
    image_text?: true
    created_at?: true
    updated_at?: true
    household_category?: true
    household_category_userid?: true
    household_name?: true
  }

  export type HouseholdMaxAggregateInputType = {
    id?: true
    issue_date?: true
    asset_id?: true
    user_id?: true
    household_type?: true
    household_amount?: true
    household_comment?: true
    image_path?: true
    image_text?: true
    created_at?: true
    updated_at?: true
    household_category?: true
    household_category_userid?: true
    household_name?: true
  }

  export type HouseholdCountAggregateInputType = {
    id?: true
    issue_date?: true
    asset_id?: true
    user_id?: true
    household_type?: true
    household_amount?: true
    household_comment?: true
    image_path?: true
    image_text?: true
    created_at?: true
    updated_at?: true
    household_category?: true
    household_category_userid?: true
    household_name?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which household to aggregate.
     */
    where?: householdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of households to fetch.
     */
    orderBy?: householdOrderByWithRelationInput | householdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: householdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseholdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseholdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type householdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: householdWhereInput
    orderBy?: householdOrderByWithAggregationInput | householdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: householdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _avg?: HouseholdAvgAggregateInputType
    _sum?: HouseholdSumAggregateInputType
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    id: string
    issue_date: Date
    asset_id: string
    user_id: string
    household_type: string
    household_amount: number
    household_comment: string | null
    image_path: string | null
    image_text: string | null
    created_at: Date
    updated_at: Date | null
    household_category: number | null
    household_category_userid: string | null
    household_name: string | null
    _count: HouseholdCountAggregateOutputType | null
    _avg: HouseholdAvgAggregateOutputType | null
    _sum: HouseholdSumAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends householdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type householdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issue_date?: boolean
    asset_id?: boolean
    user_id?: boolean
    household_type?: boolean
    household_amount?: boolean
    household_comment?: boolean
    image_path?: boolean
    image_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    household_category?: boolean
    household_category_userid?: boolean
    household_name?: boolean
    Asset?: boolean | assetDefaultArgs<ExtArgs>
    household_categories?: boolean | household$household_categoriesArgs<ExtArgs>
    User?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type householdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issue_date?: boolean
    asset_id?: boolean
    user_id?: boolean
    household_type?: boolean
    household_amount?: boolean
    household_comment?: boolean
    image_path?: boolean
    image_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    household_category?: boolean
    household_category_userid?: boolean
    household_name?: boolean
    Asset?: boolean | assetDefaultArgs<ExtArgs>
    household_categories?: boolean | household$household_categoriesArgs<ExtArgs>
    User?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type householdSelectScalar = {
    id?: boolean
    issue_date?: boolean
    asset_id?: boolean
    user_id?: boolean
    household_type?: boolean
    household_amount?: boolean
    household_comment?: boolean
    image_path?: boolean
    image_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    household_category?: boolean
    household_category_userid?: boolean
    household_name?: boolean
  }

  export type householdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asset?: boolean | assetDefaultArgs<ExtArgs>
    household_categories?: boolean | household$household_categoriesArgs<ExtArgs>
    User?: boolean | userDefaultArgs<ExtArgs>
  }
  export type householdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asset?: boolean | assetDefaultArgs<ExtArgs>
    household_categories?: boolean | household$household_categoriesArgs<ExtArgs>
    User?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $householdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "household"
    objects: {
      Asset: Prisma.$assetPayload<ExtArgs>
      household_categories: Prisma.$household_categoriesPayload<ExtArgs> | null
      User: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      issue_date: Date
      asset_id: string
      user_id: string
      household_type: string
      household_amount: number
      household_comment: string | null
      image_path: string | null
      image_text: string | null
      created_at: Date
      updated_at: Date | null
      household_category: number | null
      household_category_userid: string | null
      household_name: string | null
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type householdGetPayload<S extends boolean | null | undefined | householdDefaultArgs> = $Result.GetResult<Prisma.$householdPayload, S>

  type householdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<householdFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface householdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['household'], meta: { name: 'household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {householdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends householdFindUniqueArgs>(args: SelectSubset<T, householdFindUniqueArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {householdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends householdFindUniqueOrThrowArgs>(args: SelectSubset<T, householdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {householdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends householdFindFirstArgs>(args?: SelectSubset<T, householdFindFirstArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {householdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends householdFindFirstOrThrowArgs>(args?: SelectSubset<T, householdFindFirstOrThrowArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {householdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdWithIdOnly = await prisma.household.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends householdFindManyArgs>(args?: SelectSubset<T, householdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Household.
     * @param {householdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends householdCreateArgs>(args: SelectSubset<T, householdCreateArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Households.
     * @param {householdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends householdCreateManyArgs>(args?: SelectSubset<T, householdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Households and returns the data saved in the database.
     * @param {householdCreateManyAndReturnArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends householdCreateManyAndReturnArgs>(args?: SelectSubset<T, householdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Household.
     * @param {householdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends householdDeleteArgs>(args: SelectSubset<T, householdDeleteArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Household.
     * @param {householdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends householdUpdateArgs>(args: SelectSubset<T, householdUpdateArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Households.
     * @param {householdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends householdDeleteManyArgs>(args?: SelectSubset<T, householdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {householdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends householdUpdateManyArgs>(args: SelectSubset<T, householdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Household.
     * @param {householdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends householdUpsertArgs>(args: SelectSubset<T, householdUpsertArgs<ExtArgs>>): Prisma__householdClient<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {householdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends householdCountArgs>(
      args?: Subset<T, householdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {householdGroupByArgs} args - Group by arguments.
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
      T extends householdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: householdGroupByArgs['orderBy'] }
        : { orderBy?: householdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, householdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the household model
   */
  readonly fields: householdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__householdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Asset<T extends assetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, assetDefaultArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    household_categories<T extends household$household_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, household$household_categoriesArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    User<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the household model
   */ 
  interface householdFieldRefs {
    readonly id: FieldRef<"household", 'String'>
    readonly issue_date: FieldRef<"household", 'DateTime'>
    readonly asset_id: FieldRef<"household", 'String'>
    readonly user_id: FieldRef<"household", 'String'>
    readonly household_type: FieldRef<"household", 'String'>
    readonly household_amount: FieldRef<"household", 'Float'>
    readonly household_comment: FieldRef<"household", 'String'>
    readonly image_path: FieldRef<"household", 'String'>
    readonly image_text: FieldRef<"household", 'String'>
    readonly created_at: FieldRef<"household", 'DateTime'>
    readonly updated_at: FieldRef<"household", 'DateTime'>
    readonly household_category: FieldRef<"household", 'Int'>
    readonly household_category_userid: FieldRef<"household", 'String'>
    readonly household_name: FieldRef<"household", 'String'>
  }
    

  // Custom InputTypes
  /**
   * household findUnique
   */
  export type householdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * Filter, which household to fetch.
     */
    where: householdWhereUniqueInput
  }

  /**
   * household findUniqueOrThrow
   */
  export type householdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * Filter, which household to fetch.
     */
    where: householdWhereUniqueInput
  }

  /**
   * household findFirst
   */
  export type householdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * Filter, which household to fetch.
     */
    where?: householdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of households to fetch.
     */
    orderBy?: householdOrderByWithRelationInput | householdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for households.
     */
    cursor?: householdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * household findFirstOrThrow
   */
  export type householdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * Filter, which household to fetch.
     */
    where?: householdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of households to fetch.
     */
    orderBy?: householdOrderByWithRelationInput | householdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for households.
     */
    cursor?: householdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * household findMany
   */
  export type householdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * Filter, which households to fetch.
     */
    where?: householdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of households to fetch.
     */
    orderBy?: householdOrderByWithRelationInput | householdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing households.
     */
    cursor?: householdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * household create
   */
  export type householdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * The data needed to create a household.
     */
    data: XOR<householdCreateInput, householdUncheckedCreateInput>
  }

  /**
   * household createMany
   */
  export type householdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many households.
     */
    data: householdCreateManyInput | householdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * household createManyAndReturn
   */
  export type householdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many households.
     */
    data: householdCreateManyInput | householdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * household update
   */
  export type householdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * The data needed to update a household.
     */
    data: XOR<householdUpdateInput, householdUncheckedUpdateInput>
    /**
     * Choose, which household to update.
     */
    where: householdWhereUniqueInput
  }

  /**
   * household updateMany
   */
  export type householdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update households.
     */
    data: XOR<householdUpdateManyMutationInput, householdUncheckedUpdateManyInput>
    /**
     * Filter which households to update
     */
    where?: householdWhereInput
  }

  /**
   * household upsert
   */
  export type householdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * The filter to search for the household to update in case it exists.
     */
    where: householdWhereUniqueInput
    /**
     * In case the household found by the `where` argument doesn't exist, create a new household with this data.
     */
    create: XOR<householdCreateInput, householdUncheckedCreateInput>
    /**
     * In case the household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<householdUpdateInput, householdUncheckedUpdateInput>
  }

  /**
   * household delete
   */
  export type householdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    /**
     * Filter which household to delete.
     */
    where: householdWhereUniqueInput
  }

  /**
   * household deleteMany
   */
  export type householdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which households to delete
     */
    where?: householdWhereInput
  }

  /**
   * household.household_categories
   */
  export type household$household_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    where?: household_categoriesWhereInput
  }

  /**
   * household without action
   */
  export type householdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
  }


  /**
   * Model household_categories
   */

  export type AggregateHousehold_categories = {
    _count: Household_categoriesCountAggregateOutputType | null
    _avg: Household_categoriesAvgAggregateOutputType | null
    _sum: Household_categoriesSumAggregateOutputType | null
    _min: Household_categoriesMinAggregateOutputType | null
    _max: Household_categoriesMaxAggregateOutputType | null
  }

  export type Household_categoriesAvgAggregateOutputType = {
    id: number | null
    parent_category_id: number | null
  }

  export type Household_categoriesSumAggregateOutputType = {
    id: number | null
    parent_category_id: number | null
  }

  export type Household_categoriesMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    category_name: string | null
    parent_category_id: number | null
    category_comment: string | null
    created_at: Date | null
    update_at: Date | null
    household_type: string | null
  }

  export type Household_categoriesMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    category_name: string | null
    parent_category_id: number | null
    category_comment: string | null
    created_at: Date | null
    update_at: Date | null
    household_type: string | null
  }

  export type Household_categoriesCountAggregateOutputType = {
    id: number
    user_id: number
    category_name: number
    parent_category_id: number
    category_comment: number
    created_at: number
    update_at: number
    household_type: number
    _all: number
  }


  export type Household_categoriesAvgAggregateInputType = {
    id?: true
    parent_category_id?: true
  }

  export type Household_categoriesSumAggregateInputType = {
    id?: true
    parent_category_id?: true
  }

  export type Household_categoriesMinAggregateInputType = {
    id?: true
    user_id?: true
    category_name?: true
    parent_category_id?: true
    category_comment?: true
    created_at?: true
    update_at?: true
    household_type?: true
  }

  export type Household_categoriesMaxAggregateInputType = {
    id?: true
    user_id?: true
    category_name?: true
    parent_category_id?: true
    category_comment?: true
    created_at?: true
    update_at?: true
    household_type?: true
  }

  export type Household_categoriesCountAggregateInputType = {
    id?: true
    user_id?: true
    category_name?: true
    parent_category_id?: true
    category_comment?: true
    created_at?: true
    update_at?: true
    household_type?: true
    _all?: true
  }

  export type Household_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which household_categories to aggregate.
     */
    where?: household_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of household_categories to fetch.
     */
    orderBy?: household_categoriesOrderByWithRelationInput | household_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: household_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` household_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` household_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned household_categories
    **/
    _count?: true | Household_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Household_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Household_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Household_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Household_categoriesMaxAggregateInputType
  }

  export type GetHousehold_categoriesAggregateType<T extends Household_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold_categories[P]>
      : GetScalarType<T[P], AggregateHousehold_categories[P]>
  }




  export type household_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: household_categoriesWhereInput
    orderBy?: household_categoriesOrderByWithAggregationInput | household_categoriesOrderByWithAggregationInput[]
    by: Household_categoriesScalarFieldEnum[] | Household_categoriesScalarFieldEnum
    having?: household_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Household_categoriesCountAggregateInputType | true
    _avg?: Household_categoriesAvgAggregateInputType
    _sum?: Household_categoriesSumAggregateInputType
    _min?: Household_categoriesMinAggregateInputType
    _max?: Household_categoriesMaxAggregateInputType
  }

  export type Household_categoriesGroupByOutputType = {
    id: number
    user_id: string
    category_name: string
    parent_category_id: number | null
    category_comment: string | null
    created_at: Date
    update_at: Date | null
    household_type: string
    _count: Household_categoriesCountAggregateOutputType | null
    _avg: Household_categoriesAvgAggregateOutputType | null
    _sum: Household_categoriesSumAggregateOutputType | null
    _min: Household_categoriesMinAggregateOutputType | null
    _max: Household_categoriesMaxAggregateOutputType | null
  }

  type GetHousehold_categoriesGroupByPayload<T extends household_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Household_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Household_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Household_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Household_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type household_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    category_name?: boolean
    parent_category_id?: boolean
    category_comment?: boolean
    created_at?: boolean
    update_at?: boolean
    household_type?: boolean
    household?: boolean | household_categories$householdArgs<ExtArgs>
    User?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | Household_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household_categories"]>

  export type household_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    category_name?: boolean
    parent_category_id?: boolean
    category_comment?: boolean
    created_at?: boolean
    update_at?: boolean
    household_type?: boolean
    User?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household_categories"]>

  export type household_categoriesSelectScalar = {
    id?: boolean
    user_id?: boolean
    category_name?: boolean
    parent_category_id?: boolean
    category_comment?: boolean
    created_at?: boolean
    update_at?: boolean
    household_type?: boolean
  }

  export type household_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | household_categories$householdArgs<ExtArgs>
    User?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | Household_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type household_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $household_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "household_categories"
    objects: {
      household: Prisma.$householdPayload<ExtArgs>[]
      User: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      category_name: string
      parent_category_id: number | null
      category_comment: string | null
      created_at: Date
      update_at: Date | null
      household_type: string
    }, ExtArgs["result"]["household_categories"]>
    composites: {}
  }

  type household_categoriesGetPayload<S extends boolean | null | undefined | household_categoriesDefaultArgs> = $Result.GetResult<Prisma.$household_categoriesPayload, S>

  type household_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<household_categoriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Household_categoriesCountAggregateInputType | true
    }

  export interface household_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['household_categories'], meta: { name: 'household_categories' } }
    /**
     * Find zero or one Household_categories that matches the filter.
     * @param {household_categoriesFindUniqueArgs} args - Arguments to find a Household_categories
     * @example
     * // Get one Household_categories
     * const household_categories = await prisma.household_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends household_categoriesFindUniqueArgs>(args: SelectSubset<T, household_categoriesFindUniqueArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Household_categories that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {household_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Household_categories
     * @example
     * // Get one Household_categories
     * const household_categories = await prisma.household_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends household_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, household_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Household_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {household_categoriesFindFirstArgs} args - Arguments to find a Household_categories
     * @example
     * // Get one Household_categories
     * const household_categories = await prisma.household_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends household_categoriesFindFirstArgs>(args?: SelectSubset<T, household_categoriesFindFirstArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Household_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {household_categoriesFindFirstOrThrowArgs} args - Arguments to find a Household_categories
     * @example
     * // Get one Household_categories
     * const household_categories = await prisma.household_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends household_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, household_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Household_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {household_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Household_categories
     * const household_categories = await prisma.household_categories.findMany()
     * 
     * // Get first 10 Household_categories
     * const household_categories = await prisma.household_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const household_categoriesWithIdOnly = await prisma.household_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends household_categoriesFindManyArgs>(args?: SelectSubset<T, household_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Household_categories.
     * @param {household_categoriesCreateArgs} args - Arguments to create a Household_categories.
     * @example
     * // Create one Household_categories
     * const Household_categories = await prisma.household_categories.create({
     *   data: {
     *     // ... data to create a Household_categories
     *   }
     * })
     * 
     */
    create<T extends household_categoriesCreateArgs>(args: SelectSubset<T, household_categoriesCreateArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Household_categories.
     * @param {household_categoriesCreateManyArgs} args - Arguments to create many Household_categories.
     * @example
     * // Create many Household_categories
     * const household_categories = await prisma.household_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends household_categoriesCreateManyArgs>(args?: SelectSubset<T, household_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Household_categories and returns the data saved in the database.
     * @param {household_categoriesCreateManyAndReturnArgs} args - Arguments to create many Household_categories.
     * @example
     * // Create many Household_categories
     * const household_categories = await prisma.household_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Household_categories and only return the `id`
     * const household_categoriesWithIdOnly = await prisma.household_categories.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends household_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, household_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Household_categories.
     * @param {household_categoriesDeleteArgs} args - Arguments to delete one Household_categories.
     * @example
     * // Delete one Household_categories
     * const Household_categories = await prisma.household_categories.delete({
     *   where: {
     *     // ... filter to delete one Household_categories
     *   }
     * })
     * 
     */
    delete<T extends household_categoriesDeleteArgs>(args: SelectSubset<T, household_categoriesDeleteArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Household_categories.
     * @param {household_categoriesUpdateArgs} args - Arguments to update one Household_categories.
     * @example
     * // Update one Household_categories
     * const household_categories = await prisma.household_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends household_categoriesUpdateArgs>(args: SelectSubset<T, household_categoriesUpdateArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Household_categories.
     * @param {household_categoriesDeleteManyArgs} args - Arguments to filter Household_categories to delete.
     * @example
     * // Delete a few Household_categories
     * const { count } = await prisma.household_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends household_categoriesDeleteManyArgs>(args?: SelectSubset<T, household_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Household_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {household_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Household_categories
     * const household_categories = await prisma.household_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends household_categoriesUpdateManyArgs>(args: SelectSubset<T, household_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Household_categories.
     * @param {household_categoriesUpsertArgs} args - Arguments to update or create a Household_categories.
     * @example
     * // Update or create a Household_categories
     * const household_categories = await prisma.household_categories.upsert({
     *   create: {
     *     // ... data to create a Household_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household_categories we want to update
     *   }
     * })
     */
    upsert<T extends household_categoriesUpsertArgs>(args: SelectSubset<T, household_categoriesUpsertArgs<ExtArgs>>): Prisma__household_categoriesClient<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Household_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {household_categoriesCountArgs} args - Arguments to filter Household_categories to count.
     * @example
     * // Count the number of Household_categories
     * const count = await prisma.household_categories.count({
     *   where: {
     *     // ... the filter for the Household_categories we want to count
     *   }
     * })
    **/
    count<T extends household_categoriesCountArgs>(
      args?: Subset<T, household_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Household_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Household_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Household_categoriesAggregateArgs>(args: Subset<T, Household_categoriesAggregateArgs>): Prisma.PrismaPromise<GetHousehold_categoriesAggregateType<T>>

    /**
     * Group by Household_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {household_categoriesGroupByArgs} args - Group by arguments.
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
      T extends household_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: household_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: household_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, household_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHousehold_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the household_categories model
   */
  readonly fields: household_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for household_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__household_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends household_categories$householdArgs<ExtArgs> = {}>(args?: Subset<T, household_categories$householdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the household_categories model
   */ 
  interface household_categoriesFieldRefs {
    readonly id: FieldRef<"household_categories", 'Int'>
    readonly user_id: FieldRef<"household_categories", 'String'>
    readonly category_name: FieldRef<"household_categories", 'String'>
    readonly parent_category_id: FieldRef<"household_categories", 'Int'>
    readonly category_comment: FieldRef<"household_categories", 'String'>
    readonly created_at: FieldRef<"household_categories", 'DateTime'>
    readonly update_at: FieldRef<"household_categories", 'DateTime'>
    readonly household_type: FieldRef<"household_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * household_categories findUnique
   */
  export type household_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which household_categories to fetch.
     */
    where: household_categoriesWhereUniqueInput
  }

  /**
   * household_categories findUniqueOrThrow
   */
  export type household_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which household_categories to fetch.
     */
    where: household_categoriesWhereUniqueInput
  }

  /**
   * household_categories findFirst
   */
  export type household_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which household_categories to fetch.
     */
    where?: household_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of household_categories to fetch.
     */
    orderBy?: household_categoriesOrderByWithRelationInput | household_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for household_categories.
     */
    cursor?: household_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` household_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` household_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of household_categories.
     */
    distinct?: Household_categoriesScalarFieldEnum | Household_categoriesScalarFieldEnum[]
  }

  /**
   * household_categories findFirstOrThrow
   */
  export type household_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which household_categories to fetch.
     */
    where?: household_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of household_categories to fetch.
     */
    orderBy?: household_categoriesOrderByWithRelationInput | household_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for household_categories.
     */
    cursor?: household_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` household_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` household_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of household_categories.
     */
    distinct?: Household_categoriesScalarFieldEnum | Household_categoriesScalarFieldEnum[]
  }

  /**
   * household_categories findMany
   */
  export type household_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which household_categories to fetch.
     */
    where?: household_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of household_categories to fetch.
     */
    orderBy?: household_categoriesOrderByWithRelationInput | household_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing household_categories.
     */
    cursor?: household_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` household_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` household_categories.
     */
    skip?: number
    distinct?: Household_categoriesScalarFieldEnum | Household_categoriesScalarFieldEnum[]
  }

  /**
   * household_categories create
   */
  export type household_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a household_categories.
     */
    data: XOR<household_categoriesCreateInput, household_categoriesUncheckedCreateInput>
  }

  /**
   * household_categories createMany
   */
  export type household_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many household_categories.
     */
    data: household_categoriesCreateManyInput | household_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * household_categories createManyAndReturn
   */
  export type household_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many household_categories.
     */
    data: household_categoriesCreateManyInput | household_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * household_categories update
   */
  export type household_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a household_categories.
     */
    data: XOR<household_categoriesUpdateInput, household_categoriesUncheckedUpdateInput>
    /**
     * Choose, which household_categories to update.
     */
    where: household_categoriesWhereUniqueInput
  }

  /**
   * household_categories updateMany
   */
  export type household_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update household_categories.
     */
    data: XOR<household_categoriesUpdateManyMutationInput, household_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which household_categories to update
     */
    where?: household_categoriesWhereInput
  }

  /**
   * household_categories upsert
   */
  export type household_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the household_categories to update in case it exists.
     */
    where: household_categoriesWhereUniqueInput
    /**
     * In case the household_categories found by the `where` argument doesn't exist, create a new household_categories with this data.
     */
    create: XOR<household_categoriesCreateInput, household_categoriesUncheckedCreateInput>
    /**
     * In case the household_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<household_categoriesUpdateInput, household_categoriesUncheckedUpdateInput>
  }

  /**
   * household_categories delete
   */
  export type household_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    /**
     * Filter which household_categories to delete.
     */
    where: household_categoriesWhereUniqueInput
  }

  /**
   * household_categories deleteMany
   */
  export type household_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which household_categories to delete
     */
    where?: household_categoriesWhereInput
  }

  /**
   * household_categories.household
   */
  export type household_categories$householdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    where?: householdWhereInput
    orderBy?: householdOrderByWithRelationInput | householdOrderByWithRelationInput[]
    cursor?: householdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * household_categories without action
   */
  export type household_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    asset_money: number | null
  }

  export type AssetSumAggregateOutputType = {
    asset_money: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    asset_type: string | null
    asset_name: string | null
    asset_money: number | null
    asset_currency: string | null
    asset_comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    asset_type: string | null
    asset_name: string | null
    asset_money: number | null
    asset_currency: string | null
    asset_comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    user_id: number
    asset_type: number
    asset_name: number
    asset_money: number
    asset_currency: number
    asset_comment: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    asset_money?: true
  }

  export type AssetSumAggregateInputType = {
    asset_money?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    user_id?: true
    asset_type?: true
    asset_name?: true
    asset_money?: true
    asset_currency?: true
    asset_comment?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    user_id?: true
    asset_type?: true
    asset_name?: true
    asset_money?: true
    asset_currency?: true
    asset_comment?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    user_id?: true
    asset_type?: true
    asset_name?: true
    asset_money?: true
    asset_currency?: true
    asset_comment?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asset to aggregate.
     */
    where?: assetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetOrderByWithRelationInput | assetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type assetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assetWhereInput
    orderBy?: assetOrderByWithAggregationInput | assetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: assetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    user_id: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment: string | null
    created_at: Date
    updated_at: Date | null
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends assetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type assetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    asset_type?: boolean
    asset_name?: boolean
    asset_money?: boolean
    asset_currency?: boolean
    asset_comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    household?: boolean | asset$householdArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type assetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    asset_type?: boolean
    asset_name?: boolean
    asset_money?: boolean
    asset_currency?: boolean
    asset_comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type assetSelectScalar = {
    id?: boolean
    user_id?: boolean
    asset_type?: boolean
    asset_name?: boolean
    asset_money?: boolean
    asset_currency?: boolean
    asset_comment?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type assetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    household?: boolean | asset$householdArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type assetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $assetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asset"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      household: Prisma.$householdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      asset_type: string
      asset_name: string
      asset_money: number
      asset_currency: string
      asset_comment: string | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type assetGetPayload<S extends boolean | null | undefined | assetDefaultArgs> = $Result.GetResult<Prisma.$assetPayload, S>

  type assetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<assetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface assetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asset'], meta: { name: 'asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {assetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assetFindUniqueArgs>(args: SelectSubset<T, assetFindUniqueArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {assetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assetFindUniqueOrThrowArgs>(args: SelectSubset<T, assetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assetFindFirstArgs>(args?: SelectSubset<T, assetFindFirstArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assetFindFirstOrThrowArgs>(args?: SelectSubset<T, assetFindFirstOrThrowArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends assetFindManyArgs>(args?: SelectSubset<T, assetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asset.
     * @param {assetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends assetCreateArgs>(args: SelectSubset<T, assetCreateArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assets.
     * @param {assetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assetCreateManyArgs>(args?: SelectSubset<T, assetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {assetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends assetCreateManyAndReturnArgs>(args?: SelectSubset<T, assetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Asset.
     * @param {assetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends assetDeleteArgs>(args: SelectSubset<T, assetDeleteArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asset.
     * @param {assetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assetUpdateArgs>(args: SelectSubset<T, assetUpdateArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assets.
     * @param {assetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assetDeleteManyArgs>(args?: SelectSubset<T, assetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assetUpdateManyArgs>(args: SelectSubset<T, assetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {assetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends assetUpsertArgs>(args: SelectSubset<T, assetUpsertArgs<ExtArgs>>): Prisma__assetClient<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends assetCountArgs>(
      args?: Subset<T, assetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetGroupByArgs} args - Group by arguments.
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
      T extends assetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assetGroupByArgs['orderBy'] }
        : { orderBy?: assetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, assetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asset model
   */
  readonly fields: assetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    household<T extends asset$householdArgs<ExtArgs> = {}>(args?: Subset<T, asset$householdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the asset model
   */ 
  interface assetFieldRefs {
    readonly id: FieldRef<"asset", 'String'>
    readonly user_id: FieldRef<"asset", 'String'>
    readonly asset_type: FieldRef<"asset", 'String'>
    readonly asset_name: FieldRef<"asset", 'String'>
    readonly asset_money: FieldRef<"asset", 'Float'>
    readonly asset_currency: FieldRef<"asset", 'String'>
    readonly asset_comment: FieldRef<"asset", 'String'>
    readonly created_at: FieldRef<"asset", 'DateTime'>
    readonly updated_at: FieldRef<"asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * asset findUnique
   */
  export type assetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * Filter, which asset to fetch.
     */
    where: assetWhereUniqueInput
  }

  /**
   * asset findUniqueOrThrow
   */
  export type assetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * Filter, which asset to fetch.
     */
    where: assetWhereUniqueInput
  }

  /**
   * asset findFirst
   */
  export type assetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * Filter, which asset to fetch.
     */
    where?: assetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetOrderByWithRelationInput | assetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assets.
     */
    cursor?: assetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * asset findFirstOrThrow
   */
  export type assetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * Filter, which asset to fetch.
     */
    where?: assetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetOrderByWithRelationInput | assetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assets.
     */
    cursor?: assetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * asset findMany
   */
  export type assetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * Filter, which assets to fetch.
     */
    where?: assetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetOrderByWithRelationInput | assetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assets.
     */
    cursor?: assetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * asset create
   */
  export type assetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * The data needed to create a asset.
     */
    data: XOR<assetCreateInput, assetUncheckedCreateInput>
  }

  /**
   * asset createMany
   */
  export type assetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assets.
     */
    data: assetCreateManyInput | assetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asset createManyAndReturn
   */
  export type assetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many assets.
     */
    data: assetCreateManyInput | assetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * asset update
   */
  export type assetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * The data needed to update a asset.
     */
    data: XOR<assetUpdateInput, assetUncheckedUpdateInput>
    /**
     * Choose, which asset to update.
     */
    where: assetWhereUniqueInput
  }

  /**
   * asset updateMany
   */
  export type assetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assets.
     */
    data: XOR<assetUpdateManyMutationInput, assetUncheckedUpdateManyInput>
    /**
     * Filter which assets to update
     */
    where?: assetWhereInput
  }

  /**
   * asset upsert
   */
  export type assetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * The filter to search for the asset to update in case it exists.
     */
    where: assetWhereUniqueInput
    /**
     * In case the asset found by the `where` argument doesn't exist, create a new asset with this data.
     */
    create: XOR<assetCreateInput, assetUncheckedCreateInput>
    /**
     * In case the asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assetUpdateInput, assetUncheckedUpdateInput>
  }

  /**
   * asset delete
   */
  export type assetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    /**
     * Filter which asset to delete.
     */
    where: assetWhereUniqueInput
  }

  /**
   * asset deleteMany
   */
  export type assetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assets to delete
     */
    where?: assetWhereInput
  }

  /**
   * asset.household
   */
  export type asset$householdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    where?: householdWhereInput
    orderBy?: householdOrderByWithRelationInput | householdOrderByWithRelationInput[]
    cursor?: householdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * asset without action
   */
  export type assetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    user_email: string | null
    user_password: string | null
    user_first_name: string | null
    user_last_name: string | null
    delete_flg: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    user_email: string | null
    user_password: string | null
    user_first_name: string | null
    user_last_name: string | null
    delete_flg: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    user_email: number
    user_password: number
    user_first_name: number
    user_last_name: number
    delete_flg: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    user_email?: true
    user_password?: true
    user_first_name?: true
    user_last_name?: true
    delete_flg?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    user_email?: true
    user_password?: true
    user_first_name?: true
    user_last_name?: true
    delete_flg?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    user_email?: true
    user_password?: true
    user_first_name?: true
    user_last_name?: true
    delete_flg?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    user_email: string
    user_password: string
    user_first_name: string | null
    user_last_name: string | null
    delete_flg: boolean
    created_at: Date
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    user_password?: boolean
    user_first_name?: boolean
    user_last_name?: boolean
    delete_flg?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | user$assetArgs<ExtArgs>
    household?: boolean | user$householdArgs<ExtArgs>
    household_categories?: boolean | user$household_categoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    user_password?: boolean
    user_first_name?: boolean
    user_last_name?: boolean
    delete_flg?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    user_email?: boolean
    user_password?: boolean
    user_first_name?: boolean
    user_last_name?: boolean
    delete_flg?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | user$assetArgs<ExtArgs>
    household?: boolean | user$householdArgs<ExtArgs>
    household_categories?: boolean | user$household_categoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      asset: Prisma.$assetPayload<ExtArgs>[]
      household: Prisma.$householdPayload<ExtArgs>[]
      household_categories: Prisma.$household_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_email: string
      user_password: string
      user_first_name: string | null
      user_last_name: string | null
      delete_flg: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends user$assetArgs<ExtArgs> = {}>(args?: Subset<T, user$assetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assetPayload<ExtArgs>, T, "findMany"> | Null>
    household<T extends user$householdArgs<ExtArgs> = {}>(args?: Subset<T, user$householdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$householdPayload<ExtArgs>, T, "findMany"> | Null>
    household_categories<T extends user$household_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, user$household_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$household_categoriesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly user_email: FieldRef<"user", 'String'>
    readonly user_password: FieldRef<"user", 'String'>
    readonly user_first_name: FieldRef<"user", 'String'>
    readonly user_last_name: FieldRef<"user", 'String'>
    readonly delete_flg: FieldRef<"user", 'Boolean'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.asset
   */
  export type user$assetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asset
     */
    select?: assetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetInclude<ExtArgs> | null
    where?: assetWhereInput
    orderBy?: assetOrderByWithRelationInput | assetOrderByWithRelationInput[]
    cursor?: assetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * user.household
   */
  export type user$householdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household
     */
    select?: householdSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: householdInclude<ExtArgs> | null
    where?: householdWhereInput
    orderBy?: householdOrderByWithRelationInput | householdOrderByWithRelationInput[]
    cursor?: householdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * user.household_categories
   */
  export type user$household_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the household_categories
     */
    select?: household_categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: household_categoriesInclude<ExtArgs> | null
    where?: household_categoriesWhereInput
    orderBy?: household_categoriesOrderByWithRelationInput | household_categoriesOrderByWithRelationInput[]
    cursor?: household_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Household_categoriesScalarFieldEnum | Household_categoriesScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const HouseholdScalarFieldEnum: {
    id: 'id',
    issue_date: 'issue_date',
    asset_id: 'asset_id',
    user_id: 'user_id',
    household_type: 'household_type',
    household_amount: 'household_amount',
    household_comment: 'household_comment',
    image_path: 'image_path',
    image_text: 'image_text',
    created_at: 'created_at',
    updated_at: 'updated_at',
    household_category: 'household_category',
    household_category_userid: 'household_category_userid',
    household_name: 'household_name'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const Household_categoriesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    category_name: 'category_name',
    parent_category_id: 'parent_category_id',
    category_comment: 'category_comment',
    created_at: 'created_at',
    update_at: 'update_at',
    household_type: 'household_type'
  };

  export type Household_categoriesScalarFieldEnum = (typeof Household_categoriesScalarFieldEnum)[keyof typeof Household_categoriesScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    asset_type: 'asset_type',
    asset_name: 'asset_name',
    asset_money: 'asset_money',
    asset_currency: 'asset_currency',
    asset_comment: 'asset_comment',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    user_email: 'user_email',
    user_password: 'user_password',
    user_first_name: 'user_first_name',
    user_last_name: 'user_last_name',
    delete_flg: 'delete_flg',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type householdWhereInput = {
    AND?: householdWhereInput | householdWhereInput[]
    OR?: householdWhereInput[]
    NOT?: householdWhereInput | householdWhereInput[]
    id?: UuidFilter<"household"> | string
    issue_date?: DateTimeFilter<"household"> | Date | string
    asset_id?: UuidFilter<"household"> | string
    user_id?: UuidFilter<"household"> | string
    household_type?: StringFilter<"household"> | string
    household_amount?: FloatFilter<"household"> | number
    household_comment?: StringNullableFilter<"household"> | string | null
    image_path?: StringNullableFilter<"household"> | string | null
    image_text?: StringNullableFilter<"household"> | string | null
    created_at?: DateTimeFilter<"household"> | Date | string
    updated_at?: DateTimeNullableFilter<"household"> | Date | string | null
    household_category?: IntNullableFilter<"household"> | number | null
    household_category_userid?: UuidNullableFilter<"household"> | string | null
    household_name?: StringNullableFilter<"household"> | string | null
    Asset?: XOR<AssetRelationFilter, assetWhereInput>
    household_categories?: XOR<Household_categoriesNullableRelationFilter, household_categoriesWhereInput> | null
    User?: XOR<UserRelationFilter, userWhereInput>
  }

  export type householdOrderByWithRelationInput = {
    id?: SortOrder
    issue_date?: SortOrder
    asset_id?: SortOrder
    user_id?: SortOrder
    household_type?: SortOrder
    household_amount?: SortOrder
    household_comment?: SortOrderInput | SortOrder
    image_path?: SortOrderInput | SortOrder
    image_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    household_category?: SortOrderInput | SortOrder
    household_category_userid?: SortOrderInput | SortOrder
    household_name?: SortOrderInput | SortOrder
    Asset?: assetOrderByWithRelationInput
    household_categories?: household_categoriesOrderByWithRelationInput
    User?: userOrderByWithRelationInput
  }

  export type householdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: householdWhereInput | householdWhereInput[]
    OR?: householdWhereInput[]
    NOT?: householdWhereInput | householdWhereInput[]
    issue_date?: DateTimeFilter<"household"> | Date | string
    asset_id?: UuidFilter<"household"> | string
    user_id?: UuidFilter<"household"> | string
    household_type?: StringFilter<"household"> | string
    household_amount?: FloatFilter<"household"> | number
    household_comment?: StringNullableFilter<"household"> | string | null
    image_path?: StringNullableFilter<"household"> | string | null
    image_text?: StringNullableFilter<"household"> | string | null
    created_at?: DateTimeFilter<"household"> | Date | string
    updated_at?: DateTimeNullableFilter<"household"> | Date | string | null
    household_category?: IntNullableFilter<"household"> | number | null
    household_category_userid?: UuidNullableFilter<"household"> | string | null
    household_name?: StringNullableFilter<"household"> | string | null
    Asset?: XOR<AssetRelationFilter, assetWhereInput>
    household_categories?: XOR<Household_categoriesNullableRelationFilter, household_categoriesWhereInput> | null
    User?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type householdOrderByWithAggregationInput = {
    id?: SortOrder
    issue_date?: SortOrder
    asset_id?: SortOrder
    user_id?: SortOrder
    household_type?: SortOrder
    household_amount?: SortOrder
    household_comment?: SortOrderInput | SortOrder
    image_path?: SortOrderInput | SortOrder
    image_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    household_category?: SortOrderInput | SortOrder
    household_category_userid?: SortOrderInput | SortOrder
    household_name?: SortOrderInput | SortOrder
    _count?: householdCountOrderByAggregateInput
    _avg?: householdAvgOrderByAggregateInput
    _max?: householdMaxOrderByAggregateInput
    _min?: householdMinOrderByAggregateInput
    _sum?: householdSumOrderByAggregateInput
  }

  export type householdScalarWhereWithAggregatesInput = {
    AND?: householdScalarWhereWithAggregatesInput | householdScalarWhereWithAggregatesInput[]
    OR?: householdScalarWhereWithAggregatesInput[]
    NOT?: householdScalarWhereWithAggregatesInput | householdScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"household"> | string
    issue_date?: DateTimeWithAggregatesFilter<"household"> | Date | string
    asset_id?: UuidWithAggregatesFilter<"household"> | string
    user_id?: UuidWithAggregatesFilter<"household"> | string
    household_type?: StringWithAggregatesFilter<"household"> | string
    household_amount?: FloatWithAggregatesFilter<"household"> | number
    household_comment?: StringNullableWithAggregatesFilter<"household"> | string | null
    image_path?: StringNullableWithAggregatesFilter<"household"> | string | null
    image_text?: StringNullableWithAggregatesFilter<"household"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"household"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"household"> | Date | string | null
    household_category?: IntNullableWithAggregatesFilter<"household"> | number | null
    household_category_userid?: UuidNullableWithAggregatesFilter<"household"> | string | null
    household_name?: StringNullableWithAggregatesFilter<"household"> | string | null
  }

  export type household_categoriesWhereInput = {
    AND?: household_categoriesWhereInput | household_categoriesWhereInput[]
    OR?: household_categoriesWhereInput[]
    NOT?: household_categoriesWhereInput | household_categoriesWhereInput[]
    id?: IntFilter<"household_categories"> | number
    user_id?: UuidFilter<"household_categories"> | string
    category_name?: StringFilter<"household_categories"> | string
    parent_category_id?: IntNullableFilter<"household_categories"> | number | null
    category_comment?: StringNullableFilter<"household_categories"> | string | null
    created_at?: DateTimeFilter<"household_categories"> | Date | string
    update_at?: DateTimeNullableFilter<"household_categories"> | Date | string | null
    household_type?: StringFilter<"household_categories"> | string
    household?: HouseholdListRelationFilter
    User?: XOR<UserRelationFilter, userWhereInput>
  }

  export type household_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_name?: SortOrder
    parent_category_id?: SortOrderInput | SortOrder
    category_comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrderInput | SortOrder
    household_type?: SortOrder
    household?: householdOrderByRelationAggregateInput
    User?: userOrderByWithRelationInput
  }

  export type household_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id_user_id?: household_categoriesIdUser_idCompoundUniqueInput
    AND?: household_categoriesWhereInput | household_categoriesWhereInput[]
    OR?: household_categoriesWhereInput[]
    NOT?: household_categoriesWhereInput | household_categoriesWhereInput[]
    id?: IntFilter<"household_categories"> | number
    user_id?: UuidFilter<"household_categories"> | string
    category_name?: StringFilter<"household_categories"> | string
    parent_category_id?: IntNullableFilter<"household_categories"> | number | null
    category_comment?: StringNullableFilter<"household_categories"> | string | null
    created_at?: DateTimeFilter<"household_categories"> | Date | string
    update_at?: DateTimeNullableFilter<"household_categories"> | Date | string | null
    household_type?: StringFilter<"household_categories"> | string
    household?: HouseholdListRelationFilter
    User?: XOR<UserRelationFilter, userWhereInput>
  }, "id_user_id">

  export type household_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_name?: SortOrder
    parent_category_id?: SortOrderInput | SortOrder
    category_comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrderInput | SortOrder
    household_type?: SortOrder
    _count?: household_categoriesCountOrderByAggregateInput
    _avg?: household_categoriesAvgOrderByAggregateInput
    _max?: household_categoriesMaxOrderByAggregateInput
    _min?: household_categoriesMinOrderByAggregateInput
    _sum?: household_categoriesSumOrderByAggregateInput
  }

  export type household_categoriesScalarWhereWithAggregatesInput = {
    AND?: household_categoriesScalarWhereWithAggregatesInput | household_categoriesScalarWhereWithAggregatesInput[]
    OR?: household_categoriesScalarWhereWithAggregatesInput[]
    NOT?: household_categoriesScalarWhereWithAggregatesInput | household_categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"household_categories"> | number
    user_id?: UuidWithAggregatesFilter<"household_categories"> | string
    category_name?: StringWithAggregatesFilter<"household_categories"> | string
    parent_category_id?: IntNullableWithAggregatesFilter<"household_categories"> | number | null
    category_comment?: StringNullableWithAggregatesFilter<"household_categories"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"household_categories"> | Date | string
    update_at?: DateTimeNullableWithAggregatesFilter<"household_categories"> | Date | string | null
    household_type?: StringWithAggregatesFilter<"household_categories"> | string
  }

  export type assetWhereInput = {
    AND?: assetWhereInput | assetWhereInput[]
    OR?: assetWhereInput[]
    NOT?: assetWhereInput | assetWhereInput[]
    id?: UuidFilter<"asset"> | string
    user_id?: UuidFilter<"asset"> | string
    asset_type?: StringFilter<"asset"> | string
    asset_name?: StringFilter<"asset"> | string
    asset_money?: FloatFilter<"asset"> | number
    asset_currency?: StringFilter<"asset"> | string
    asset_comment?: StringNullableFilter<"asset"> | string | null
    created_at?: DateTimeFilter<"asset"> | Date | string
    updated_at?: DateTimeNullableFilter<"asset"> | Date | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    household?: HouseholdListRelationFilter
  }

  export type assetOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    asset_type?: SortOrder
    asset_name?: SortOrder
    asset_money?: SortOrder
    asset_currency?: SortOrder
    asset_comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    household?: householdOrderByRelationAggregateInput
  }

  export type assetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: assetWhereInput | assetWhereInput[]
    OR?: assetWhereInput[]
    NOT?: assetWhereInput | assetWhereInput[]
    user_id?: UuidFilter<"asset"> | string
    asset_type?: StringFilter<"asset"> | string
    asset_name?: StringFilter<"asset"> | string
    asset_money?: FloatFilter<"asset"> | number
    asset_currency?: StringFilter<"asset"> | string
    asset_comment?: StringNullableFilter<"asset"> | string | null
    created_at?: DateTimeFilter<"asset"> | Date | string
    updated_at?: DateTimeNullableFilter<"asset"> | Date | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    household?: HouseholdListRelationFilter
  }, "id">

  export type assetOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    asset_type?: SortOrder
    asset_name?: SortOrder
    asset_money?: SortOrder
    asset_currency?: SortOrder
    asset_comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: assetCountOrderByAggregateInput
    _avg?: assetAvgOrderByAggregateInput
    _max?: assetMaxOrderByAggregateInput
    _min?: assetMinOrderByAggregateInput
    _sum?: assetSumOrderByAggregateInput
  }

  export type assetScalarWhereWithAggregatesInput = {
    AND?: assetScalarWhereWithAggregatesInput | assetScalarWhereWithAggregatesInput[]
    OR?: assetScalarWhereWithAggregatesInput[]
    NOT?: assetScalarWhereWithAggregatesInput | assetScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"asset"> | string
    user_id?: UuidWithAggregatesFilter<"asset"> | string
    asset_type?: StringWithAggregatesFilter<"asset"> | string
    asset_name?: StringWithAggregatesFilter<"asset"> | string
    asset_money?: FloatWithAggregatesFilter<"asset"> | number
    asset_currency?: StringWithAggregatesFilter<"asset"> | string
    asset_comment?: StringNullableWithAggregatesFilter<"asset"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"asset"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"asset"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: UuidFilter<"user"> | string
    user_email?: StringFilter<"user"> | string
    user_password?: StringFilter<"user"> | string
    user_first_name?: StringNullableFilter<"user"> | string | null
    user_last_name?: StringNullableFilter<"user"> | string | null
    delete_flg?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    asset?: AssetListRelationFilter
    household?: HouseholdListRelationFilter
    household_categories?: Household_categoriesListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_first_name?: SortOrderInput | SortOrder
    user_last_name?: SortOrderInput | SortOrder
    delete_flg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    asset?: assetOrderByRelationAggregateInput
    household?: householdOrderByRelationAggregateInput
    household_categories?: household_categoriesOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_password?: StringFilter<"user"> | string
    user_first_name?: StringNullableFilter<"user"> | string | null
    user_last_name?: StringNullableFilter<"user"> | string | null
    delete_flg?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    asset?: AssetListRelationFilter
    household?: HouseholdListRelationFilter
    household_categories?: Household_categoriesListRelationFilter
  }, "id" | "user_email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_first_name?: SortOrderInput | SortOrder
    user_last_name?: SortOrderInput | SortOrder
    delete_flg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user"> | string
    user_email?: StringWithAggregatesFilter<"user"> | string
    user_password?: StringWithAggregatesFilter<"user"> | string
    user_first_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_last_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    delete_flg?: BoolWithAggregatesFilter<"user"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type householdCreateInput = {
    id?: string
    issue_date: Date | string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_name?: string | null
    Asset: assetCreateNestedOneWithoutHouseholdInput
    household_categories?: household_categoriesCreateNestedOneWithoutHouseholdInput
    User: userCreateNestedOneWithoutHouseholdInput
  }

  export type householdUncheckedCreateInput = {
    id?: string
    issue_date: Date | string
    asset_id: string
    user_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_category?: number | null
    household_category_userid?: string | null
    household_name?: string | null
  }

  export type householdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
    Asset?: assetUpdateOneRequiredWithoutHouseholdNestedInput
    household_categories?: household_categoriesUpdateOneWithoutHouseholdNestedInput
    User?: userUpdateOneRequiredWithoutHouseholdNestedInput
  }

  export type householdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_category?: NullableIntFieldUpdateOperationsInput | number | null
    household_category_userid?: NullableStringFieldUpdateOperationsInput | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type householdCreateManyInput = {
    id?: string
    issue_date: Date | string
    asset_id: string
    user_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_category?: number | null
    household_category_userid?: string | null
    household_name?: string | null
  }

  export type householdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type householdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_category?: NullableIntFieldUpdateOperationsInput | number | null
    household_category_userid?: NullableStringFieldUpdateOperationsInput | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type household_categoriesCreateInput = {
    id: number
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
    household?: householdCreateNestedManyWithoutHousehold_categoriesInput
    User: userCreateNestedOneWithoutHousehold_categoriesInput
  }

  export type household_categoriesUncheckedCreateInput = {
    id: number
    user_id: string
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
    household?: householdUncheckedCreateNestedManyWithoutHousehold_categoriesInput
  }

  export type household_categoriesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
    household?: householdUpdateManyWithoutHousehold_categoriesNestedInput
    User?: userUpdateOneRequiredWithoutHousehold_categoriesNestedInput
  }

  export type household_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
    household?: householdUncheckedUpdateManyWithoutHousehold_categoriesNestedInput
  }

  export type household_categoriesCreateManyInput = {
    id: number
    user_id: string
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
  }

  export type household_categoriesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
  }

  export type household_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
  }

  export type assetCreateInput = {
    id?: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutAssetInput
    household?: householdCreateNestedManyWithoutAssetInput
  }

  export type assetUncheckedCreateInput = {
    id?: string
    user_id: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household?: householdUncheckedCreateNestedManyWithoutAssetInput
  }

  export type assetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutAssetNestedInput
    household?: householdUpdateManyWithoutAssetNestedInput
  }

  export type assetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household?: householdUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type assetCreateManyInput = {
    id?: string
    user_id: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type assetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type assetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    asset?: assetCreateNestedManyWithoutUserInput
    household?: householdCreateNestedManyWithoutUserInput
    household_categories?: household_categoriesCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    asset?: assetUncheckedCreateNestedManyWithoutUserInput
    household?: householdUncheckedCreateNestedManyWithoutUserInput
    household_categories?: household_categoriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asset?: assetUpdateManyWithoutUserNestedInput
    household?: householdUpdateManyWithoutUserNestedInput
    household_categories?: household_categoriesUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asset?: assetUncheckedUpdateManyWithoutUserNestedInput
    household?: householdUncheckedUpdateManyWithoutUserNestedInput
    household_categories?: household_categoriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type AssetRelationFilter = {
    is?: assetWhereInput
    isNot?: assetWhereInput
  }

  export type Household_categoriesNullableRelationFilter = {
    is?: household_categoriesWhereInput | null
    isNot?: household_categoriesWhereInput | null
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type householdCountOrderByAggregateInput = {
    id?: SortOrder
    issue_date?: SortOrder
    asset_id?: SortOrder
    user_id?: SortOrder
    household_type?: SortOrder
    household_amount?: SortOrder
    household_comment?: SortOrder
    image_path?: SortOrder
    image_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    household_category?: SortOrder
    household_category_userid?: SortOrder
    household_name?: SortOrder
  }

  export type householdAvgOrderByAggregateInput = {
    household_amount?: SortOrder
    household_category?: SortOrder
  }

  export type householdMaxOrderByAggregateInput = {
    id?: SortOrder
    issue_date?: SortOrder
    asset_id?: SortOrder
    user_id?: SortOrder
    household_type?: SortOrder
    household_amount?: SortOrder
    household_comment?: SortOrder
    image_path?: SortOrder
    image_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    household_category?: SortOrder
    household_category_userid?: SortOrder
    household_name?: SortOrder
  }

  export type householdMinOrderByAggregateInput = {
    id?: SortOrder
    issue_date?: SortOrder
    asset_id?: SortOrder
    user_id?: SortOrder
    household_type?: SortOrder
    household_amount?: SortOrder
    household_comment?: SortOrder
    image_path?: SortOrder
    image_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    household_category?: SortOrder
    household_category_userid?: SortOrder
    household_name?: SortOrder
  }

  export type householdSumOrderByAggregateInput = {
    household_amount?: SortOrder
    household_category?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type HouseholdListRelationFilter = {
    every?: householdWhereInput
    some?: householdWhereInput
    none?: householdWhereInput
  }

  export type householdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type household_categoriesIdUser_idCompoundUniqueInput = {
    id: number
    user_id: string
  }

  export type household_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_name?: SortOrder
    parent_category_id?: SortOrder
    category_comment?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    household_type?: SortOrder
  }

  export type household_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_category_id?: SortOrder
  }

  export type household_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_name?: SortOrder
    parent_category_id?: SortOrder
    category_comment?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    household_type?: SortOrder
  }

  export type household_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_name?: SortOrder
    parent_category_id?: SortOrder
    category_comment?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    household_type?: SortOrder
  }

  export type household_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    parent_category_id?: SortOrder
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

  export type assetCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    asset_type?: SortOrder
    asset_name?: SortOrder
    asset_money?: SortOrder
    asset_currency?: SortOrder
    asset_comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type assetAvgOrderByAggregateInput = {
    asset_money?: SortOrder
  }

  export type assetMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    asset_type?: SortOrder
    asset_name?: SortOrder
    asset_money?: SortOrder
    asset_currency?: SortOrder
    asset_comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type assetMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    asset_type?: SortOrder
    asset_name?: SortOrder
    asset_money?: SortOrder
    asset_currency?: SortOrder
    asset_comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type assetSumOrderByAggregateInput = {
    asset_money?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AssetListRelationFilter = {
    every?: assetWhereInput
    some?: assetWhereInput
    none?: assetWhereInput
  }

  export type Household_categoriesListRelationFilter = {
    every?: household_categoriesWhereInput
    some?: household_categoriesWhereInput
    none?: household_categoriesWhereInput
  }

  export type assetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type household_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_first_name?: SortOrder
    user_last_name?: SortOrder
    delete_flg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_first_name?: SortOrder
    user_last_name?: SortOrder
    delete_flg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_first_name?: SortOrder
    user_last_name?: SortOrder
    delete_flg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type assetCreateNestedOneWithoutHouseholdInput = {
    create?: XOR<assetCreateWithoutHouseholdInput, assetUncheckedCreateWithoutHouseholdInput>
    connectOrCreate?: assetCreateOrConnectWithoutHouseholdInput
    connect?: assetWhereUniqueInput
  }

  export type household_categoriesCreateNestedOneWithoutHouseholdInput = {
    create?: XOR<household_categoriesCreateWithoutHouseholdInput, household_categoriesUncheckedCreateWithoutHouseholdInput>
    connectOrCreate?: household_categoriesCreateOrConnectWithoutHouseholdInput
    connect?: household_categoriesWhereUniqueInput
  }

  export type userCreateNestedOneWithoutHouseholdInput = {
    create?: XOR<userCreateWithoutHouseholdInput, userUncheckedCreateWithoutHouseholdInput>
    connectOrCreate?: userCreateOrConnectWithoutHouseholdInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type assetUpdateOneRequiredWithoutHouseholdNestedInput = {
    create?: XOR<assetCreateWithoutHouseholdInput, assetUncheckedCreateWithoutHouseholdInput>
    connectOrCreate?: assetCreateOrConnectWithoutHouseholdInput
    upsert?: assetUpsertWithoutHouseholdInput
    connect?: assetWhereUniqueInput
    update?: XOR<XOR<assetUpdateToOneWithWhereWithoutHouseholdInput, assetUpdateWithoutHouseholdInput>, assetUncheckedUpdateWithoutHouseholdInput>
  }

  export type household_categoriesUpdateOneWithoutHouseholdNestedInput = {
    create?: XOR<household_categoriesCreateWithoutHouseholdInput, household_categoriesUncheckedCreateWithoutHouseholdInput>
    connectOrCreate?: household_categoriesCreateOrConnectWithoutHouseholdInput
    upsert?: household_categoriesUpsertWithoutHouseholdInput
    disconnect?: household_categoriesWhereInput | boolean
    delete?: household_categoriesWhereInput | boolean
    connect?: household_categoriesWhereUniqueInput
    update?: XOR<XOR<household_categoriesUpdateToOneWithWhereWithoutHouseholdInput, household_categoriesUpdateWithoutHouseholdInput>, household_categoriesUncheckedUpdateWithoutHouseholdInput>
  }

  export type userUpdateOneRequiredWithoutHouseholdNestedInput = {
    create?: XOR<userCreateWithoutHouseholdInput, userUncheckedCreateWithoutHouseholdInput>
    connectOrCreate?: userCreateOrConnectWithoutHouseholdInput
    upsert?: userUpsertWithoutHouseholdInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHouseholdInput, userUpdateWithoutHouseholdInput>, userUncheckedUpdateWithoutHouseholdInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type householdCreateNestedManyWithoutHousehold_categoriesInput = {
    create?: XOR<householdCreateWithoutHousehold_categoriesInput, householdUncheckedCreateWithoutHousehold_categoriesInput> | householdCreateWithoutHousehold_categoriesInput[] | householdUncheckedCreateWithoutHousehold_categoriesInput[]
    connectOrCreate?: householdCreateOrConnectWithoutHousehold_categoriesInput | householdCreateOrConnectWithoutHousehold_categoriesInput[]
    createMany?: householdCreateManyHousehold_categoriesInputEnvelope
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutHousehold_categoriesInput = {
    create?: XOR<userCreateWithoutHousehold_categoriesInput, userUncheckedCreateWithoutHousehold_categoriesInput>
    connectOrCreate?: userCreateOrConnectWithoutHousehold_categoriesInput
    connect?: userWhereUniqueInput
  }

  export type householdUncheckedCreateNestedManyWithoutHousehold_categoriesInput = {
    create?: XOR<householdCreateWithoutHousehold_categoriesInput, householdUncheckedCreateWithoutHousehold_categoriesInput> | householdCreateWithoutHousehold_categoriesInput[] | householdUncheckedCreateWithoutHousehold_categoriesInput[]
    connectOrCreate?: householdCreateOrConnectWithoutHousehold_categoriesInput | householdCreateOrConnectWithoutHousehold_categoriesInput[]
    createMany?: householdCreateManyHousehold_categoriesInputEnvelope
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type householdUpdateManyWithoutHousehold_categoriesNestedInput = {
    create?: XOR<householdCreateWithoutHousehold_categoriesInput, householdUncheckedCreateWithoutHousehold_categoriesInput> | householdCreateWithoutHousehold_categoriesInput[] | householdUncheckedCreateWithoutHousehold_categoriesInput[]
    connectOrCreate?: householdCreateOrConnectWithoutHousehold_categoriesInput | householdCreateOrConnectWithoutHousehold_categoriesInput[]
    upsert?: householdUpsertWithWhereUniqueWithoutHousehold_categoriesInput | householdUpsertWithWhereUniqueWithoutHousehold_categoriesInput[]
    createMany?: householdCreateManyHousehold_categoriesInputEnvelope
    set?: householdWhereUniqueInput | householdWhereUniqueInput[]
    disconnect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    delete?: householdWhereUniqueInput | householdWhereUniqueInput[]
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    update?: householdUpdateWithWhereUniqueWithoutHousehold_categoriesInput | householdUpdateWithWhereUniqueWithoutHousehold_categoriesInput[]
    updateMany?: householdUpdateManyWithWhereWithoutHousehold_categoriesInput | householdUpdateManyWithWhereWithoutHousehold_categoriesInput[]
    deleteMany?: householdScalarWhereInput | householdScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutHousehold_categoriesNestedInput = {
    create?: XOR<userCreateWithoutHousehold_categoriesInput, userUncheckedCreateWithoutHousehold_categoriesInput>
    connectOrCreate?: userCreateOrConnectWithoutHousehold_categoriesInput
    upsert?: userUpsertWithoutHousehold_categoriesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHousehold_categoriesInput, userUpdateWithoutHousehold_categoriesInput>, userUncheckedUpdateWithoutHousehold_categoriesInput>
  }

  export type householdUncheckedUpdateManyWithoutHousehold_categoriesNestedInput = {
    create?: XOR<householdCreateWithoutHousehold_categoriesInput, householdUncheckedCreateWithoutHousehold_categoriesInput> | householdCreateWithoutHousehold_categoriesInput[] | householdUncheckedCreateWithoutHousehold_categoriesInput[]
    connectOrCreate?: householdCreateOrConnectWithoutHousehold_categoriesInput | householdCreateOrConnectWithoutHousehold_categoriesInput[]
    upsert?: householdUpsertWithWhereUniqueWithoutHousehold_categoriesInput | householdUpsertWithWhereUniqueWithoutHousehold_categoriesInput[]
    createMany?: householdCreateManyHousehold_categoriesInputEnvelope
    set?: householdWhereUniqueInput | householdWhereUniqueInput[]
    disconnect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    delete?: householdWhereUniqueInput | householdWhereUniqueInput[]
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    update?: householdUpdateWithWhereUniqueWithoutHousehold_categoriesInput | householdUpdateWithWhereUniqueWithoutHousehold_categoriesInput[]
    updateMany?: householdUpdateManyWithWhereWithoutHousehold_categoriesInput | householdUpdateManyWithWhereWithoutHousehold_categoriesInput[]
    deleteMany?: householdScalarWhereInput | householdScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutAssetInput = {
    create?: XOR<userCreateWithoutAssetInput, userUncheckedCreateWithoutAssetInput>
    connectOrCreate?: userCreateOrConnectWithoutAssetInput
    connect?: userWhereUniqueInput
  }

  export type householdCreateNestedManyWithoutAssetInput = {
    create?: XOR<householdCreateWithoutAssetInput, householdUncheckedCreateWithoutAssetInput> | householdCreateWithoutAssetInput[] | householdUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: householdCreateOrConnectWithoutAssetInput | householdCreateOrConnectWithoutAssetInput[]
    createMany?: householdCreateManyAssetInputEnvelope
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
  }

  export type householdUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<householdCreateWithoutAssetInput, householdUncheckedCreateWithoutAssetInput> | householdCreateWithoutAssetInput[] | householdUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: householdCreateOrConnectWithoutAssetInput | householdCreateOrConnectWithoutAssetInput[]
    createMany?: householdCreateManyAssetInputEnvelope
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutAssetNestedInput = {
    create?: XOR<userCreateWithoutAssetInput, userUncheckedCreateWithoutAssetInput>
    connectOrCreate?: userCreateOrConnectWithoutAssetInput
    upsert?: userUpsertWithoutAssetInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAssetInput, userUpdateWithoutAssetInput>, userUncheckedUpdateWithoutAssetInput>
  }

  export type householdUpdateManyWithoutAssetNestedInput = {
    create?: XOR<householdCreateWithoutAssetInput, householdUncheckedCreateWithoutAssetInput> | householdCreateWithoutAssetInput[] | householdUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: householdCreateOrConnectWithoutAssetInput | householdCreateOrConnectWithoutAssetInput[]
    upsert?: householdUpsertWithWhereUniqueWithoutAssetInput | householdUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: householdCreateManyAssetInputEnvelope
    set?: householdWhereUniqueInput | householdWhereUniqueInput[]
    disconnect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    delete?: householdWhereUniqueInput | householdWhereUniqueInput[]
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    update?: householdUpdateWithWhereUniqueWithoutAssetInput | householdUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: householdUpdateManyWithWhereWithoutAssetInput | householdUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: householdScalarWhereInput | householdScalarWhereInput[]
  }

  export type householdUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<householdCreateWithoutAssetInput, householdUncheckedCreateWithoutAssetInput> | householdCreateWithoutAssetInput[] | householdUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: householdCreateOrConnectWithoutAssetInput | householdCreateOrConnectWithoutAssetInput[]
    upsert?: householdUpsertWithWhereUniqueWithoutAssetInput | householdUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: householdCreateManyAssetInputEnvelope
    set?: householdWhereUniqueInput | householdWhereUniqueInput[]
    disconnect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    delete?: householdWhereUniqueInput | householdWhereUniqueInput[]
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    update?: householdUpdateWithWhereUniqueWithoutAssetInput | householdUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: householdUpdateManyWithWhereWithoutAssetInput | householdUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: householdScalarWhereInput | householdScalarWhereInput[]
  }

  export type assetCreateNestedManyWithoutUserInput = {
    create?: XOR<assetCreateWithoutUserInput, assetUncheckedCreateWithoutUserInput> | assetCreateWithoutUserInput[] | assetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assetCreateOrConnectWithoutUserInput | assetCreateOrConnectWithoutUserInput[]
    createMany?: assetCreateManyUserInputEnvelope
    connect?: assetWhereUniqueInput | assetWhereUniqueInput[]
  }

  export type householdCreateNestedManyWithoutUserInput = {
    create?: XOR<householdCreateWithoutUserInput, householdUncheckedCreateWithoutUserInput> | householdCreateWithoutUserInput[] | householdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: householdCreateOrConnectWithoutUserInput | householdCreateOrConnectWithoutUserInput[]
    createMany?: householdCreateManyUserInputEnvelope
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
  }

  export type household_categoriesCreateNestedManyWithoutUserInput = {
    create?: XOR<household_categoriesCreateWithoutUserInput, household_categoriesUncheckedCreateWithoutUserInput> | household_categoriesCreateWithoutUserInput[] | household_categoriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: household_categoriesCreateOrConnectWithoutUserInput | household_categoriesCreateOrConnectWithoutUserInput[]
    createMany?: household_categoriesCreateManyUserInputEnvelope
    connect?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
  }

  export type assetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<assetCreateWithoutUserInput, assetUncheckedCreateWithoutUserInput> | assetCreateWithoutUserInput[] | assetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assetCreateOrConnectWithoutUserInput | assetCreateOrConnectWithoutUserInput[]
    createMany?: assetCreateManyUserInputEnvelope
    connect?: assetWhereUniqueInput | assetWhereUniqueInput[]
  }

  export type householdUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<householdCreateWithoutUserInput, householdUncheckedCreateWithoutUserInput> | householdCreateWithoutUserInput[] | householdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: householdCreateOrConnectWithoutUserInput | householdCreateOrConnectWithoutUserInput[]
    createMany?: householdCreateManyUserInputEnvelope
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
  }

  export type household_categoriesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<household_categoriesCreateWithoutUserInput, household_categoriesUncheckedCreateWithoutUserInput> | household_categoriesCreateWithoutUserInput[] | household_categoriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: household_categoriesCreateOrConnectWithoutUserInput | household_categoriesCreateOrConnectWithoutUserInput[]
    createMany?: household_categoriesCreateManyUserInputEnvelope
    connect?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type assetUpdateManyWithoutUserNestedInput = {
    create?: XOR<assetCreateWithoutUserInput, assetUncheckedCreateWithoutUserInput> | assetCreateWithoutUserInput[] | assetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assetCreateOrConnectWithoutUserInput | assetCreateOrConnectWithoutUserInput[]
    upsert?: assetUpsertWithWhereUniqueWithoutUserInput | assetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: assetCreateManyUserInputEnvelope
    set?: assetWhereUniqueInput | assetWhereUniqueInput[]
    disconnect?: assetWhereUniqueInput | assetWhereUniqueInput[]
    delete?: assetWhereUniqueInput | assetWhereUniqueInput[]
    connect?: assetWhereUniqueInput | assetWhereUniqueInput[]
    update?: assetUpdateWithWhereUniqueWithoutUserInput | assetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: assetUpdateManyWithWhereWithoutUserInput | assetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: assetScalarWhereInput | assetScalarWhereInput[]
  }

  export type householdUpdateManyWithoutUserNestedInput = {
    create?: XOR<householdCreateWithoutUserInput, householdUncheckedCreateWithoutUserInput> | householdCreateWithoutUserInput[] | householdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: householdCreateOrConnectWithoutUserInput | householdCreateOrConnectWithoutUserInput[]
    upsert?: householdUpsertWithWhereUniqueWithoutUserInput | householdUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: householdCreateManyUserInputEnvelope
    set?: householdWhereUniqueInput | householdWhereUniqueInput[]
    disconnect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    delete?: householdWhereUniqueInput | householdWhereUniqueInput[]
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    update?: householdUpdateWithWhereUniqueWithoutUserInput | householdUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: householdUpdateManyWithWhereWithoutUserInput | householdUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: householdScalarWhereInput | householdScalarWhereInput[]
  }

  export type household_categoriesUpdateManyWithoutUserNestedInput = {
    create?: XOR<household_categoriesCreateWithoutUserInput, household_categoriesUncheckedCreateWithoutUserInput> | household_categoriesCreateWithoutUserInput[] | household_categoriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: household_categoriesCreateOrConnectWithoutUserInput | household_categoriesCreateOrConnectWithoutUserInput[]
    upsert?: household_categoriesUpsertWithWhereUniqueWithoutUserInput | household_categoriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: household_categoriesCreateManyUserInputEnvelope
    set?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    disconnect?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    delete?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    connect?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    update?: household_categoriesUpdateWithWhereUniqueWithoutUserInput | household_categoriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: household_categoriesUpdateManyWithWhereWithoutUserInput | household_categoriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: household_categoriesScalarWhereInput | household_categoriesScalarWhereInput[]
  }

  export type assetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<assetCreateWithoutUserInput, assetUncheckedCreateWithoutUserInput> | assetCreateWithoutUserInput[] | assetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assetCreateOrConnectWithoutUserInput | assetCreateOrConnectWithoutUserInput[]
    upsert?: assetUpsertWithWhereUniqueWithoutUserInput | assetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: assetCreateManyUserInputEnvelope
    set?: assetWhereUniqueInput | assetWhereUniqueInput[]
    disconnect?: assetWhereUniqueInput | assetWhereUniqueInput[]
    delete?: assetWhereUniqueInput | assetWhereUniqueInput[]
    connect?: assetWhereUniqueInput | assetWhereUniqueInput[]
    update?: assetUpdateWithWhereUniqueWithoutUserInput | assetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: assetUpdateManyWithWhereWithoutUserInput | assetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: assetScalarWhereInput | assetScalarWhereInput[]
  }

  export type householdUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<householdCreateWithoutUserInput, householdUncheckedCreateWithoutUserInput> | householdCreateWithoutUserInput[] | householdUncheckedCreateWithoutUserInput[]
    connectOrCreate?: householdCreateOrConnectWithoutUserInput | householdCreateOrConnectWithoutUserInput[]
    upsert?: householdUpsertWithWhereUniqueWithoutUserInput | householdUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: householdCreateManyUserInputEnvelope
    set?: householdWhereUniqueInput | householdWhereUniqueInput[]
    disconnect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    delete?: householdWhereUniqueInput | householdWhereUniqueInput[]
    connect?: householdWhereUniqueInput | householdWhereUniqueInput[]
    update?: householdUpdateWithWhereUniqueWithoutUserInput | householdUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: householdUpdateManyWithWhereWithoutUserInput | householdUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: householdScalarWhereInput | householdScalarWhereInput[]
  }

  export type household_categoriesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<household_categoriesCreateWithoutUserInput, household_categoriesUncheckedCreateWithoutUserInput> | household_categoriesCreateWithoutUserInput[] | household_categoriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: household_categoriesCreateOrConnectWithoutUserInput | household_categoriesCreateOrConnectWithoutUserInput[]
    upsert?: household_categoriesUpsertWithWhereUniqueWithoutUserInput | household_categoriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: household_categoriesCreateManyUserInputEnvelope
    set?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    disconnect?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    delete?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    connect?: household_categoriesWhereUniqueInput | household_categoriesWhereUniqueInput[]
    update?: household_categoriesUpdateWithWhereUniqueWithoutUserInput | household_categoriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: household_categoriesUpdateManyWithWhereWithoutUserInput | household_categoriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: household_categoriesScalarWhereInput | household_categoriesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type assetCreateWithoutHouseholdInput = {
    id?: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutAssetInput
  }

  export type assetUncheckedCreateWithoutHouseholdInput = {
    id?: string
    user_id: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type assetCreateOrConnectWithoutHouseholdInput = {
    where: assetWhereUniqueInput
    create: XOR<assetCreateWithoutHouseholdInput, assetUncheckedCreateWithoutHouseholdInput>
  }

  export type household_categoriesCreateWithoutHouseholdInput = {
    id: number
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
    User: userCreateNestedOneWithoutHousehold_categoriesInput
  }

  export type household_categoriesUncheckedCreateWithoutHouseholdInput = {
    id: number
    user_id: string
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
  }

  export type household_categoriesCreateOrConnectWithoutHouseholdInput = {
    where: household_categoriesWhereUniqueInput
    create: XOR<household_categoriesCreateWithoutHouseholdInput, household_categoriesUncheckedCreateWithoutHouseholdInput>
  }

  export type userCreateWithoutHouseholdInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    asset?: assetCreateNestedManyWithoutUserInput
    household_categories?: household_categoriesCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutHouseholdInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    asset?: assetUncheckedCreateNestedManyWithoutUserInput
    household_categories?: household_categoriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutHouseholdInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHouseholdInput, userUncheckedCreateWithoutHouseholdInput>
  }

  export type assetUpsertWithoutHouseholdInput = {
    update: XOR<assetUpdateWithoutHouseholdInput, assetUncheckedUpdateWithoutHouseholdInput>
    create: XOR<assetCreateWithoutHouseholdInput, assetUncheckedCreateWithoutHouseholdInput>
    where?: assetWhereInput
  }

  export type assetUpdateToOneWithWhereWithoutHouseholdInput = {
    where?: assetWhereInput
    data: XOR<assetUpdateWithoutHouseholdInput, assetUncheckedUpdateWithoutHouseholdInput>
  }

  export type assetUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutAssetNestedInput
  }

  export type assetUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type household_categoriesUpsertWithoutHouseholdInput = {
    update: XOR<household_categoriesUpdateWithoutHouseholdInput, household_categoriesUncheckedUpdateWithoutHouseholdInput>
    create: XOR<household_categoriesCreateWithoutHouseholdInput, household_categoriesUncheckedCreateWithoutHouseholdInput>
    where?: household_categoriesWhereInput
  }

  export type household_categoriesUpdateToOneWithWhereWithoutHouseholdInput = {
    where?: household_categoriesWhereInput
    data: XOR<household_categoriesUpdateWithoutHouseholdInput, household_categoriesUncheckedUpdateWithoutHouseholdInput>
  }

  export type household_categoriesUpdateWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
    User?: userUpdateOneRequiredWithoutHousehold_categoriesNestedInput
  }

  export type household_categoriesUncheckedUpdateWithoutHouseholdInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutHouseholdInput = {
    update: XOR<userUpdateWithoutHouseholdInput, userUncheckedUpdateWithoutHouseholdInput>
    create: XOR<userCreateWithoutHouseholdInput, userUncheckedCreateWithoutHouseholdInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHouseholdInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHouseholdInput, userUncheckedUpdateWithoutHouseholdInput>
  }

  export type userUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asset?: assetUpdateManyWithoutUserNestedInput
    household_categories?: household_categoriesUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asset?: assetUncheckedUpdateManyWithoutUserNestedInput
    household_categories?: household_categoriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type householdCreateWithoutHousehold_categoriesInput = {
    id?: string
    issue_date: Date | string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_name?: string | null
    Asset: assetCreateNestedOneWithoutHouseholdInput
    User: userCreateNestedOneWithoutHouseholdInput
  }

  export type householdUncheckedCreateWithoutHousehold_categoriesInput = {
    id?: string
    issue_date: Date | string
    asset_id: string
    user_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_name?: string | null
  }

  export type householdCreateOrConnectWithoutHousehold_categoriesInput = {
    where: householdWhereUniqueInput
    create: XOR<householdCreateWithoutHousehold_categoriesInput, householdUncheckedCreateWithoutHousehold_categoriesInput>
  }

  export type householdCreateManyHousehold_categoriesInputEnvelope = {
    data: householdCreateManyHousehold_categoriesInput | householdCreateManyHousehold_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutHousehold_categoriesInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    asset?: assetCreateNestedManyWithoutUserInput
    household?: householdCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutHousehold_categoriesInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    asset?: assetUncheckedCreateNestedManyWithoutUserInput
    household?: householdUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutHousehold_categoriesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHousehold_categoriesInput, userUncheckedCreateWithoutHousehold_categoriesInput>
  }

  export type householdUpsertWithWhereUniqueWithoutHousehold_categoriesInput = {
    where: householdWhereUniqueInput
    update: XOR<householdUpdateWithoutHousehold_categoriesInput, householdUncheckedUpdateWithoutHousehold_categoriesInput>
    create: XOR<householdCreateWithoutHousehold_categoriesInput, householdUncheckedCreateWithoutHousehold_categoriesInput>
  }

  export type householdUpdateWithWhereUniqueWithoutHousehold_categoriesInput = {
    where: householdWhereUniqueInput
    data: XOR<householdUpdateWithoutHousehold_categoriesInput, householdUncheckedUpdateWithoutHousehold_categoriesInput>
  }

  export type householdUpdateManyWithWhereWithoutHousehold_categoriesInput = {
    where: householdScalarWhereInput
    data: XOR<householdUpdateManyMutationInput, householdUncheckedUpdateManyWithoutHousehold_categoriesInput>
  }

  export type householdScalarWhereInput = {
    AND?: householdScalarWhereInput | householdScalarWhereInput[]
    OR?: householdScalarWhereInput[]
    NOT?: householdScalarWhereInput | householdScalarWhereInput[]
    id?: UuidFilter<"household"> | string
    issue_date?: DateTimeFilter<"household"> | Date | string
    asset_id?: UuidFilter<"household"> | string
    user_id?: UuidFilter<"household"> | string
    household_type?: StringFilter<"household"> | string
    household_amount?: FloatFilter<"household"> | number
    household_comment?: StringNullableFilter<"household"> | string | null
    image_path?: StringNullableFilter<"household"> | string | null
    image_text?: StringNullableFilter<"household"> | string | null
    created_at?: DateTimeFilter<"household"> | Date | string
    updated_at?: DateTimeNullableFilter<"household"> | Date | string | null
    household_category?: IntNullableFilter<"household"> | number | null
    household_category_userid?: UuidNullableFilter<"household"> | string | null
    household_name?: StringNullableFilter<"household"> | string | null
  }

  export type userUpsertWithoutHousehold_categoriesInput = {
    update: XOR<userUpdateWithoutHousehold_categoriesInput, userUncheckedUpdateWithoutHousehold_categoriesInput>
    create: XOR<userCreateWithoutHousehold_categoriesInput, userUncheckedCreateWithoutHousehold_categoriesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHousehold_categoriesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHousehold_categoriesInput, userUncheckedUpdateWithoutHousehold_categoriesInput>
  }

  export type userUpdateWithoutHousehold_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asset?: assetUpdateManyWithoutUserNestedInput
    household?: householdUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutHousehold_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asset?: assetUncheckedUpdateManyWithoutUserNestedInput
    household?: householdUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutAssetInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    household?: householdCreateNestedManyWithoutUserInput
    household_categories?: household_categoriesCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAssetInput = {
    id?: string
    user_email: string
    user_password: string
    user_first_name?: string | null
    user_last_name?: string | null
    delete_flg?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    household?: householdUncheckedCreateNestedManyWithoutUserInput
    household_categories?: household_categoriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAssetInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAssetInput, userUncheckedCreateWithoutAssetInput>
  }

  export type householdCreateWithoutAssetInput = {
    id?: string
    issue_date: Date | string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_name?: string | null
    household_categories?: household_categoriesCreateNestedOneWithoutHouseholdInput
    User: userCreateNestedOneWithoutHouseholdInput
  }

  export type householdUncheckedCreateWithoutAssetInput = {
    id?: string
    issue_date: Date | string
    user_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_category?: number | null
    household_category_userid?: string | null
    household_name?: string | null
  }

  export type householdCreateOrConnectWithoutAssetInput = {
    where: householdWhereUniqueInput
    create: XOR<householdCreateWithoutAssetInput, householdUncheckedCreateWithoutAssetInput>
  }

  export type householdCreateManyAssetInputEnvelope = {
    data: householdCreateManyAssetInput | householdCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutAssetInput = {
    update: XOR<userUpdateWithoutAssetInput, userUncheckedUpdateWithoutAssetInput>
    create: XOR<userCreateWithoutAssetInput, userUncheckedCreateWithoutAssetInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAssetInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAssetInput, userUncheckedUpdateWithoutAssetInput>
  }

  export type userUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household?: householdUpdateManyWithoutUserNestedInput
    household_categories?: household_categoriesUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_first_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    delete_flg?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household?: householdUncheckedUpdateManyWithoutUserNestedInput
    household_categories?: household_categoriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type householdUpsertWithWhereUniqueWithoutAssetInput = {
    where: householdWhereUniqueInput
    update: XOR<householdUpdateWithoutAssetInput, householdUncheckedUpdateWithoutAssetInput>
    create: XOR<householdCreateWithoutAssetInput, householdUncheckedCreateWithoutAssetInput>
  }

  export type householdUpdateWithWhereUniqueWithoutAssetInput = {
    where: householdWhereUniqueInput
    data: XOR<householdUpdateWithoutAssetInput, householdUncheckedUpdateWithoutAssetInput>
  }

  export type householdUpdateManyWithWhereWithoutAssetInput = {
    where: householdScalarWhereInput
    data: XOR<householdUpdateManyMutationInput, householdUncheckedUpdateManyWithoutAssetInput>
  }

  export type assetCreateWithoutUserInput = {
    id?: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household?: householdCreateNestedManyWithoutAssetInput
  }

  export type assetUncheckedCreateWithoutUserInput = {
    id?: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household?: householdUncheckedCreateNestedManyWithoutAssetInput
  }

  export type assetCreateOrConnectWithoutUserInput = {
    where: assetWhereUniqueInput
    create: XOR<assetCreateWithoutUserInput, assetUncheckedCreateWithoutUserInput>
  }

  export type assetCreateManyUserInputEnvelope = {
    data: assetCreateManyUserInput | assetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type householdCreateWithoutUserInput = {
    id?: string
    issue_date: Date | string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_name?: string | null
    Asset: assetCreateNestedOneWithoutHouseholdInput
    household_categories?: household_categoriesCreateNestedOneWithoutHouseholdInput
  }

  export type householdUncheckedCreateWithoutUserInput = {
    id?: string
    issue_date: Date | string
    asset_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_category?: number | null
    household_category_userid?: string | null
    household_name?: string | null
  }

  export type householdCreateOrConnectWithoutUserInput = {
    where: householdWhereUniqueInput
    create: XOR<householdCreateWithoutUserInput, householdUncheckedCreateWithoutUserInput>
  }

  export type householdCreateManyUserInputEnvelope = {
    data: householdCreateManyUserInput | householdCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type household_categoriesCreateWithoutUserInput = {
    id: number
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
    household?: householdCreateNestedManyWithoutHousehold_categoriesInput
  }

  export type household_categoriesUncheckedCreateWithoutUserInput = {
    id: number
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
    household?: householdUncheckedCreateNestedManyWithoutHousehold_categoriesInput
  }

  export type household_categoriesCreateOrConnectWithoutUserInput = {
    where: household_categoriesWhereUniqueInput
    create: XOR<household_categoriesCreateWithoutUserInput, household_categoriesUncheckedCreateWithoutUserInput>
  }

  export type household_categoriesCreateManyUserInputEnvelope = {
    data: household_categoriesCreateManyUserInput | household_categoriesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type assetUpsertWithWhereUniqueWithoutUserInput = {
    where: assetWhereUniqueInput
    update: XOR<assetUpdateWithoutUserInput, assetUncheckedUpdateWithoutUserInput>
    create: XOR<assetCreateWithoutUserInput, assetUncheckedCreateWithoutUserInput>
  }

  export type assetUpdateWithWhereUniqueWithoutUserInput = {
    where: assetWhereUniqueInput
    data: XOR<assetUpdateWithoutUserInput, assetUncheckedUpdateWithoutUserInput>
  }

  export type assetUpdateManyWithWhereWithoutUserInput = {
    where: assetScalarWhereInput
    data: XOR<assetUpdateManyMutationInput, assetUncheckedUpdateManyWithoutUserInput>
  }

  export type assetScalarWhereInput = {
    AND?: assetScalarWhereInput | assetScalarWhereInput[]
    OR?: assetScalarWhereInput[]
    NOT?: assetScalarWhereInput | assetScalarWhereInput[]
    id?: UuidFilter<"asset"> | string
    user_id?: UuidFilter<"asset"> | string
    asset_type?: StringFilter<"asset"> | string
    asset_name?: StringFilter<"asset"> | string
    asset_money?: FloatFilter<"asset"> | number
    asset_currency?: StringFilter<"asset"> | string
    asset_comment?: StringNullableFilter<"asset"> | string | null
    created_at?: DateTimeFilter<"asset"> | Date | string
    updated_at?: DateTimeNullableFilter<"asset"> | Date | string | null
  }

  export type householdUpsertWithWhereUniqueWithoutUserInput = {
    where: householdWhereUniqueInput
    update: XOR<householdUpdateWithoutUserInput, householdUncheckedUpdateWithoutUserInput>
    create: XOR<householdCreateWithoutUserInput, householdUncheckedCreateWithoutUserInput>
  }

  export type householdUpdateWithWhereUniqueWithoutUserInput = {
    where: householdWhereUniqueInput
    data: XOR<householdUpdateWithoutUserInput, householdUncheckedUpdateWithoutUserInput>
  }

  export type householdUpdateManyWithWhereWithoutUserInput = {
    where: householdScalarWhereInput
    data: XOR<householdUpdateManyMutationInput, householdUncheckedUpdateManyWithoutUserInput>
  }

  export type household_categoriesUpsertWithWhereUniqueWithoutUserInput = {
    where: household_categoriesWhereUniqueInput
    update: XOR<household_categoriesUpdateWithoutUserInput, household_categoriesUncheckedUpdateWithoutUserInput>
    create: XOR<household_categoriesCreateWithoutUserInput, household_categoriesUncheckedCreateWithoutUserInput>
  }

  export type household_categoriesUpdateWithWhereUniqueWithoutUserInput = {
    where: household_categoriesWhereUniqueInput
    data: XOR<household_categoriesUpdateWithoutUserInput, household_categoriesUncheckedUpdateWithoutUserInput>
  }

  export type household_categoriesUpdateManyWithWhereWithoutUserInput = {
    where: household_categoriesScalarWhereInput
    data: XOR<household_categoriesUpdateManyMutationInput, household_categoriesUncheckedUpdateManyWithoutUserInput>
  }

  export type household_categoriesScalarWhereInput = {
    AND?: household_categoriesScalarWhereInput | household_categoriesScalarWhereInput[]
    OR?: household_categoriesScalarWhereInput[]
    NOT?: household_categoriesScalarWhereInput | household_categoriesScalarWhereInput[]
    id?: IntFilter<"household_categories"> | number
    user_id?: UuidFilter<"household_categories"> | string
    category_name?: StringFilter<"household_categories"> | string
    parent_category_id?: IntNullableFilter<"household_categories"> | number | null
    category_comment?: StringNullableFilter<"household_categories"> | string | null
    created_at?: DateTimeFilter<"household_categories"> | Date | string
    update_at?: DateTimeNullableFilter<"household_categories"> | Date | string | null
    household_type?: StringFilter<"household_categories"> | string
  }

  export type householdCreateManyHousehold_categoriesInput = {
    id?: string
    issue_date: Date | string
    asset_id: string
    user_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_name?: string | null
  }

  export type householdUpdateWithoutHousehold_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
    Asset?: assetUpdateOneRequiredWithoutHouseholdNestedInput
    User?: userUpdateOneRequiredWithoutHouseholdNestedInput
  }

  export type householdUncheckedUpdateWithoutHousehold_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type householdUncheckedUpdateManyWithoutHousehold_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type householdCreateManyAssetInput = {
    id?: string
    issue_date: Date | string
    user_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_category?: number | null
    household_category_userid?: string | null
    household_name?: string | null
  }

  export type householdUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
    household_categories?: household_categoriesUpdateOneWithoutHouseholdNestedInput
    User?: userUpdateOneRequiredWithoutHouseholdNestedInput
  }

  export type householdUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_category?: NullableIntFieldUpdateOperationsInput | number | null
    household_category_userid?: NullableStringFieldUpdateOperationsInput | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type householdUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_category?: NullableIntFieldUpdateOperationsInput | number | null
    household_category_userid?: NullableStringFieldUpdateOperationsInput | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assetCreateManyUserInput = {
    id?: string
    asset_type: string
    asset_name: string
    asset_money: number
    asset_currency: string
    asset_comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type householdCreateManyUserInput = {
    id?: string
    issue_date: Date | string
    asset_id: string
    household_type: string
    household_amount?: number
    household_comment?: string | null
    image_path?: string | null
    image_text?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    household_category?: number | null
    household_category_userid?: string | null
    household_name?: string | null
  }

  export type household_categoriesCreateManyUserInput = {
    id: number
    category_name: string
    parent_category_id?: number | null
    category_comment?: string | null
    created_at?: Date | string
    update_at?: Date | string | null
    household_type?: string
  }

  export type assetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household?: householdUpdateManyWithoutAssetNestedInput
  }

  export type assetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household?: householdUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type assetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    asset_name?: StringFieldUpdateOperationsInput | string
    asset_money?: FloatFieldUpdateOperationsInput | number
    asset_currency?: StringFieldUpdateOperationsInput | string
    asset_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type householdUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
    Asset?: assetUpdateOneRequiredWithoutHouseholdNestedInput
    household_categories?: household_categoriesUpdateOneWithoutHouseholdNestedInput
  }

  export type householdUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_category?: NullableIntFieldUpdateOperationsInput | number | null
    household_category_userid?: NullableStringFieldUpdateOperationsInput | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type householdUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: StringFieldUpdateOperationsInput | string
    household_type?: StringFieldUpdateOperationsInput | string
    household_amount?: FloatFieldUpdateOperationsInput | number
    household_comment?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_category?: NullableIntFieldUpdateOperationsInput | number | null
    household_category_userid?: NullableStringFieldUpdateOperationsInput | string | null
    household_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type household_categoriesUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
    household?: householdUpdateManyWithoutHousehold_categoriesNestedInput
  }

  export type household_categoriesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
    household?: householdUncheckedUpdateManyWithoutHousehold_categoriesNestedInput
  }

  export type household_categoriesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    household_type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Household_categoriesCountOutputTypeDefaultArgs instead
     */
    export type Household_categoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Household_categoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetCountOutputTypeDefaultArgs instead
     */
    export type AssetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use householdDefaultArgs instead
     */
    export type householdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = householdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use household_categoriesDefaultArgs instead
     */
    export type household_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = household_categoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use assetDefaultArgs instead
     */
    export type assetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = assetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>

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