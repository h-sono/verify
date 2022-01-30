import React, { useState, useRef } from 'react';
import { ComboBox, ComboBoxItem } from './atoms/ComboBox';
import { SelectBox, SelectBoxItem } from './atoms/SelectBox';
import { SelectBoxSelected, SelectBoxSelectedItem } from './atoms/SelectBoxSelected';

export interface SurveyResult {
  surveyId: string;
  surveyTitle: string;
  questions: {
    questionId: string;
    questionText: string;
    answerCount: number;
  }[];
}

const SurveyResultList: SurveyResult[] = [
  {
    surveyId: '1',
    surveyTitle: '会社説明会（7月）',
    questions: [
      {
        questionId: '1',
        questionText: '得意なプログラム言語は？',
        answerCount: 15,
      },
      {
        questionId: '2',
        questionText: '興味のある職種は？',
        answerCount: 12,
      },
    ],
  },
  {
    surveyId: '2',
    surveyTitle: '会社説明会（8月）',
    questions: [
      {
        questionId: '1',
        questionText: '興味のある職種は？',
        answerCount: 23,
      },
      {
        questionId: '2',
        questionText: '弊社の求人をどこで知りましたか？',
        answerCount: 24,
      },
    ],
  },
  {
    surveyId: '3',
    surveyTitle: 'DevelopersIOイベント',
    questions: [
      {
        questionId: '1',
        questionText: '今回のイベントをどこで知りましたか？',
        answerCount: 40,
      },
      {
        questionId: '2',
        questionText: '興味のある職種は？',
        answerCount: 37,
      },
      {
        questionId: '3',
        questionText: '得意なプログラム言語は？',
        answerCount: 29,
      },
    ],
  },
];

const verifyItemsInSelFlg: SelectBoxSelectedItem[] = [
  {
    id: '1',
    value: 'value1',
    selectedFlg: false
  },
  {
    id: '2',
    value: 'value2',
    selectedFlg: false
  },
  {
    id: '3',
    value: 'value3(selected対象)',
    selectedFlg: true
  },
  {
    id: '4',
    value: 'value4',
    selectedFlg: false
  }
];

const verifyItemsExSelFlg: SelectBoxItem[] = [
  // {
  //   id: '1',
  //   value: 'value1',
  // },
  // {
  //   id: '2',
  //   value: 'value2',
  // },
  {
    id: '3',
    value: 'value3(selected,disable対象)',
  },
  // {
  //   id: '4',
  //   value: 'value4',
  // }
];

export const App2 = () => {
  //ComboBoxのアイテムとするアンケート一覧をStateで管理
  const [surveyOptions] = useState<ComboBoxItem[]>(
    SurveyResultList.map((d) => {
      return {
        id: d.surveyId,
        value: d.surveyTitle,
      };
    })
  );
  //アンケートComboBoxで選択中のアンケートIDをStateで管理
  const [selectedSurveyId, setSelectedSurveyId] = useState<string>(
    SurveyResultList[0].surveyId
  );
  //選択中のアンケートの質問一覧をRefで管理
  const questionOptionsRef = useRef(
    SurveyResultList.filter(
      (d) => d.surveyId === selectedSurveyId
    )[0].questions.map((d) => {
      return {
        id: d.questionId,
        value: d.questionText,
      };
    })
  );
  //質問ComboBoxで選択中の質問IDをStateで管理
  const [selectedQuestionId, setSelectedQuestionId] = useState(
    SurveyResultList[0].questions[0].questionId
  );

  const onSurveyComboBoxChangeHandler = (surveyId: string) => {
    //選択したアンケートIDをStateに指定
    setSelectedSurveyId(surveyId);

    //選択したアンケートの質問一覧
    const selectedSurveyQuestions = SurveyResultList.filter(
      (d) => d.surveyId === surveyId
    )[0].questions;

    //選択したアンケートの先頭の質問をStateに指定
    setSelectedQuestionId(selectedSurveyQuestions[0].questionId);

    //選択したアンケートの質問をRefに指定
    questionOptionsRef.current = selectedSurveyQuestions.map((d) => {
      return {
        id: d.questionId,
        value: d.questionText,
      };
    });
  };

  return (
    <>
      <ComboBox
        inputLabel='アンケート'
        items={surveyOptions}
        value={selectedSurveyId}
        defaultValue={surveyOptions[0].id}
        onChange={(selected) => onSurveyComboBoxChangeHandler(selected)}
      />
      <ComboBox
        inputLabel='質問'
        items={questionOptionsRef.current}
        value={selectedQuestionId}
        defaultValue={'1'}
        onChange={(selected) => setSelectedQuestionId(selected)}
      />
      <div>
        この質問へは{' '}
        {
          SurveyResultList.filter(
            (d) => d.surveyId === selectedSurveyId
          )[0].questions.filter((d) => d.questionId === selectedQuestionId)[0]
            .answerCount
        }{' '}
        の回答がありました。
      </div>
      <SelectBox
        inputLabel='検証セレクトボックス(selectedFlgが外部から渡されるパターン)'
        items={verifyItemsExSelFlg}
        defaultValue={''}
        selectedFlg={true}
      />
      <SelectBoxSelected
        inputLabel='検証セレクトボックス(selectedFlgがリスト内から渡されるパターン)'
        items={verifyItemsInSelFlg}
      />
    </>
  );
};
