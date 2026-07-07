// 土質力学1(309219) 藤井幸泰 / 2年・必修 / 前期
// SCHEMA.md v1 準拠
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA["doshitsu1"] = {
  id: "doshitsu1",
  name: "土質力学1",
  teacher: "藤井 幸泰",
  year: "2年・必修",
  examInfo: "定期試験70% / 課題・演習30%",
  examTips: "到達目標より、三相構造の物理量計算(w・e・Sr・γの相互換算)とダルシーの法則まわり(透水係数・動水勾配・透水試験)が最頻出。締固め曲線の読み取り、限界動水勾配、フローネットの流量計算、井戸の定常揚水式まで手を動かして計算できるようにしておくこと。毎回の宿題が30%を占めるので演習の型をそのまま試験に持ち込める。",

  glossary: [
    { term: "間隙比", reading: "かんげきひ", def: "間隙(水+空気)の体積を土粒子の体積で割った値 e = Vv/Vs。無次元。ゆるい土ほど大きい。" },
    { term: "間隙率", reading: "かんげきりつ", def: "間隙の体積を土全体の体積で割った値 n = Vv/V。%で表すことが多い。間隙比と換算できる。" },
    { term: "含水比", reading: "がんすいひ", def: "水の質量を土粒子(乾燥土)の質量で割った値 w = mw/ms ×100(%)。100%を超えることもある。" },
    { term: "飽和度", reading: "ほうわど", def: "間隙のうち水が占める体積の割合 Sr = Vw/Vv ×100(%)。100%なら間隙がすべて水で満たされた飽和状態。" },
    { term: "土粒子の密度", reading: "どりゅうしのみつど", def: "土粒子(固体部分)だけの密度 ρs。水との比が比重 Gs で、多くの土で2.6〜2.8程度。" },
    { term: "単位体積重量", reading: "たんいたいせきじゅうりょう", def: "土の単位体積あたりの重量 γ = W/V (kN/m³)。湿潤・乾燥・飽和・水中の4種類を使い分ける。" },
    { term: "粒径加積曲線", reading: "りゅうけいかせききょくせん", def: "粒径を横軸(対数)、その粒径より細かい粒子の質量百分率を縦軸にとった曲線。粒度の良し悪しを判定する。" },
    { term: "均等係数", reading: "きんとうけいすう", def: "Uc = D60/D10。粒径の幅広さの指標。10以上なら粒径幅が広く、締固めやすい良配合の目安。" },
    { term: "コンシステンシー", reading: "こんしすてんしー", def: "細粒土が含水比によって液状→塑性→半固体→固体と状態を変える性質。境界の含水比を限界という。" },
    { term: "液性限界", reading: "えきせいげんかい", def: "土が塑性状態から液状に変わる境界の含水比 wL。これより濡れるとドロドロに流れる。" },
    { term: "塑性限界", reading: "そせいげんかい", def: "土が塑性状態から半固体に変わる境界の含水比 wp。ひも状に伸ばせる最小の含水比。" },
    { term: "塑性指数", reading: "そせいしすう", def: "Ip = wL − wp。塑性を示す含水比の幅。大きいほど粘土分が多く、水を含むと扱いにくい。" },
    { term: "相対密度", reading: "そうたいみつど", def: "砂の詰まり具合を最ゆる詰め(emax)と最密詰め(emin)の間で表す指標 Dr。液状化の検討にも使う。" },
    { term: "鋭敏比", reading: "えいびんひ", def: "St = 乱さない粘土の強さ/練り返した粘土の強さ。大きい粘土は乱すと急に弱くなる。" },
    { term: "サクション", reading: "さくしょん", def: "不飽和土で間隙水圧が負になることで生じる吸引力 s = ua − uw。土粒子どうしを引き寄せ見かけの強さを与える。" },
    { term: "毛管作用", reading: "もうかんさよう", def: "細い隙間を水が表面張力で吸い上げられる現象。土中では地下水面より上に水が上昇する原因。" },
    { term: "締固め", reading: "しめかため", def: "転圧などで土中の空気を追い出し、乾燥密度を高めて強く安定な土にする作業。盛土施工の基本。" },
    { term: "最大乾燥密度", reading: "さいだいかんそうみつど", def: "締固め曲線の頂点での乾燥密度 ρdmax。同じ締固めエネルギーで達成できる最も密な状態。" },
    { term: "最適含水比", reading: "さいてきがんすいひ", def: "最大乾燥密度が得られる含水比 wopt。これより乾いても湿っても締まりにくい。" },
    { term: "ダルシーの法則", reading: "だるしーのほうそく", def: "土中の浸透流速が動水勾配に比例する法則 v = ki。土質力学の透水計算の出発点。" },
    { term: "透水係数", reading: "とうすいけいすう", def: "土の水の通しやすさを表す比例定数 k (m/s)。礫で大きく粘土で極めて小さい。10桁近く変化する。" },
    { term: "動水勾配", reading: "どうすいこうばい", def: "i = Δh/L。水頭差を浸透距離で割った無次元量。水を流そうとする駆動力の大きさ。" },
    { term: "透水力", reading: "とうすいりょく", def: "浸透する水が土粒子を押す力。単位体積あたり j = iγw。上向きに働くと土を持ち上げようとする。" },
    { term: "限界動水勾配", reading: "げんかいどうすいこうばい", def: "上向き浸透で土の有効重量と透水力がつり合う動水勾配 ic = γ'/γw ≒ 1。これを超えるとボイリング。" },
    { term: "ボイリング", reading: "ぼいりんぐ", def: "上向きの浸透力で砂が沸き立つように吹き上がり、地盤が支持力を失う現象。掘削工事の重大事故要因。" },
    { term: "流線", reading: "りゅうせん", def: "土中を浸透する水の通り道を表す線。等ポテンシャル線と直交する。" },
    { term: "等ポテンシャル線", reading: "とうぽてんしゃるせん", def: "全水頭が等しい点を結んだ線。この線を横切るときに水頭が失われていく。" },
    { term: "フローネット", reading: "ふろーねっと", def: "流線と等ポテンシャル線を直交する網目状に描いた図。ラプラス方程式の図式解法で、流量や水圧を簡易に求められる。" },
    { term: "Dupitの仮定", reading: "でゅぴのかてい", def: "自由水面をもつ緩やかな地下水流れで「流れは水平、動水勾配は水面勾配に等しい」とみなす近似。井戸の揚水式の基礎。" },
    { term: "定常揚水", reading: "ていじょうようすい", def: "井戸から一定流量で汲み続け、水位が時間変化しなくなった状態。透水係数の現場測定にも使う。" }
  ],

  units: [
    // ================= u1 =================
    {
      id: "u1",
      title: "土の三相構造と基本物理量",
      weeks: "第1〜3週",
      priority: 3,
      sections: [
        {
          heading: "土は3つの相でできている",
          body: "<p>土は<b>固体(土粒子)・液体(水)・気体(空気)</b>の3相が混ざった材料です。コンクリートや鋼と違い、同じ土でも水や空気の割合で性質がガラリと変わります。砂場の砂が、乾いていればサラサラ、少し湿ると団子が作れ、水浸しだとドロドロになるのと同じです。そこで実物の土を頭の中で「粒子・水・空気」に分けて積み上げた<b>三相図</b>を描き、体積 $V$ と質量 $m$ を相ごとに整理します。三相図を描くことが、[[間隙比]]や[[含水比]]などあらゆる物理量計算の第一歩です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='120' y='40' width='120' height='60' fill='var(--c-fill1)' stroke='var(--c-line)'/><rect x='120' y='100' width='120' height='80' fill='var(--c-fill2)' stroke='var(--c-line)'/><rect x='120' y='180' width='120' height='80' fill='var(--c-accent)' opacity='0.55' stroke='var(--c-line)'/><text x='180' y='75' font-size='15' text-anchor='middle' fill='var(--c-text)'>空気 Va</text><text x='180' y='145' font-size='15' text-anchor='middle' fill='var(--c-text)'>水 Vw, mw</text><text x='180' y='225' font-size='15' text-anchor='middle' fill='var(--c-text)'>土粒子 Vs, ms</text><path d='M105 40 L95 40 L95 180 L105 180' fill='none' stroke='var(--c-line)'/><text x='60' y='115' font-size='14' text-anchor='middle' fill='var(--c-text)'>間隙 Vv</text><path d='M255 40 L265 40 L265 260 L255 260' fill='none' stroke='var(--c-line)'/><text x='300' y='155' font-size='14' text-anchor='middle' fill='var(--c-text)'>全体 V, m</text><text x='180' y='290' font-size='14' text-anchor='middle' fill='var(--c-text)'>三相図:左に体積、右に質量を書く</text></svg>"
        },
        {
          heading: "体積の指標:間隙比・間隙率・飽和度",
          body: "<p>体積のすき間具合を表すのが[[間隙比]] $e = V_v/V_s$ と[[間隙率]] $n = V_v/V$ です。分母が「土粒子」か「全体」かの違いで、$n = e/(1+e)$ で換算できます。土質力学では計算中に変化しない $V_s$ を基準にとる $e$ の方がよく使われます。すき間のうち水がどれだけ占めるかが[[飽和度]] $S_r = V_w/V_v \\times 100$ で、スポンジにどれだけ水が染みているかのイメージです。$S_r=100\\%$ が飽和(地下水面より下の土)、$0\\%$ が完全乾燥です。</p>"
        },
        {
          heading: "質量・重量の指標:含水比と単位体積重量",
          body: "<p>[[含水比]] $w = m_w/m_s \\times 100$ は水の質量を<b>乾燥土の質量</b>で割ったもの。全体でなく土粒子基準なので、水分の多い粘土では100%を超えることもあります。「炉乾燥後の質量」と出たらそれが $m_s$ の合図です。設計では重さを[[単位体積重量]] $\\gamma = W/V$ (kN/m³)で扱い、湿潤 $\\gamma_t$、乾燥 $\\gamma_d$、飽和 $\\gamma_{sat}$、水中 $\\gamma'$ を使い分けます。水中の土は浮力を受けるため $\\gamma' = \\gamma_{sat} - \\gamma_w$ と軽くなります。プールの中では体が軽く感じるのと同じ理屈です。</p>"
        },
        {
          heading: "最重要の相互関係式 Se = wGs",
          body: "<p>4つの基本量を結ぶのが $S_r e = w G_s$ です([[土粒子の密度]]の比重 $G_s = \\rho_s/\\rho_w$)。導出は簡単で、$V_w = wm_s/(100\\rho_w)$ と $V_v = eV_s$ を $S_r$ の定義に入れるだけ。この1本で「$w$ と $G_s$ と $e$ が分かれば $S_r$ が出る」など、どれか3つから残り1つを即座に求められます。試験では三相図を描いて $V_s=1$ とおく解法と、この式で一発換算する解法の両方を持っておくと検算ができて強いです。</p>"
        }
      ],
      formulas: [
        { id: "f1", name: "間隙比の定義", latex: "e = \\dfrac{V_v}{V_s}", vars: [ { sym: "e", meaning: "間隙比", unit: "無次元" }, { sym: "V_v", meaning: "間隙(水+空気)の体積", unit: "m³" }, { sym: "V_s", meaning: "土粒子の体積", unit: "m³" } ], when: "「間隙比を求めよ」、体積の内訳が与えられたとき。ほぼ全ての三相計算の起点", intuition: "土粒子1に対してすき間がどれだけあるかの比。ゆるい土ほど大きい", derivation: "定義式。三相図で V を Vs と Vv に分ければそのまま", blank: "e = \\dfrac{?}{V_s}", blankAnswer: "V_v" },
        { id: "f2", name: "間隙率の定義", latex: "n = \\dfrac{V_v}{V} \\times 100", vars: [ { sym: "n", meaning: "間隙率", unit: "%" }, { sym: "V_v", meaning: "間隙の体積", unit: "m³" }, { sym: "V", meaning: "土全体の体積", unit: "m³" } ], when: "「間隙率」と指定されたとき。全体積に対する割合が欲しいとき", intuition: "土全体のうち何%がすき間か。100%を超えることはない", derivation: "分母が全体 V になっただけ。e との違いは分母", blank: "n = \\dfrac{V_v}{?} \\times 100", blankAnswer: "V" },
        { id: "f3", name: "間隙比と間隙率の関係", latex: "n = \\dfrac{e}{1+e} \\times 100", vars: [ { sym: "n", meaning: "間隙率", unit: "%" }, { sym: "e", meaning: "間隙比", unit: "無次元" } ], when: "e と n の換算問題。片方だけ与えられてもう片方が必要なとき", intuition: "Vs=1 とおけば Vv=e、V=1+e。定義に入れるだけ", derivation: "三相図で Vs=1 とおくと V=1+e。n=Vv/V=e/(1+e)", blank: "n = \\dfrac{e}{?} \\times 100", blankAnswer: "1+e" },
        { id: "f4", name: "含水比の定義", latex: "w = \\dfrac{m_w}{m_s} \\times 100", vars: [ { sym: "w", meaning: "含水比", unit: "%" }, { sym: "m_w", meaning: "水の質量", unit: "g" }, { sym: "m_s", meaning: "土粒子(乾燥土)の質量", unit: "g" } ], when: "湿潤質量と炉乾燥後質量が与えられたとき。mw = 湿潤 − 乾燥", intuition: "乾いた土に対して水が何%あるか。分母は全体でなく乾燥土", derivation: "定義式。「乾燥後質量」= ms がキーワード", blank: "w = \\dfrac{m_w}{?} \\times 100", blankAnswer: "m_s" },
        { id: "f5", name: "飽和度の定義", latex: "S_r = \\dfrac{V_w}{V_v} \\times 100", vars: [ { sym: "S_r", meaning: "飽和度", unit: "%" }, { sym: "V_w", meaning: "水の体積", unit: "m³" }, { sym: "V_v", meaning: "間隙の体積", unit: "m³" } ], when: "「飽和度を求めよ」、間隙のうち水の割合が欲しいとき", intuition: "すき間がどれだけ水で満たされているか。飽和なら100%", derivation: "定義式。分母は V でなく Vv であることに注意", blank: "S_r = \\dfrac{?}{V_v} \\times 100", blankAnswer: "V_w" },
        { id: "f6", name: "基本量の相互関係式", latex: "S_r \\, e = w \\, G_s", vars: [ { sym: "S_r", meaning: "飽和度", unit: "%" }, { sym: "e", meaning: "間隙比", unit: "無次元" }, { sym: "w", meaning: "含水比", unit: "%" }, { sym: "G_s", meaning: "土粒子の比重", unit: "無次元" } ], when: "w・e・Sr・Gs のうち3つが分かって残り1つを求めるとき。換算問題の最短ルート", intuition: "4兄弟をつなぐ橋。飽和土なら Sr=100 で e = wGs/100", derivation: "Vw = w ms/(100ρw)、Vv = eVs、ms = Gs ρw Vs を Sr の定義に代入すると導ける", blank: "S_r \\, e = w \\, ?", blankAnswer: "G_s" },
        { id: "f7", name: "湿潤単位体積重量", latex: "\\gamma_t = \\dfrac{W}{V} = \\dfrac{G_s(1 + w/100)}{1+e} \\gamma_w", vars: [ { sym: "\\gamma_t", meaning: "湿潤単位体積重量", unit: "kN/m³" }, { sym: "W", meaning: "土全体の重量", unit: "kN" }, { sym: "\\gamma_w", meaning: "水の単位体積重量(=9.81)", unit: "kN/m³" } ], when: "自然状態の土の重さが必要なとき。土被り圧の計算の基礎", intuition: "土1m³の重さ。普通の土で17〜20 kN/m³程度", derivation: "Vs=1 の三相図で W = Gsγw(1+w/100)、V = 1+e", blank: "\\gamma_t = \\dfrac{G_s(1 + w/100)}{?} \\gamma_w", blankAnswer: "1+e" },
        { id: "f8", name: "乾燥単位体積重量", latex: "\\gamma_d = \\dfrac{\\gamma_t}{1 + w/100} = \\dfrac{G_s}{1+e} \\gamma_w", vars: [ { sym: "\\gamma_d", meaning: "乾燥単位体積重量", unit: "kN/m³" }, { sym: "\\gamma_t", meaning: "湿潤単位体積重量", unit: "kN/m³" }, { sym: "w", meaning: "含水比", unit: "%" } ], when: "水を除いた土粒子だけの重さが欲しいとき。締固め管理でも主役", intuition: "水の重さを差し引いた正味の詰まり具合。締固めの評価指標", derivation: "W = Ws(1+w/100) を γt の式に入れて Ws/V を取り出す", blank: "\\gamma_d = \\dfrac{\\gamma_t}{?}", blankAnswer: "1 + w/100" },
        { id: "f9", name: "飽和単位体積重量", latex: "\\gamma_{sat} = \\dfrac{G_s + e}{1+e} \\gamma_w", vars: [ { sym: "\\gamma_{sat}", meaning: "飽和単位体積重量", unit: "kN/m³" }, { sym: "G_s", meaning: "土粒子の比重", unit: "無次元" }, { sym: "e", meaning: "間隙比", unit: "無次元" } ], when: "地下水面より下の土の重さ。有効応力計算の前段", intuition: "すき間が全部水の状態。Vs=1 なら粒子 Gsγw + 水 eγw", derivation: "三相図で Vs=1、Vw=e とおくと W = (Gs+e)γw、V = 1+e", blank: "\\gamma_{sat} = \\dfrac{? + e}{1+e} \\gamma_w", blankAnswer: "G_s" },
        { id: "f10", name: "水中単位体積重量", latex: "\\gamma' = \\gamma_{sat} - \\gamma_w", vars: [ { sym: "\\gamma'", meaning: "水中(有効)単位体積重量", unit: "kN/m³" }, { sym: "\\gamma_{sat}", meaning: "飽和単位体積重量", unit: "kN/m³" }, { sym: "\\gamma_w", meaning: "水の単位体積重量", unit: "kN/m³" } ], when: "水中にある土の実質重量。限界動水勾配や有効応力で必須", intuition: "浮力の分だけ軽くなる。だいたい γsat の半分程度になる", derivation: "アルキメデスの原理。体積 V の土は Vγw の浮力を受ける", blank: "\\gamma' = \\gamma_{sat} - ?", blankAnswer: "\\gamma_w" }
      ],
      selectQuiz: [
        { q: "湿潤質量と炉乾燥後の質量が与えられ、土の水分状態を%で表したい", choices: ["含水比の定義 w = mw/ms ×100", "飽和度の定義 Sr = Vw/Vv ×100", "間隙比の定義 e = Vv/Vs", "湿潤単位体積重量の式"], answer: 0, expl: "「炉乾燥後の質量」= ms。湿潤 − 乾燥 = mw を作って定義式へ", formulaRef: "f4" },
        { q: "含水比 w、比重 Gs、間隙比 e が分かっていて飽和度 Sr を求めたい", choices: ["Sr e = w Gs", "n = e/(1+e)", "γd = γt/(1+w/100)", "Sr = Vw/Vv ×100"], answer: 0, expl: "3つ分かって残り1つ→相互関係式 Se = wGs が最短", formulaRef: "f6" },
        { q: "間隙比 e だけが与えられ、間隙率 n に換算したい", choices: ["n = e/(1+e) ×100", "e = Vv/Vs", "Sr e = w Gs", "γ' = γsat − γw"], answer: 0, expl: "e ↔ n の換算は n = e/(1+e)。逆は e = n/(100−n)", formulaRef: "f3" },
        { q: "地下水面より下にある砂層の、浮力を考慮した実質的な重さが必要", choices: ["水中単位体積重量 γ' = γsat − γw", "乾燥単位体積重量", "湿潤単位体積重量", "含水比の定義"], answer: 0, expl: "水中の土は浮力分軽い。γ' を使うのが有効応力の考え方につながる", formulaRef: "f10" },
        { q: "湿潤単位体積重量 γt と含水比 w から水を除いた γd を求めたい", choices: ["γd = γt/(1+w/100)", "γsat = (Gs+e)γw/(1+e)", "γt = W/V", "n = Vv/V ×100"], answer: 0, expl: "湿潤→乾燥は (1+w/100) で割るだけ。締固め試験でも毎回使う", formulaRef: "f8" }
      ],
      problems: [
        {
          id: "p1",
          pattern: "三相構造の物理量計算(実測値から)",
          variants: [
            {
              q: "体積100 cm³の土試料の湿潤質量は185 g、炉乾燥後の質量は135 gであった。土粒子の比重を2.70、水の密度を1.0 g/cm³として、含水比w、間隙比e、飽和度Srを求めよ。",
              steps: [
                { label: "① 式の選択", content: "実測値→定義式で攻める。$w = \\dfrac{m_w}{m_s} \\times 100$、$e = \\dfrac{V_v}{V_s}$、$S_r = \\dfrac{V_w}{V_v} \\times 100$。三相図を描き分かる量を書き込む" },
                { label: "② 質量の整理", content: "$m_w = 185 - 135 = 50$ g、$m_s = 135$ g。よって $w = \\dfrac{50}{135} \\times 100 = 37.0\\%$" },
                { label: "③ 体積の整理", content: "$V_s = \\dfrac{m_s}{G_s \\rho_w} = \\dfrac{135}{2.70} = 50.0$ cm³、$V_v = 100 - 50.0 = 50.0$ cm³、$V_w = \\dfrac{50}{1.0} = 50.0$ cm³" },
                { label: "④ 計算", content: "$e = \\dfrac{50.0}{50.0} = 1.00$、$S_r = \\dfrac{50.0}{50.0} \\times 100 = 100\\%$" },
                { label: "⑤ 検算", content: "$S_r e = 100 \\times 1.00 = 100$、$w G_s = 37.0 \\times 2.70 = 100$。一致するのでOK(飽和土)" }
              ],
              answer: "w = 37.0%、e = 1.00、Sr = 100%"
            },
            {
              q: "体積120 cm³の土試料の湿潤質量は216 g、炉乾燥後の質量は180 gであった。土粒子の比重を2.70として、含水比w、間隙比e、飽和度Srを求めよ。",
              steps: [
                { label: "① 式の選択", content: "前問と同じく定義式ルート。まず三相図に $V=120$、$m=216$、$m_s=180$ を書き込む" },
                { label: "② 質量の整理", content: "$m_w = 216 - 180 = 36$ g → $w = \\dfrac{36}{180} \\times 100 = 20.0\\%$" },
                { label: "③ 体積の整理", content: "$V_s = \\dfrac{180}{2.70} = 66.7$ cm³、$V_v = 120 - 66.7 = 53.3$ cm³、$V_w = 36.0$ cm³" },
                { label: "④ 計算", content: "$e = \\dfrac{53.3}{66.7} = 0.80$、$S_r = \\dfrac{36.0}{53.3} \\times 100 = 67.5\\%$" },
                { label: "⑤ 検算", content: "$S_r e = 67.5 \\times 0.80 = 54.0$、$w G_s = 20.0 \\times 2.70 = 54.0$。一致、不飽和土として妥当" }
              ],
              answer: "w = 20.0%、e = 0.80、Sr = 67.5%"
            }
          ],
          formulaRefs: ["f1", "f4", "f5", "f6"]
        },
        {
          id: "p2",
          pattern: "相互関係式 Se = wGs による換算",
          variants: [
            {
              q: "含水比18%、土粒子の比重2.65、間隙比0.60の土の飽和度を求めよ。",
              steps: [
                { label: "① 式の選択", content: "w・Gs・e の3つが既知で Sr が未知 → 相互関係式 $S_r e = w G_s$ 一択" },
                { label: "② 代入", content: "$S_r = \\dfrac{w G_s}{e} = \\dfrac{18 \\times 2.65}{0.60}$" },
                { label: "③ 計算", content: "$S_r = \\dfrac{47.7}{0.60} = 79.5$" },
                { label: "④ 単位・妥当性確認", content: "Sr = 79.5% で0〜100%の範囲内。湿った不飽和土として妥当" }
              ],
              answer: "Sr = 79.5%"
            },
            {
              q: "飽和状態にある粘土の含水比は30%、土粒子の比重は2.70である。間隙比を求めよ。",
              steps: [
                { label: "① 式の選択", content: "「飽和」→ $S_r = 100\\%$ が隠れ条件。$S_r e = w G_s$ を使う" },
                { label: "② 代入", content: "$100 \\times e = 30 \\times 2.70$" },
                { label: "③ 計算", content: "$e = \\dfrac{81.0}{100} = 0.81$" },
                { label: "④ 単位・妥当性確認", content: "e は無次元。粘土の e は0.5〜1.5程度が普通なので妥当" }
              ],
              answer: "e = 0.81"
            }
          ],
          formulaRefs: ["f6"]
        },
        {
          id: "p3",
          pattern: "単位体積重量の計算",
          variants: [
            {
              q: "間隙比0.70、土粒子の比重2.65の飽和した土の、飽和単位体積重量と水中単位体積重量を求めよ。γw = 9.81 kN/m³とする。",
              steps: [
                { label: "① 式の選択", content: "飽和土の重さ → $\\gamma_{sat} = \\dfrac{G_s + e}{1+e}\\gamma_w$、水中は $\\gamma' = \\gamma_{sat} - \\gamma_w$" },
                { label: "② 代入", content: "$\\gamma_{sat} = \\dfrac{2.65 + 0.70}{1 + 0.70} \\times 9.81 = \\dfrac{3.35}{1.70} \\times 9.81$" },
                { label: "③ 計算", content: "$\\gamma_{sat} = 1.971 \\times 9.81 = 19.3$ kN/m³、$\\gamma' = 19.3 - 9.81 = 9.52$ kN/m³" },
                { label: "④ 単位・妥当性確認", content: "γsat は18〜20 kN/m³、γ' はその半分程度が相場。妥当" }
              ],
              answer: "γsat = 19.3 kN/m³、γ' = 9.52 kN/m³"
            },
            {
              q: "間隙比0.85、土粒子の比重2.70、含水比15%の土の湿潤単位体積重量と乾燥単位体積重量を求めよ。γw = 9.81 kN/m³とする。",
              steps: [
                { label: "① 式の選択", content: "不飽和土の重さ → $\\gamma_t = \\dfrac{G_s(1+w/100)}{1+e}\\gamma_w$、乾燥は $\\gamma_d = \\dfrac{\\gamma_t}{1+w/100}$" },
                { label: "② 代入", content: "$\\gamma_t = \\dfrac{2.70 \\times 1.15}{1.85} \\times 9.81 = \\dfrac{3.105}{1.85} \\times 9.81$" },
                { label: "③ 計算", content: "$\\gamma_t = 1.678 \\times 9.81 = 16.5$ kN/m³、$\\gamma_d = \\dfrac{16.5}{1.15} = 14.3$ kN/m³" },
                { label: "④ 検算", content: "$\\gamma_d = \\dfrac{G_s}{1+e}\\gamma_w = \\dfrac{2.70}{1.85} \\times 9.81 = 14.3$ kN/m³。一致するのでOK" }
              ],
              answer: "γt = 16.5 kN/m³、γd = 14.3 kN/m³"
            }
          ],
          formulaRefs: ["f7", "f8", "f9", "f10"]
        }
      ],
      quiz: [
        { q: "土の三相に含まれないものはどれ?", choices: ["土粒子", "水", "空気", "有機ガラス"], answer: 3, expl: "三相は固体(土粒子)・液体(水)・気体(空気)。この3つの割合で土の性質が決まる", sectionRef: 0 },
        { q: "間隙比 e と間隙率 n の違いとして正しいのは?", choices: ["e は分母が土粒子体積、n は分母が全体積", "e は%表示、n は無次元", "e は水だけ、n は空気だけを対象", "違いはない"], answer: 0, expl: "e = Vv/Vs、n = Vv/V。分母の違いが本質。換算式 n = e/(1+e) もセットで", sectionRef: 1 },
        { q: "含水比が100%を超えることは?", choices: ["物理的にあり得ない", "分母が乾燥土質量なのであり得る", "飽和度が100%のときだけあり得る", "砂質土でのみあり得る"], answer: 1, expl: "w = mw/ms。水が土粒子より重ければ100%超。軟弱粘土では実際によくある", sectionRef: 2 },
        { q: "水中単位体積重量 γ' が γsat より小さくなる理由は?", choices: ["水が蒸発するから", "浮力を受けるから", "土粒子が溶けるから", "空気が入るから"], answer: 1, expl: "水中の土はアルキメデスの原理で γw 分の浮力を受ける。γ' = γsat − γw", sectionRef: 2 },
        { q: "飽和度100%の土に存在しない相はどれ?", choices: ["固体", "液体", "気体", "どれも存在する"], answer: 2, expl: "飽和=間隙が全部水で満たされた状態。空気は追い出されている", sectionRef: 1 }
      ]
    },

    // ================= u2 =================
    {
      id: "u2",
      title: "土の粒度とコンシステンシー",
      weeks: "第4〜5週",
      priority: 2,
      sections: [
        {
          heading: "粒度:粒の大きさの分布で土を分類する",
          body: "<p>土は粒径によって<b>粘土 → シルト → 砂 → 礫</b>と名前が変わります(粘土・シルトが細粒土、砂・礫が粗粒土)。ふるい分析と沈降分析の結果を[[粒径加積曲線]]に描くと、その土の粒径の「顔ぶれ」が一目で分かります。通過質量10%・30%・60%に対応する粒径 $D_{10}, D_{30}, D_{60}$ を読み取り、[[均等係数]] $U_c = D_{60}/D_{10}$ を計算します。$U_c \\geq 10$ なら大小の粒が混ざった<b>粒度の良い</b>土で、小さい粒が大きい粒のすき間を埋めるためよく締まります。砂利と砂を混ぜたほうが隙間なく詰まるのと同じです。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='390' y2='250' stroke='var(--c-line)' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='30' stroke='var(--c-line)' stroke-width='2'/><path d='M60 245 C 140 235, 180 170, 220 120 S 320 45, 380 38' fill='none' stroke='var(--c-accent)' stroke-width='3'/><path d='M170 245 C 210 220, 225 150, 235 100 S 255 50, 270 40' fill='none' stroke='var(--c-text)' stroke-width='2' stroke-dasharray='6 4'/><text x='220' y='280' font-size='14' text-anchor='middle' fill='var(--c-text)'>粒径 (mm, 対数軸)</text><text x='38' y='140' font-size='14' text-anchor='middle' fill='var(--c-text)' transform='rotate(-90 38 140)'>通過質量百分率 (%)</text><text x='300' y='90' font-size='14' fill='var(--c-accent)'>粒度の良い土</text><text x='140' y='120' font-size='14' fill='var(--c-text)'>均等な土</text><line x1='50' y1='118' x2='222' y2='118' stroke='var(--c-line)' stroke-dasharray='3 3'/><line x1='222' y1='118' x2='222' y2='250' stroke='var(--c-line)' stroke-dasharray='3 3'/><text x='56' y='112' font-size='14' fill='var(--c-text)'>60%</text><text x='226' y='266' font-size='14' fill='var(--c-text)'>D60</text></svg>"
        },
        {
          heading: "コンシステンシー:細粒土は含水比で変身する",
          body: "<p>粘土は水を含む量で、固体 → 半固体 → 塑性体 → 液体と状態が変わります。この性質が[[コンシステンシー]]で、境目の含水比が収縮限界・[[塑性限界]] $w_p$・[[液性限界]] $w_L$ です。小麦粉に水を足すと、ポロポロ→粘土のように練れる→ドロドロの生地、と変わるのと同じです。練れる範囲の広さが[[塑性指数]] $I_p = w_L - w_p$ で、大きいほど粘土分が多い土。今の含水比が液体寄りか固体寄りかは液性指数 $I_L$ やコンシステンシー指数 $I_c$ で判定し、$I_c$ が1に近いほど固く安定した状態です。</p>"
        },
        {
          heading: "砂は相対密度、粘土は鋭敏比",
          body: "<p>粗粒土(砂)には限界含水比が意味を持たないので、詰まり具合を[[相対密度]] $D_r = \\dfrac{e_{max} - e}{e_{max} - e_{min}} \\times 100$ で表します。最もゆるい状態と最も密な状態の間のどこにいるかを示す偏差値のようなもので、ゆる詰めの砂($D_r$小)は地震時に液状化しやすくなります。一方、粘土には[[鋭敏比]] $S_t = q_u/q_{ur}$ があり、乱さない強度と練り返した強度の比です。$S_t$ が大きい鋭敏な粘土は、掘削や打撃でこねられると急激に強度を失うため施工時に注意が必要です。</p>"
        }
      ],
      formulas: [
        { id: "f1", name: "均等係数", latex: "U_c = \\dfrac{D_{60}}{D_{10}}", vars: [ { sym: "U_c", meaning: "均等係数", unit: "無次元" }, { sym: "D_{60}", meaning: "通過質量60%の粒径", unit: "mm" }, { sym: "D_{10}", meaning: "通過質量10%の粒径(有効径)", unit: "mm" } ], when: "粒径加積曲線からD10・D60を読み取って粒度の良否を判定するとき", intuition: "曲線がなだらか(粒径の幅が広い)ほど大きい。10以上で粒度良好の目安", derivation: "D10 は有効径とも呼ばれ透水性とも関係が深い", blank: "U_c = \\dfrac{?}{D_{10}}", blankAnswer: "D_{60}" },
        { id: "f2", name: "曲率係数", latex: "U_c' = \\dfrac{(D_{30})^2}{D_{10} \\times D_{60}}", vars: [ { sym: "U_c'", meaning: "曲率係数", unit: "無次元" }, { sym: "D_{30}", meaning: "通過質量30%の粒径", unit: "mm" } ], when: "均等係数とセットで粒度良好の判定をするとき(1〜3なら良好)", intuition: "曲線の中だるみをチェックする係数。特定粒径だけ抜けた土をはじく", derivation: "D30 が D10 と D60 の幾何平均に近いか(なめらかか)を見ている", blank: "U_c' = \\dfrac{(D_{30})^2}{D_{10} \\times ?}", blankAnswer: "D_{60}" },
        { id: "f3", name: "塑性指数", latex: "I_p = w_L - w_p", vars: [ { sym: "I_p", meaning: "塑性指数", unit: "%" }, { sym: "w_L", meaning: "液性限界", unit: "%" }, { sym: "w_p", meaning: "塑性限界", unit: "%" } ], when: "細粒土の塑性の大きさ・分類(塑性図)に使うとき", intuition: "「練って形を作れる」含水比の幅。粘土分が多いほど広い", derivation: "液性限界と塑性限界の差。そのまま覚える", blank: "I_p = w_L - ?", blankAnswer: "w_p" },
        { id: "f4", name: "液性指数", latex: "I_L = \\dfrac{w - w_p}{I_p}", vars: [ { sym: "I_L", meaning: "液性指数", unit: "無次元" }, { sym: "w", meaning: "自然含水比", unit: "%" } ], when: "今の土が液体寄りか固体寄りかを判定するとき", intuition: "0なら塑性限界、1なら液性限界の状態。1に近いほど軟らかく危険", derivation: "自然含水比が塑性範囲のどの位置かを0〜1で正規化したもの", blank: "I_L = \\dfrac{w - w_p}{?}", blankAnswer: "I_p" },
        { id: "f5", name: "コンシステンシー指数", latex: "I_c = \\dfrac{w_L - w}{I_p}", vars: [ { sym: "I_c", meaning: "コンシステンシー指数", unit: "無次元" }, { sym: "w", meaning: "自然含水比", unit: "%" } ], when: "土の安定度を評価するとき。Ic が1以上なら安定、0に近いと不安定", intuition: "IL と逆向きの指標で IL + Ic = 1。1に近いほど固くて安心", derivation: "液性限界からどれだけ乾いた側にいるかを Ip で割ったもの", blank: "I_c = \\dfrac{? - w}{I_p}", blankAnswer: "w_L" },
        { id: "f6", name: "相対密度", latex: "D_r = \\dfrac{e_{max} - e}{e_{max} - e_{min}} \\times 100", vars: [ { sym: "D_r", meaning: "相対密度", unit: "%" }, { sym: "e_{max}", meaning: "最もゆるい状態の間隙比", unit: "無次元" }, { sym: "e_{min}", meaning: "最も密な状態の間隙比", unit: "無次元" }, { sym: "e", meaning: "現在の間隙比", unit: "無次元" } ], when: "砂の詰まり具合の評価。液状化のしやすさの判定材料", intuition: "ゆる詰め0%〜密詰め100%の偏差値。分子は「あとどれだけ縮めるか」ではなく「もう縮んだ量」", derivation: "emax(ゆるい)から現在 e までの締まり量を全可動域で割る", blank: "D_r = \\dfrac{e_{max} - e}{e_{max} - ?} \\times 100", blankAnswer: "e_{min}" },
        { id: "f7", name: "鋭敏比", latex: "S_t = \\dfrac{q_u}{q_{ur}}", vars: [ { sym: "S_t", meaning: "鋭敏比", unit: "無次元" }, { sym: "q_u", meaning: "乱さない試料の一軸圧縮強さ", unit: "kN/m²" }, { sym: "q_{ur}", meaning: "練り返した試料の一軸圧縮強さ", unit: "kN/m²" } ], when: "粘土を乱したときの強度低下を評価するとき", intuition: "こねると弱くなる度合い。大きいほど「鋭敏」で施工時に危険", derivation: "同じ含水比のまま構造だけ壊して強度を比べる", blank: "S_t = \\dfrac{q_u}{?}", blankAnswer: "q_{ur}" }
      ],
      selectQuiz: [
        { q: "粒径加積曲線から D10 と D60 を読み取り、粒度の良否を判定したい", choices: ["均等係数 Uc = D60/D10", "塑性指数 Ip = wL − wp", "相対密度 Dr", "鋭敏比 St"], answer: 0, expl: "粒度の幅広さは均等係数。10以上(+曲率係数1〜3)で粒度良好", formulaRef: "f1" },
        { q: "粘土の自然含水比と液性限界・塑性限界から、今の固さの度合いを知りたい", choices: ["コンシステンシー指数 Ic = (wL − w)/Ip", "均等係数 Uc", "飽和度の定義", "限界動水勾配"], answer: 0, expl: "現状評価は Ic(または IL)。Ic が1に近いほど固く安定", formulaRef: "f5" },
        { q: "砂地盤が液状化しやすいゆる詰めかどうかを間隙比から評価したい", choices: ["相対密度 Dr = (emax − e)/(emax − emin)", "鋭敏比 St", "塑性指数 Ip", "間隙率 n"], answer: 0, expl: "砂の詰まり具合は相対密度。Dr が小さいほどゆるく液状化しやすい", formulaRef: "f6" },
        { q: "掘削でこねられた粘土がどれだけ強度低下するかを表したい", choices: ["鋭敏比 St = qu/qur", "液性指数 IL", "曲率係数 Uc'", "均等係数 Uc"], answer: 0, expl: "乱さない強度/練返し強度=鋭敏比。大きい粘土は乱すと激弱化", formulaRef: "f7" }
      ],
      problems: [
        {
          id: "p1",
          pattern: "均等係数・曲率係数と粒度判定",
          variants: [
            {
              q: "粒径加積曲線から D10 = 0.08 mm、D30 = 0.30 mm、D60 = 0.90 mm と読み取れた。均等係数と曲率係数を求め、粒度の良否を判定せよ。",
              steps: [
                { label: "① 式の選択", content: "$U_c = \\dfrac{D_{60}}{D_{10}}$、$U_c' = \\dfrac{(D_{30})^2}{D_{10} D_{60}}$ を使う" },
                { label: "② 代入", content: "$U_c = \\dfrac{0.90}{0.08}$、$U_c' = \\dfrac{0.30^2}{0.08 \\times 0.90} = \\dfrac{0.09}{0.072}$" },
                { label: "③ 計算", content: "$U_c = 11.3$、$U_c' = 1.25$" },
                { label: "④ 判定", content: "$U_c \\geq 10$ かつ $U_c' = 1 \\sim 3$ → 粒度の良い(良配合の)土" }
              ],
              answer: "Uc = 11.3、Uc' = 1.25 → 粒度良好"
            },
            {
              q: "ある砂の粒径加積曲線から D10 = 0.15 mm、D30 = 0.25 mm、D60 = 0.45 mm と読み取れた。均等係数と曲率係数を求め、粒度の良否を判定せよ。",
              steps: [
                { label: "① 式の選択", content: "$U_c = \\dfrac{D_{60}}{D_{10}}$、$U_c' = \\dfrac{(D_{30})^2}{D_{10} D_{60}}$" },
                { label: "② 代入", content: "$U_c = \\dfrac{0.45}{0.15}$、$U_c' = \\dfrac{0.25^2}{0.15 \\times 0.45} = \\dfrac{0.0625}{0.0675}$" },
                { label: "③ 計算", content: "$U_c = 3.0$、$U_c' = 0.93$" },
                { label: "④ 判定", content: "$U_c < 10$ → 粒径がそろった均等な(分級された)土。締固めには不利" }
              ],
              answer: "Uc = 3.0、Uc' = 0.93 → 粒度の悪い均等な土"
            }
          ],
          formulaRefs: ["f1", "f2"]
        },
        {
          id: "p2",
          pattern: "コンシステンシー指数の計算",
          variants: [
            {
              q: "液性限界50%、塑性限界25%の粘土の自然含水比は35%である。塑性指数・液性指数・コンシステンシー指数を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$I_p = w_L - w_p$、$I_L = \\dfrac{w - w_p}{I_p}$、$I_c = \\dfrac{w_L - w}{I_p}$" },
                { label: "② 代入", content: "$I_p = 50 - 25 = 25$、$I_L = \\dfrac{35 - 25}{25}$、$I_c = \\dfrac{50 - 35}{25}$" },
                { label: "③ 計算", content: "$I_L = 0.40$、$I_c = 0.60$" },
                { label: "④ 検算・判定", content: "$I_L + I_c = 1.00$ でOK。Ic が1未満なのでやや軟らかめの塑性状態" }
              ],
              answer: "Ip = 25、IL = 0.40、Ic = 0.60"
            },
            {
              q: "液性限界62%、塑性限界22%の粘土の自然含水比は30%である。塑性指数・液性指数・コンシステンシー指数を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$I_p = w_L - w_p$、$I_L = \\dfrac{w - w_p}{I_p}$、$I_c = \\dfrac{w_L - w}{I_p}$" },
                { label: "② 代入", content: "$I_p = 62 - 22 = 40$、$I_L = \\dfrac{30 - 22}{40}$、$I_c = \\dfrac{62 - 30}{40}$" },
                { label: "③ 計算", content: "$I_L = 0.20$、$I_c = 0.80$" },
                { label: "④ 検算・判定", content: "$I_L + I_c = 1.00$ でOK。Ic = 0.8 と1に近く、比較的安定した固さ" }
              ],
              answer: "Ip = 40、IL = 0.20、Ic = 0.80"
            }
          ],
          formulaRefs: ["f3", "f4", "f5"]
        }
      ],
      quiz: [
        { q: "粒径の小さい順に正しく並んでいるのは?", choices: ["粘土→シルト→砂→礫", "シルト→粘土→砂→礫", "砂→シルト→粘土→礫", "粘土→砂→シルト→礫"], answer: 0, expl: "粘土<シルト<砂<礫。粘土・シルトが細粒土、砂・礫が粗粒土", sectionRef: 0 },
        { q: "均等係数 Uc が大きい土の特徴は?", choices: ["粒径のそろった均等な土", "大小の粒が混ざり締固めやすい土", "透水係数が必ず大きい土", "粘土分が多い土"], answer: 1, expl: "Uc = D60/D10 が大きい=粒径の幅が広い。小粒が隙間を埋めよく締まる", sectionRef: 0 },
        { q: "含水比を増やしていったとき、細粒土の状態変化の順序は?", choices: ["液状→塑性→半固体→固体", "固体→半固体→塑性→液状", "塑性→固体→液状→半固体", "固体→塑性→半固体→液状"], answer: 1, expl: "乾いた固体から水を足すと半固体→塑性(練れる)→液状(流れる)と軟らかくなる", sectionRef: 1 },
        { q: "鋭敏比の大きい粘土で起こることは?", choices: ["練り返すと強度が大きく低下する", "練り返すと強度が上がる", "水を通しやすくなる", "液状化しやすくなる"], answer: 0, expl: "St = qu/qur が大きい=乱すと強度激減。施工でこねる操作に要注意", sectionRef: 2 }
      ]
    },

    // ================= u3 =================
    {
      id: "u3",
      title: "不飽和土の諸性質(サクションと毛管作用)",
      weeks: "第6週",
      priority: 1,
      sections: [
        {
          heading: "不飽和土とサクション",
          body: "<p>地下水面より上の土は間隙に空気と水が共存する<b>不飽和土</b>です。水は土粒子の間にメニスカス(曲がった水面)を作り、間隙水圧 $u_w$ が大気圧より低い<b>負圧</b>になります。この吸引力が[[サクション]] $s = u_a - u_w$ です。砂場で団子が作れるのは、粒子間の水がサクションで粒子どうしを引き寄せ、見かけの粘着力を与えるから。乾き切っても水浸しでも団子が作れないのは、サクションが消えるからです。</p>"
        },
        {
          heading: "毛管作用:水は地下水面より上に昇る",
          body: "<p>細いストローに水が勝手に昇るように、土の間隙も細い管とみなせるため、地下水面から水が吸い上げられます。これが[[毛管作用]]で、上昇高さは管が細いほど高くなります($h_c = \\dfrac{4T\\cos\\alpha}{\\gamma_w d}$、実用上は $h_c \\approx 0.3/d$ cm)。粒径の細かい粘土やシルトでは毛管上昇が数m以上に達することもあります。この毛管水が冬に凍って氷の層(アイスレンズ)を作り地面を持ち上げるのが凍上現象で、寒冷地の道路を壊す原因になります。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='190' width='340' height='70' fill='var(--c-accent)' opacity='0.35'/><line x1='40' y1='190' x2='380' y2='190' stroke='var(--c-accent)' stroke-width='2'/><text x='330' y='215' font-size='14' fill='var(--c-text)'>地下水面</text><rect x='100' y='60' width='20' height='130' fill='none' stroke='var(--c-line)' stroke-width='2'/><rect x='102' y='80' width='16' height='110' fill='var(--c-accent)' opacity='0.6'/><path d='M102 80 Q110 72 118 80' fill='none' stroke='var(--c-accent)' stroke-width='2'/><rect x='220' y='120' width='40' height='70' fill='none' stroke='var(--c-line)' stroke-width='2'/><rect x='223' y='150' width='34' height='40' fill='var(--c-accent)' opacity='0.6'/><path d='M223 150 Q240 142 257 150' fill='none' stroke='var(--c-accent)' stroke-width='2'/><line x1='150' y1='80' x2='150' y2='190' stroke='var(--c-text)' stroke-dasharray='4 3'/><text x='160' y='135' font-size='14' fill='var(--c-text)'>hc(細い管ほど高い)</text><text x='110' y='45' font-size='14' text-anchor='middle' fill='var(--c-text)'>細い管</text><text x='240' y='110' font-size='14' text-anchor='middle' fill='var(--c-text)'>太い管</text><text x='210' y='285' font-size='14' text-anchor='middle' fill='var(--c-text)'>毛管上昇:土の間隙=細い管の束</text></svg>"
        },
        {
          heading: "毛管水の圧力は負である",
          body: "<p>毛管で持ち上がった水柱は、下の地下水面(圧力0)からぶら下がっている状態なので、高さ $h$ の位置の水圧は $u_w = -\\gamma_w h$ と<b>負</b>になります。つまり毛管上昇域では高い所ほどサクションが大きい。これが不飽和土の強さの源ですが、雨で飽和するとサクションが消えて一気に強度を失います。晴れの日は固い切土のり面が、大雨で崩れる理由のひとつがこれです。</p>"
        }
      ],
      formulas: [
        { id: "f1", name: "サクションの定義", latex: "s = u_a - u_w", vars: [ { sym: "s", meaning: "サクション", unit: "kPa" }, { sym: "u_a", meaning: "間隙空気圧(通常0=大気圧)", unit: "kPa" }, { sym: "u_w", meaning: "間隙水圧(不飽和では負)", unit: "kPa" } ], when: "不飽和土の吸引力を求めるとき。毛管高さから uw = −γw hc で計算", intuition: "水が粒子を引き寄せる力。砂団子が固まる理由", derivation: "空気圧と水圧の差。uw が負なので s は正になる", blank: "s = u_a - ?", blankAnswer: "u_w" },
        { id: "f2", name: "毛管上昇高", latex: "h_c = \\dfrac{4T\\cos\\alpha}{\\gamma_w d} \\;\\left(\\approx \\dfrac{0.3}{d}\\,\\mathrm{cm}\\right)", vars: [ { sym: "h_c", meaning: "毛管上昇高", unit: "cm" }, { sym: "T", meaning: "水の表面張力", unit: "N/m" }, { sym: "\\alpha", meaning: "接触角", unit: "°" }, { sym: "d", meaning: "管径(間隙径)", unit: "cm" } ], when: "地下水面からの毛管上昇の高さを見積もるとき", intuition: "管が細いほど高く昇る。粘土は間隙が細いので数mも上昇", derivation: "水柱の重量と表面張力の鉛直成分のつり合いから。概算は 0.3/d (cm単位)", blank: "h_c = \\dfrac{4T\\cos\\alpha}{\\gamma_w \\, ?}", blankAnswer: "d" }
      ],
      selectQuiz: [
        { q: "間隙径 0.005 cm の土で、地下水面からどこまで水が昇るか概算したい", choices: ["毛管上昇高 hc ≈ 0.3/d", "サクション s = ua − uw", "ダルシーの法則", "間隙比の定義"], answer: 0, expl: "上昇「高さ」を問われたら毛管上昇高の式。d が細いほど高い", formulaRef: "f2" },
        { q: "毛管上昇域のある高さでの土の吸引力(負の水圧との差)を求めたい", choices: ["サクション s = ua − uw", "毛管上昇高の式", "飽和度の定義", "水中単位体積重量"], answer: 0, expl: "吸引力=サクション。uw = −γw h を代入すれば数値が出る", formulaRef: "f1" },
        { q: "砂団子が握れる理由を式で説明したい", choices: ["サクションによる見かけの粘着力", "ダルシーの法則による浸透力", "浮力による軽量化", "均等係数による粒度効果"], answer: 0, expl: "粒子間の水のメニスカスが負圧を作り、粒子を引き寄せる=サクション", formulaRef: "f1" }
      ],
      problems: [
        {
          id: "p1",
          pattern: "毛管上昇高の概算",
          variants: [
            {
              q: "平均間隙径 0.005 cm(0.05 mm)の細砂について、毛管上昇高を概算式 hc = 0.3/d で見積もれ。",
              steps: [
                { label: "① 式の選択", content: "概算式 $h_c = \\dfrac{0.3}{d}$(d は cm、hc も cm)を使う" },
                { label: "② 代入", content: "$h_c = \\dfrac{0.3}{0.005}$" },
                { label: "③ 計算", content: "$h_c = 60$ cm" },
                { label: "④ 妥当性確認", content: "細砂で数十cm〜1m程度は妥当。粘土ならさらに高くなる" }
              ],
              answer: "hc = 60 cm(約0.6 m)"
            },
            {
              q: "平均間隙径 0.002 cm のシルト質土の毛管上昇高を概算式 hc = 0.3/d で見積もれ。",
              steps: [
                { label: "① 式の選択", content: "$h_c = \\dfrac{0.3}{d}$(cm単位)" },
                { label: "② 代入", content: "$h_c = \\dfrac{0.3}{0.002}$" },
                { label: "③ 計算", content: "$h_c = 150$ cm" },
                { label: "④ 妥当性確認", content: "シルトで1〜2m程度は妥当な範囲。間隙が細いほど高く昇ることを確認" }
              ],
              answer: "hc = 150 cm(1.5 m)"
            }
          ],
          formulaRefs: ["f2"]
        },
        {
          id: "p2",
          pattern: "毛管水の負圧とサクション",
          variants: [
            {
              q: "地下水面から1.0 m上の毛管飽和域にある土の間隙水圧とサクションを求めよ。間隙空気圧は0、γw = 9.81 kN/m³とする。",
              steps: [
                { label: "① 式の選択", content: "毛管水は水面からぶら下がる水柱 → $u_w = -\\gamma_w h$、サクションは $s = u_a - u_w$" },
                { label: "② 代入", content: "$u_w = -9.81 \\times 1.0$" },
                { label: "③ 計算", content: "$u_w = -9.81$ kPa、$s = 0 - (-9.81) = 9.81$ kPa" },
                { label: "④ 妥当性確認", content: "高さ1mで約10 kPaの負圧。水柱1m ≒ 9.8 kPaの感覚と一致" }
              ],
              answer: "uw = −9.81 kPa、s ≈ 9.8 kPa"
            },
            {
              q: "地下水面から2.5 m上まで毛管水で飽和しているシルト地盤の、その高さでの間隙水圧とサクションを求めよ。γw = 9.81 kN/m³とする。",
              steps: [
                { label: "① 式の選択", content: "$u_w = -\\gamma_w h$、$s = u_a - u_w$($u_a = 0$)" },
                { label: "② 代入", content: "$u_w = -9.81 \\times 2.5$" },
                { label: "③ 計算", content: "$u_w = -24.5$ kPa、$s = 24.5$ kPa" },
                { label: "④ 妥当性確認", content: "高いところほどサクション大 → 上ほど強く水を吸っている状態" }
              ],
              answer: "uw = −24.5 kPa、s = 24.5 kPa"
            }
          ],
          formulaRefs: ["f1"]
        }
      ],
      quiz: [
        { q: "不飽和土の間隙水圧はどうなっている?", choices: ["常に正", "大気圧と同じ", "負(大気圧より低い)", "常にゼロ"], answer: 2, expl: "メニスカスの表面張力で水圧は負になる。これがサクションの正体", sectionRef: 0 },
        { q: "毛管上昇が最も高いのはどの土?", choices: ["礫", "粗砂", "細砂", "シルト・粘土"], answer: 3, expl: "hc ∝ 1/d。間隙径が細かい土ほど高く昇る", sectionRef: 1 },
        { q: "湿った砂で団子が作れるのに、乾いた砂や水中の砂で作れない理由は?", choices: ["乾くと粒子が軽くなるから", "サクションが不飽和のときだけ働くから", "水中では粒子が溶けるから", "乾くと粒径が変わるから"], answer: 1, expl: "サクションは空気と水が共存する不飽和状態でのみ生じる見かけの粘着力", sectionRef: 0 },
        { q: "凍上現象の主な原因は?", choices: ["土粒子自体の膨張", "毛管水が凍りアイスレンズが成長する", "空気の膨張", "地下水位の低下"], answer: 1, expl: "毛管作用で供給される水が凍結面で氷の層を作り、地面を持ち上げる", sectionRef: 1 }
      ]
    },

    // ================= u4 =================
    {
      id: "u4",
      title: "土の締固め",
      weeks: "第7週",
      priority: 3,
      sections: [
        {
          heading: "締固めとは:空気を追い出して密にする",
          body: "<p>盛土やグラウンド造成では、土をまいてローラーで転圧し、間隙の<b>空気を追い出して</b>密で強い土にします。これが[[締固め]]です。ポイントは「水は追い出さない、空気を追い出す」こと。評価には水分の影響を除いた乾燥密度 $\\rho_d = \\dfrac{\\rho_t}{1+w/100}$ を使います。同じエネルギーで叩いても、土が乾きすぎると粒子どうしの摩擦で動けず、湿りすぎると水が邪魔して密になれません。ちょうど良い水加減が存在するのが締固めの本質です。</p>"
        },
        {
          heading: "締固め曲線:山の頂上が最適点",
          body: "<p>突固め試験で含水比を変えながら締固め、横軸 $w$・縦軸 $\\rho_d$ にプロットすると山形の<b>締固め曲線</b>が得られます。頂上の縦座標が[[最大乾燥密度]] $\\rho_{d\\,max}$、横座標が[[最適含水比]] $w_{opt}$ です。曲線の右上には、間隙の空気がゼロ(飽和)の理論上限を示す<b>ゼロ空気間隙曲線</b> $\\rho_{d}=\\dfrac{\\rho_w}{w/100 + 1/G_s}$ があり、実測の締固め曲線は必ずこの左下に来ます。空気を全部は追い出せないからです。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='390' y2='250' stroke='var(--c-line)' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='30' stroke='var(--c-line)' stroke-width='2'/><path d='M70 220 C 120 160, 170 105, 210 100 C 250 95, 300 150, 350 210' fill='none' stroke='var(--c-accent)' stroke-width='3'/><path d='M180 60 C 240 100, 300 170, 360 245' fill='none' stroke='var(--c-text)' stroke-width='2' stroke-dasharray='6 4'/><line x1='210' y1='100' x2='210' y2='250' stroke='var(--c-line)' stroke-dasharray='3 3'/><line x1='50' y1='100' x2='210' y2='100' stroke='var(--c-line)' stroke-dasharray='3 3'/><circle cx='210' cy='100' r='5' fill='var(--c-accent)'/><text x='210' y='272' font-size='14' text-anchor='middle' fill='var(--c-text)'>wopt</text><text x='72' y='95' font-size='14' fill='var(--c-text)'>ρdmax</text><text x='230' y='55' font-size='14' fill='var(--c-text)'>ゼロ空気間隙曲線</text><text x='95' y='140' font-size='14' fill='var(--c-accent)'>締固め曲線</text><text x='220' y='295' font-size='14' text-anchor='middle' fill='var(--c-text)'>含水比 w (%) → / 縦軸: 乾燥密度 ρd</text></svg>"
        },
        {
          heading: "土の種類と施工管理",
          body: "<p>粒度の良い砂質土ほど曲線の山は<b>高く鋭く</b>(よく締まり水加減にシビア)、粘性土ほど<b>低くなだらか</b>になります。また締固めエネルギーを増やすと山は左上(高密度・低含水比側)へ移動します。現場では、突固め試験の $\\rho_{d\\,max}$ に対する現場乾燥密度の比である<b>締固め度</b> $D_c = \\dfrac{\\rho_d}{\\rho_{d\\,max}} \\times 100$ で管理し、道路盛土では90%以上などの基準が課されます。テスト勾配的にも「曲線の形の理由」と「$D_c$ の計算」は頻出です。</p>"
        }
      ],
      formulas: [
        { id: "f1", name: "乾燥密度と湿潤密度の関係", latex: "\\rho_d = \\dfrac{\\rho_t}{1 + w/100}", vars: [ { sym: "\\rho_d", meaning: "乾燥密度", unit: "g/cm³" }, { sym: "\\rho_t", meaning: "湿潤密度", unit: "g/cm³" }, { sym: "w", meaning: "含水比", unit: "%" } ], when: "締固め試験・現場密度試験の整理。湿潤密度と含水比から必ずこれで変換", intuition: "水の重さ分を割り引いた「土粒子だけの詰まり具合」", derivation: "m = ms(1+w/100) を ρt = m/V に入れて ms/V を取り出す", blank: "\\rho_d = \\dfrac{\\rho_t}{?}", blankAnswer: "1 + w/100" },
        { id: "f2", name: "ゼロ空気間隙曲線", latex: "\\rho_{d} = \\dfrac{\\rho_w}{w/100 + 1/G_s}", vars: [ { sym: "\\rho_d", meaning: "空気間隙ゼロのときの乾燥密度", unit: "g/cm³" }, { sym: "\\rho_w", meaning: "水の密度", unit: "g/cm³" }, { sym: "G_s", meaning: "土粒子の比重", unit: "無次元" } ], when: "締固め曲線の理論上限を描くとき。実測点がこの右上に出たら測定ミス", intuition: "空気を完全に追い出した理想状態。実際の曲線は必ずこの左下", derivation: "Sr=100% の条件で ρd を w の関数として表したもの", blank: "\\rho_{d} = \\dfrac{\\rho_w}{w/100 + ?}", blankAnswer: "1/G_s" },
        { id: "f3", name: "締固め度", latex: "D_c = \\dfrac{\\rho_d}{\\rho_{d\\,max}} \\times 100", vars: [ { sym: "D_c", meaning: "締固め度", unit: "%" }, { sym: "\\rho_d", meaning: "現場の乾燥密度", unit: "g/cm³" }, { sym: "\\rho_{d\\,max}", meaning: "室内試験の最大乾燥密度", unit: "g/cm³" } ], when: "盛土の品質管理。「締固め度90%以上」のような規定の照査", intuition: "実験室のベスト記録に対する現場の達成率", derivation: "定義式。現場密度試験の ρd を試験の ρdmax で割る", blank: "D_c = \\dfrac{\\rho_d}{?} \\times 100", blankAnswer: "\\rho_{d\\,max}" }
      ],
      selectQuiz: [
        { q: "現場密度試験で湿潤密度1.95 g/cm³、含水比15%を得た。管理に使う密度に直したい", choices: ["ρd = ρt/(1+w/100)", "ゼロ空気間隙曲線の式", "Dr = (emax−e)/(emax−emin)", "γ' = γsat − γw"], answer: 0, expl: "締固め管理は乾燥密度ベース。湿潤密度→乾燥密度の変換が最初の一手", formulaRef: "f1" },
        { q: "締固め曲線のグラフに理論上限の線を描き入れたい", choices: ["ゼロ空気間隙曲線 ρd = ρw/(w/100 + 1/Gs)", "締固め度 Dc の式", "ダルシーの法則", "相対密度の式"], answer: 0, expl: "飽和(空気ゼロ)状態の ρd–w 関係がゼロ空気間隙曲線。実測は必ず左下", formulaRef: "f2" },
        { q: "「締固め度92%を確保せよ」という規定を照査したい", choices: ["Dc = ρd/ρdmax ×100", "ρd = ρt/(1+w/100)", "Ip = wL − wp", "Sr e = w Gs"], answer: 0, expl: "現場 ρd ÷ 室内試験 ρdmax。両方とも乾燥密度で比べるのがポイント", formulaRef: "f3" },
        { q: "同じ土を同じ含水比で締固めエネルギーだけ増やした。曲線はどう動く?", choices: ["山が左上(高密度側)へ移動する", "山が右下へ移動する", "変化しない", "ゼロ空気間隙曲線を超える"], answer: 0, expl: "エネルギー増で ρdmax は上がり wopt は下がる。ただしゼロ空気間隙曲線は超えられない", formulaRef: "f2" }
      ],
      problems: [
        {
          id: "p1",
          pattern: "乾燥密度の計算",
          variants: [
            {
              q: "突固め試験のある測点で、湿潤密度1.85 g/cm³、含水比15%を得た。乾燥密度を求めよ。",
              steps: [
                { label: "① 式の選択", content: "湿潤密度+含水比 → $\\rho_d = \\dfrac{\\rho_t}{1 + w/100}$" },
                { label: "② 代入", content: "$\\rho_d = \\dfrac{1.85}{1 + 0.15} = \\dfrac{1.85}{1.15}$" },
                { label: "③ 計算", content: "$\\rho_d = 1.61$ g/cm³" },
                { label: "④ 妥当性確認", content: "ρd は ρt より必ず小さい。1.6前後は一般的な土として妥当" }
              ],
              answer: "ρd = 1.61 g/cm³"
            },
            {
              q: "湿潤密度1.98 g/cm³、含水比10%の測点の乾燥密度を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$\\rho_d = \\dfrac{\\rho_t}{1 + w/100}$" },
                { label: "② 代入", content: "$\\rho_d = \\dfrac{1.98}{1.10}$" },
                { label: "③ 計算", content: "$\\rho_d = 1.80$ g/cm³" },
                { label: "④ 妥当性確認", content: "w が小さいので ρt との差も小さい。整合的" }
              ],
              answer: "ρd = 1.80 g/cm³"
            }
          ],
          formulaRefs: ["f1"]
        },
        {
          id: "p2",
          pattern: "締固め度による品質管理",
          variants: [
            {
              q: "室内試験の最大乾燥密度は1.80 g/cm³。現場密度試験で乾燥密度1.62 g/cm³を得た。締固め度を求め、規定値90%以上を満たすか判定せよ。",
              steps: [
                { label: "① 式の選択", content: "$D_c = \\dfrac{\\rho_d}{\\rho_{d\\,max}} \\times 100$" },
                { label: "② 代入", content: "$D_c = \\dfrac{1.62}{1.80} \\times 100$" },
                { label: "③ 計算", content: "$D_c = 90.0\\%$" },
                { label: "④ 判定", content: "90%以上 → ぎりぎり合格。実務ではもう少し余裕を持たせたい値" }
              ],
              answer: "Dc = 90.0% → 規定を満たす"
            },
            {
              q: "現場密度試験で湿潤密度1.955 g/cm³、含水比15%を得た。最大乾燥密度1.85 g/cm³に対する締固め度を求めよ。",
              steps: [
                { label: "① 式の選択", content: "まず $\\rho_d = \\dfrac{\\rho_t}{1+w/100}$ で乾燥密度化 → $D_c = \\dfrac{\\rho_d}{\\rho_{d\\,max}} \\times 100$" },
                { label: "② 代入", content: "$\\rho_d = \\dfrac{1.955}{1.15} = 1.70$ g/cm³" },
                { label: "③ 計算", content: "$D_c = \\dfrac{1.70}{1.85} \\times 100 = 91.9\\%$" },
                { label: "④ 妥当性確認", content: "湿潤密度のまま割らないこと。必ず乾燥密度どうしで比較する" }
              ],
              answer: "Dc = 91.9%"
            }
          ],
          formulaRefs: ["f1", "f3"]
        },
        {
          id: "p3",
          pattern: "ゼロ空気間隙曲線上の乾燥密度",
          variants: [
            {
              q: "土粒子の比重2.65の土について、含水比20%におけるゼロ空気間隙状態の乾燥密度を求めよ。ρw = 1.0 g/cm³とする。",
              steps: [
                { label: "① 式の選択", content: "空気間隙ゼロ(Sr=100%) → $\\rho_d = \\dfrac{\\rho_w}{w/100 + 1/G_s}$" },
                { label: "② 代入", content: "$\\rho_d = \\dfrac{1.0}{0.20 + 1/2.65} = \\dfrac{1.0}{0.20 + 0.377}$" },
                { label: "③ 計算", content: "$\\rho_d = \\dfrac{1.0}{0.577} = 1.73$ g/cm³" },
                { label: "④ 妥当性確認", content: "実測の締固め曲線はこの値より必ず小さくなるはず" }
              ],
              answer: "ρd = 1.73 g/cm³"
            },
            {
              q: "同じ土(Gs = 2.65)について、含水比25%におけるゼロ空気間隙状態の乾燥密度を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$\\rho_d = \\dfrac{\\rho_w}{w/100 + 1/G_s}$" },
                { label: "② 代入", content: "$\\rho_d = \\dfrac{1.0}{0.25 + 0.377}$" },
                { label: "③ 計算", content: "$\\rho_d = \\dfrac{1.0}{0.627} = 1.59$ g/cm³" },
                { label: "④ 妥当性確認", content: "w が増えるほど曲線は右下がり。20%のとき(1.73)より小さく整合的" }
              ],
              answer: "ρd = 1.59 g/cm³"
            }
          ],
          formulaRefs: ["f2"]
        }
      ],
      quiz: [
        { q: "締固めで土から追い出すのは主に何?", choices: ["水", "空気", "土粒子", "有機物"], answer: 1, expl: "締固めは空気を追い出して密にする作業。水を抜くのは「圧密」で別の現象", sectionRef: 0 },
        { q: "最適含水比 wopt での状態として正しいのは?", choices: ["乾燥密度が最大になる", "湿潤密度が最小になる", "飽和度が0%になる", "透水係数が最大になる"], answer: 0, expl: "締固め曲線の頂点。水がちょうど潤滑材として効く水加減", sectionRef: 1 },
        { q: "実測の締固め曲線とゼロ空気間隙曲線の位置関係は?", choices: ["必ず右上に出る", "必ず左下にくる", "交差する", "一致する"], answer: 1, expl: "空気を完全には追い出せないので、理論上限であるゼロ空気間隙曲線は超えられない", sectionRef: 1 },
        { q: "粒度の良い砂質土の締固め曲線の特徴は?", choices: ["山が高く鋭い", "山が低くなだらか", "山ができない", "右上がりの直線"], answer: 0, expl: "よく締まるが水加減にシビア。粘性土はなだらかで鈍い山になる", sectionRef: 2 }
      ]
    },

    // ================= u5 =================
    {
      id: "u5",
      title: "透水の基礎:ダルシーの法則と透水係数",
      weeks: "第8〜9週",
      priority: 3,
      sections: [
        {
          heading: "ダルシーの法則:浸透流の基本式",
          body: "<p>土の中の水は、水頭(水位)の高い方から低い方へゆっくり流れます。フランスの技師ダルシーは実験から、浸透流速 $v$ が[[動水勾配]] $i = \\Delta h / L$(水頭差÷浸透距離)に比例することを発見しました。これが[[ダルシーの法則]] $v = ki$ です。坂道が急なほどボールが速く転がるように、水頭の「坂」が急なほど水は速く流れます。流量は断面積を掛けて $Q = kiA$。なお $v$ は断面全体で平均したみかけの流速で、実際に間隙の中を進む速さは $v_s = v/n$ とより速くなります。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><rect x='140' y='120' width='140' height='60' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><text x='210' y='155' font-size='15' text-anchor='middle' fill='var(--c-text)'>土 (長さ L)</text><rect x='60' y='40' width='30' height='140' fill='none' stroke='var(--c-line)' stroke-width='2'/><rect x='63' y='55' width='24' height='125' fill='var(--c-accent)' opacity='0.55'/><rect x='330' y='90' width='30' height='90' fill='none' stroke='var(--c-line)' stroke-width='2'/><rect x='333' y='105' width='24' height='75' fill='var(--c-accent)' opacity='0.55'/><line x1='90' y1='150' x2='140' y2='150' stroke='var(--c-accent)' stroke-width='4'/><line x1='280' y1='150' x2='330' y2='150' stroke='var(--c-accent)' stroke-width='4'/><polygon points='325,144 337,150 325,156' fill='var(--c-accent)'/><line x1='63' y1='55' x2='300' y2='55' stroke='var(--c-line)' stroke-dasharray='4 3'/><line x1='300' y1='55' x2='300' y2='105' stroke='var(--c-text)' stroke-width='2'/><text x='312' y='85' font-size='15' fill='var(--c-text)'>Δh</text><line x1='333' y1='105' x2='300' y2='105' stroke='var(--c-line)' stroke-dasharray='4 3'/><text x='210' y='205' font-size='14' text-anchor='middle' fill='var(--c-text)'>動水勾配 i = Δh / L</text><text x='210' y='240' font-size='14' text-anchor='middle' fill='var(--c-text)'>v = k i,  Q = k i A(ダルシーの実験装置)</text></svg>"
        },
        {
          heading: "透水係数kの正体と測り方",
          body: "<p>[[透水係数]] $k$ は土の水の通しやすさで、単位は速度(m/s や cm/s)。礫で $10^{-2}$ m/s、砂で $10^{-4}$ 前後、粘土では $10^{-9}$ m/s 以下と、土の種類で<b>10桁近く</b>変わる、土質定数の中でも極端な量です。室内では透水しやすい砂に<b>定水位透水試験</b>($k = \\dfrac{QL}{hAt}$)、透水しにくい細粒土に<b>変水位透水試験</b>($k = \\dfrac{aL}{At}\\ln\\dfrac{h_1}{h_2}$)を使い分けます。ザルは流しっぱなしで測れるが、コーヒーフィルターは水位の下がり方で測る、というイメージです。</p>"
        },
        {
          heading: "成層地盤の等価透水係数",
          body: "<p>実際の地盤は透水性の違う層が重なった<b>成層地盤</b>です。流れが層と平行(水平)なら各層が並列の水路になるので、透水量の合計から $k_h = \\dfrac{\\sum k_i H_i}{\\sum H_i}$(層厚重み付き平均)。流れが層を直角に貫く(鉛直)なら直列になり、遅い層がボトルネックとなって $k_v = \\dfrac{\\sum H_i}{\\sum (H_i/k_i)}$。電気回路の並列・直列抵抗と同じ構造で、必ず $k_h \\geq k_v$ になります。薄い粘土層が1枚あるだけで鉛直方向はほぼ遮水される、というのが実務上の重要ポイントです。</p>"
        }
      ],
      formulas: [
        { id: "f1", name: "ダルシーの法則", latex: "v = k\\,i", vars: [ { sym: "v", meaning: "みかけの浸透流速", unit: "m/s" }, { sym: "k", meaning: "透水係数", unit: "m/s" }, { sym: "i", meaning: "動水勾配", unit: "無次元" } ], when: "浸透流速・流量を問われたら常に出発点。透水問題の憲法", intuition: "水頭の坂が急なほど速く流れる。比例定数が土の通しやすさ k", derivation: "ダルシーの砂柱実験による経験則。層流条件で成立", blank: "v = k \\, ?", blankAnswer: "i" },
        { id: "f2", name: "動水勾配", latex: "i = \\dfrac{\\Delta h}{L}", vars: [ { sym: "i", meaning: "動水勾配", unit: "無次元" }, { sym: "\\Delta h", meaning: "水頭差(失われる水頭)", unit: "m" }, { sym: "L", meaning: "浸透距離", unit: "m" } ], when: "水位差と浸透経路長が与えられたとき。ダルシー適用の前段", intuition: "水頭の坂の勾配。L は水が実際に通る道のりで測る", derivation: "単位浸透距離あたりに失われる水頭として定義", blank: "i = \\dfrac{\\Delta h}{?}", blankAnswer: "L" },
        { id: "f3", name: "浸透流量", latex: "Q = k\\,i\\,A", vars: [ { sym: "Q", meaning: "単位時間の浸透流量", unit: "m³/s" }, { sym: "A", meaning: "流れに直角な断面積", unit: "m²" } ], when: "「毎秒何m³流れるか」を問われたとき。v = ki に断面積を掛けるだけ", intuition: "速度×断面積=流量。水道管の流量計算と同じ形", derivation: "Q = vA にダルシーの法則を代入", blank: "Q = k\\,i\\,?", blankAnswer: "A" },
        { id: "f4", name: "実流速(間隙内流速)", latex: "v_s = \\dfrac{v}{n}", vars: [ { sym: "v_s", meaning: "間隙の中の実流速", unit: "m/s" }, { sym: "v", meaning: "みかけの流速", unit: "m/s" }, { sym: "n", meaning: "間隙率(小数)", unit: "無次元" } ], when: "汚染物質の到達時間など、水が実際に進む速さが必要なとき", intuition: "水は断面の一部(間隙)しか通れないので、実際はみかけより速い", derivation: "連続条件 vA = vs(nA) から", blank: "v_s = \\dfrac{v}{?}", blankAnswer: "n" },
        { id: "f5", name: "定水位透水試験", latex: "k = \\dfrac{Q\\,L}{h\\,A\\,t}", vars: [ { sym: "Q", meaning: "時間tに流れた総流量", unit: "cm³" }, { sym: "L", meaning: "供試体の長さ", unit: "cm" }, { sym: "h", meaning: "一定に保った水頭差", unit: "cm" }, { sym: "A", meaning: "供試体断面積", unit: "cm²" }, { sym: "t", meaning: "測定時間", unit: "s" } ], when: "砂など透水性の大きい土の k を室内で求めるとき", intuition: "水位差を一定に保ち、出てきた水を升で量る。ダルシーの式を k について解いただけ", derivation: "Q/t = kiA、i = h/L を k について整理", blank: "k = \\dfrac{Q\\,L}{h\\,A\\,?}", blankAnswer: "t" },
        { id: "f6", name: "変水位透水試験", latex: "k = \\dfrac{a\\,L}{A\\,t}\\ln\\dfrac{h_1}{h_2}", vars: [ { sym: "a", meaning: "スタンドパイプの断面積", unit: "cm²" }, { sym: "A", meaning: "供試体の断面積", unit: "cm²" }, { sym: "h_1", meaning: "初めの水頭", unit: "cm" }, { sym: "h_2", meaning: "t秒後の水頭", unit: "cm" } ], when: "シルト・粘土など透水性の小さい土の k を求めるとき", intuition: "細い管の水位がスーッと下がる速さから逆算。対数が出るのは水位低下が指数的だから", derivation: "パイプの水位低下速度 −a(dh/dt) = kA(h/L) を積分", blank: "k = \\dfrac{a\\,L}{A\\,t}\\ln\\dfrac{?}{h_2}", blankAnswer: "h_1" },
        { id: "f7", name: "成層地盤の等価透水係数(水平方向)", latex: "k_h = \\dfrac{\\sum k_i H_i}{\\sum H_i}", vars: [ { sym: "k_h", meaning: "水平方向の等価透水係数", unit: "m/s" }, { sym: "k_i", meaning: "各層の透水係数", unit: "m/s" }, { sym: "H_i", meaning: "各層の層厚", unit: "m" } ], when: "層と平行に流れるときの平均的な k。並列回路のイメージ", intuition: "厚い層・通しやすい層が支配する層厚重み付き平均", derivation: "各層の流量の和 = 全体の流量、動水勾配は各層共通", blank: "k_h = \\dfrac{\\sum ? \\, H_i}{\\sum H_i}", blankAnswer: "k_i" },
        { id: "f8", name: "成層地盤の等価透水係数(鉛直方向)", latex: "k_v = \\dfrac{\\sum H_i}{\\sum (H_i/k_i)}", vars: [ { sym: "k_v", meaning: "鉛直方向の等価透水係数", unit: "m/s" }, { sym: "H_i", meaning: "各層の層厚", unit: "m" }, { sym: "k_i", meaning: "各層の透水係数", unit: "m/s" } ], when: "層を直角に貫いて流れるとき。直列回路のイメージ", intuition: "一番通しにくい層がボトルネック。kv は最小の k に引きずられ、kh ≥ kv", derivation: "各層の流量が等しい条件で水頭損失を足し合わせる(調和平均)", blank: "k_v = \\dfrac{\\sum H_i}{\\sum (H_i/?)}", blankAnswer: "k_i" }
      ],
      selectQuiz: [
        { q: "砂質地盤で水位差と浸透距離が与えられ、浸透流速を求めたい", choices: ["ダルシーの法則 v = ki", "ベルヌーイの定理", "間隙比の定義式", "限界動水勾配の式"], answer: 0, expl: "浸透流速→ダルシー。水位差÷浸透距離で動水勾配 i を先に作る", formulaRef: "f1" },
        { q: "透水性の小さい粘土の透水係数を室内試験で求めたい", choices: ["変水位透水試験の式", "定水位透水試験の式", "現場揚水試験の式", "ゼロ空気間隙曲線"], answer: 0, expl: "流量が少なすぎて升で量れない細粒土は、パイプ水位の低下から求める変水位式", formulaRef: "f6" },
        { q: "砂・シルト・砂の3層地盤を鉛直に貫く浸透の平均的な透水係数が欲しい", choices: ["kv = ΣHi/Σ(Hi/ki)", "kh = Σki Hi/ΣHi", "k = QL/(hAt)", "v = ki"], answer: 0, expl: "層を直角に貫く=直列。通しにくい層が支配する調和平均型の式", formulaRef: "f8" },
        { q: "地下水汚染物質が帯水層を実際に進む速さを見積もりたい", choices: ["実流速 vs = v/n", "みかけ流速 v = ki のまま", "動水勾配 i = Δh/L", "透水力 j = iγw"], answer: 0, expl: "移動時間の評価は実流速。みかけ流速を間隙率で割ると速くなる", formulaRef: "f4" },
        { q: "砂の供試体に一定水頭差で通水し、升で流量を測って k を求めたい", choices: ["定水位透水試験 k = QL/(hAt)", "変水位透水試験", "ダルシーの法則そのまま", "成層地盤の kh"], answer: 0, expl: "水頭一定+流量測定=定水位試験。透水性の大きい砂向き", formulaRef: "f5" }
      ],
      problems: [
        {
          id: "p1",
          pattern: "ダルシーの法則による流速・流量計算",
          variants: [
            {
              q: "透水係数 2.0×10⁻⁵ m/s の砂層を、水頭差1.5 m、浸透距離3.0 mで水が流れている。動水勾配、みかけの流速、断面積2.0 m²あたりの流量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$i = \\dfrac{\\Delta h}{L}$ → $v = ki$ → $Q = vA$ の3段構え" },
                { label: "② 動水勾配", content: "$i = \\dfrac{1.5}{3.0} = 0.50$" },
                { label: "③ 流速", content: "$v = 2.0 \\times 10^{-5} \\times 0.50 = 1.0 \\times 10^{-5}$ m/s" },
                { label: "④ 流量", content: "$Q = 1.0 \\times 10^{-5} \\times 2.0 = 2.0 \\times 10^{-5}$ m³/s" },
                { label: "⑤ 妥当性確認", content: "1日あたり $2.0 \\times 10^{-5} \\times 86400 = 1.73$ m³/日。砂層の浸透として妥当なオーダー" }
              ],
              answer: "i = 0.50、v = 1.0×10⁻⁵ m/s、Q = 2.0×10⁻⁵ m³/s"
            },
            {
              q: "透水係数 4.0×10⁻⁶ m/s の地盤で、水頭差2.0 m、浸透距離5.0 m、流れに直角な断面積3.0 m²のときの流量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$Q = kiA$、まず $i = \\Delta h / L$" },
                { label: "② 動水勾配", content: "$i = \\dfrac{2.0}{5.0} = 0.40$" },
                { label: "③ 代入", content: "$Q = 4.0 \\times 10^{-6} \\times 0.40 \\times 3.0$" },
                { label: "④ 計算", content: "$Q = 4.8 \\times 10^{-6}$ m³/s" },
                { label: "⑤ 単位確認", content: "k[m/s]×A[m²] → Q[m³/s]。指数の掛け算を落ち着いて処理する" }
              ],
              answer: "Q = 4.8×10⁻⁶ m³/s"
            }
          ],
          formulaRefs: ["f1", "f2", "f3"]
        },
        {
          id: "p2",
          pattern: "定水位透水試験の整理",
          variants: [
            {
              q: "断面積78.5 cm²、長さ15 cmの砂供試体に水頭差30 cmを一定に保って通水したところ、60秒間に150 cm³の水が流出した。透水係数を求めよ。",
              steps: [
                { label: "① 式の選択", content: "定水位試験 → $k = \\dfrac{QL}{hAt}$" },
                { label: "② 代入", content: "$k = \\dfrac{150 \\times 15}{30 \\times 78.5 \\times 60}$" },
                { label: "③ 計算", content: "$k = \\dfrac{2250}{141300} = 1.59 \\times 10^{-2}$ cm/s" },
                { label: "④ 妥当性確認", content: "10⁻² cm/s オーダーはきれいな砂として妥当な値" }
              ],
              answer: "k = 1.59×10⁻² cm/s"
            },
            {
              q: "断面積100 cm²、長さ12 cmの供試体に水頭差24 cmを保ち、100秒間に200 cm³が流出した。透水係数を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$k = \\dfrac{QL}{hAt}$" },
                { label: "② 代入", content: "$k = \\dfrac{200 \\times 12}{24 \\times 100 \\times 100}$" },
                { label: "③ 計算", content: "$k = \\dfrac{2400}{240000} = 1.0 \\times 10^{-2}$ cm/s" },
                { label: "④ 妥当性確認", content: "粗めの砂のオーダー。定水位試験の適用範囲として整合的" }
              ],
              answer: "k = 1.0×10⁻² cm/s"
            }
          ],
          formulaRefs: ["f5"]
        },
        {
          id: "p3",
          pattern: "変水位透水試験の整理",
          variants: [
            {
              q: "断面積50 cm²、長さ10 cmの供試体に断面積1.0 cm²のスタンドパイプを接続した。パイプ内水頭が100 cmから50 cmに低下するのに300秒かかった。透水係数を求めよ。",
              steps: [
                { label: "① 式の選択", content: "変水位試験 → $k = \\dfrac{aL}{At}\\ln\\dfrac{h_1}{h_2}$" },
                { label: "② 代入", content: "$k = \\dfrac{1.0 \\times 10}{50 \\times 300} \\times \\ln\\dfrac{100}{50} = \\dfrac{10}{15000} \\times 0.693$" },
                { label: "③ 計算", content: "$k = 6.67 \\times 10^{-4} \\times 0.693 = 4.62 \\times 10^{-4}$ cm/s" },
                { label: "④ 妥当性確認", content: "10⁻⁴ cm/s は細砂〜シルト混じり砂のオーダーで妥当" }
              ],
              answer: "k = 4.62×10⁻⁴ cm/s"
            },
            {
              q: "断面積80 cm²、長さ8 cmの供試体、スタンドパイプ断面積0.5 cm²。水頭が90 cmから45 cmまで低下するのに600秒かかった。透水係数を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$k = \\dfrac{aL}{At}\\ln\\dfrac{h_1}{h_2}$" },
                { label: "② 代入", content: "$k = \\dfrac{0.5 \\times 8}{80 \\times 600} \\times \\ln 2 = \\dfrac{4}{48000} \\times 0.693$" },
                { label: "③ 計算", content: "$k = 8.33 \\times 10^{-5} \\times 0.693 = 5.78 \\times 10^{-5}$ cm/s" },
                { label: "④ 妥当性確認", content: "水頭比が同じ2倍なら ln の値も同じ0.693。シルト質土のオーダー" }
              ],
              answer: "k = 5.78×10⁻⁵ cm/s"
            }
          ],
          formulaRefs: ["f6"]
        },
        {
          id: "p4",
          pattern: "成層地盤の等価透水係数",
          variants: [
            {
              q: "層厚2.0 mの砂層(k₁ = 1.0×10⁻⁴ m/s)と層厚2.0 mのシルト層(k₂ = 1.0×10⁻⁶ m/s)からなる地盤の、水平方向と鉛直方向の等価透水係数を求めよ。",
              steps: [
                { label: "① 式の選択", content: "水平は $k_h = \\dfrac{\\sum k_i H_i}{\\sum H_i}$(並列)、鉛直は $k_v = \\dfrac{\\sum H_i}{\\sum (H_i/k_i)}$(直列)" },
                { label: "② 水平方向", content: "$k_h = \\dfrac{2.0 \\times 10^{-4} \\times 2.0 + 1.0 \\times 10^{-6} \\times 2.0}{4.0} = \\dfrac{2.02 \\times 10^{-4}}{4.0}$… 分子は $2 \\times 10^{-4} + 2 \\times 10^{-6} = 2.02 \\times 10^{-4}$" },
                { label: "③ 計算(水平)", content: "$k_h = 5.05 \\times 10^{-5}$ m/s" },
                { label: "④ 鉛直方向", content: "$k_v = \\dfrac{4.0}{2.0/10^{-4} + 2.0/10^{-6}} = \\dfrac{4.0}{2.0 \\times 10^{4} + 2.0 \\times 10^{6}} = \\dfrac{4.0}{2.02 \\times 10^{6}} = 1.98 \\times 10^{-6}$ m/s" },
                { label: "⑤ 妥当性確認", content: "$k_h > k_v$ を確認。kv はシルトの k に引きずられている" }
              ],
              answer: "kh = 5.05×10⁻⁵ m/s、kv = 1.98×10⁻⁶ m/s"
            },
            {
              q: "層厚3.0 mの砂層(k₁ = 5.0×10⁻⁵ m/s)と層厚1.0 mの粘土質層(k₂ = 2.0×10⁻⁶ m/s)からなる地盤の kh と kv を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$k_h = \\dfrac{\\sum k_i H_i}{\\sum H_i}$、$k_v = \\dfrac{\\sum H_i}{\\sum(H_i/k_i)}$" },
                { label: "② 水平方向", content: "$k_h = \\dfrac{5.0 \\times 10^{-5} \\times 3.0 + 2.0 \\times 10^{-6} \\times 1.0}{4.0} = \\dfrac{1.52 \\times 10^{-4}}{4.0} = 3.8 \\times 10^{-5}$ m/s" },
                { label: "③ 鉛直方向", content: "$k_v = \\dfrac{4.0}{3.0/(5.0 \\times 10^{-5}) + 1.0/(2.0 \\times 10^{-6})} = \\dfrac{4.0}{6.0 \\times 10^{4} + 5.0 \\times 10^{5}} = \\dfrac{4.0}{5.6 \\times 10^{5}}$" },
                { label: "④ 計算", content: "$k_v = 7.14 \\times 10^{-6}$ m/s" },
                { label: "⑤ 妥当性確認", content: "厚さ1/4しかない粘土質層のせいで kv が1桁近く低下。kh ≥ kv もOK" }
              ],
              answer: "kh = 3.8×10⁻⁵ m/s、kv = 7.14×10⁻⁶ m/s"
            }
          ],
          formulaRefs: ["f7", "f8"]
        }
      ],
      quiz: [
        { q: "ダルシーの法則 v = ki の v は何の速度?", choices: ["間隙の中を進む実流速", "断面全体で平均したみかけの流速", "土粒子の沈降速度", "地下水面の低下速度"], answer: 1, expl: "v は全断面基準のみかけ流速。実流速は v/n でより速い", sectionRef: 0 },
        { q: "透水係数が最も小さい土は?", choices: ["礫", "砂", "シルト", "粘土"], answer: 3, expl: "粒径が細かいほど間隙も細かく水が通りにくい。粘土は10⁻⁹ m/s以下", sectionRef: 1 },
        { q: "粘土の透水係数を室内で測るのに変水位試験を使う理由は?", choices: ["流出量が少なすぎて直接測れないから", "粘土は水を全く通さないから", "定水位試験より精度が悪いから", "装置が安いから"], answer: 0, expl: "流量が微小なので升では測れない。細い管の水位低下なら変化が見える", sectionRef: 1 },
        { q: "成層地盤で必ず成り立つ関係は?", choices: ["kh ≥ kv", "kh ≤ kv", "kh = kv", "kh + kv = 一定"], answer: 0, expl: "水平(並列)は通しやすい層が効き、鉛直(直列)は通しにくい層がボトルネック", sectionRef: 2 },
        { q: "動水勾配 i の単位は?", choices: ["m/s", "kN/m³", "無次元", "m²/s"], answer: 2, expl: "i = Δh/L は長さ÷長さで無次元。だから k が速度の単位を持つ", sectionRef: 0 }
      ]
    },

    // ================= u6 =================
    {
      id: "u6",
      title: "透水力と限界動水勾配・ボイリング",
      weeks: "第10週",
      priority: 2,
      sections: [
        {
          heading: "透水力:水は土を押しながら流れる",
          body: "<p>土の中を水が流れるとき、水頭のエネルギーは土粒子との摩擦で失われます。その反作用として、水は土骨格を流れの方向に押します。これが[[透水力]]で、単位体積あたり $j = i\\gamma_w$。[[動水勾配]]が大きいほど強く押します。ホースの水をざるに当てると、ざるが押されるのと同じで、水頭を失った分だけ力が土に渡るのです。下向きの浸透は土を締め付けて安定側に、<b>上向きの浸透は土を持ち上げて危険側</b>に働きます。</p>"
        },
        {
          heading: "限界動水勾配とボイリング",
          body: "<p>上向き浸透の透水力 $i\\gamma_w$ が、土の水中での実質重量 $\\gamma'$ とつり合うと、土粒子は互いに押し合う力(有効応力)を失い、水に浮いたバラバラの状態になります。このときの動水勾配が[[限界動水勾配]] $i_c = \\dfrac{\\gamma'}{\\gamma_w} = \\dfrac{G_s - 1}{1 + e}$ で、多くの砂で<b>ほぼ1.0</b>になります。$i > i_c$ になると砂が沸騰するように吹き上がる[[ボイリング]](クイックサンド)が発生し、地盤は一瞬で支持力を失います。映画の「底なし沼」は上向きの湧水がある砂地盤の実写版です。掘削工事では矢板背面との水位差がこの条件を作りやすく、安全率 $F_s = i_c/i$ で照査します。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='150' width='300' height='100' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><rect x='60' y='120' width='300' height='30' fill='var(--c-accent)' opacity='0.35'/><line x1='60' y1='120' x2='360' y2='120' stroke='var(--c-accent)' stroke-width='2'/><text x='330' y='113' font-size='14' fill='var(--c-text)'>水面</text><polygon points='140,215 140,175 130,175 150,160 170,175 160,175 160,215' fill='var(--c-accent)'/><polygon points='260,215 260,175 250,175 270,160 290,175 280,175 280,215' fill='var(--c-accent)'/><text x='210' y='240' font-size='14' text-anchor='middle' fill='var(--c-text)'>上向き浸透流(透水力 j = iγw)</text><polygon points='195,60 210,95 180,95' fill='none' stroke='var(--c-text)' stroke-width='2'/><line x1='210' y1='75' x2='210' y2='45' stroke='var(--c-text)' stroke-width='2'/><polygon points='204,50 210,38 216,50' fill='var(--c-text)'/><text x='230' y='55' font-size='14' fill='var(--c-text)'>i &gt; ic で砂が吹き上がる</text><text x='210' y='285' font-size='14' text-anchor='middle' fill='var(--c-text)'>ボイリング:有効応力ゼロで砂が液体のように振る舞う</text></svg>"
        }
      ],
      formulas: [
        { id: "f1", name: "透水力(単位体積あたり)", latex: "j = i\\,\\gamma_w", vars: [ { sym: "j", meaning: "単位体積あたりの透水力", unit: "kN/m³" }, { sym: "i", meaning: "動水勾配", unit: "無次元" }, { sym: "\\gamma_w", meaning: "水の単位体積重量", unit: "kN/m³" } ], when: "浸透流が土骨格を押す力を評価するとき。ボイリング検討の前提", intuition: "失われた水頭のエネルギーが土を押す力に化ける", derivation: "体積Vの土塊が失う水頭差Δhによる力 γwΔhA を体積 AL で割ると iγw", blank: "j = i\\,?", blankAnswer: "\\gamma_w" },
        { id: "f2", name: "限界動水勾配", latex: "i_c = \\dfrac{\\gamma'}{\\gamma_w} = \\dfrac{G_s - 1}{1 + e}", vars: [ { sym: "i_c", meaning: "限界動水勾配", unit: "無次元" }, { sym: "\\gamma'", meaning: "水中単位体積重量", unit: "kN/m³" }, { sym: "G_s", meaning: "土粒子の比重", unit: "無次元" }, { sym: "e", meaning: "間隙比", unit: "無次元" } ], when: "上向き浸透でボイリングが起こる限界を求めるとき", intuition: "Gs≈2.65、e≈0.65 を入れるとほぼ1。「ic はだいたい1」と覚える", derivation: "上向き透水力 icγw = 有効重量 γ' のつり合い。γ' = (Gs−1)γw/(1+e) を代入", blank: "i_c = \\dfrac{G_s - 1}{?}", blankAnswer: "1 + e" },
        { id: "f3", name: "ボイリングに対する安全率", latex: "F_s = \\dfrac{i_c}{i}", vars: [ { sym: "F_s", meaning: "安全率", unit: "無次元" }, { sym: "i_c", meaning: "限界動水勾配", unit: "無次元" }, { sym: "i", meaning: "実際の(上向き)動水勾配", unit: "無次元" } ], when: "掘削底面などのボイリング照査。Fs < 1で発生の危険", intuition: "限界に対して実際がどれだけ余裕あるか。通常1.5〜2以上を確保", derivation: "抵抗(ic)÷作用(i)という安全率の一般形", blank: "F_s = \\dfrac{?}{i}", blankAnswer: "i_c" }
      ],
      selectQuiz: [
        { q: "上向き浸透のある掘削底面で、砂が吹き上がる限界の動水勾配を知りたい", choices: ["限界動水勾配 ic = (Gs−1)/(1+e)", "ダルシーの法則 v = ki", "毛管上昇高の式", "締固め度の式"], answer: 0, expl: "ボイリング限界=限界動水勾配。有効重量と透水力のつり合いから", formulaRef: "f2" },
        { q: "浸透流が単位体積の土骨格を押す力を求めたい", choices: ["透水力 j = iγw", "浸透流量 Q = kiA", "水中単位体積重量 γ'", "実流速 vs = v/n"], answer: 0, expl: "動水勾配×水の単位体積重量が単位体積あたりの透水力", formulaRef: "f1" },
        { q: "実際の動水勾配0.6の現場で、ボイリングの安全性を数値で示したい", choices: ["安全率 Fs = ic/i", "動水勾配 i = Δh/L", "kh の式", "サクションの定義"], answer: 0, expl: "抵抗÷作用=安全率。ic ≈ 1 なら Fs ≈ 1.7 で一応安全圏", formulaRef: "f3" }
      ],
      problems: [
        {
          id: "p1",
          pattern: "限界動水勾配の計算",
          variants: [
            {
              q: "土粒子の比重2.65、間隙比0.65の砂の限界動水勾配を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$i_c = \\dfrac{G_s - 1}{1 + e}$" },
                { label: "② 代入", content: "$i_c = \\dfrac{2.65 - 1}{1 + 0.65} = \\dfrac{1.65}{1.65}$" },
                { label: "③ 計算", content: "$i_c = 1.00$" },
                { label: "④ 妥当性確認", content: "「砂の ic はほぼ1」という相場どおり。きれいに1になる組合せ" }
              ],
              answer: "ic = 1.00"
            },
            {
              q: "土粒子の比重2.70、間隙比0.80のゆるい砂の限界動水勾配を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$i_c = \\dfrac{G_s - 1}{1 + e}$" },
                { label: "② 代入", content: "$i_c = \\dfrac{2.70 - 1}{1 + 0.80} = \\dfrac{1.70}{1.80}$" },
                { label: "③ 計算", content: "$i_c = 0.94$" },
                { label: "④ 妥当性確認", content: "ゆるい(eが大きい)ほど ic は小さく、ボイリングしやすい。1よりやや小で整合的" }
              ],
              answer: "ic = 0.94"
            }
          ],
          formulaRefs: ["f2"]
        },
        {
          id: "p2",
          pattern: "ボイリングの安全率照査",
          variants: [
            {
              q: "掘削底面下の砂(Gs = 2.65、e = 0.65)に、水頭差3.0 m・浸透距離4.0 mの上向き浸透が生じている。ボイリングに対する安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$i = \\dfrac{\\Delta h}{L}$ → $i_c = \\dfrac{G_s - 1}{1+e}$ → $F_s = \\dfrac{i_c}{i}$" },
                { label: "② 動水勾配", content: "$i = \\dfrac{3.0}{4.0} = 0.75$" },
                { label: "③ 限界動水勾配", content: "$i_c = \\dfrac{1.65}{1.65} = 1.00$" },
                { label: "④ 安全率", content: "$F_s = \\dfrac{1.00}{0.75} = 1.33$" },
                { label: "⑤ 判定", content: "Fs > 1 でボイリングは起きないが、通常確保したい1.5には不足。対策検討が望ましい" }
              ],
              answer: "Fs = 1.33(発生はしないが余裕不足)"
            },
            {
              q: "砂地盤(Gs = 2.66、e = 0.75)に水頭差2.4 m・浸透距離2.0 mの上向き浸透が生じた。ボイリングの発生を判定せよ。",
              steps: [
                { label: "① 式の選択", content: "$i = \\Delta h / L$、$i_c = (G_s-1)/(1+e)$、$F_s = i_c/i$" },
                { label: "② 動水勾配", content: "$i = \\dfrac{2.4}{2.0} = 1.20$" },
                { label: "③ 限界動水勾配", content: "$i_c = \\dfrac{1.66}{1.75} = 0.95$" },
                { label: "④ 安全率", content: "$F_s = \\dfrac{0.95}{1.20} = 0.79$" },
                { label: "⑤ 判定", content: "Fs < 1 → ボイリング発生。水位差の低減や矢板根入れの延長(Lを増やす)が必要" }
              ],
              answer: "Fs = 0.79 < 1 → ボイリング発生の危険"
            }
          ],
          formulaRefs: ["f2", "f3"]
        }
      ],
      quiz: [
        { q: "透水力の向きは?", choices: ["常に鉛直下向き", "常に鉛直上向き", "浸透流の流れの方向", "流れと直角の方向"], answer: 2, expl: "水が流れる向きに土骨格を押す。上向き浸透のときだけ危険側に働く", sectionRef: 0 },
        { q: "多くの砂で限界動水勾配 ic はおよそいくつ?", choices: ["0.1", "1.0", "10", "100"], answer: 1, expl: "(Gs−1)/(1+e) に Gs≈2.65、e≈0.65 を入れるとほぼ1になる", sectionRef: 1 },
        { q: "ボイリングが起きたとき地盤内部で起きていることは?", choices: ["有効応力がゼロになる", "間隙水圧がゼロになる", "土粒子が溶解する", "透水係数がゼロになる"], answer: 0, expl: "透水力が有効重量とつり合い、粒子間の押し合う力(有効応力)が消えて液体状に", sectionRef: 1 },
        { q: "下向きの浸透流は地盤に対してどう働く?", choices: ["土を締め付け安定側に働く", "土を持ち上げ危険側に働く", "何の影響もない", "必ず液状化させる"], answer: 0, expl: "下向きの透水力は有効応力を増やす方向。危険なのは上向き浸透", sectionRef: 0 }
      ]
    },

    // ================= u7 =================
    {
      id: "u7",
      title: "フローネットと井戸の定常揚水",
      weeks: "第11〜13週",
      priority: 3,
      sections: [
        {
          heading: "地下水流れを支配するラプラス方程式",
          body: "<p>二次元の定常浸透では、水の質量保存(連続の方程式)とダルシーの法則を組み合わせると、全水頭 $h$ が<b>ラプラス方程式</b> $\\dfrac{\\partial^2 h}{\\partial x^2} + \\dfrac{\\partial^2 h}{\\partial z^2} = 0$ に従います。「入った水と出た水は同じ量」という当たり前の条件を数式にしたものです。この方程式の解は、水の通り道を表す[[流線]]と、水頭の等しい点を結ぶ[[等ポテンシャル線]]という<b>互いに直交する2つの曲線群</b>で表現できます。地図でいう「川筋」と「等高線」の関係とそっくりです。</p>"
        },
        {
          heading: "フローネット:描くだけで流量が出る図式解法",
          body: "<p>ラプラス方程式を手計算で解く代わりに、流線と等ポテンシャル線を<b>直交する正方形に近い網目</b>になるよう描いたのが[[フローネット]]です。流線に挟まれた帯(流管)の数を $N_f$、等ポテンシャル線の間隔の数を $N_d$ とすると、単位奥行きあたりの浸透流量は $q = kh\\dfrac{N_f}{N_d}$ で求められます。各流管を流れる量が等しく、各区間で失う水頭も等しいという性質を使った、実に賢い図式解法です。矢板やダム基礎の浸透量計算の定番で、試験でも「$N_f$ と $N_d$ を数えて代入」が頻出です。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='60' width='340' height='180' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='210' y1='40' x2='210' y2='150' stroke='var(--c-text)' stroke-width='5'/><path d='M60 100 C 130 110, 180 160, 210 165 C 240 160, 290 110, 360 100' fill='none' stroke='var(--c-accent)' stroke-width='2'/><path d='M60 140 C 120 150, 175 190, 210 195 C 245 190, 300 150, 360 140' fill='none' stroke='var(--c-accent)' stroke-width='2'/><path d='M60 185 C 120 195, 170 220, 210 222 C 250 220, 300 195, 360 185' fill='none' stroke='var(--c-accent)' stroke-width='2'/><path d='M150 60 C 160 100, 170 150, 165 240' fill='none' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='5 3'/><path d='M270 60 C 260 100, 250 150, 255 240' fill='none' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='5 3'/><path d='M100 60 C 108 120, 112 180, 108 240' fill='none' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='5 3'/><path d='M320 60 C 312 120, 308 180, 312 240' fill='none' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='5 3'/><text x='215' y='55' font-size='14' fill='var(--c-text)'>矢板</text><text x='68' y='92' font-size='14' fill='var(--c-accent)'>流線</text><text x='75' y='260' font-size='14' fill='var(--c-text)'>等ポテンシャル線(破線)</text><text x='210' y='288' font-size='14' text-anchor='middle' fill='var(--c-text)'>フローネット: q = k h Nf / Nd</text></svg>"
        },
        {
          heading: "Dupitの仮定と井戸の定常揚水",
          body: "<p>自由水面をもつ緩やかな地下水の流れでは、「流れはほぼ水平で、動水勾配は水面の勾配に等しい」とみなす[[Dupitの仮定]]で計算が一気に簡単になります。これを井戸に適用したのが[[定常揚水]]の理論です。井戸から汲み続けて水位が安定すると、水面はすり鉢状に下がります。自由水面をもつ<b>重力井戸</b>では $Q = \\dfrac{\\pi k (h_2^2 - h_1^2)}{\\ln(r_2/r_1)}$、不透水層に挟まれた被圧帯水層を貫く<b>掘抜き井戸</b>では $Q = \\dfrac{2\\pi k D (h_2 - h_1)}{\\ln(r_2/r_1)}$。逆に、揚水量と2本の観測井の水位から現場の透水係数 $k$ を求める<b>現場揚水試験</b>にも同じ式を使います。</p>"
        }
      ],
      formulas: [
        { id: "f1", name: "ラプラス方程式(二次元定常浸透)", latex: "\\dfrac{\\partial^2 h}{\\partial x^2} + \\dfrac{\\partial^2 h}{\\partial z^2} = 0", vars: [ { sym: "h", meaning: "全水頭", unit: "m" }, { sym: "x, z", meaning: "水平・鉛直座標", unit: "m" } ], when: "二次元浸透の理論的な支配方程式として。フローネットの根拠", intuition: "「湧きも消えもしない水」の保存則+ダルシー則の合体", derivation: "連続の方程式に vx = −k∂h/∂x、vz = −k∂h/∂z を代入", blank: "\\dfrac{\\partial^2 h}{\\partial x^2} + \\dfrac{\\partial^2 h}{\\partial z^2} = ?", blankAnswer: "0" },
        { id: "f2", name: "フローネットによる浸透流量", latex: "q = k\\,h\\,\\dfrac{N_f}{N_d}", vars: [ { sym: "q", meaning: "単位奥行きあたりの浸透流量", unit: "m³/s/m" }, { sym: "h", meaning: "全水頭差", unit: "m" }, { sym: "N_f", meaning: "流管の数(流線の間の帯)", unit: "本" }, { sym: "N_d", meaning: "等ポテンシャル間隔の数", unit: "個" } ], when: "フローネットが与えられて浸透量を問われたとき。矢板・ダム基礎の定番", intuition: "Nf 本の水路に、水頭差を Nd 等分ずつ使いながら流れる", derivation: "1流管の流量 k(h/Nd)×1 を Nf 倍する(正方形網目なら通水幅=区間長)", blank: "q = k\\,h\\,\\dfrac{?}{N_d}", blankAnswer: "N_f" },
        { id: "f3", name: "Dupitの仮定による単位幅流量", latex: "q = \\dfrac{k(h_1^2 - h_2^2)}{2L}", vars: [ { sym: "q", meaning: "単位幅あたりの流量", unit: "m³/s/m" }, { sym: "h_1, h_2", meaning: "上流・下流の水位(不透水層から)", unit: "m" }, { sym: "L", meaning: "水平距離", unit: "m" } ], when: "自由水面をもつ緩勾配の地下水流れ(堤体・帯水層)の流量計算", intuition: "水面勾配=動水勾配とみなすと水位の2乗の差が出てくる", derivation: "q = k h (−dh/dx) を x で積分すると h² の差になる", blank: "q = \\dfrac{k(h_1^2 - h_2^2)}{?}", blankAnswer: "2L" },
        { id: "f4", name: "重力井戸の定常揚水量(不圧帯水層)", latex: "Q = \\dfrac{\\pi k (h_2^2 - h_1^2)}{\\ln(r_2/r_1)}", vars: [ { sym: "Q", meaning: "揚水量", unit: "m³/s" }, { sym: "h_1, h_2", meaning: "半径r1・r2での水位", unit: "m" }, { sym: "r_1, r_2", meaning: "井戸中心からの距離", unit: "m" } ], when: "自由水面をもつ帯水層の井戸。揚水量計算と現場透水試験の両方で使う", intuition: "Dupitの仮定を放射状の流れに適用。水位の2乗差と距離の対数比", derivation: "Q = k(2πrh)(dh/dr) を r で積分", blank: "Q = \\dfrac{\\pi k (h_2^2 - h_1^2)}{\\ln(?/r_1)}", blankAnswer: "r_2" },
        { id: "f5", name: "掘抜き井戸の定常揚水量(被圧帯水層)", latex: "Q = \\dfrac{2\\pi k D (h_2 - h_1)}{\\ln(r_2/r_1)}", vars: [ { sym: "Q", meaning: "揚水量", unit: "m³/s" }, { sym: "D", meaning: "被圧帯水層の厚さ", unit: "m" }, { sym: "h_1, h_2", meaning: "半径r1・r2での水頭", unit: "m" } ], when: "不透水層に挟まれた被圧帯水層を貫く井戸のとき", intuition: "流れる断面の高さが D で一定なので、水頭は2乗でなく1乗の差", derivation: "Q = k(2πrD)(dh/dr) を r で積分。断面が一定なのが重力井戸との違い", blank: "Q = \\dfrac{2\\pi k \\, ? \\,(h_2 - h_1)}{\\ln(r_2/r_1)}", blankAnswer: "D" }
      ],
      selectQuiz: [
        { q: "矢板周りのフローネット(Nf = 4、Nd = 12)から浸透量を求めたい", choices: ["q = kh·Nf/Nd", "Q = πk(h2²−h1²)/ln(r2/r1)", "v = ki だけで計算", "kv = ΣHi/Σ(Hi/ki)"], answer: 0, expl: "フローネットが与えられたら流管数と等ポテンシャル間隔数を数えて代入", formulaRef: "f2" },
        { q: "自由水面のある帯水層の井戸から一定量を汲み続けたときの揚水量式は?", choices: ["重力井戸 Q = πk(h2²−h1²)/ln(r2/r1)", "掘抜き井戸 Q = 2πkD(h2−h1)/ln(r2/r1)", "定水位試験の式", "ダルシーの法則のみ"], answer: 0, expl: "自由水面あり=不圧=重力井戸。水位の2乗差がサイン", formulaRef: "f4" },
        { q: "上下を不透水層に挟まれた厚さDの被圧帯水層を貫く井戸の揚水量は?", choices: ["Q = 2πkD(h2−h1)/ln(r2/r1)", "Q = πk(h2²−h1²)/ln(r2/r1)", "q = kh·Nf/Nd", "q = k(h1²−h2²)/(2L)"], answer: 0, expl: "被圧=掘抜き井戸。流れる断面の厚さDが一定なので水頭は1乗の差", formulaRef: "f5" },
        { q: "揚水試験で観測井2本の水位から現場の透水係数を逆算したい", choices: ["重力井戸の式を k について解く", "変水位透水試験の式", "ゼロ空気間隙曲線", "限界動水勾配の式"], answer: 0, expl: "揚水式は Q と水位から k を求める現場透水試験としても使える", formulaRef: "f4" },
        { q: "流線と等ポテンシャル線の関係として正しいのは?", choices: ["互いに直交する", "互いに平行", "必ず一致する", "無関係"], answer: 0, expl: "水は水頭の最も急な下り方向=等ポテンシャル線の直角方向に流れる", formulaRef: "f1" }
      ],
      problems: [
        {
          id: "p1",
          pattern: "フローネットによる浸透流量計算",
          variants: [
            {
              q: "矢板で仕切られた地盤のフローネットを描いたところ、流管数 Nf = 4、等ポテンシャル間隔数 Nd = 12 であった。透水係数 2.0×10⁻⁵ m/s、上下流の水頭差 6.0 m のとき、単位奥行きあたりの浸透流量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "フローネット→ $q = k h \\dfrac{N_f}{N_d}$" },
                { label: "② 代入", content: "$q = 2.0 \\times 10^{-5} \\times 6.0 \\times \\dfrac{4}{12}$" },
                { label: "③ 計算", content: "$q = 1.2 \\times 10^{-4} \\times 0.333 = 4.0 \\times 10^{-5}$ m³/s/m" },
                { label: "④ 妥当性確認", content: "1日・奥行き1mあたり約3.5 m³。矢板掘削の湧水量として現実的" }
              ],
              answer: "q = 4.0×10⁻⁵ m³/s/m"
            },
            {
              q: "ダム基礎地盤のフローネットで Nf = 5、Nd = 15 と数えられた。k = 5.0×10⁻⁶ m/s、水頭差4.5 mのとき単位奥行きあたりの浸透流量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$q = k h \\dfrac{N_f}{N_d}$" },
                { label: "② 代入", content: "$q = 5.0 \\times 10^{-6} \\times 4.5 \\times \\dfrac{5}{15}$" },
                { label: "③ 計算", content: "$q = 2.25 \\times 10^{-5} \\times 0.333 = 7.5 \\times 10^{-6}$ m³/s/m" },
                { label: "④ 妥当性確認", content: "Nf/Nd = 1/3。網目の数え間違いが最大の失点源なので図で再確認する癖を" }
              ],
              answer: "q = 7.5×10⁻⁶ m³/s/m"
            }
          ],
          formulaRefs: ["f2"]
        },
        {
          id: "p2",
          pattern: "井戸の定常揚水量の計算",
          variants: [
            {
              q: "不圧帯水層(k = 1.0×10⁻⁴ m/s)の重力井戸で定常揚水を行ったところ、井戸壁(r₁ = 0.3 m)で水位 h₁ = 4.0 m、影響圏(r₂ = 300 m)で h₂ = 10.0 m であった。揚水量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "自由水面あり→重力井戸 $Q = \\dfrac{\\pi k (h_2^2 - h_1^2)}{\\ln(r_2/r_1)}$" },
                { label: "② 代入", content: "$h_2^2 - h_1^2 = 100 - 16 = 84$、$\\ln(300/0.3) = \\ln 1000 = 6.91$" },
                { label: "③ 計算", content: "$Q = \\dfrac{3.14 \\times 10^{-4} \\times 84}{6.91} = \\dfrac{2.64 \\times 10^{-2}}{6.91} = 3.82 \\times 10^{-3}$ m³/s" },
                { label: "④ 妥当性確認", content: "1日あたり約330 m³。産業用井戸として現実的なオーダー" }
              ],
              answer: "Q = 3.82×10⁻³ m³/s(≈330 m³/日)"
            },
            {
              q: "厚さ D = 10 m の被圧帯水層(k = 2.0×10⁻⁴ m/s)を貫く掘抜き井戸で、r₁ = 0.2 m で水頭 h₁、r₂ = 200 m で水頭 h₂、その差 h₂ − h₁ = 5.0 m の定常状態となった。揚水量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "被圧帯水層→掘抜き井戸 $Q = \\dfrac{2\\pi k D (h_2 - h_1)}{\\ln(r_2/r_1)}$。水頭は1乗の差でよい" },
                { label: "② 代入", content: "$\\ln(200/0.2) = \\ln 1000 = 6.91$、$Q = \\dfrac{2\\pi \\times 2.0 \\times 10^{-4} \\times 10 \\times 5.0}{6.91}$" },
                { label: "③ 計算", content: "分子 $= 6.28 \\times 2.0 \\times 10^{-4} \\times 50 = 6.28 \\times 10^{-2}$、$Q = \\dfrac{6.28 \\times 10^{-2}}{6.91} = 9.10 \\times 10^{-3}$ m³/s" },
                { label: "④ 妥当性確認", content: "重力井戸(2乗差)と掘抜き井戸(1乗差)の式の取り違えが最頻出ミス。「被圧=D一定=1乗」で覚える" }
              ],
              answer: "Q = 9.10×10⁻³ m³/s"
            }
          ],
          formulaRefs: ["f4", "f5"]
        }
      ],
      quiz: [
        { q: "二次元定常浸透の全水頭が従う方程式は?", choices: ["ラプラス方程式", "ナビエ・ストークス方程式そのもの", "波動方程式", "熱伝導の非定常方程式"], answer: 0, expl: "連続の方程式+ダルシーの法則で ∂²h/∂x² + ∂²h/∂z² = 0 に帰着する", sectionRef: 0 },
        { q: "フローネットの網目はどんな形に描くのが原則?", choices: ["直交する正方形に近い形", "正三角形", "同心円のみ", "任意の平行四辺形"], answer: 0, expl: "流線と等ポテンシャル線が直交し、縦横比1の網目にすると q = kh Nf/Nd が成立", sectionRef: 1 },
        { q: "Dupitの仮定の内容として正しいのは?", choices: ["流れはほぼ水平で動水勾配は水面勾配に等しい", "流れは常に鉛直方向", "水頭は時間とともに変化する", "透水係数は深さで変わる"], answer: 0, expl: "緩やかな自由水面流れの近似。これで井戸の式が積分できるようになる", sectionRef: 2 },
        { q: "重力井戸と掘抜き井戸の式の違いは?", choices: ["重力井戸は水位の2乗差、掘抜き井戸は水頭の1乗差", "重力井戸は1乗差、掘抜き井戸は2乗差", "どちらも2乗差", "どちらも1乗差"], answer: 0, expl: "重力井戸は流れる断面の高さが水位とともに変わるので2乗、被圧はD一定で1乗", sectionRef: 2 },
        { q: "定常揚水試験の現場での主な使い道は?", choices: ["地盤全体の透水係数を求める", "土粒子の比重を求める", "含水比を求める", "液性限界を求める"], answer: 0, expl: "Qと観測井の水位から揚水式を k について解く。室内試験より広い範囲の平均値が得られる", sectionRef: 2 }
      ]
    }
  ]
};
