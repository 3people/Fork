export const aiReview = {
  ko: `
    ---------
    제가 OCR로 읽어들인 메뉴판에 대한 JSON 내용을 드릴겁니다. 이 내용에는 다양한 정보가 포함되어 있습니다.
    당신의 작업은 이 JSON 메뉴판의 정보를 토대로
    아래 양식에 맞게 내용을 채워서 JSON 데이터를 만드는 것입니다.
    아래 데이터 형식 이외에 다른 응답은 절대 하지 않습니다.
    
    {
      "recommendedMenu": "",
      "cautionNote": "",
      "menuHighlight": "",
      "foreignerTip": "",
      "overallImpression": ""
    }
    
    ----
    키 설명
    "recommendedMenu": "가장 추천하고 싶은 메뉴와 그 이유",
    "cautionNote": "주의해야 할 사항이나 알레르기 정보",
    "menuHighlight": "메뉴의 특징이나 독특한 점",
    "foreignerTip": "외국인 관광객을 위한 팁이나 조언",
    "overallImpression": "메뉴판 전체에 대한 종합적인 평가나 인상"
  `,
  en: `
  Here is the English translation of the prompt:
  I will provide you with the JSON content of a menu board read by OCR. This content includes various information.
  Your task is to fill in the content according to the following format based on the information from the JSON menu board.
  You will not create any other response other than this data format.
  {
    "recommendedMenu": "",
    "cautionNote": "",
    "menuHighlight": "",
    "foreignerTip": "",
    "overallImpression": ""
  }
  Key descriptions:
  "recommendedMenu": "The most recommended menu and the reason for it",
  "cautionNote": "Things to be cautious about or allergy information",
  "menuHighlight": "Characteristics or unique points of the menu",
  "foreignerTip": "Tips or advice for foreign tourist guests",
  "overallImpression": "An overall evaluation or impression of the menu board"
  `,
  ja: `
  ここには、OCRで読み取ったメニューボードのJSON内容を提供します。この情報には様々な情報が含まれています。

  あなたの仕事は、このJSONメニューボードの情報を元に、以下のフォーマットに従ってコンテンツを埋めることです。
  
  他のレスポンス形式は絶対に作成しません。
  {
    "recommendedMenu": "",
    "cautionNote": "",
    "menuHighlight": "",
    "foreignerTip": "",
    "overallImpression": ""
  }
  キー説明:
  "recommendedMenu": "最も推奨されているメニューとその理由",
  "cautionNote": "注意すべきことやアレルギー情報",
  "menuHighlight": "メニューの特徴や独特な点",
  "foreignerTip": "外国人観光客向けのチップや勧告",
  "overallImpression": "メニューボードの全体的な評価や印象"
  `,
  zh: `
  我将为您提供OCR读取的菜单板的JSON内容。这里包含了各种信息。

  您的任务是根据JSON菜单板的信息，按照以下格式填写内容。您不会创建任何其他响应格式。
  {
    "recommendedMenu": "",
    "cautionNote": "",
    "menuHighlight": "",
    "foreignerTip": "",
    "overallImpression": ""
  }
  键描述:
  "recommendedMenu": "最受推荐的菜单以及原因",
  "cautionNote": "需要注意的事项或过敏信息",
  "menuHighlight": "菜单的特点或独特之处",
  "foreignerTip": "为外国游客准备的提示或建议",
  "overallImpression": "菜单板的整体评价或印象"
  `,
}
