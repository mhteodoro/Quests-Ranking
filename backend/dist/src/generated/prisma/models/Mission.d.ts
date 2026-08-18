import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MissionModel = runtime.Types.Result.DefaultSelection<Prisma.$MissionPayload>;
export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null;
    _avg: MissionAvgAggregateOutputType | null;
    _sum: MissionSumAggregateOutputType | null;
    _min: MissionMinAggregateOutputType | null;
    _max: MissionMaxAggregateOutputType | null;
};
export type MissionAvgAggregateOutputType = {
    id: number | null;
    points: number | null;
};
export type MissionSumAggregateOutputType = {
    id: number | null;
    points: number | null;
};
export type MissionMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    points: number | null;
    createdAt: Date | null;
};
export type MissionMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    points: number | null;
    createdAt: Date | null;
};
export type MissionCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    points: number;
    createdAt: number;
    _all: number;
};
export type MissionAvgAggregateInputType = {
    id?: true;
    points?: true;
};
export type MissionSumAggregateInputType = {
    id?: true;
    points?: true;
};
export type MissionMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    points?: true;
    createdAt?: true;
};
export type MissionMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    points?: true;
    createdAt?: true;
};
export type MissionCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    points?: true;
    createdAt?: true;
    _all?: true;
};
export type MissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MissionCountAggregateInputType;
    _avg?: MissionAvgAggregateInputType;
    _sum?: MissionSumAggregateInputType;
    _min?: MissionMinAggregateInputType;
    _max?: MissionMaxAggregateInputType;
};
export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
    [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMission[P]> : Prisma.GetScalarType<T[P], AggregateMission[P]>;
};
export type MissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithAggregationInput | Prisma.MissionOrderByWithAggregationInput[];
    by: Prisma.MissionScalarFieldEnum[] | Prisma.MissionScalarFieldEnum;
    having?: Prisma.MissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MissionCountAggregateInputType | true;
    _avg?: MissionAvgAggregateInputType;
    _sum?: MissionSumAggregateInputType;
    _min?: MissionMinAggregateInputType;
    _max?: MissionMaxAggregateInputType;
};
export type MissionGroupByOutputType = {
    id: number;
    title: string;
    description: string;
    points: number;
    createdAt: Date;
    _count: MissionCountAggregateOutputType | null;
    _avg: MissionAvgAggregateOutputType | null;
    _sum: MissionSumAggregateOutputType | null;
    _min: MissionMinAggregateOutputType | null;
    _max: MissionMaxAggregateOutputType | null;
};
export type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MissionGroupByOutputType[P]>;
}>>;
export type MissionWhereInput = {
    AND?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    OR?: Prisma.MissionWhereInput[];
    NOT?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    id?: Prisma.IntFilter<"Mission"> | number;
    title?: Prisma.StringFilter<"Mission"> | string;
    description?: Prisma.StringFilter<"Mission"> | string;
    points?: Prisma.IntFilter<"Mission"> | number;
    createdAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
    completions?: Prisma.MissionCompletionListRelationFilter;
};
export type MissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completions?: Prisma.MissionCompletionOrderByRelationAggregateInput;
};
export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    OR?: Prisma.MissionWhereInput[];
    NOT?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    title?: Prisma.StringFilter<"Mission"> | string;
    description?: Prisma.StringFilter<"Mission"> | string;
    points?: Prisma.IntFilter<"Mission"> | number;
    createdAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
    completions?: Prisma.MissionCompletionListRelationFilter;
}, "id">;
export type MissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MissionCountOrderByAggregateInput;
    _avg?: Prisma.MissionAvgOrderByAggregateInput;
    _max?: Prisma.MissionMaxOrderByAggregateInput;
    _min?: Prisma.MissionMinOrderByAggregateInput;
    _sum?: Prisma.MissionSumOrderByAggregateInput;
};
export type MissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.MissionScalarWhereWithAggregatesInput | Prisma.MissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.MissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MissionScalarWhereWithAggregatesInput | Prisma.MissionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Mission"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Mission"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Mission"> | string;
    points?: Prisma.IntWithAggregatesFilter<"Mission"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Mission"> | Date | string;
};
export type MissionCreateInput = {
    title: string;
    description: string;
    points: number;
    createdAt?: Date | string;
    completions?: Prisma.MissionCompletionCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateInput = {
    id?: number;
    title: string;
    description: string;
    points: number;
    createdAt?: Date | string;
    completions?: Prisma.MissionCompletionUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completions?: Prisma.MissionCompletionUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completions?: Prisma.MissionCompletionUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionCreateManyInput = {
    id?: number;
    title: string;
    description: string;
    points: number;
    createdAt?: Date | string;
};
export type MissionUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MissionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type MissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MissionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type MissionScalarRelationFilter = {
    is?: Prisma.MissionWhereInput;
    isNot?: Prisma.MissionWhereInput;
};
export type MissionCreateNestedOneWithoutCompletionsInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutCompletionsInput, Prisma.MissionUncheckedCreateWithoutCompletionsInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutCompletionsInput;
    connect?: Prisma.MissionWhereUniqueInput;
};
export type MissionUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutCompletionsInput, Prisma.MissionUncheckedCreateWithoutCompletionsInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutCompletionsInput;
    upsert?: Prisma.MissionUpsertWithoutCompletionsInput;
    connect?: Prisma.MissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MissionUpdateToOneWithWhereWithoutCompletionsInput, Prisma.MissionUpdateWithoutCompletionsInput>, Prisma.MissionUncheckedUpdateWithoutCompletionsInput>;
};
export type MissionCreateWithoutCompletionsInput = {
    title: string;
    description: string;
    points: number;
    createdAt?: Date | string;
};
export type MissionUncheckedCreateWithoutCompletionsInput = {
    id?: number;
    title: string;
    description: string;
    points: number;
    createdAt?: Date | string;
};
export type MissionCreateOrConnectWithoutCompletionsInput = {
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateWithoutCompletionsInput, Prisma.MissionUncheckedCreateWithoutCompletionsInput>;
};
export type MissionUpsertWithoutCompletionsInput = {
    update: Prisma.XOR<Prisma.MissionUpdateWithoutCompletionsInput, Prisma.MissionUncheckedUpdateWithoutCompletionsInput>;
    create: Prisma.XOR<Prisma.MissionCreateWithoutCompletionsInput, Prisma.MissionUncheckedCreateWithoutCompletionsInput>;
    where?: Prisma.MissionWhereInput;
};
export type MissionUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: Prisma.MissionWhereInput;
    data: Prisma.XOR<Prisma.MissionUpdateWithoutCompletionsInput, Prisma.MissionUncheckedUpdateWithoutCompletionsInput>;
};
export type MissionUpdateWithoutCompletionsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionUncheckedUpdateWithoutCompletionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCountOutputType = {
    completions: number;
};
export type MissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    completions?: boolean | MissionCountOutputTypeCountCompletionsArgs;
};
export type MissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCountOutputTypeSelect<ExtArgs> | null;
};
export type MissionCountOutputTypeCountCompletionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionCompletionWhereInput;
};
export type MissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    createdAt?: boolean;
    completions?: boolean | Prisma.Mission$completionsArgs<ExtArgs>;
    _count?: boolean | Prisma.MissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mission"]>;
export type MissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["mission"]>;
export type MissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["mission"]>;
export type MissionSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    createdAt?: boolean;
};
export type MissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "points" | "createdAt", ExtArgs["result"]["mission"]>;
export type MissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    completions?: boolean | Prisma.Mission$completionsArgs<ExtArgs>;
    _count?: boolean | Prisma.MissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mission";
    objects: {
        completions: Prisma.$MissionCompletionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string;
        points: number;
        createdAt: Date;
    }, ExtArgs["result"]["mission"]>;
    composites: {};
};
export type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MissionPayload, S>;
export type MissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MissionCountAggregateInputType | true;
};
export interface MissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mission'];
        meta: {
            name: 'Mission';
        };
    };
    findUnique<T extends MissionFindUniqueArgs>(args: Prisma.SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MissionFindFirstArgs>(args?: Prisma.SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MissionFindManyArgs>(args?: Prisma.SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MissionCreateArgs>(args: Prisma.SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MissionCreateManyArgs>(args?: Prisma.SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MissionDeleteArgs>(args: Prisma.SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MissionUpdateArgs>(args: Prisma.SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MissionUpdateManyArgs>(args: Prisma.SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MissionUpsertArgs>(args: Prisma.SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MissionCountArgs>(args?: Prisma.Subset<T, MissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MissionCountAggregateOutputType> : number>;
    aggregate<T extends MissionAggregateArgs>(args: Prisma.Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>;
    groupBy<T extends MissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MissionGroupByArgs['orderBy'];
    } : {
        orderBy?: MissionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MissionFieldRefs;
}
export interface Prisma__MissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    completions<T extends Prisma.Mission$completionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mission$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MissionFieldRefs {
    readonly id: Prisma.FieldRef<"Mission", 'Int'>;
    readonly title: Prisma.FieldRef<"Mission", 'String'>;
    readonly description: Prisma.FieldRef<"Mission", 'String'>;
    readonly points: Prisma.FieldRef<"Mission", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Mission", 'DateTime'>;
}
export type MissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionScalarFieldEnum | Prisma.MissionScalarFieldEnum[];
};
export type MissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionScalarFieldEnum | Prisma.MissionScalarFieldEnum[];
};
export type MissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionScalarFieldEnum | Prisma.MissionScalarFieldEnum[];
};
export type MissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionCreateInput, Prisma.MissionUncheckedCreateInput>;
};
export type MissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MissionCreateManyInput | Prisma.MissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    data: Prisma.MissionCreateManyInput | Prisma.MissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionUpdateInput, Prisma.MissionUncheckedUpdateInput>;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MissionUpdateManyMutationInput, Prisma.MissionUncheckedUpdateManyInput>;
    where?: Prisma.MissionWhereInput;
    limit?: number;
};
export type MissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionUpdateManyMutationInput, Prisma.MissionUncheckedUpdateManyInput>;
    where?: Prisma.MissionWhereInput;
    limit?: number;
};
export type MissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateInput, Prisma.MissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MissionUpdateInput, Prisma.MissionUncheckedUpdateInput>;
};
export type MissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
    limit?: number;
};
export type Mission$completionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
    where?: Prisma.MissionCompletionWhereInput;
    orderBy?: Prisma.MissionCompletionOrderByWithRelationInput | Prisma.MissionCompletionOrderByWithRelationInput[];
    cursor?: Prisma.MissionCompletionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionCompletionScalarFieldEnum | Prisma.MissionCompletionScalarFieldEnum[];
};
export type MissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
};
