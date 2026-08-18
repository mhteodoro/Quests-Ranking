import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MissionCompletionModel = runtime.Types.Result.DefaultSelection<Prisma.$MissionCompletionPayload>;
export type AggregateMissionCompletion = {
    _count: MissionCompletionCountAggregateOutputType | null;
    _avg: MissionCompletionAvgAggregateOutputType | null;
    _sum: MissionCompletionSumAggregateOutputType | null;
    _min: MissionCompletionMinAggregateOutputType | null;
    _max: MissionCompletionMaxAggregateOutputType | null;
};
export type MissionCompletionAvgAggregateOutputType = {
    playerId: number | null;
    missionId: number | null;
};
export type MissionCompletionSumAggregateOutputType = {
    playerId: number | null;
    missionId: number | null;
};
export type MissionCompletionMinAggregateOutputType = {
    playerId: number | null;
    missionId: number | null;
    completedAt: Date | null;
};
export type MissionCompletionMaxAggregateOutputType = {
    playerId: number | null;
    missionId: number | null;
    completedAt: Date | null;
};
export type MissionCompletionCountAggregateOutputType = {
    playerId: number;
    missionId: number;
    completedAt: number;
    _all: number;
};
export type MissionCompletionAvgAggregateInputType = {
    playerId?: true;
    missionId?: true;
};
export type MissionCompletionSumAggregateInputType = {
    playerId?: true;
    missionId?: true;
};
export type MissionCompletionMinAggregateInputType = {
    playerId?: true;
    missionId?: true;
    completedAt?: true;
};
export type MissionCompletionMaxAggregateInputType = {
    playerId?: true;
    missionId?: true;
    completedAt?: true;
};
export type MissionCompletionCountAggregateInputType = {
    playerId?: true;
    missionId?: true;
    completedAt?: true;
    _all?: true;
};
export type MissionCompletionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionCompletionWhereInput;
    orderBy?: Prisma.MissionCompletionOrderByWithRelationInput | Prisma.MissionCompletionOrderByWithRelationInput[];
    cursor?: Prisma.MissionCompletionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MissionCompletionCountAggregateInputType;
    _avg?: MissionCompletionAvgAggregateInputType;
    _sum?: MissionCompletionSumAggregateInputType;
    _min?: MissionCompletionMinAggregateInputType;
    _max?: MissionCompletionMaxAggregateInputType;
};
export type GetMissionCompletionAggregateType<T extends MissionCompletionAggregateArgs> = {
    [P in keyof T & keyof AggregateMissionCompletion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMissionCompletion[P]> : Prisma.GetScalarType<T[P], AggregateMissionCompletion[P]>;
};
export type MissionCompletionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionCompletionWhereInput;
    orderBy?: Prisma.MissionCompletionOrderByWithAggregationInput | Prisma.MissionCompletionOrderByWithAggregationInput[];
    by: Prisma.MissionCompletionScalarFieldEnum[] | Prisma.MissionCompletionScalarFieldEnum;
    having?: Prisma.MissionCompletionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MissionCompletionCountAggregateInputType | true;
    _avg?: MissionCompletionAvgAggregateInputType;
    _sum?: MissionCompletionSumAggregateInputType;
    _min?: MissionCompletionMinAggregateInputType;
    _max?: MissionCompletionMaxAggregateInputType;
};
export type MissionCompletionGroupByOutputType = {
    playerId: number;
    missionId: number;
    completedAt: Date;
    _count: MissionCompletionCountAggregateOutputType | null;
    _avg: MissionCompletionAvgAggregateOutputType | null;
    _sum: MissionCompletionSumAggregateOutputType | null;
    _min: MissionCompletionMinAggregateOutputType | null;
    _max: MissionCompletionMaxAggregateOutputType | null;
};
export type GetMissionCompletionGroupByPayload<T extends MissionCompletionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MissionCompletionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MissionCompletionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MissionCompletionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MissionCompletionGroupByOutputType[P]>;
}>>;
export type MissionCompletionWhereInput = {
    AND?: Prisma.MissionCompletionWhereInput | Prisma.MissionCompletionWhereInput[];
    OR?: Prisma.MissionCompletionWhereInput[];
    NOT?: Prisma.MissionCompletionWhereInput | Prisma.MissionCompletionWhereInput[];
    playerId?: Prisma.IntFilter<"MissionCompletion"> | number;
    missionId?: Prisma.IntFilter<"MissionCompletion"> | number;
    completedAt?: Prisma.DateTimeFilter<"MissionCompletion"> | Date | string;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    mission?: Prisma.XOR<Prisma.MissionScalarRelationFilter, Prisma.MissionWhereInput>;
};
export type MissionCompletionOrderByWithRelationInput = {
    playerId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    player?: Prisma.PlayerOrderByWithRelationInput;
    mission?: Prisma.MissionOrderByWithRelationInput;
};
export type MissionCompletionWhereUniqueInput = Prisma.AtLeast<{
    playerId_missionId?: Prisma.MissionCompletionPlayerIdMissionIdCompoundUniqueInput;
    AND?: Prisma.MissionCompletionWhereInput | Prisma.MissionCompletionWhereInput[];
    OR?: Prisma.MissionCompletionWhereInput[];
    NOT?: Prisma.MissionCompletionWhereInput | Prisma.MissionCompletionWhereInput[];
    playerId?: Prisma.IntFilter<"MissionCompletion"> | number;
    missionId?: Prisma.IntFilter<"MissionCompletion"> | number;
    completedAt?: Prisma.DateTimeFilter<"MissionCompletion"> | Date | string;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    mission?: Prisma.XOR<Prisma.MissionScalarRelationFilter, Prisma.MissionWhereInput>;
}, "playerId_missionId">;
export type MissionCompletionOrderByWithAggregationInput = {
    playerId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    _count?: Prisma.MissionCompletionCountOrderByAggregateInput;
    _avg?: Prisma.MissionCompletionAvgOrderByAggregateInput;
    _max?: Prisma.MissionCompletionMaxOrderByAggregateInput;
    _min?: Prisma.MissionCompletionMinOrderByAggregateInput;
    _sum?: Prisma.MissionCompletionSumOrderByAggregateInput;
};
export type MissionCompletionScalarWhereWithAggregatesInput = {
    AND?: Prisma.MissionCompletionScalarWhereWithAggregatesInput | Prisma.MissionCompletionScalarWhereWithAggregatesInput[];
    OR?: Prisma.MissionCompletionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MissionCompletionScalarWhereWithAggregatesInput | Prisma.MissionCompletionScalarWhereWithAggregatesInput[];
    playerId?: Prisma.IntWithAggregatesFilter<"MissionCompletion"> | number;
    missionId?: Prisma.IntWithAggregatesFilter<"MissionCompletion"> | number;
    completedAt?: Prisma.DateTimeWithAggregatesFilter<"MissionCompletion"> | Date | string;
};
export type MissionCompletionCreateInput = {
    completedAt?: Date | string;
    player: Prisma.PlayerCreateNestedOneWithoutCompletionsInput;
    mission: Prisma.MissionCreateNestedOneWithoutCompletionsInput;
};
export type MissionCompletionUncheckedCreateInput = {
    playerId: number;
    missionId: number;
    completedAt?: Date | string;
};
export type MissionCompletionUpdateInput = {
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    player?: Prisma.PlayerUpdateOneRequiredWithoutCompletionsNestedInput;
    mission?: Prisma.MissionUpdateOneRequiredWithoutCompletionsNestedInput;
};
export type MissionCompletionUncheckedUpdateInput = {
    playerId?: Prisma.IntFieldUpdateOperationsInput | number;
    missionId?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCompletionCreateManyInput = {
    playerId: number;
    missionId: number;
    completedAt?: Date | string;
};
export type MissionCompletionUpdateManyMutationInput = {
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCompletionUncheckedUpdateManyInput = {
    playerId?: Prisma.IntFieldUpdateOperationsInput | number;
    missionId?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCompletionListRelationFilter = {
    every?: Prisma.MissionCompletionWhereInput;
    some?: Prisma.MissionCompletionWhereInput;
    none?: Prisma.MissionCompletionWhereInput;
};
export type MissionCompletionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MissionCompletionPlayerIdMissionIdCompoundUniqueInput = {
    playerId: number;
    missionId: number;
};
export type MissionCompletionCountOrderByAggregateInput = {
    playerId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type MissionCompletionAvgOrderByAggregateInput = {
    playerId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
};
export type MissionCompletionMaxOrderByAggregateInput = {
    playerId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type MissionCompletionMinOrderByAggregateInput = {
    playerId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type MissionCompletionSumOrderByAggregateInput = {
    playerId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
};
export type MissionCompletionCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutPlayerInput, Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput> | Prisma.MissionCompletionCreateWithoutPlayerInput[] | Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput | Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.MissionCompletionCreateManyPlayerInputEnvelope;
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
};
export type MissionCompletionUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutPlayerInput, Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput> | Prisma.MissionCompletionCreateWithoutPlayerInput[] | Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput | Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.MissionCompletionCreateManyPlayerInputEnvelope;
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
};
export type MissionCompletionUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutPlayerInput, Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput> | Prisma.MissionCompletionCreateWithoutPlayerInput[] | Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput | Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.MissionCompletionUpsertWithWhereUniqueWithoutPlayerInput | Prisma.MissionCompletionUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.MissionCompletionCreateManyPlayerInputEnvelope;
    set?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    disconnect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    delete?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    update?: Prisma.MissionCompletionUpdateWithWhereUniqueWithoutPlayerInput | Prisma.MissionCompletionUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.MissionCompletionUpdateManyWithWhereWithoutPlayerInput | Prisma.MissionCompletionUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.MissionCompletionScalarWhereInput | Prisma.MissionCompletionScalarWhereInput[];
};
export type MissionCompletionUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutPlayerInput, Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput> | Prisma.MissionCompletionCreateWithoutPlayerInput[] | Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput | Prisma.MissionCompletionCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.MissionCompletionUpsertWithWhereUniqueWithoutPlayerInput | Prisma.MissionCompletionUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.MissionCompletionCreateManyPlayerInputEnvelope;
    set?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    disconnect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    delete?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    update?: Prisma.MissionCompletionUpdateWithWhereUniqueWithoutPlayerInput | Prisma.MissionCompletionUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.MissionCompletionUpdateManyWithWhereWithoutPlayerInput | Prisma.MissionCompletionUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.MissionCompletionScalarWhereInput | Prisma.MissionCompletionScalarWhereInput[];
};
export type MissionCompletionCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutMissionInput, Prisma.MissionCompletionUncheckedCreateWithoutMissionInput> | Prisma.MissionCompletionCreateWithoutMissionInput[] | Prisma.MissionCompletionUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutMissionInput | Prisma.MissionCompletionCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.MissionCompletionCreateManyMissionInputEnvelope;
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
};
export type MissionCompletionUncheckedCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutMissionInput, Prisma.MissionCompletionUncheckedCreateWithoutMissionInput> | Prisma.MissionCompletionCreateWithoutMissionInput[] | Prisma.MissionCompletionUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutMissionInput | Prisma.MissionCompletionCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.MissionCompletionCreateManyMissionInputEnvelope;
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
};
export type MissionCompletionUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutMissionInput, Prisma.MissionCompletionUncheckedCreateWithoutMissionInput> | Prisma.MissionCompletionCreateWithoutMissionInput[] | Prisma.MissionCompletionUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutMissionInput | Prisma.MissionCompletionCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.MissionCompletionUpsertWithWhereUniqueWithoutMissionInput | Prisma.MissionCompletionUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.MissionCompletionCreateManyMissionInputEnvelope;
    set?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    disconnect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    delete?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    update?: Prisma.MissionCompletionUpdateWithWhereUniqueWithoutMissionInput | Prisma.MissionCompletionUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.MissionCompletionUpdateManyWithWhereWithoutMissionInput | Prisma.MissionCompletionUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.MissionCompletionScalarWhereInput | Prisma.MissionCompletionScalarWhereInput[];
};
export type MissionCompletionUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCompletionCreateWithoutMissionInput, Prisma.MissionCompletionUncheckedCreateWithoutMissionInput> | Prisma.MissionCompletionCreateWithoutMissionInput[] | Prisma.MissionCompletionUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionCompletionCreateOrConnectWithoutMissionInput | Prisma.MissionCompletionCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.MissionCompletionUpsertWithWhereUniqueWithoutMissionInput | Prisma.MissionCompletionUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.MissionCompletionCreateManyMissionInputEnvelope;
    set?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    disconnect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    delete?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    connect?: Prisma.MissionCompletionWhereUniqueInput | Prisma.MissionCompletionWhereUniqueInput[];
    update?: Prisma.MissionCompletionUpdateWithWhereUniqueWithoutMissionInput | Prisma.MissionCompletionUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.MissionCompletionUpdateManyWithWhereWithoutMissionInput | Prisma.MissionCompletionUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.MissionCompletionScalarWhereInput | Prisma.MissionCompletionScalarWhereInput[];
};
export type MissionCompletionCreateWithoutPlayerInput = {
    completedAt?: Date | string;
    mission: Prisma.MissionCreateNestedOneWithoutCompletionsInput;
};
export type MissionCompletionUncheckedCreateWithoutPlayerInput = {
    missionId: number;
    completedAt?: Date | string;
};
export type MissionCompletionCreateOrConnectWithoutPlayerInput = {
    where: Prisma.MissionCompletionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCompletionCreateWithoutPlayerInput, Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput>;
};
export type MissionCompletionCreateManyPlayerInputEnvelope = {
    data: Prisma.MissionCompletionCreateManyPlayerInput | Prisma.MissionCompletionCreateManyPlayerInput[];
    skipDuplicates?: boolean;
};
export type MissionCompletionUpsertWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.MissionCompletionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionCompletionUpdateWithoutPlayerInput, Prisma.MissionCompletionUncheckedUpdateWithoutPlayerInput>;
    create: Prisma.XOR<Prisma.MissionCompletionCreateWithoutPlayerInput, Prisma.MissionCompletionUncheckedCreateWithoutPlayerInput>;
};
export type MissionCompletionUpdateWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.MissionCompletionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionCompletionUpdateWithoutPlayerInput, Prisma.MissionCompletionUncheckedUpdateWithoutPlayerInput>;
};
export type MissionCompletionUpdateManyWithWhereWithoutPlayerInput = {
    where: Prisma.MissionCompletionScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionCompletionUpdateManyMutationInput, Prisma.MissionCompletionUncheckedUpdateManyWithoutPlayerInput>;
};
export type MissionCompletionScalarWhereInput = {
    AND?: Prisma.MissionCompletionScalarWhereInput | Prisma.MissionCompletionScalarWhereInput[];
    OR?: Prisma.MissionCompletionScalarWhereInput[];
    NOT?: Prisma.MissionCompletionScalarWhereInput | Prisma.MissionCompletionScalarWhereInput[];
    playerId?: Prisma.IntFilter<"MissionCompletion"> | number;
    missionId?: Prisma.IntFilter<"MissionCompletion"> | number;
    completedAt?: Prisma.DateTimeFilter<"MissionCompletion"> | Date | string;
};
export type MissionCompletionCreateWithoutMissionInput = {
    completedAt?: Date | string;
    player: Prisma.PlayerCreateNestedOneWithoutCompletionsInput;
};
export type MissionCompletionUncheckedCreateWithoutMissionInput = {
    playerId: number;
    completedAt?: Date | string;
};
export type MissionCompletionCreateOrConnectWithoutMissionInput = {
    where: Prisma.MissionCompletionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCompletionCreateWithoutMissionInput, Prisma.MissionCompletionUncheckedCreateWithoutMissionInput>;
};
export type MissionCompletionCreateManyMissionInputEnvelope = {
    data: Prisma.MissionCompletionCreateManyMissionInput | Prisma.MissionCompletionCreateManyMissionInput[];
    skipDuplicates?: boolean;
};
export type MissionCompletionUpsertWithWhereUniqueWithoutMissionInput = {
    where: Prisma.MissionCompletionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionCompletionUpdateWithoutMissionInput, Prisma.MissionCompletionUncheckedUpdateWithoutMissionInput>;
    create: Prisma.XOR<Prisma.MissionCompletionCreateWithoutMissionInput, Prisma.MissionCompletionUncheckedCreateWithoutMissionInput>;
};
export type MissionCompletionUpdateWithWhereUniqueWithoutMissionInput = {
    where: Prisma.MissionCompletionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionCompletionUpdateWithoutMissionInput, Prisma.MissionCompletionUncheckedUpdateWithoutMissionInput>;
};
export type MissionCompletionUpdateManyWithWhereWithoutMissionInput = {
    where: Prisma.MissionCompletionScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionCompletionUpdateManyMutationInput, Prisma.MissionCompletionUncheckedUpdateManyWithoutMissionInput>;
};
export type MissionCompletionCreateManyPlayerInput = {
    missionId: number;
    completedAt?: Date | string;
};
export type MissionCompletionUpdateWithoutPlayerInput = {
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mission?: Prisma.MissionUpdateOneRequiredWithoutCompletionsNestedInput;
};
export type MissionCompletionUncheckedUpdateWithoutPlayerInput = {
    missionId?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCompletionUncheckedUpdateManyWithoutPlayerInput = {
    missionId?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCompletionCreateManyMissionInput = {
    playerId: number;
    completedAt?: Date | string;
};
export type MissionCompletionUpdateWithoutMissionInput = {
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    player?: Prisma.PlayerUpdateOneRequiredWithoutCompletionsNestedInput;
};
export type MissionCompletionUncheckedUpdateWithoutMissionInput = {
    playerId?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCompletionUncheckedUpdateManyWithoutMissionInput = {
    playerId?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCompletionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    playerId?: boolean;
    missionId?: boolean;
    completedAt?: boolean;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionCompletion"]>;
export type MissionCompletionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    playerId?: boolean;
    missionId?: boolean;
    completedAt?: boolean;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionCompletion"]>;
export type MissionCompletionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    playerId?: boolean;
    missionId?: boolean;
    completedAt?: boolean;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionCompletion"]>;
export type MissionCompletionSelectScalar = {
    playerId?: boolean;
    missionId?: boolean;
    completedAt?: boolean;
};
export type MissionCompletionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"playerId" | "missionId" | "completedAt", ExtArgs["result"]["missionCompletion"]>;
export type MissionCompletionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
};
export type MissionCompletionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
};
export type MissionCompletionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
};
export type $MissionCompletionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MissionCompletion";
    objects: {
        player: Prisma.$PlayerPayload<ExtArgs>;
        mission: Prisma.$MissionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        playerId: number;
        missionId: number;
        completedAt: Date;
    }, ExtArgs["result"]["missionCompletion"]>;
    composites: {};
};
export type MissionCompletionGetPayload<S extends boolean | null | undefined | MissionCompletionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload, S>;
export type MissionCompletionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MissionCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MissionCompletionCountAggregateInputType | true;
};
export interface MissionCompletionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MissionCompletion'];
        meta: {
            name: 'MissionCompletion';
        };
    };
    findUnique<T extends MissionCompletionFindUniqueArgs>(args: Prisma.SelectSubset<T, MissionCompletionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MissionCompletionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MissionCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MissionCompletionFindFirstArgs>(args?: Prisma.SelectSubset<T, MissionCompletionFindFirstArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MissionCompletionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MissionCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MissionCompletionFindManyArgs>(args?: Prisma.SelectSubset<T, MissionCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MissionCompletionCreateArgs>(args: Prisma.SelectSubset<T, MissionCompletionCreateArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MissionCompletionCreateManyArgs>(args?: Prisma.SelectSubset<T, MissionCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MissionCompletionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MissionCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MissionCompletionDeleteArgs>(args: Prisma.SelectSubset<T, MissionCompletionDeleteArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MissionCompletionUpdateArgs>(args: Prisma.SelectSubset<T, MissionCompletionUpdateArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MissionCompletionDeleteManyArgs>(args?: Prisma.SelectSubset<T, MissionCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MissionCompletionUpdateManyArgs>(args: Prisma.SelectSubset<T, MissionCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MissionCompletionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MissionCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MissionCompletionUpsertArgs>(args: Prisma.SelectSubset<T, MissionCompletionUpsertArgs<ExtArgs>>): Prisma.Prisma__MissionCompletionClient<runtime.Types.Result.GetResult<Prisma.$MissionCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MissionCompletionCountArgs>(args?: Prisma.Subset<T, MissionCompletionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MissionCompletionCountAggregateOutputType> : number>;
    aggregate<T extends MissionCompletionAggregateArgs>(args: Prisma.Subset<T, MissionCompletionAggregateArgs>): Prisma.PrismaPromise<GetMissionCompletionAggregateType<T>>;
    groupBy<T extends MissionCompletionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MissionCompletionGroupByArgs['orderBy'];
    } : {
        orderBy?: MissionCompletionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MissionCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MissionCompletionFieldRefs;
}
export interface Prisma__MissionCompletionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    player<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mission<T extends Prisma.MissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MissionDefaultArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MissionCompletionFieldRefs {
    readonly playerId: Prisma.FieldRef<"MissionCompletion", 'Int'>;
    readonly missionId: Prisma.FieldRef<"MissionCompletion", 'Int'>;
    readonly completedAt: Prisma.FieldRef<"MissionCompletion", 'DateTime'>;
}
export type MissionCompletionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
    where: Prisma.MissionCompletionWhereUniqueInput;
};
export type MissionCompletionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
    where: Prisma.MissionCompletionWhereUniqueInput;
};
export type MissionCompletionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MissionCompletionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MissionCompletionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MissionCompletionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionCompletionCreateInput, Prisma.MissionCompletionUncheckedCreateInput>;
};
export type MissionCompletionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MissionCompletionCreateManyInput | Prisma.MissionCompletionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MissionCompletionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    data: Prisma.MissionCompletionCreateManyInput | Prisma.MissionCompletionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MissionCompletionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MissionCompletionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionCompletionUpdateInput, Prisma.MissionCompletionUncheckedUpdateInput>;
    where: Prisma.MissionCompletionWhereUniqueInput;
};
export type MissionCompletionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MissionCompletionUpdateManyMutationInput, Prisma.MissionCompletionUncheckedUpdateManyInput>;
    where?: Prisma.MissionCompletionWhereInput;
    limit?: number;
};
export type MissionCompletionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionCompletionUpdateManyMutationInput, Prisma.MissionCompletionUncheckedUpdateManyInput>;
    where?: Prisma.MissionCompletionWhereInput;
    limit?: number;
    include?: Prisma.MissionCompletionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MissionCompletionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
    where: Prisma.MissionCompletionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCompletionCreateInput, Prisma.MissionCompletionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MissionCompletionUpdateInput, Prisma.MissionCompletionUncheckedUpdateInput>;
};
export type MissionCompletionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
    where: Prisma.MissionCompletionWhereUniqueInput;
};
export type MissionCompletionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionCompletionWhereInput;
    limit?: number;
};
export type MissionCompletionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCompletionSelect<ExtArgs> | null;
    omit?: Prisma.MissionCompletionOmit<ExtArgs> | null;
    include?: Prisma.MissionCompletionInclude<ExtArgs> | null;
};
