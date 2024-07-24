<script lang="ts">
    import Poi from "../assets/icons/Poi.svelte";
    import ArrowDown from "../assets/icons/ArrowDown.svelte";
    import Location from "../assets/icons/Location.svelte";

    let currentLocation = '신대방동'
</script>
<div class="w-[22.5rem] mt-8 px-4">
    <div class="flex">
        <div class="pr-4"></div>
        <div class="flex gap-4 font-bold text-lg [&>div]:pb-[0.375rem]">
            <div class="border-solid border-b-2 border-b-black">인파예보</div>
            <div>추천장소</div>
        </div>
    </div>
    <div class="mt-4 bg-[#f9f9fb] rounded-xl px-2.5 py-3 flex justify-between">
        <div class="flex items-center font-semibold text-sm">
            <Poi />
            <span class="ml-1 mr-0.5">{currentLocation}</span>
            <ArrowDown />
        </div>
        <div class="flex items-center">
            <Location />
            <span class="ml-1 text-xs text-[#9b9b9b]">현위치</span>
        </div>
    </div>
    <div class="mt-8 text-2xl">
        <span>지금 <strong class="font-black">{currentLocation}</strong>은 </span>
        <br />
        <span>사람이 너무 많아서 정신이 없어요.</span>
    </div>
    <div class="mt-0.5 flex flex-col">
        <span class="text-[#CED1D9] text-[10px]">24.01.01 00:00 업데이트</span>
        <span class="mt-0.5 text-sm">실시간 혼잡도 분석</span>
        <div class="flex gap-8 mt-4 text-[10px]">
            <div class="flex flex-col gap-1">
                <span class="text-[#CED1D9]">혼잡도</span>
                <span>4.2/5.0</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-[#CED1D9]">날씨</span>
                <span>비</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-[#CED1D9]">요일</span>
                <span>공휴일</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-[#CED1D9]">특이사항</span>
                <span>행사 진행</span>
            </div>
        </div>
    </div>
    <div class="flex flex-col mt-12">
        <span>시간 별 혼잡도 예보</span>
        <span class="mt-0.5">지난 데이터와 날씨, 공휴일 및 특이사항을 종합하여 AI가 예측한 결과입니다.</span>
        <div class="mt-1">차트</div>
    </div>
    <div class="mt-8">
        <span>이번 주 {currentLocation} 인파예보</span>
        <div class="mt-4">예보 위치</div>
    </div>
</div>
