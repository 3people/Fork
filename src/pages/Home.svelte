<script lang="ts">
    import Poi from "../assets/icons/Poi.svelte";
    import ArrowDown from "../assets/icons/ArrowDown.svelte";

    let currentLocation = '신대방동'
</script>
<div class="w-[22.5rem] mt-8 px-4">
    <div class="flex">
        <div class="pr-4">logo</div>
        <div class="flex gap-4 font-bold text-lg [&>div]:pb-[0.375rem]">
            <div class="border-solid border-b-2 border-b-black">인파예보</div>
            <div>추천장소</div>
        </div>
    </div>
    <div class="mt-4 bg-[#f9f9fb] rounded-xl px-2.5 py-3">
        <div class="flex items-center">
            <Poi />
            <span class="ml-1">{currentLocation}</span>
            <ArrowDown />
        </div>
    </div>
    <div class="mt-8">
        지금 {currentLocation}은 사람 많아요~
    </div>
    <div class="mt-0.5 flex flex-col">
        <span>현재시간 업데이트</span>
        <span class="mt-0.5">실시간 혼잡도 분석</span>
        <div class="flex flex-col mt-4">
            <span>혼잡도</span>
            <span>4.2/5.0</span>
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
