window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA["doshitsu3"] = {
  id: "doshitsu3",
  name: "土質力学3",
  teacher: "小髙 猛司",
  year: "3年・選択必修",
  examInfo: "小テスト・レポート20% / 定期試験80%",
  examTips: "土圧理論に6週、支持力に3週を割いており、この2分野が試験の主戦場。ランキン主働土圧の合力計算とTerzaghiの支持力式は数値計算まで確実に。斜面安定は強度安全率・限界すべり深さ、土圧は地下水位を含む分布とL型擁壁の疑似擁壁・試行くさび法まで押さえること。関数電卓必須の科目なので、tan²(45°±φ/2)の計算は手に馴染ませておく。",
  glossary: [
    { term: "安全率", reading: "あんぜんりつ", def: "抵抗する力(強さ)を作用する力(応力)で割った値。1より大きいほど余裕がある。斜面安定では Fs≧1.2〜1.5 程度が設計の目安。" },
    { term: "強度安全率", reading: "きょうどあんぜんりつ", def: "土が本来持つせん断強さを、実際に動員されているせん断強度で割った安全率。斜面全体の安全率と同じ考え方で、cやtanφをFsで割った動員強度として表せる。" },
    { term: "動員せん断強度", reading: "どういんせんだんきょうど", def: "斜面が現在のつり合いを保つために実際に使っているせん断強さ。破壊時の強さより小さく、cm=c/Fs、tanφm=tanφ/Fs のように表す。" },
    { term: "限界すべり深さ", reading: "げんかいすべりふかさ", def: "無限長斜面で安全率Fsが1になるすべり面深さ。これより深い面を仮定すると不安定になる境界値で、粘着力のある斜面で重要。" },
    { term: "すべり面", reading: "すべりめん", def: "斜面が崩壊するときに土塊が滑り落ちる境界面。直線・円弧・複合形状などを仮定して解析する。" },
    { term: "円弧すべり", reading: "えんこすべり", def: "すべり面を円弧と仮定した斜面崩壊の解析モデル。粘性土斜面の崩壊形状に近く、モーメントのつり合いで安全率を求める。" },
    { term: "分割法", reading: "ぶんかつほう", def: "円弧すべり解析で土塊を鉛直な短冊(スライス)に分割し、各スライスの力を足し合わせて安全率を求める方法。スウェーデン法(フェレニウス法)が代表。" },
    { term: "無限長斜面", reading: "むげんちょうしゃめん", def: "斜面が一様に無限に続くと仮定したモデル。すべり面が斜面と平行になり、安全率が簡単な式で表せる。自然斜面の表層すべりの解析に使う。" },
    { term: "モール・クーロンの破壊規準", reading: "モール・クーロンのはかいきじゅん", def: "土のせん断破壊条件 τf = c + σtanφ。せん断強さが垂直応力に比例して増える、という土質力学の最重要規準。" },
    { term: "せん断強さ", reading: "せんだんつよさ", def: "土がせん断破壊するときのせん断応力の限界値。粘着力成分と摩擦成分の和で表される。" },
    { term: "内部摩擦角", reading: "ないぶまさつかく", def: "記号φ。土粒子どうしの摩擦・かみ合わせによる強さの指標。砂で30°前後。垂直応力が大きいほど摩擦分の強さが増える。" },
    { term: "粘着力", reading: "ねんちゃくりょく", def: "記号c。垂直応力がゼロでも発揮されるせん断強さ。粘土の粒子間の結びつきが由来。砂ではほぼゼロ。" },
    { term: "有効応力", reading: "ゆうこうおうりょく", def: "全応力から間隙水圧を引いた、土粒子骨格が実際に受け持つ応力 σ' = σ − u。土の強さと変形は有効応力で決まる。" },
    { term: "地下水位", reading: "ちかすいい", def: "地盤内で間隙水圧が大気圧に等しくなる高さ。土圧計算では地下水位より下の土の有効応力に土圧係数を掛け、別に水圧をそのまま加える。" },
    { term: "土圧", reading: "どあつ", def: "土が擁壁などの構造物に及ぼす水平方向の圧力。水圧と違い、壁の動く方向と量によって大きさが変わるのが最大の特徴。" },
    { term: "静止土圧", reading: "せいしどあつ", def: "壁がまったく動かないときの土圧。係数K0で表し、砂ではヤーキーの式 K0 = 1 − sinφ' で推定する。主働と受働の中間の大きさ。" },
    { term: "主働土圧", reading: "しゅどうどあつ", def: "壁が土から離れる向きにわずかに動いたとき、土が伸びて破壊状態に達したときの最小の土圧。擁壁設計で外力として使う。" },
    { term: "受働土圧", reading: "じゅどうどあつ", def: "壁が土を押し込む向きに動いたとき、土が圧縮されて破壊状態に達したときの最大の土圧。抵抗力として期待できる上限。" },
    { term: "土圧係数", reading: "どあつけいすう", def: "水平土圧と鉛直応力の比 K = σh/σv。静止K0、主働Ka、受働Kpがあり、Ka < K0 < Kp の大小関係が必ず成り立つ。" },
    { term: "ランキン土圧", reading: "ランキンどあつ", def: "地盤全体が塑性平衡(破壊状態)にあると仮定して土圧を求める理論。壁面摩擦を無視し、壁背面が鉛直・地表が水平の場合に簡潔な式になる。" },
    { term: "クーロン土圧", reading: "クーロンどあつ", def: "壁の背後に三角形のすべり土塊(くさび)を仮定し、力のつり合いから土圧合力を求める理論。壁面摩擦や壁の傾き、地表の傾斜も扱える。" },
    { term: "試行くさび法", reading: "しこうくさびほう", def: "クーロン土圧で、すべり面の角度をいくつも仮定して土圧合力を計算し、主働では最大になるくさびを採用する方法。" },
    { term: "壁面摩擦角", reading: "へきめんまさつかく", def: "記号δ。壁と土の間に働く摩擦の角度。クーロン土圧で考慮され、通常 δ = (1/3〜2/3)φ 程度をとる。" },
    { term: "塑性平衡", reading: "そせいへいこう", def: "地盤内の応力がモール・クーロンの破壊規準にちょうど達し、いたるところで破壊が始まる限界のつり合い状態。ランキン土圧の前提。" },
    { term: "引張り亀裂", reading: "ひっぱりきれつ", def: "粘着力のある土で、地表近くの主働土圧が計算上マイナス(引張り)になるために地表面に生じる亀裂。深さ zc = 2c/(γ√Ka) まで発達しうる。" },
    { term: "鉛直自立高さ", reading: "えんちょくじりつたかさ", def: "粘着力のある土が支えなしで鉛直に立っていられる限界の高さ Hc = 4c/(γ√Ka)。主働土圧の合力がゼロになる深さとして導かれる。" },
    { term: "擁壁", reading: "ようへき", def: "土の崩壊を防ぐために土を横から支える壁状の構造物。転倒・滑動・支持力の3条件を満たすように設計する。" },
    { term: "疑似擁壁", reading: "ぎじようへき", def: "L型擁壁などで、壁本体と底版上の裏込め土を一体の仮想的な擁壁として扱う考え方。安定計算ではこの疑似擁壁に作用する土圧と重量を使う。" },
    { term: "ミドルサード", reading: "ミドルサード", def: "底面の中央1/3の範囲。合力の作用点がこの範囲に入れば底面全体が圧縮となり、地盤に引張り(浮き上がり)が生じない。偏心量 e ≦ B/6 が条件。" },
    { term: "ブシネスクの式", reading: "ブシネスクのしき", def: "地表面に作用する集中荷重によって地盤内部に生じる応力を、弾性論に基づいて与える式。線状・帯状・長方形など様々な荷重の解の出発点。" },
    { term: "即時沈下", reading: "そくじちんか", def: "載荷と同時に生じる弾性的な沈下。圧密沈下と違って時間遅れがない。弾性係数とポアソン比を使った弾性論の式で計算する。" },
    { term: "極限支持力", reading: "きょくげんしじりょく", def: "記号qu。地盤がせん断破壊する直前まで支えられる基礎底面の最大圧力。Terzaghiの支持力式などで計算する。" },
    { term: "許容支持力", reading: "きょようしじりょく", def: "極限支持力を安全率(通常3)で割った、設計上許される地盤反力の上限 qa = qu/Fs。" },
    { term: "支持力係数", reading: "しじりょくけいすう", def: "Terzaghiの支持力式に現れる係数 Nc・Nq・Nγ。内部摩擦角φだけで決まり、表や図から読み取って使う。φが大きいほど急激に大きくなる。" },
    { term: "根入れ深さ", reading: "ねいれふかさ", def: "記号Df。地表面から基礎底面までの深さ。深いほど上載圧 γDf が押さえとして働き、支持力が増える。" },
    { term: "全般せん断破壊", reading: "ぜんぱんせんだんはかい", def: "密な地盤で、基礎下のすべり面が地表面まで連続して発達し、明確なピーク荷重を示す破壊形態。Terzaghi式の基本形はこのモードを仮定している。" },
    { term: "杭基礎", reading: "くいきそ", def: "深い基礎の代表。浅い地盤が軟弱なとき、杭を深部の良好な地盤まで打ち込み、先端支持力と周面摩擦力で荷重を支える。" }
  ],
  units: [
    // ============================================================
    // u1 モール・クーロンの復習と斜面の安全率
    // ============================================================
    {
      id: "u1",
      title: "モール・クーロンの復習と斜面の安全率(無限長斜面)",
      weeks: "第1週",
      priority: 3,
      sections: [
        {
          heading: "出発点はモール・クーロンの破壊規準",
          body: "<p>土質力学3の応用問題は、すべて土質力学2で学んだ[[モール・クーロンの破壊規準]]から始まる。土の[[せん断強さ]]は $\\tau_f = c + \\sigma\\tan\\phi$、つまり<b>[[粘着力]] c と摩擦成分 σtanφ の和</b>で表される。摩擦成分は押さえつける垂直応力σが大きいほど増える。本棚の本を横から強く押さえるほど1冊を抜きにくくなるのと同じ理屈だ。地下水がある場合は、強さを決めるのは[[有効応力]]なので $\\tau_f = c' + \\sigma'\\tan\\phi'$ と書き換える。この式が斜面安定・土圧・支持力すべての「強さの物差し」になる。</p>"
        },
        {
          heading: "斜面の安全率とは「強さ÷働く力」",
          body: "<p>斜面は重力で常に下向きに引かれており、[[すべり面]]上のせん断応力τがせん断強さ$\\tau_f$を超えた瞬間に崩壊する。そこで<b>[[安全率]] $F_s = \\tau_f / \\tau$</b>(持っている強さ ÷ 実際に働く応力)を定義する。$F_s = 1$がちょうど崩壊の限界、設計では1.2〜1.5以上を確保する。テストで言えば「合格点60点に対して自分の実力が何点あるか」の比率のようなもので、1.0ギリギリでは少しの雨(条件悪化)で不合格=崩壊になる。</p>"
        },
        {
          heading: "強度安全率:どれだけ強さを使っているか",
          body: "<p>レジュメで強調されている[[強度安全率]]は、<b>破壊時のせん断強さ $\\tau_f$ を、実際に発揮されている[[動員せん断強度]] $\\tau_m$ で割る</b>考え方だ。$F_s = \\tau_f/\\tau_m$ なので、いま使っている強さは $\\tau_m = \\tau_f/F_s$。モール・クーロンで書くと $c_m = c/F_s$、$\\tan\\phi_m = \\tan\\phi/F_s$ となり、斜面が安定しているほど「まだ使っていない強さ」が残っていると読める。斜面全体の安全率と同じ比なので、言葉が変わっても<b>強さ÷必要な強さ</b>の発想は変わらない。</p>"
        },
        {
          heading: "無限長斜面:表層すべりの基本モデル",
          body: "<p>一様な斜面が長く続く自然斜面では、すべり面は斜面に平行な浅い面になりやすい。これを[[無限長斜面]]としてモデル化すると、土柱1本の力のつり合いだけで安全率が求まる。砂質土(c=0)なら$F_s = \\tan\\phi/\\tan\\beta$という驚くほど簡単な式になり、<b>深さにも土の重さにも無関係</b>、つまり斜面角βが[[内部摩擦角]]φより小さければ安定する。粘着力がある場合や浸透流がある場合は分子・分母に項が加わる。雨で斜面が崩れやすくなるのは、間隙水圧で有効応力が減り、分子(強さ)が小さくなるからだ。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><polygon points='10,270 410,90 410,270' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><line x1='60' y1='247' x2='360' y2='112' stroke='var(--c-accent)' stroke-width='3' stroke-dasharray='8 5'/><polygon points='180,193 230,170 240,192 190,215' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='1.5'/><line x1='210' y1='192' x2='210' y2='245' stroke='var(--c-text)' stroke-width='2.5' marker-end='url(#a1)'/><text x='216' y='238' font-size='16' fill='var(--c-text)'>W</text><line x1='212' y1='194' x2='258' y2='173' stroke='var(--c-accent)' stroke-width='2.5' marker-end='url(#a1)'/><text x='250' y='163' font-size='16' fill='var(--c-accent)'>T(せん断)</text><line x1='205' y1='196' x2='183' y2='150' stroke='var(--c-accent)' stroke-width='2.5' marker-end='url(#a1)'/><text x='120' y='142' font-size='16' fill='var(--c-accent)'>N(垂直)</text><path d='M 110 270 A 45 45 0 0 0 100 248' fill='none' stroke='var(--c-text)' stroke-width='1.5'/><line x1='10' y1='270' x2='150' y2='270' stroke='var(--c-line)' stroke-width='1.5' stroke-dasharray='4 4'/><text x='118' y='262' font-size='16' fill='var(--c-text)'>β</text><text x='240' y='120' font-size='15' fill='var(--c-accent)'>すべり面(斜面に平行)</text><text x='20' y='30' font-size='16' fill='var(--c-text)'>無限長斜面のモデル</text><defs><marker id='a1' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-accent)'/></marker></defs></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "モール・クーロンの破壊規準",
          latex: "\\tau_f = c + \\sigma\\tan\\phi",
          vars: [
            { sym: "\\tau_f", meaning: "せん断強さ", unit: "kN/m²" },
            { sym: "c", meaning: "粘着力", unit: "kN/m²" },
            { sym: "\\sigma", meaning: "すべり面上の垂直応力", unit: "kN/m²" },
            { sym: "\\phi", meaning: "内部摩擦角", unit: "°" }
          ],
          when: "せん断強さを計算する場面すべて。斜面安定・土圧・支持力の全公式の土台",
          intuition: "土の強さ=くっつく力(c)+押さえられて出る摩擦(σtanφ)",
          derivation: "モール円が破壊包絡線(切片c・勾配tanφの直線)に接する条件から",
          blank: "\\tau_f = c + \\sigma\\tan ?",
          blankAnswer: "\\phi"
        },
        {
          id: "f2",
          name: "有効応力による破壊規準",
          latex: "\\tau_f = c' + \\sigma'\\tan\\phi' = c' + (\\sigma - u)\\tan\\phi'",
          vars: [
            { sym: "c'", meaning: "有効応力に基づく粘着力", unit: "kN/m²" },
            { sym: "\\sigma'", meaning: "有効垂直応力", unit: "kN/m²" },
            { sym: "u", meaning: "間隙水圧", unit: "kN/m²" }
          ],
          when: "地下水位以下・浸透流がある地盤の強さを評価するとき",
          intuition: "水圧uが土粒子を浮かせる分、摩擦の効きが悪くなる",
          derivation: "有効応力の原理 σ' = σ − u をモール・クーロンに代入",
          blank: "\\tau_f = c' + (\\sigma - ?)\\tan\\phi'",
          blankAnswer: "u"
        },
        {
          id: "f3",
          name: "斜面の安全率(定義)",
          latex: "F_s = \\dfrac{\\tau_f}{\\tau} = \\dfrac{\\text{せん断強さ}}{\\text{せん断応力}}",
          vars: [
            { sym: "F_s", meaning: "安全率", unit: "無次元" },
            { sym: "\\tau_f", meaning: "すべり面のせん断強さ", unit: "kN/m²" },
            { sym: "\\tau", meaning: "すべり面に働くせん断応力", unit: "kN/m²" }
          ],
          when: "「安全率を求めよ」と言われたら、まず分子=強さ・分母=作用と整理する",
          intuition: "持ち点÷必要点。1を切ったら崩壊",
          derivation: "定義式。すべての斜面安定解析はこの比の計算方法の違い",
          blank: "F_s = \\dfrac{?}{\\tau}",
          blankAnswer: "\\tau_f"
        },
        {
          id: "f4",
          name: "無限長斜面の安全率(砂質土 c=0)",
          latex: "F_s = \\dfrac{\\tan\\phi}{\\tan\\beta}",
          vars: [
            { sym: "\\phi", meaning: "内部摩擦角", unit: "°" },
            { sym: "\\beta", meaning: "斜面の傾斜角", unit: "°" }
          ],
          when: "乾燥した砂質斜面(c=0)の表層すべり。「無限長」「一様な斜面」がキーワード",
          intuition: "深さも重さも消える。β<φなら安定。砂山の安息角がまさにβ=φの状態",
          derivation: "斜面平行すべり面上で τ=γz sinβcosβ、τf=γz cos²β tanφ の比をとると γz が約分される",
          blank: "F_s = \\dfrac{\\tan\\phi}{?}",
          blankAnswer: "\\tan\\beta"
        },
        {
          id: "f5",
          name: "無限長斜面の安全率(粘着力あり)",
          latex: "F_s = \\dfrac{c + \\gamma z\\cos^2\\beta\\tan\\phi}{\\gamma z\\sin\\beta\\cos\\beta}",
          vars: [
            { sym: "c", meaning: "粘着力", unit: "kN/m²" },
            { sym: "\\gamma", meaning: "土の単位体積重量", unit: "kN/m³" },
            { sym: "z", meaning: "すべり面の深さ", unit: "m" },
            { sym: "\\beta", meaning: "斜面の傾斜角", unit: "°" }
          ],
          when: "c≠0の無限長斜面。すべり面の深さzが与えられる問題",
          intuition: "c=0とすればf4に戻る。cがあると浅いすべり(z小)ほど安全率が上がる",
          derivation: "すべり面上の垂直応力 σ=γz cos²β、せん断応力 τ=γz sinβcosβ を Fs=τf/τ に代入",
          blank: "F_s = \\dfrac{c + \\gamma z\\cos^2\\beta\\tan\\phi}{?}",
          blankAnswer: "\\gamma z\\sin\\beta\\cos\\beta"
        },
        {
          id: "f6",
          name: "浸透流がある無限長斜面(水位が地表・c=0)",
          latex: "F_s = \\dfrac{\\gamma'}{\\gamma_{sat}}\\cdot\\dfrac{\\tan\\phi'}{\\tan\\beta}",
          vars: [
            { sym: "\\gamma'", meaning: "水中単位体積重量", unit: "kN/m³" },
            { sym: "\\gamma_{sat}", meaning: "飽和単位体積重量", unit: "kN/m³" },
            { sym: "\\phi'", meaning: "有効応力の内部摩擦角", unit: "°" }
          ],
          when: "豪雨などで地下水位が地表と一致し、斜面に平行な浸透流がある場合",
          intuition: "γ'/γsat ≈ 1/2 なので、水で満たされると安全率はほぼ半分に落ちる",
          derivation: "有効応力がγ'zで決まる一方、すべらせる力は全重量γsat·zで働くことから",
          blank: "F_s = \\dfrac{?}{\\gamma_{sat}}\\cdot\\dfrac{\\tan\\phi'}{\\tan\\beta}",
          blankAnswer: "\\gamma'"
        },
        {
          id: "f7",
          name: "強度安全率と動員強度",
          latex: "F_s = \\dfrac{\\tau_f}{\\tau_m},\\quad c_m = \\dfrac{c}{F_s},\\quad \\tan\\phi_m = \\dfrac{\\tan\\phi}{F_s}",
          vars: [
            { sym: "\\tau_m", meaning: "動員せん断強度", unit: "kN/m²" },
            { sym: "c_m, \\phi_m", meaning: "動員された粘着力・内部摩擦角", unit: "kN/m², °" }
          ],
          when: "強度安全率、動員せん断強度、動員粘着力を問われたとき",
          intuition: "Fsが大きいほど、実際に使っている強さは本来の強さより小さい",
          derivation: "Fs=強度/動員強度をモール・クーロンのc項とtanφ項に分けて表したもの",
          blank: "c_m = \\dfrac{c}{?}",
          blankAnswer: "F_s"
        },
        {
          id: "f8",
          name: "無限長斜面の限界すべり深さ",
          latex: "H_c = \\dfrac{c}{\\gamma\\cos^2\\beta(\\tan\\beta-\\tan\\phi)}",
          vars: [
            { sym: "H_c", meaning: "限界すべり深さ(Fs=1となる深さ)", unit: "m" },
            { sym: "\\beta", meaning: "斜面の傾斜角", unit: "°" }
          ],
          when: "粘着力のある乾燥無限長斜面で、どの深さまで安定かを問われたとき",
          intuition: "βがφに近づくほど分母が小さくなり、深いすべりまで安定になる",
          derivation: "f5の安全率をFs=1とおき、すべり面深さzについて解く",
          blank: "H_c = \\dfrac{c}{\\gamma\\cos^2\\beta(?)}",
          blankAnswer: "\\tan\\beta-\\tan\\phi"
        }
      ],
      selectQuiz: [
        {
          q: "乾燥した砂質土(c=0)の一様に長い自然斜面の安全率を、傾斜角と内部摩擦角だけから求めたい",
          choices: ["Fs = tanφ/tanβ", "Fs = c + σtanφ", "Fs = (γ'/γsat)(tanφ'/tanβ)", "Fs = Mr/Md"],
          answer: 0,
          expl: "c=0の無限長斜面ならγzが約分されて Fs = tanφ/tanβ だけで決まる",
          formulaRef: "f4"
        },
        {
          q: "地下水位が地表面まで上がり、斜面に平行な浸透流が生じた砂質斜面の安全率を求めたい",
          choices: ["Fs = tanφ/tanβ", "Fs = (γ'/γsat)(tanφ'/tanβ)", "τf = c + σtanφ", "Fs = τf/τ の定義のみで計算不能"],
          answer: 1,
          expl: "浸透流があると有効重量γ'で強さが決まり、係数γ'/γsat(約1/2)が掛かる",
          formulaRef: "f6"
        },
        {
          q: "深さ2mのすべり面をもつ粘性土の無限長斜面(c≠0)の安全率を求めたい",
          choices: ["Fs = tanφ/tanβ", "Fs = (c + γz cos²β tanφ)/(γz sinβcosβ)", "τf = c' + σ'tanφ'", "Hc = 4c/(γ√Ka)"],
          answer: 1,
          expl: "cがある場合は深さzが式に残る。c=0とおくとf4に退化することも確認",
          formulaRef: "f5"
        },
        {
          q: "地下水位以下にある土のせん断強さを、間隙水圧を考慮して評価したい",
          choices: ["τf = c + σtanφ(全応力のまま)", "τf = c' + (σ−u)tanφ'", "Fs = tanφ/tanβ", "K0 = 1 − sinφ'"],
          answer: 1,
          expl: "土の強さは有効応力で決まる。全応力から間隙水圧uを引いてから摩擦を効かせる",
          formulaRef: "f2"
        },
        {
          q: "安全率Fs=2の斜面で、粘着力c=20 kN/m²がどの程度まで動員されているかを知りたい",
          choices: ["cm = 10 kN/m²", "cm = 20 kN/m²", "cm = 40 kN/m²", "cm = 2 kN/m²"],
          answer: 0,
          expl: "動員粘着力は cm = c/Fs。余裕が2倍あるので、実際に使っている粘着力は半分",
          formulaRef: "f7"
        },
        {
          q: "粘着力のある無限長斜面で、Fs=1となる限界すべり深さを求めたい",
          choices: ["Hc = c/[γcos²β(tanβ−tanφ)]", "Hc = 4c/(γ√Ka)", "Fs = tanφ/tanβ", "Ns = γHc/c"],
          answer: 0,
          expl: "無限長斜面の限界すべり深さはf5でFs=1と置いてzを解いた式。鉛直自立高さHcとは別物",
          formulaRef: "f8"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "無限長斜面の安全率(c=0)",
          variants: [
            {
              q: "傾斜角β=20°の一様な砂質斜面(c=0、φ=30°)がある。この斜面の安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "「一様な砂質斜面・c=0」→ 無限長斜面の式 $F_s = \\dfrac{\\tan\\phi}{\\tan\\beta}$。深さや単位体積重量は不要" },
                { label: "② 代入", content: "$F_s = \\dfrac{\\tan 30^\\circ}{\\tan 20^\\circ} = \\dfrac{0.577}{0.364}$" },
                { label: "③ 計算", content: "$F_s = 1.59$" },
                { label: "④ 妥当性確認", content: "β(20°) < φ(30°) なので Fs>1 は当然。設計目安1.2〜1.5もクリアしており妥当" }
              ],
              answer: "Fs ≈ 1.59"
            },
            {
              q: "傾斜角β=25°の乾燥砂の斜面(c=0、φ=35°)の安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "乾燥砂・無限長斜面なので $F_s = \\dfrac{\\tan\\phi}{\\tan\\beta}$" },
                { label: "② 代入", content: "$F_s = \\dfrac{\\tan 35^\\circ}{\\tan 25^\\circ} = \\dfrac{0.700}{0.466}$" },
                { label: "③ 計算", content: "$F_s = 1.50$" },
                { label: "④ 妥当性確認", content: "β<φで安定側。ちょうど設計安全率1.5に相当し、これ以上急にすると要注意" }
              ],
              answer: "Fs ≈ 1.50"
            }
          ],
          formulaRefs: ["f4"]
        },
        {
          id: "p2",
          pattern: "無限長斜面の安全率(粘着力あり)",
          variants: [
            {
              q: "傾斜角β=30°の斜面で、深さz=2mに斜面と平行なすべり面を仮定する。c=10 kN/m²、φ=30°、γ=18 kN/m³のとき安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "c≠0の無限長斜面 → $F_s = \\dfrac{c + \\gamma z\\cos^2\\beta\\tan\\phi}{\\gamma z\\sin\\beta\\cos\\beta}$" },
                { label: "② 代入", content: "$\\gamma z = 36$。分子:$10 + 36\\times\\cos^2 30^\\circ\\times\\tan 30^\\circ = 10 + 36\\times 0.750\\times 0.577 = 25.6$。分母:$36\\times\\sin 30^\\circ\\cos 30^\\circ = 36\\times 0.5\\times 0.866 = 15.6$" },
                { label: "③ 計算", content: "$F_s = 25.6 / 15.6 = 1.64$" },
                { label: "④ 妥当性確認", content: "β=φ=30°なのに Fs>1 なのは粘着力の寄与。c=0なら Fs=1.0(限界)になるはず → 式の感覚と一致" }
              ],
              answer: "Fs ≈ 1.64"
            },
            {
              q: "傾斜角β=25°、すべり面深さz=3m、c=5 kN/m²、φ=20°、γ=17 kN/m³の無限長斜面の安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$F_s = \\dfrac{c + \\gamma z\\cos^2\\beta\\tan\\phi}{\\gamma z\\sin\\beta\\cos\\beta}$" },
                { label: "② 代入", content: "$\\gamma z = 51$。分子:$5 + 51\\times 0.821\\times 0.364 = 5 + 15.2 = 20.2$。分母:$51\\times 0.423\\times 0.906 = 19.5$" },
                { label: "③ 計算", content: "$F_s = 20.2 / 19.5 = 1.04$" },
                { label: "④ 妥当性確認", content: "Fs≈1でほぼ限界状態。β(25°)>φ(20°)を粘着力がかろうじて支えている危険な斜面と読める" }
              ],
              answer: "Fs ≈ 1.04(ほぼ限界)"
            }
          ],
          formulaRefs: ["f5"]
        },
        {
          id: "p3",
          pattern: "強度安全率・限界すべり深さ",
          variants: [
            {
              q: "斜面の安全率がFs=2.0で、土の強度定数がc=20 kN/m²、φ=30°である。動員粘着力cmと動員内部摩擦角φmを求めよ。",
              steps: [
                { label: "① 式の選択", content: "強度安全率では $c_m = c/F_s$、$\\tan\\phi_m = \\tan\\phi/F_s$ として動員強度を出す" },
                { label: "② 粘着力", content: "$c_m = 20/2.0 = 10$ kN/m²" },
                { label: "③ 摩擦角", content: "$\\tan\\phi_m = \\tan30^\\circ/2.0 = 0.577/2.0 = 0.289$。よって $\\phi_m = \\tan^{-1}(0.289) = 16.1^\\circ$" },
                { label: "④ 意味づけ", content: "本来の強さの約半分だけを使ってつり合っている状態。残り半分が安全余裕と読める" }
              ],
              answer: "cm = 10 kN/m²、φm ≈ 16.1°"
            },
            {
              q: "乾燥した無限長斜面で、β=30°、φ=20°、c=10 kN/m²、γ=18 kN/m³である。Fs=1となる限界すべり深さHcを求めよ。",
              steps: [
                { label: "① 式の選択", content: "$H_c = \\dfrac{c}{\\gamma\\cos^2\\beta(\\tan\\beta-\\tan\\phi)}$。β>φなので有限の限界深さをもつ" },
                { label: "② 三角関数", content: "$\\cos^2 30^\\circ = 0.750$、$\\tan30^\\circ-\\tan20^\\circ = 0.577-0.364 = 0.213$" },
                { label: "③ 代入・計算", content: "分母 $=18\\times0.750\\times0.213=2.88$。$H_c = 10/2.88 = 3.48$ m" },
                { label: "④ 判定", content: "すべり面が約3.5mより浅ければFs>1、深いほど粘着力の効きが薄れて危険側になる" }
              ],
              answer: "Hc ≈ 3.48 m"
            }
          ],
          formulaRefs: ["f7", "f8"]
        }
      ],
      quiz: [
        {
          q: "モール・クーロンの破壊規準で、垂直応力σが大きくなると増えるのはどの成分?",
          choices: ["粘着力c", "摩擦成分σtanφ", "間隙水圧u", "どれも変わらない"],
          answer: 1,
          expl: "cは応力によらず一定。押さえつけるほど摩擦分σtanφが増える",
          sectionRef: 0
        },
        {
          q: "安全率Fs=1.0の斜面はどんな状態?",
          choices: ["十分安全", "ちょうど崩壊の限界", "すでに崩壊済み", "安全率とは無関係"],
          answer: 1,
          expl: "Fs=τf/τ=1はせん断応力が強さにちょうど達した限界つり合い状態",
          sectionRef: 1
        },
        {
          q: "強度安全率Fs=2のとき、動員されている強さは本来の強さのどれくらい?",
          choices: ["1/2", "2倍", "同じ", "0になる"],
          answer: 0,
          expl: "Fs=強度/動員強度なので、動員強度=本来の強度/Fs。Fs=2なら半分だけ使っている",
          sectionRef: 2
        },
        {
          q: "乾燥砂(c=0)の無限長斜面の安全率に影響しないものはどれ?",
          choices: ["内部摩擦角φ", "斜面の傾斜角β", "すべり面の深さz", "どれも影響する"],
          answer: 2,
          expl: "Fs=tanφ/tanβではγzが約分され、深さは無関係になる",
          sectionRef: 3
        },
        {
          q: "豪雨で斜面の安全率が下がる主な理由は?",
          choices: ["土のφが大きくなる", "間隙水圧の上昇で有効応力が減り強さが落ちる", "土が軽くなる", "斜面角βが変わる"],
          answer: 1,
          expl: "水圧uが上がるとσ'=σ−uが減り、摩擦成分σ'tanφ'が小さくなる",
          sectionRef: 3
        }
      ]
    },
    // ============================================================
    // u2 円弧すべり解析
    // ============================================================
    {
      id: "u2",
      title: "円弧すべり解析と分割法",
      weeks: "第2週",
      priority: 3,
      sections: [
        {
          heading: "粘性土斜面は円弧ですべる",
          body: "<p>盛土や粘性土の斜面が崩れるとき、[[すべり面]]は直線ではなく<b>スプーンでえぐったような円弧状</b>になることが観察されている。そこで中心O・半径Rの円弧を仮定し、<b>すべらせようとするモーメント $M_d$ と、抵抗するモーメント $M_r$ の比</b>で[[安全率]]を定義するのが[[円弧すべり]]解析だ。$F_s = M_r/M_d$。シーソーの片側に土塊の重さ、もう片側にすべり面のせん断強さが乗っている、とイメージするとよい。中心位置と半径を変えて何通りも計算し、<b>最小の安全率を与える円弧(臨界円)</b>がその斜面の安全率になる。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><circle cx='230' cy='60' r='5' fill='var(--c-accent)'/><text x='240' y='55' font-size='16' fill='var(--c-accent)'>O(中心)</text><line x1='230' y1='60' x2='110' y2='195' stroke='var(--c-accent)' stroke-width='1.5' stroke-dasharray='5 4'/><text x='140' y='120' font-size='15' fill='var(--c-accent)'>R</text><polygon points='30,220 200,220 340,120 340,270 30,270' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><path d='M 110 195 A 155 155 0 0 0 322 199' fill='none' stroke='var(--c-accent)' stroke-width='3'/><line x1='150' y1='212' x2='150' y2='262' stroke='var(--c-line)' stroke-width='1.2'/><line x1='190' y1='218' x2='190' y2='265' stroke='var(--c-line)' stroke-width='1.2'/><line x1='230' y1='195' x2='230' y2='263' stroke='var(--c-line)' stroke-width='1.2'/><line x1='270' y1='168' x2='270' y2='255' stroke='var(--c-line)' stroke-width='1.2'/><line x1='300' y1='148' x2='300' y2='240' stroke='var(--c-line)' stroke-width='1.2'/><text x='196' y='250' font-size='14' fill='var(--c-text)'>スライス</text><line x1='245' y1='230' x2='245' y2='285' stroke='var(--c-text)' stroke-width='2.5' marker-end='url(#a2)'/><text x='252' y='284' font-size='16' fill='var(--c-text)'>W</text><text x='40' y='40' font-size='16' fill='var(--c-text)'>円弧すべりと分割法</text><defs><marker id='a2' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-text)'/></marker></defs></svg>"
        },
        {
          heading: "分割法:土塊を短冊に切って足し算する",
          body: "<p>円弧上では深さも傾きも場所ごとに違うので、一発では計算できない。そこで土塊を鉛直な短冊(スライス)に切り、<b>スライスごとに重量Wを「すべらせる成分 Wsinα」と「押さえつける成分 Wcosα」に分解して合計する</b>のが[[分割法]]だ。スライス間の力を無視する最も簡単な方法がスウェーデン法(フェレニウス法)で、$F_s = \\dfrac{\\sum(cl + W\\cos\\alpha\\tan\\phi)}{\\sum W\\sin\\alpha}$ となる。ピザを細く切り分けて1切れずつ重さを量って足すイメージ。手計算の定期試験では「各スライスの表が与えられて合計→安全率」という形式が定番。</p>"
        },
        {
          heading: "直線すべり面と安定係数",
          body: "<p>切土のり面などでは直線[[すべり面]]を仮定した解析も使う。すべり土塊の重量Wをすべり面方向と垂直方向に分解し、$F_s = \\dfrac{cL + W\\cos\\alpha\\tan\\phi}{W\\sin\\alpha}$ で計算する(Lはすべり面の長さ)。また、粘性土(φ=0)の斜面では、限界高さ$H_c$と[[粘着力]]の関係を無次元化した<b>安定係数 $N_s = \\gamma H_c / c$</b> が図表(テイラーの安定図)で与えられており、斜面角から限界高さを素早く求められる。図表を「読む」問題も出るので、軸が何かを確認する癖をつけよう。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "円弧すべりの安全率(モーメント比)",
          latex: "F_s = \\dfrac{M_r}{M_d}",
          vars: [
            { sym: "M_r", meaning: "抵抗モーメント(せん断強さ×半径)", unit: "kN·m/m" },
            { sym: "M_d", meaning: "滑動モーメント(土塊重量による)", unit: "kN·m/m" }
          ],
          when: "円弧すべりの安全率の定義を問われたとき。分割法の式の出発点",
          intuition: "円の中心まわりのシーソー。抵抗側が勝てば安定",
          derivation: "円弧の中心Oまわりのモーメントのつり合いを比の形にしたもの",
          blank: "F_s = \\dfrac{M_r}{?}",
          blankAnswer: "M_d"
        },
        {
          id: "f2",
          name: "分割法(スウェーデン法)の安全率",
          latex: "F_s = \\dfrac{\\sum\\left(c\\,l + W\\cos\\alpha\\tan\\phi\\right)}{\\sum W\\sin\\alpha}",
          vars: [
            { sym: "l", meaning: "各スライス底面の円弧長", unit: "m" },
            { sym: "W", meaning: "各スライスの重量", unit: "kN/m" },
            { sym: "\\alpha", meaning: "各スライス底面の傾斜角", unit: "°" }
          ],
          when: "スライスごとの W, α, l の表が与えられて安全率を計算する問題",
          intuition: "分子=各短冊の踏ん張りの合計、分母=各短冊の滑り落ちたがる力の合計",
          derivation: "モーメント比の式で半径Rが分子分母から約分され、力の和だけが残る",
          blank: "F_s = \\dfrac{\\sum(c\\,l + W\\cos\\alpha\\tan\\phi)}{?}",
          blankAnswer: "\\sum W\\sin\\alpha"
        },
        {
          id: "f3",
          name: "直線すべり面の安全率",
          latex: "F_s = \\dfrac{c\\,L + W\\cos\\alpha\\tan\\phi}{W\\sin\\alpha}",
          vars: [
            { sym: "L", meaning: "すべり面の長さ", unit: "m" },
            { sym: "W", meaning: "すべり土塊の全重量", unit: "kN/m" },
            { sym: "\\alpha", meaning: "すべり面の傾斜角", unit: "°" }
          ],
          when: "すべり面が直線と仮定できる切土のり面・くさび状の崩壊",
          intuition: "分割法のスライスが1枚だけの特別な場合と考えればよい",
          derivation: "土塊重量をすべり面の平行・垂直成分に分解し、Fs=抵抗力/滑動力とする",
          blank: "F_s = \\dfrac{c\\,L + W\\cos\\alpha\\tan\\phi}{?}",
          blankAnswer: "W\\sin\\alpha"
        },
        {
          id: "f4",
          name: "安定係数(粘性土 φ=0)",
          latex: "N_s = \\dfrac{\\gamma H_c}{c}",
          vars: [
            { sym: "N_s", meaning: "安定係数(安定図から読む)", unit: "無次元" },
            { sym: "H_c", meaning: "斜面の限界高さ", unit: "m" },
            { sym: "\\gamma", meaning: "土の単位体積重量", unit: "kN/m³" },
            { sym: "c", meaning: "粘着力", unit: "kN/m²" }
          ],
          when: "テイラーの安定図を使って粘性土斜面の限界高さや必要粘着力を求めるとき",
          intuition: "重くて高い斜面ほど大きなcが必要、を無次元数1つにまとめたもの",
          derivation: "円弧すべりの解を無次元整理した図表値。斜面角が緩いほどNsは大きい(=高くできる)",
          blank: "N_s = \\dfrac{\\gamma ?}{c}",
          blankAnswer: "H_c"
        }
      ],
      selectQuiz: [
        {
          q: "各スライスの重量W、底面傾斜角α、底面長lの一覧表が与えられ、円弧すべりの安全率を求めたい",
          choices: ["分割法 Fs = Σ(cl+Wcosαtanφ)/ΣWsinα", "Fs = tanφ/tanβ", "Ns = γHc/c", "τf = c + σtanφ"],
          answer: 0,
          expl: "スライスの表→分割法(スウェーデン法)。cl と Wcosαtanφ を各行で計算して合計する",
          formulaRef: "f2"
        },
        {
          q: "粘性土(φ=0)の切土斜面について、テイラーの安定図を使って限界の高さを求めたい",
          choices: ["Fs = Mr/Md", "Ns = γHc/c", "Fs = tanφ/tanβ", "分割法の式"],
          answer: 1,
          expl: "安定図から斜面角に応じたNsを読み、Hc = Ns·c/γ で限界高さが出る",
          formulaRef: "f4"
        },
        {
          q: "くさび状の土塊が1つの直線すべり面に沿って滑る場合の安全率を求めたい",
          choices: ["Fs = (cL + Wcosαtanφ)/(Wsinα)", "Fs = Mr/Md", "Ns = γHc/c", "K0 = 1−sinφ'"],
          answer: 0,
          expl: "直線すべり面はスライス1枚の分割法と同じ形。Lはすべり面の長さ",
          formulaRef: "f3"
        },
        {
          q: "円弧すべり解析における安全率のそもそもの定義はどれか",
          choices: ["せん断応力÷せん断強さ", "抵抗モーメント÷滑動モーメント", "主働土圧÷受働土圧", "極限支持力÷許容支持力"],
          answer: 1,
          expl: "円弧の中心まわりのモーメト比 Fs = Mr/Md が定義。分割法はその計算手段",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "直線すべり面の安全率",
          variants: [
            {
              q: "傾斜角α=30°の直線すべり面(長さL=8m)上にある土塊の重量はW=200 kN/mである。c=15 kN/m²、φ=25°のとき安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "直線すべり面 → $F_s = \\dfrac{cL + W\\cos\\alpha\\tan\\phi}{W\\sin\\alpha}$" },
                { label: "② 代入", content: "$cL = 15\\times 8 = 120$。$W\\cos\\alpha\\tan\\phi = 200\\times 0.866\\times 0.466 = 80.8$。分母:$200\\times 0.5 = 100$" },
                { label: "③ 計算", content: "$F_s = (120 + 80.8)/100 = 2.01$" },
                { label: "④ 妥当性確認", content: "粘着力の寄与(120)が摩擦(80.8)より大きい粘性土的な斜面。Fs≈2は十分安全" }
              ],
              answer: "Fs ≈ 2.01"
            },
            {
              q: "傾斜角α=35°、すべり面長さL=10m、土塊重量W=300 kN/m、c=10 kN/m²、φ=30°のとき、直線すべり面の安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$F_s = \\dfrac{cL + W\\cos\\alpha\\tan\\phi}{W\\sin\\alpha}$" },
                { label: "② 代入", content: "$cL = 100$。$W\\cos\\alpha\\tan\\phi = 300\\times 0.819\\times 0.577 = 141.9$。分母:$300\\times 0.574 = 172.1$" },
                { label: "③ 計算", content: "$F_s = (100 + 141.9)/172.1 = 1.41$" },
                { label: "④ 妥当性確認", content: "1.5をわずかに下回る。設計なら勾配を緩めるか対策工を検討するレベル" }
              ],
              answer: "Fs ≈ 1.41"
            }
          ],
          formulaRefs: ["f3"]
        },
        {
          id: "p2",
          pattern: "分割法による安全率計算",
          variants: [
            {
              q: "円弧すべりを5つのスライスに分割して計算したところ、Σ(cl + Wcosα tanφ) = 1440 kN/m、ΣWsinα = 900 kN/mであった。安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "分割法(スウェーデン法) $F_s = \\dfrac{\\sum(cl + W\\cos\\alpha\\tan\\phi)}{\\sum W\\sin\\alpha}$" },
                { label: "② 代入", content: "$F_s = \\dfrac{1440}{900}$" },
                { label: "③ 計算", content: "$F_s = 1.60$" },
                { label: "④ 妥当性確認", content: "Fs=1.6>1.5で安定。ただしこれは仮定した1つの円弧の値。臨界円を探すには複数の円で繰り返す" }
              ],
              answer: "Fs = 1.60"
            },
            {
              q: "ある円弧について分割法で集計すると、抵抗力の合計 Σ(cl + Wcosα tanφ) = 1000 kN/m、滑動力の合計 ΣWsinα = 800 kN/mだった。この円弧の安全率と安定性を評価せよ。",
              steps: [
                { label: "① 式の選択", content: "$F_s = \\dfrac{\\sum(cl + W\\cos\\alpha\\tan\\phi)}{\\sum W\\sin\\alpha}$" },
                { label: "② 代入", content: "$F_s = \\dfrac{1000}{800}$" },
                { label: "③ 計算", content: "$F_s = 1.25$" },
                { label: "④ 妥当性確認", content: "1<Fs<1.5。崩壊はしないが常時の設計目安1.5には不足。降雨時の水圧上昇を考えると対策が望ましい" }
              ],
              answer: "Fs = 1.25(安定だが余裕は小さい)"
            }
          ],
          formulaRefs: ["f2"]
        }
      ],
      quiz: [
        {
          q: "円弧すべり解析で「臨界円」とは何か?",
          choices: ["半径が最大の円", "安全率が最小になる円", "地表と接する円", "中心が斜面上にある円"],
          answer: 1,
          expl: "多数の円で試算し、最小のFsを与える円が実際の崩壊面に最も近い",
          sectionRef: 0
        },
        {
          q: "分割法で各スライスの重量Wを分解するとき、「すべらせる力」になる成分は?",
          choices: ["Wcosα", "Wsinα", "Wtanα", "W そのもの"],
          answer: 1,
          expl: "すべり面に平行な成分Wsinαが滑動力。垂直成分Wcosαは摩擦を生む押さえ",
          sectionRef: 1
        },
        {
          q: "スウェーデン法(フェレニウス法)で無視しているものはどれ?",
          choices: ["土の粘着力", "スライス間に働く力", "スライスの重量", "すべり面の摩擦"],
          answer: 1,
          expl: "隣り合うスライス間の力を無視するのが最も単純なスウェーデン法の仮定",
          sectionRef: 1
        },
        {
          q: "粘性土斜面(φ=0)の限界高さHcは安定係数Nsを使ってどう表せる?",
          choices: ["Hc = Ns·c/γ", "Hc = γ·c/Ns", "Hc = Ns·γ/c", "Hc = c/(Ns·γ)"],
          answer: 0,
          expl: "Ns = γHc/c を変形して Hc = Ns·c/γ。cが大きく軽い土ほど高くできる",
          sectionRef: 2
        }
      ]
    },
    // ============================================================
    // u3 土圧の基礎とランキン土圧
    // ============================================================
    {
      id: "u3",
      title: "土圧の基礎とランキン土圧",
      weeks: "第3〜5週",
      priority: 3,
      sections: [
        {
          heading: "土圧は「壁の動き」で変わる — 水圧との決定的な違い",
          body: "<p>水圧は深さだけで決まり、どの向きにも同じ大きさで働く。ところが[[土圧]]は<b>壁がどちらへどれだけ動くかで大きさが変わる</b>。壁が動かないときが[[静止土圧]](K0)、壁が土から離れる向きにわずかに動くと土が伸びて破壊し、土圧は最小の[[主働土圧]](Ka)まで下がる。逆に壁が土を押し込むと、土が抵抗しきって最大の[[受働土圧]](Kp)に達する。満員電車で例えると、ドアが開いて外へ押し出すとき(主働)は軽い力で済むが、外から人を押し込むとき(受働)は皆の抵抗で大きな力が要る。<b>Ka &lt; K0 &lt; Kp</b> の大小関係は必ず覚えること。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='60' width='18' height='150' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='2'/><polygon points='78,60 200,60 200,210 78,210' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='1.5'/><line x1='55' y1='120' x2='20' y2='120' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a3)'/><text x='14' y='105' font-size='15' fill='var(--c-accent)'>壁が離れる</text><line x1='78' y1='72' x2='150' y2='210' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='6 4'/><text x='96' y='250' font-size='15' fill='var(--c-text)'>主働:土圧は最小 Ka</text><text x='100' y='150' font-size='14' fill='var(--c-text)'>すべり土塊</text><rect x='345' y='60' width='18' height='150' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='2'/><polygon points='222,60 345,60 345,210 222,210' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='1.5'/><line x1='368' y1='120' x2='403' y2='120' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a3)'/><line x1='340' y1='125' x2='300' y2='125' stroke='var(--c-line)' stroke-width='2' marker-end='url(#a3b)'/><text x='250' y='250' font-size='15' fill='var(--c-text)'>受働:土圧は最大 Kp</text><text x='330' y='45' font-size='15' fill='var(--c-accent)'>壁が押し込む</text><line x1='345' y1='72' x2='250' y2='210' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='6 4'/><text x='20' y='285' font-size='16' fill='var(--c-text)'>壁の動きの向きで Ka &lt; K0 &lt; Kp と変化する</text><defs><marker id='a3' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-accent)'/></marker><marker id='a3b' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-line)'/></marker></defs></svg>"
        },
        {
          heading: "ランキン土圧:地盤ごと破壊させて求める",
          body: "<p>[[ランキン土圧]]は、壁の背後の地盤全体が[[塑性平衡]](どこもかしこも[[モール・クーロンの破壊規準]]ちょうど)にあると仮定する理論。壁面の摩擦を無視し、壁は鉛直・地表は水平とすると、深さzの主働土圧は $\\sigma_a = K_a\\gamma z$([[粘着力]]がある土では $\\sigma_a = K_a\\gamma z - 2c\\sqrt{K_a}$)となる。係数は $K_a = \\tan^2(45^\\circ - \\phi/2)$、$K_p = \\tan^2(45^\\circ + \\phi/2)$。<b>φ=30°ならKa=1/3、Kp=3</b>という値は暗算チェック用に覚えておくと便利。モール円が破壊線に接するまで水平応力を減らす(主働)/増やす(受働)操作から導かれる。</p>"
        },
        {
          heading: "土圧分布は三角形、合力はその面積",
          body: "<p>$\\sigma_a = K_a\\gamma z$ は深さに比例するので、土圧分布は<b>深さ方向に大きくなる三角形</b>になる。壁全体が受ける力=[[土圧]]合力は分布図の面積、つまり $P_a = \\frac{1}{2}K_a\\gamma H^2$ で、<b>作用点は底から H/3</b>(三角形の重心の高さ)。ここは定期試験の最頻出計算だ。上載荷重qが載ると長方形分布 $K_a q$ が上乗せされて台形になる。地下水位以下では土の[[有効応力]]にKaを掛け、<b>水圧はそのまま全額</b>加える(水はKaで減らないことに注意)。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><rect x='150' y='40' width='16' height='210' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='2'/><rect x='166' y='40' width='230' height='210' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='1.5'/><polygon points='150,40 60,250 150,250' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2.5' fill-opacity='0.6'/><line x1='118' y1='180' x2='148' y2='180' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a4)'/><text x='30' y='185' font-size='16' fill='var(--c-accent)'>Pa = ½KaγH²</text><text x='55' y='272' font-size='16' fill='var(--c-text)'>σa = KaγH(最下端)</text><line x1='405' y1='40' x2='405' y2='250' stroke='var(--c-line)' stroke-width='1.5'/><text x='398' y='150' font-size='16' fill='var(--c-text)' transform='rotate(-90 398 150)'>H</text><line x1='170' y1='250' x2='170' y2='180' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='4 3'/><text x='176' y='215' font-size='15' fill='var(--c-text)'>H/3</text><text x='40' y='25' font-size='16' fill='var(--c-text)'>主働土圧の三角形分布と合力の作用点</text><defs><marker id='a4' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-accent)'/></marker></defs></svg>"
        },
        {
          heading: "地下水位がある土圧:土は有効、水はそのまま",
          body: "<p>地下水位を含む土圧では、土と水を分けて考える。地下水位より下では、土粒子が受け持つ鉛直応力は全応力から水圧を引いた[[有効応力]] $\\sigma'_v$ なので、土による主働土圧は $K_a\\sigma'_v$。一方、水はせん断強さを持たないので、<b>水圧 $u$ には $K_a$ を掛けず、そのまま横向きに加える</b>。つまり $\\sigma_h = K_a\\sigma'_v + u$。この「土は有効、水はそのまま」を間違えると、水圧を過小評価してかなり危険側になる。</p>"
        },
        {
          heading: "粘着力の効果:引張り亀裂と自立高さ",
          body: "<p>粘着力cがあると主働土圧は $\\sigma_a = K_a\\gamma z - 2c\\sqrt{K_a}$ となり、<b>地表付近では計算上マイナス(引張り)</b>になる。土は引張りに耐えられないので、深さ $z_c = \\dfrac{2c}{\\gamma\\sqrt{K_a}}$ まで[[引張り亀裂]]が入る。さらに土圧合力がゼロになる深さ、すなわち<b>[[鉛直自立高さ]] $H_c = \\dfrac{4c}{\\gamma\\sqrt{K_a}} = 2z_c$</b> までは、理論上は壁がなくても土が鉛直に立つ。工事現場の掘削溝が浅ければ土留めなしで立っているのはこのおかげ。ただし乾燥や雨で c は変わるため、実務では安全側の土留めが必須だ。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "静止土圧係数(ヤーキーの式)",
          latex: "K_0 = 1 - \\sin\\phi'",
          vars: [
            { sym: "K_0", meaning: "静止土圧係数", unit: "無次元" },
            { sym: "\\phi'", meaning: "有効応力の内部摩擦角", unit: "°" }
          ],
          when: "壁が動かない(地中構造物・剛な地下壁)ときの水平土圧。σh = K0·σv'",
          intuition: "φ=30°でK0=0.5。鉛直応力の半分くらいが横に伝わる",
          derivation: "経験式(ヤーキー)。正規圧密の砂・粘土でよく合う",
          blank: "K_0 = 1 - ?",
          blankAnswer: "\\sin\\phi'"
        },
        {
          id: "f2",
          name: "主働土圧係数(ランキン)",
          latex: "K_a = \\tan^2\\left(45^\\circ - \\dfrac{\\phi}{2}\\right) = \\dfrac{1-\\sin\\phi}{1+\\sin\\phi}",
          vars: [
            { sym: "K_a", meaning: "主働土圧係数", unit: "無次元" },
            { sym: "\\phi", meaning: "内部摩擦角", unit: "°" }
          ],
          when: "壁が土から離れる側に動く通常の擁壁の設計外力を求めるとき",
          intuition: "φ=30°でKa=1/3。φが大きい(強い土)ほど土圧は小さくなる",
          derivation: "水平応力を減らしてモール円が破壊線に接したときのσh/σv。すべり面は水平から45°+φ/2",
          blank: "K_a = \\tan^2\\left(45^\\circ - ?\\right)",
          blankAnswer: "\\dfrac{\\phi}{2}"
        },
        {
          id: "f3",
          name: "受働土圧係数(ランキン)",
          latex: "K_p = \\tan^2\\left(45^\\circ + \\dfrac{\\phi}{2}\\right) = \\dfrac{1+\\sin\\phi}{1-\\sin\\phi}",
          vars: [
            { sym: "K_p", meaning: "受働土圧係数", unit: "無次元" },
            { sym: "\\phi", meaning: "内部摩擦角", unit: "°" }
          ],
          when: "壁が土を押し込む側(根入れ部の抵抗など)の最大抵抗を見積もるとき",
          intuition: "Kp = 1/Ka。φ=30°でKp=3。主働の9倍の土圧になる",
          derivation: "水平応力を増やしてモール円が破壊線に接したときのσh/σv。すべり面は45°−φ/2",
          blank: "K_p = \\tan^2\\left(45^\\circ + ?\\right)",
          blankAnswer: "\\dfrac{\\phi}{2}"
        },
        {
          id: "f4",
          name: "ランキン主働土圧(砂質土 c=0)",
          latex: "\\sigma_a = K_a\\gamma z",
          vars: [
            { sym: "\\sigma_a", meaning: "深さzの主働土圧強度", unit: "kN/m²" },
            { sym: "\\gamma", meaning: "土の単位体積重量", unit: "kN/m³" },
            { sym: "z", meaning: "地表からの深さ", unit: "m" }
          ],
          when: "砂質土の裏込めをもつ壁の任意深さの土圧強度。分布図を描く問題",
          intuition: "鉛直応力γzをKa倍に「値引き」した横向きの圧力。深さに比例する三角形",
          derivation: "塑性平衡状態で σh = Ka·σv、σv = γz を代入",
          blank: "\\sigma_a = ?\\,\\gamma z",
          blankAnswer: "K_a"
        },
        {
          id: "f5",
          name: "主働土圧合力(三角形分布)",
          latex: "P_a = \\dfrac{1}{2}K_a\\gamma H^2",
          vars: [
            { sym: "P_a", meaning: "主働土圧合力(壁の単位奥行あたり)", unit: "kN/m" },
            { sym: "H", meaning: "壁の高さ", unit: "m" }
          ],
          when: "「壁全体が受ける力を求めよ」。作用点は底からH/3も必ずセットで",
          intuition: "三角形分布の面積=底辺(KaγH)×高さ(H)÷2",
          derivation: "σa = Kaγz を z=0〜H で積分。H²に比例するので壁を倍にすると力は4倍",
          blank: "P_a = \\dfrac{1}{2}K_a\\gamma ?",
          blankAnswer: "H^2"
        },
        {
          id: "f6",
          name: "ランキン主働土圧(粘着力あり)",
          latex: "\\sigma_a = K_a\\gamma z - 2c\\sqrt{K_a}",
          vars: [
            { sym: "c", meaning: "粘着力", unit: "kN/m²" }
          ],
          when: "粘性土の裏込め。地表付近が引張りになる分布を描かせる問題",
          intuition: "粘着力は土圧を一律 2c√Ka だけ引き下げてくれる「割引クーポン」",
          derivation: "破壊規準 σ1 = σ3·tan²(45°+φ/2) + 2c·tan(45°+φ/2) を σh について解く",
          blank: "\\sigma_a = K_a\\gamma z - ?",
          blankAnswer: "2c\\sqrt{K_a}"
        },
        {
          id: "f7",
          name: "ランキン受働土圧(粘着力あり)",
          latex: "\\sigma_p = K_p\\gamma z + 2c\\sqrt{K_p}",
          vars: [
            { sym: "\\sigma_p", meaning: "深さzの受働土圧強度", unit: "kN/m²" }
          ],
          when: "根入れ部の抵抗土圧など、押し込まれる側の土圧を求めるとき",
          intuition: "受働では粘着力はプラスに働く。符号が主働と逆になるだけ",
          derivation: "主働と同じ操作で水平応力を増やす側の解",
          blank: "\\sigma_p = K_p\\gamma z + ?",
          blankAnswer: "2c\\sqrt{K_p}"
        },
        {
          id: "f8",
          name: "引張り亀裂の深さ",
          latex: "z_c = \\dfrac{2c}{\\gamma\\sqrt{K_a}}",
          vars: [
            { sym: "z_c", meaning: "引張り亀裂の深さ(σa=0となる深さ)", unit: "m" }
          ],
          when: "「土圧がゼロになる深さ」「亀裂の深さ」を問われたとき",
          intuition: "粘着力の割引(2c√Ka)が土圧(Kaγz)に勝っている範囲",
          derivation: "σa = Kaγz − 2c√Ka = 0 を z について解く",
          blank: "z_c = \\dfrac{2c}{\\gamma ?}",
          blankAnswer: "\\sqrt{K_a}"
        },
        {
          id: "f9",
          name: "鉛直自立高さ",
          latex: "H_c = \\dfrac{4c}{\\gamma\\sqrt{K_a}} = 2z_c",
          vars: [
            { sym: "H_c", meaning: "支えなしで自立できる限界高さ", unit: "m" }
          ],
          when: "「土留めなしで掘削できる深さ」「自立高さ」を問われたとき",
          intuition: "亀裂深さのちょうど2倍。プラスとマイナスの土圧が相殺してゼロになる高さ",
          derivation: "主働土圧の合力(0〜Hの積分)がゼロになる条件から。φ=0ならHc=4c/γ",
          blank: "H_c = \\dfrac{?}{\\gamma\\sqrt{K_a}}",
          blankAnswer: "4c"
        },
        {
          id: "f10",
          name: "地下水位を含む主働土圧",
          latex: "\\sigma_h(z) = K_a\\sigma'_v(z) + u(z)",
          vars: [
            { sym: "\\sigma_h", meaning: "深さzの合計水平圧", unit: "kN/m²" },
            { sym: "\\sigma'_v", meaning: "有効鉛直応力", unit: "kN/m²" },
            { sym: "u", meaning: "水圧", unit: "kN/m²" }
          ],
          when: "地下水位以下の土圧分布を描く、または土圧合力を求める問題",
          intuition: "土の横圧はKa倍、水圧は100%そのまま足す",
          derivation: "有効応力原理で土粒子骨格の応力だけをKa倍し、水圧は等方圧として別に加算",
          blank: "\\sigma_h = K_a\\sigma'_v + ?",
          blankAnswer: "u"
        }
      ],
      selectQuiz: [
        {
          q: "高さHの擁壁の背後が砂質土(c=0)のとき、壁全体に働く主働土圧の合力を求めたい",
          choices: ["Pa = ½KaγH²", "σa = Kaγz", "Ka = tan²(45°−φ/2)", "Hc = 4c/(γ√Ka)"],
          answer: 0,
          expl: "「合力」なら三角形分布の面積 ½KaγH²。作用点は底からH/3",
          formulaRef: "f5"
        },
        {
          q: "粘性土地盤を土留めなしで鉛直に掘削できる限界の深さを見積もりたい",
          choices: ["zc = 2c/(γ√Ka)", "Hc = 4c/(γ√Ka)", "σa = Kaγz", "K0 = 1−sinφ'"],
          answer: 1,
          expl: "自立高さはHc = 4c/(γ√Ka)。亀裂深さzcとの取り違えに注意(Hc=2zc)",
          formulaRef: "f9"
        },
        {
          q: "地中に埋まって全く動かない剛な壁に働く水平土圧を推定したい",
          choices: ["主働土圧係数Ka", "受働土圧係数Kp", "静止土圧係数K0 = 1−sinφ'", "クーロンの一般式"],
          answer: 2,
          expl: "壁が動かなければ破壊状態に達しないので静止土圧K0を使う",
          formulaRef: "f1"
        },
        {
          q: "矢板の根入れ部が土を押し込むときに期待できる最大の抵抗土圧を求めたい",
          choices: ["σa = Kaγz − 2c√Ka", "σp = Kpγz + 2c√Kp", "σh = K0γz", "Pa = ½KaγH²"],
          answer: 1,
          expl: "押し込む側の最大抵抗=受働土圧。粘着力は受働ではプラスに効く",
          formulaRef: "f7"
        },
        {
          q: "粘性土の裏込めで、地表からどの深さまで壁に土圧がかからない(引張りになる)かを知りたい",
          choices: ["zc = 2c/(γ√Ka)", "Hc = 4c/(γ√Ka)", "σp = Kpγz + 2c√Kp", "Ka = (1−sinφ)/(1+sinφ)"],
          answer: 0,
          expl: "σa=0となる深さが引張り亀裂深さzc。自立高さHcはその2倍",
          formulaRef: "f8"
        },
        {
          q: "地下水位以下の擁壁土圧について、土圧と水圧を合わせた水平圧分布を求めたい",
          choices: ["σh = Kaσ'v + u", "σh = Ka(σ'v + u)", "σh = Kpσ'v − u", "σh = K0γz"],
          answer: 0,
          expl: "地下水位以下は土の有効応力にKaを掛け、水圧uはそのまま加える",
          formulaRef: "f10"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "ランキン主働土圧の合力計算",
          variants: [
            {
              q: "高さH=5mの擁壁の背後に砂質土(γ=18 kN/m³、φ=30°、c=0)がある。主働土圧合力Paとその作用位置を求めよ。",
              steps: [
                { label: "① 式の選択", content: "まず $K_a = \\tan^2(45^\\circ - \\phi/2)$、次に合力 $P_a = \\dfrac{1}{2}K_a\\gamma H^2$。作用点は底からH/3" },
                { label: "② 係数計算", content: "$K_a = \\tan^2(45^\\circ - 15^\\circ) = \\tan^2 30^\\circ = (0.577)^2 = \\dfrac{1}{3}$" },
                { label: "③ 代入・計算", content: "$P_a = \\dfrac{1}{2}\\times\\dfrac{1}{3}\\times 18\\times 5^2 = \\dfrac{1}{2}\\times\\dfrac{1}{3}\\times 18\\times 25 = 75$ kN/m" },
                { label: "④ 作用位置・確認", content: "底から $H/3 = 5/3 = 1.67$ m。最下端の土圧 $K_a\\gamma H = 30$ kN/m² → 三角形面積 $30\\times 5/2 = 75$ で検算一致" }
              ],
              answer: "Pa = 75 kN/m(底から1.67 mの高さに作用)"
            },
            {
              q: "高さH=6mの擁壁の背後に砂質土(γ=17 kN/m³、φ=35°、c=0)がある。主働土圧合力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$K_a = \\tan^2(45^\\circ - \\phi/2)$ → $P_a = \\dfrac{1}{2}K_a\\gamma H^2$" },
                { label: "② 係数計算", content: "$K_a = \\tan^2(45^\\circ - 17.5^\\circ) = \\tan^2 27.5^\\circ = (0.521)^2 = 0.271$" },
                { label: "③ 代入・計算", content: "$P_a = \\dfrac{1}{2}\\times 0.271\\times 17\\times 36 = 82.9$ kN/m" },
                { label: "④ 妥当性確認", content: "φ=30°(Ka=1/3)なら102 kN/mになるところ、φが大きい分土圧が減っている → 傾向として正しい。作用点は底から2m" }
              ],
              answer: "Pa ≈ 82.9 kN/m"
            },
            {
              q: "高さH=4mの擁壁背後の砂質土(γ=18 kN/m³、φ=30°)の地表に上載荷重q=20 kN/m²が作用する。主働土圧合力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "上載荷重があると分布は台形。上端 $\\sigma_{top} = K_a q$、下端 $\\sigma_{bot} = K_a(\\gamma H + q)$ を出して台形面積で合力" },
                { label: "② 係数・両端の土圧", content: "$K_a = 1/3$。$\\sigma_{top} = \\dfrac{20}{3} = 6.67$、$\\sigma_{bot} = \\dfrac{1}{3}(18\\times 4 + 20) = \\dfrac{92}{3} = 30.67$ kN/m²" },
                { label: "③ 計算", content: "$P_a = \\dfrac{(6.67 + 30.67)}{2}\\times 4 = 18.67\\times 4 = 74.7$ kN/m" },
                { label: "④ 検算", content: "三角形分 $\\frac{1}{2}\\cdot\\frac{1}{3}\\cdot 18\\cdot 16 = 48$、長方形分 $\\frac{20}{3}\\times 4 = 26.7$。合計74.7 kN/mで一致" }
              ],
              answer: "Pa ≈ 74.7 kN/m"
            }
          ],
          formulaRefs: ["f2", "f5"]
        },
        {
          id: "p2",
          pattern: "引張り亀裂深さと自立高さ",
          variants: [
            {
              q: "γ=16 kN/m³、c=20 kN/m²、φ=0の粘土地盤について、引張り亀裂の深さzcと鉛直自立高さHcを求めよ。",
              steps: [
                { label: "① 式の選択", content: "φ=0なので $K_a = \\tan^2 45^\\circ = 1$、$\\sqrt{K_a}=1$。$z_c = \\dfrac{2c}{\\gamma\\sqrt{K_a}}$、$H_c = 2z_c$" },
                { label: "② 代入", content: "$z_c = \\dfrac{2\\times 20}{16\\times 1} = \\dfrac{40}{16}$" },
                { label: "③ 計算", content: "$z_c = 2.5$ m、$H_c = 4c/\\gamma = 80/16 = 5.0$ m" },
                { label: "④ 妥当性確認", content: "Hc = 2zc の関係(5.0 = 2×2.5)を満たす。粘土の掘削溝が数m自立する実感とも合う" }
              ],
              answer: "zc = 2.5 m、Hc = 5.0 m"
            },
            {
              q: "γ=18 kN/m³、c=15 kN/m²、φ=30°の土について、引張り亀裂深さzcと鉛直自立高さHcを求めよ。",
              steps: [
                { label: "① 式の選択", content: "$K_a = \\tan^2 30^\\circ = 1/3$、$\\sqrt{K_a} = 0.577$。$z_c = \\dfrac{2c}{\\gamma\\sqrt{K_a}}$" },
                { label: "② 代入", content: "$z_c = \\dfrac{2\\times 15}{18\\times 0.577} = \\dfrac{30}{10.39}$" },
                { label: "③ 計算", content: "$z_c = 2.89$ m、$H_c = 2z_c = 5.77$ m" },
                { label: "④ 妥当性確認", content: "φ=0の場合(zc=2c/γ=1.67m)よりも深い。摩擦があるぶん土圧の増え方が緩く、亀裂が深くまで達する → 傾向どおり" }
              ],
              answer: "zc ≈ 2.89 m、Hc ≈ 5.77 m"
            }
          ],
          formulaRefs: ["f8", "f9"]
        },
        {
          id: "p3",
          pattern: "受働土圧合力の計算",
          variants: [
            {
              q: "高さ3mの壁が砂質土(γ=18 kN/m³、φ=30°、c=0)を押し込むとき、期待できる受働土圧合力の最大値を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$K_p = \\tan^2(45^\\circ + \\phi/2)$、合力は $P_p = \\dfrac{1}{2}K_p\\gamma H^2$" },
                { label: "② 係数計算", content: "$K_p = \\tan^2 60^\\circ = (1.732)^2 = 3.0$(Ka=1/3の逆数)" },
                { label: "③ 代入・計算", content: "$P_p = \\dfrac{1}{2}\\times 3\\times 18\\times 9 = 243$ kN/m" },
                { label: "④ 妥当性確認", content: "同条件の主働 $P_a = \\frac{1}{2}\\cdot\\frac{1}{3}\\cdot 18\\cdot 9 = 27$ kN/m の9倍(Kp/Ka=9) → 関係どおり" }
              ],
              answer: "Pp = 243 kN/m"
            },
            {
              q: "高さ4mの壁を砂質土(γ=17 kN/m³、φ=25°、c=0)に押し込むときの受働土圧合力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$K_p = \\tan^2(45^\\circ + 12.5^\\circ)$、$P_p = \\dfrac{1}{2}K_p\\gamma H^2$" },
                { label: "② 係数計算", content: "$K_p = \\tan^2 57.5^\\circ = (1.570)^2 = 2.46$" },
                { label: "③ 代入・計算", content: "$P_p = \\dfrac{1}{2}\\times 2.46\\times 17\\times 16 = 335$ kN/m" },
                { label: "④ 妥当性確認", content: "φ=30°ならKp=3で408 kN/m。φが小さい分抵抗も小さい → 傾向一致" }
              ],
              answer: "Pp ≈ 335 kN/m"
            }
          ],
          formulaRefs: ["f3", "f5"]
        },
        {
          id: "p4",
          pattern: "地下水位を含む主働土圧合力",
          variants: [
            {
              q: "高さH=6mの擁壁背後で地下水位が地表面にある。φ'=30°(Ka=1/3)、水中単位体積重量γ'=10 kN/m³、水の単位体積重量γw=9.8 kN/m³とする。主働土圧合力を求めよ。",
              steps: [
                { label: "① 考え方", content: "地下水位以下なので、土による主働土圧 $K_a\\gamma' z$ と水圧 $\\gamma_w z$ を別々に三角形面積で足す" },
                { label: "② 土の有効応力分", content: "$P_{soil}=\\dfrac{1}{2}\\times\\dfrac{1}{3}\\times10\\times6^2=60.0$ kN/m" },
                { label: "③ 水圧分", content: "$P_w=\\dfrac{1}{2}\\times9.8\\times6^2=176.4$ kN/m" },
                { label: "④ 合計", content: "$P=60.0+176.4=236.4$ kN/m。水圧をKa倍しないことが最大の注意点" }
              ],
              answer: "P ≈ 236.4 kN/m"
            },
            {
              q: "高さH=6mの擁壁で、地表から2m下に地下水位がある。水位上のγt=18 kN/m³、水位下のγ'=10 kN/m³、γw=9.8 kN/m³、φ'=30°(Ka=1/3)として主働土圧合力を求めよ。",
              steps: [
                { label: "① 水位まで", content: "水位深さ2mで有効鉛直応力は $18\\times2=36$ kN/m²。土圧は $K_a\\sigma'_v=12$ kN/m²。上部三角形の面積は $12\\times2/2=12$ kN/m" },
                { label: "② 水位下の土圧", content: "底面の有効鉛直応力は $36+10\\times4=76$、土圧は $76/3=25.3$ kN/m²。水位下は高さ4mの台形で、面積は $(12+25.3)/2\\times4=74.7$ kN/m" },
                { label: "③ 水圧", content: "水圧は水位から底までの三角形。$P_w=\\dfrac{1}{2}\\times9.8\\times4^2=78.4$ kN/m" },
                { label: "④ 合計", content: "$P=12+74.7+78.4=165.1$ kN/m。土の有効応力分と水圧分を分けて面積計算する" }
              ],
              answer: "P ≈ 165.1 kN/m"
            }
          ],
          formulaRefs: ["f5", "f10"]
        }
      ],
      quiz: [
        {
          q: "土圧係数の大小関係として正しいものは?",
          choices: ["K0 < Ka < Kp", "Ka < K0 < Kp", "Kp < K0 < Ka", "Ka = K0 = Kp"],
          answer: 1,
          expl: "壁が離れると最小(主働)、動かないと中間(静止)、押し込むと最大(受働)",
          sectionRef: 0
        },
        {
          q: "土圧が水圧と決定的に違う点はどれ?",
          choices: ["深さに比例しない", "壁の動く方向と量で大きさが変わる", "常に鉛直に働く", "単位が違う"],
          answer: 1,
          expl: "水圧は等方だが、土はせん断強さを持つため壁の変位で発揮される圧力が変わる",
          sectionRef: 0
        },
        {
          q: "φ=30°の砂のランキン主働土圧係数Kaはいくつ?",
          choices: ["3", "1/2", "1/3", "1"],
          answer: 2,
          expl: "Ka = tan²(45°−15°) = tan²30° = 1/3。Kp=3とセットで即答できるように",
          sectionRef: 1
        },
        {
          q: "高さHの壁に働く三角形分布の主働土圧合力の作用点は底からどこ?",
          choices: ["H/2", "H/3", "2H/3", "H/4"],
          answer: 1,
          expl: "三角形の重心。分布が大きい下側に寄るので底からH/3",
          sectionRef: 2
        },
        {
          q: "地下水位以下の土圧計算で正しい扱いは?",
          choices: ["水圧にもKaを掛ける", "土の有効応力にKaを掛け、水圧は全額加える", "水圧は無視する", "全応力にKaを掛ける"],
          answer: 1,
          expl: "Kaは土のせん断強さに由来する係数。水にはせん断強さがないので水圧はそのまま",
          sectionRef: 3
        }
      ]
    },
    // ============================================================
    // u4 クーロン土圧と擁壁の安定
    // ============================================================
    {
      id: "u4",
      title: "クーロン土圧と擁壁の安定設計",
      weeks: "第6〜8週",
      priority: 3,
      sections: [
        {
          heading: "クーロン土圧:すべる土のくさびの力のつり合い",
          body: "<p>[[ランキン土圧]]は壁が鉛直・地表が水平・壁面がツルツルという理想化だった。現実の[[擁壁]]は壁面に摩擦([[壁面摩擦角]]δ)があり、壁も地表も傾いていることが多い。[[クーロン土圧]]は、壁の背後に<b>三角形のすべり土塊(くさび)</b>を仮定し、その重量W・すべり面の反力R・壁からの反力Pの<b>3つの力のつり合い</b>から土圧合力を求める方法。すべり面の角度を変えて試し、<b>Pが最大になる面が主働土圧</b>を与える。ランキンより現実的な条件を扱える、いわば「汎用版」の土圧理論だ。壁が鉛直・地表水平・δ=0とおくとランキンと同じ値になる。</p>"
        },
        {
          heading: "クーロンの一般式は「構造を覚える」",
          body: "<p>クーロンの主働土圧係数の一般式は複雑だが、丸暗記ではなく<b>どの角度が入っているかの構造</b>で覚える:φ(土の強さ)、δ([[壁面摩擦角]])、θ(壁背面の傾き)、α(地表の傾斜)の4つの角度の関数だ。合力は $P_a = \\frac{1}{2}K_a\\gamma H^2$ の形はランキンと同じで、<b>係数Kaの中身が変わるだけ</b>。また合力の向きは壁面の法線からδだけ傾く。試験では「一般式の各記号の意味を説明せよ」「特別な場合にランキンと一致することを示せ」という出題が狙われやすい。</p>"
        },
        {
          heading: "L型擁壁は疑似擁壁で考える",
          body: "<p>L型・逆T型の擁壁では、安定計算で壁本体だけを切り出すと力のつり合いが見えにくい。そこで底版のかかと側に載っている裏込め土も含め、<b>壁本体+底版上の土を一体の[[疑似擁壁]]</b>として扱う。土圧はこの疑似擁壁の背面に作用し、重量Wにはコンクリート自重だけでなく底版上の土の重さも入れる。レジュメのL型擁壁では、安定計算用の壁面摩擦は土と土の摩擦としてδ≈β(ただしβ>φならδ=φ)を使い、部材設計では土とコンクリートの摩擦としてδ≈2φ/3を使う、という使い分けがポイント。</p>"
        },
        {
          heading: "擁壁の安定3条件:転倒・滑動・支持力",
          body: "<p>土圧を求めたら、いよいよ[[擁壁]]の設計だ。チェックすべきは3つ。①<b>転倒</b>:土圧のモーメントで前方につんのめらないか($F_s = M_r/M_o \\geq 1.5$)。②<b>滑動</b>:底面の摩擦で水平の土圧に耐えられるか($F_s \\geq 1.5$)。③<b>支持力</b>:基礎地盤が壁の重さに耐えられるか。さらに合力の作用点が底面の[[ミドルサード]](中央1/3、偏心量 $e \\leq B/6$)に入れば底面全体が圧縮となり安心だ。本棚を壁際に置くとき「倒れないか・ずれないか・床が抜けないか」を確かめるのと全く同じ発想である。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><polygon points='150,50 195,50 215,230 130,230' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='2'/><rect x='110' y='230' width='130' height='22' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='2'/><polygon points='195,50 400,50 400,230 215,230' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='1.5'/><line x1='300' y1='170' x2='222' y2='170' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a5)'/><text x='262' y='160' font-size='16' fill='var(--c-accent)'>Pa</text><line x1='172' y1='120' x2='172' y2='185' stroke='var(--c-text)' stroke-width='2.5' marker-end='url(#a5b)'/><text x='180' y='150' font-size='16' fill='var(--c-text)'>W</text><circle cx='110' cy='252' r='6' fill='var(--c-accent)'/><text x='30' y='258' font-size='15' fill='var(--c-accent)'>転倒の支点</text><path d='M 60 210 A 55 55 0 0 0 95 245' fill='none' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='5 4' marker-end='url(#a5)'/><line x1='130' y1='273' x2='80' y2='273' stroke='var(--c-line)' stroke-width='2.5' marker-end='url(#a5c)'/><text x='60' y='293' font-size='15' fill='var(--c-text)'>滑動</text><line x1='150' y1='262' x2='150' y2='285' stroke='var(--c-line)' stroke-width='2.5' marker-end='url(#a5c)'/><line x1='200' y1='262' x2='200' y2='285' stroke='var(--c-line)' stroke-width='2.5' marker-end='url(#a5c)'/><text x='215' y='285' font-size='15' fill='var(--c-text)'>支持力</text><text x='30' y='30' font-size='16' fill='var(--c-text)'>擁壁の安定3条件(転倒・滑動・支持力)</text><defs><marker id='a5' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-accent)'/></marker><marker id='a5b' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-text)'/></marker><marker id='a5c' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-line)'/></marker></defs></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "クーロン主働土圧合力",
          latex: "P_a = \\dfrac{1}{2}K_a\\gamma H^2",
          vars: [
            { sym: "P_a", meaning: "主働土圧合力(壁面法線からδ傾いて作用)", unit: "kN/m" },
            { sym: "K_a", meaning: "クーロンの主働土圧係数(一般式で計算)", unit: "無次元" }
          ],
          when: "壁面摩擦・壁の傾き・地表の傾斜を考慮した擁壁の設計外力",
          intuition: "形はランキンと同じ。Kaの中身と合力の向き(δ傾く)だけが違う",
          derivation: "くさび土塊のW・R・Paの力の三角形を解き、すべり角についてPaを最大化",
          blank: "P_a = \\dfrac{1}{2}?\\,\\gamma H^2",
          blankAnswer: "K_a"
        },
        {
          id: "f2",
          name: "クーロン主働土圧係数の一般式",
          latex: "K_a = \\dfrac{\\cos^2(\\phi-\\theta)}{\\cos^2\\theta\\cos(\\theta+\\delta)\\left[1+\\sqrt{\\dfrac{\\sin(\\phi+\\delta)\\sin(\\phi-\\alpha)}{\\cos(\\theta+\\delta)\\cos(\\theta-\\alpha)}}\\right]^2}",
          vars: [
            { sym: "\\phi", meaning: "内部摩擦角", unit: "°" },
            { sym: "\\delta", meaning: "壁面摩擦角", unit: "°" },
            { sym: "\\theta", meaning: "壁背面の鉛直からの傾き", unit: "°" },
            { sym: "\\alpha", meaning: "地表面の傾斜角", unit: "°" }
          ],
          when: "壁が傾く・地表が傾く・壁面摩擦ありの一般的な擁壁。記号の意味説明の出題も多い",
          intuition: "θ=δ=α=0とおくと (1−sinφ)/(1+sinφ) = ランキンのKaに一致する",
          derivation: "くさびのつり合いをすべり角で微分してゼロとおいた極値解",
          blank: "K_a = \\dfrac{\\cos^2(\\phi-?)}{\\cos^2\\theta\\cos(\\theta+\\delta)[\\,\\cdots\\,]^2}",
          blankAnswer: "\\theta"
        },
        {
          id: "f7",
          name: "土圧合力の水平・鉛直成分",
          latex: "P_H = P_a\\cos\\delta,\\quad P_V = P_a\\sin\\delta",
          vars: [
            { sym: "P_H", meaning: "土圧合力の水平成分", unit: "kN/m" },
            { sym: "P_V", meaning: "土圧合力の鉛直成分", unit: "kN/m" },
            { sym: "\\delta", meaning: "壁面摩擦角", unit: "°" }
          ],
          when: "壁面摩擦を考慮した土圧を、滑動・転倒照査の成分に分けるとき",
          intuition: "滑らせるのは水平成分、底面摩擦を増やすのは鉛直成分",
          derivation: "土圧合力Paを水平軸からδだけ傾いた力として三角関数で分解",
          blank: "P_H = P_a ?",
          blankAnswer: "\\cos\\delta"
        },
        {
          id: "f3",
          name: "転倒に対する安全率",
          latex: "F_s = \\dfrac{M_r}{M_o} \\geq 1.5",
          vars: [
            { sym: "M_r", meaning: "抵抗モーメント(自重×つま先からの腕)", unit: "kN·m/m" },
            { sym: "M_o", meaning: "転倒モーメント(土圧水平成分×作用高さ)", unit: "kN·m/m" }
          ],
          when: "擁壁のつま先(前端下)まわりの回転に対する照査",
          intuition: "自重が「起き上がり小法師」のように押さえ、土圧が倒そうとする",
          derivation: "つま先まわりのモーメントのつり合いを安全率の形にしたもの",
          blank: "F_s = \\dfrac{?}{M_o} \\geq 1.5",
          blankAnswer: "M_r"
        },
        {
          id: "f4",
          name: "滑動に対する安全率",
          latex: "F_s = \\dfrac{\\mu V + c_B B}{P_H} \\geq 1.5",
          vars: [
            { sym: "\\mu", meaning: "底面摩擦係数(=tanδB)", unit: "無次元" },
            { sym: "V", meaning: "鉛直力の合計(自重など)", unit: "kN/m" },
            { sym: "c_B", meaning: "底面と地盤の付着力", unit: "kN/m²" },
            { sym: "B", meaning: "底版幅", unit: "m" },
            { sym: "P_H", meaning: "土圧の水平成分", unit: "kN/m" }
          ],
          when: "擁壁が水平に押し出されないかの照査",
          intuition: "重い家具ほど床の摩擦で動かない。抵抗=摩擦+付着",
          derivation: "底面の水平方向の力のつり合い。摩擦抵抗はμV(クーロン摩擦)",
          blank: "F_s = \\dfrac{\\mu V + c_B B}{?} \\geq 1.5",
          blankAnswer: "P_H"
        },
        {
          id: "f5",
          name: "合力作用点とミドルサード条件",
          latex: "e = \\dfrac{B}{2} - \\dfrac{M_r - M_o}{V},\\quad |e| \\leq \\dfrac{B}{6}",
          vars: [
            { sym: "e", meaning: "底面中央からの偏心量", unit: "m" },
            { sym: "B", meaning: "底版幅", unit: "m" }
          ],
          when: "底面反力が全面圧縮になるか(浮き上がりが出ないか)の照査",
          intuition: "合力が底面の中央1/3(ミドルサード)に落ちれば全面で踏ん張れる",
          derivation: "台形分布の反力の端がゼロになる限界が e = B/6",
          blank: "|e| \\leq \\dfrac{B}{?}",
          blankAnswer: "6"
        },
        {
          id: "f6",
          name: "底面反力の最大値(支持力照査)",
          latex: "q_{max} = \\dfrac{V}{B}\\left(1 + \\dfrac{6e}{B}\\right) \\leq q_a",
          vars: [
            { sym: "q_{max}", meaning: "つま先側の最大地盤反力", unit: "kN/m²" },
            { sym: "q_a", meaning: "地盤の許容支持力", unit: "kN/m²" }
          ],
          when: "擁壁の基礎地盤が壊れないかを確かめる最後の照査",
          intuition: "偏心が大きいほどつま先に荷重が集中する。e=0なら一様にV/B",
          derivation: "偏心荷重を受ける帯状底面の直線(台形)反力分布の端部値",
          blank: "q_{max} = \\dfrac{V}{B}\\left(1 + \\dfrac{?}{B}\\right)",
          blankAnswer: "6e"
        }
      ],
      selectQuiz: [
        {
          q: "壁背面が傾き、地表も傾斜し、壁面摩擦も考慮して土圧係数を求めたい",
          choices: ["ランキンのKa = tan²(45°−φ/2)", "クーロンの一般式", "ヤーキーの式 K0=1−sinφ'", "分割法"],
          answer: 1,
          expl: "壁の傾きθ・地表傾斜α・壁面摩擦δを全部扱えるのはクーロンの一般式",
          formulaRef: "f2"
        },
        {
          q: "壁面摩擦角δをもつ土圧合力Paを、滑動・転倒照査用に水平成分と鉛直成分へ分けたい",
          choices: ["PH = Pa cosδ、PV = Pa sinδ", "PH = Pa sinδ、PV = Pa cosδ", "PH = Pa tanδ、PV = Pa", "PH = Pa、PV = 0"],
          answer: 0,
          expl: "合力が水平からδだけ傾くと見れば、水平成分はcos、鉛直成分はsin。滑動照査ではPHを使う",
          formulaRef: "f7"
        },
        {
          q: "擁壁がつま先を支点に前へ倒れないかを照査したい",
          choices: ["Fs = Mr/Mo ≥ 1.5", "Fs = (μV+cB·B)/PH ≥ 1.5", "qmax ≤ qa", "e ≤ B/6"],
          answer: 0,
          expl: "転倒照査はモーメント比。抵抗は自重、転倒側は土圧水平成分×高さ",
          formulaRef: "f3"
        },
        {
          q: "擁壁が土圧で水平にずれ出さないかを照査したい",
          choices: ["Fs = Mr/Mo", "Fs = (μV+cB·B)/PH ≥ 1.5", "Pa = ½KaγH²", "K0 = 1−sinφ'"],
          answer: 1,
          expl: "滑動照査。抵抗は底面摩擦μVと付着cB·B、作用は土圧の水平成分",
          formulaRef: "f4"
        },
        {
          q: "擁壁底面の反力が全面で圧縮になっている(浮き上がりがない)ことを確認したい",
          choices: ["e ≤ B/6(ミドルサード)", "Fs = Mr/Mo ≥ 1.5", "Hc = 4c/(γ√Ka)", "qu = cNc + qNq + ½γBNγ"],
          answer: 0,
          expl: "合力の偏心がB/6以内なら台形分布で全面圧縮。超えると浮き上がり域が生じる",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "擁壁の滑動照査",
          variants: [
            {
              q: "擁壁に働く鉛直力V=250 kN/m、主働土圧の水平成分PH=75 kN/m、底面摩擦係数μ=0.5(付着力は無視)のとき、滑動に対する安全率を求め、Fs≥1.5を満たすか判定せよ。",
              steps: [
                { label: "① 式の選択", content: "滑動照査 $F_s = \\dfrac{\\mu V}{P_H}$(付着無視なので $c_B B$ 項は落とす)" },
                { label: "② 代入", content: "$F_s = \\dfrac{0.5\\times 250}{75} = \\dfrac{125}{75}$" },
                { label: "③ 計算", content: "$F_s = 1.67$" },
                { label: "④ 判定", content: "1.67 ≥ 1.5 → 滑動に対して安全。摩擦抵抗125 kN/mが土圧75 kN/mを上回る" }
              ],
              answer: "Fs ≈ 1.67 ≥ 1.5 → OK"
            },
            {
              q: "鉛直力V=280 kN/m、土圧水平成分PH=100 kN/m、底面摩擦係数μ=0.55(付着無視)の擁壁の滑動安全率を求め、判定せよ。",
              steps: [
                { label: "① 式の選択", content: "$F_s = \\dfrac{\\mu V}{P_H}$" },
                { label: "② 代入", content: "$F_s = \\dfrac{0.55\\times 280}{100} = \\dfrac{154}{100}$" },
                { label: "③ 計算", content: "$F_s = 1.54$" },
                { label: "④ 判定", content: "1.54 ≥ 1.5 でぎりぎり合格。実務なら突起(シアキー)や底版拡幅で余裕を持たせたい" }
              ],
              answer: "Fs = 1.54 ≥ 1.5 → OK(余裕小)"
            }
          ],
          formulaRefs: ["f4"]
        },
        {
          id: "p2",
          pattern: "擁壁の転倒照査",
          variants: [
            {
              q: "高さH=6mの擁壁に主働土圧の水平成分PH=90 kN/mが底からH/3の高さに作用する。擁壁の自重V=300 kN/mの作用線はつま先から1.2mにある。転倒に対する安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "つま先まわりのモーメント比 $F_s = \\dfrac{M_r}{M_o}$" },
                { label: "② 各モーメント", content: "抵抗:$M_r = 300\\times 1.2 = 360$ kN·m/m。転倒:作用高さ $= 6/3 = 2$ m なので $M_o = 90\\times 2 = 180$ kN·m/m" },
                { label: "③ 計算", content: "$F_s = 360/180 = 2.0$" },
                { label: "④ 判定", content: "2.0 ≥ 1.5 → 転倒に対して安全" }
              ],
              answer: "Fs = 2.0 ≥ 1.5 → OK"
            },
            {
              q: "高さH=4.5mの擁壁に土圧水平成分PH=96 kN/mが底からH/3に作用し、自重V=250 kN/mがつま先から1.5mに作用する。転倒安全率を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$F_s = \\dfrac{M_r}{M_o}$(つま先まわり)" },
                { label: "② 各モーメント", content: "$M_r = 250\\times 1.5 = 375$。作用高さ $= 4.5/3 = 1.5$ m、$M_o = 96\\times 1.5 = 144$" },
                { label: "③ 計算", content: "$F_s = 375/144 = 2.60$" },
                { label: "④ 判定", content: "2.60 ≥ 1.5 → 転倒には十分安全。次は滑動・支持力の照査へ進む" }
              ],
              answer: "Fs ≈ 2.60 ≥ 1.5 → OK"
            }
          ],
          formulaRefs: ["f3"]
        },
        {
          id: "p3",
          pattern: "壁面摩擦を考慮した滑動照査",
          variants: [
            {
              q: "主働土圧合力Pa=100 kN/m、壁面摩擦角δ=20°、擁壁の自重W=300 kN/m、底面摩擦角δB=25°(付着なし)とする。土圧の鉛直成分が下向きに働くとして、滑動安全率を求めよ。",
              steps: [
                { label: "① 土圧の成分分解", content: "$P_H=P_a\\cos\\delta=100\\cos20^\\circ=94.0$ kN/m、$P_V=P_a\\sin\\delta=100\\sin20^\\circ=34.2$ kN/m" },
                { label: "② 鉛直力と摩擦係数", content: "下向きの鉛直成分は底面摩擦を増やす。$V=W+P_V=300+34.2=334.2$ kN/m、$\\mu=\\tan25^\\circ=0.466$" },
                { label: "③ 滑動抵抗", content: "$R=\\mu V=0.466\\times334.2=155.8$ kN/m" },
                { label: "④ 安全率", content: "$F_s=R/P_H=155.8/94.0=1.66$。1.5以上なので滑動に対してOK" }
              ],
              answer: "Fs ≈ 1.66 → OK"
            },
            {
              q: "Pa=80 kN/m、δ=15°、W=220 kN/m、底面摩擦係数μ=0.50(付着なし)の擁壁について、土圧鉛直成分を考慮した滑動安全率を求めよ。",
              steps: [
                { label: "① 成分分解", content: "$P_H=80\\cos15^\\circ=77.3$ kN/m、$P_V=80\\sin15^\\circ=20.7$ kN/m" },
                { label: "② 抵抗力", content: "$V=220+20.7=240.7$ kN/m。摩擦抵抗 $R=0.50\\times240.7=120.4$ kN/m" },
                { label: "③ 安全率", content: "$F_s=120.4/77.3=1.56$" },
                { label: "④ 判定", content: "1.56≥1.5でぎりぎりOK。鉛直成分を無視すると $0.5\\times220/77.3=1.42$ でNGになる点も確認" }
              ],
              answer: "Fs ≈ 1.56 → OK(余裕小)"
            }
          ],
          formulaRefs: ["f4", "f7"]
        }
      ],
      quiz: [
        {
          q: "クーロン土圧でランキンにない特徴はどれ?",
          choices: ["深さに比例する土圧", "壁面摩擦角δを考慮できる", "粘着力を考慮できる", "三角形分布になる"],
          answer: 1,
          expl: "くさびのつり合いで解くため、壁面摩擦・壁の傾き・地表傾斜を扱える",
          sectionRef: 0
        },
        {
          q: "クーロンの主働土圧は、仮定したすべり面のうちどの面で決まる?",
          choices: ["土圧合力Pが最小の面", "土圧合力Pが最大の面", "45°の面", "最も深い面"],
          answer: 1,
          expl: "主働側では壁が支えるべき最大の力を与える面が危険側=設計値になる",
          sectionRef: 0
        },
        {
          q: "L型擁壁の安定計算で疑似擁壁として重量に含めるものはどれ?",
          choices: ["壁本体と底版上の裏込め土", "壁本体だけ", "背面土全体を無限に全部", "水圧だけ"],
          answer: 0,
          expl: "L型擁壁は、壁本体と底版上の土を一体の疑似擁壁として安定計算する",
          sectionRef: 2
        },
        {
          q: "擁壁の安定照査3条件に含まれないものはどれ?",
          choices: ["転倒", "滑動", "支持力", "液状化"],
          answer: 3,
          expl: "基本の3条件は転倒・滑動・支持力。液状化は別途の地盤問題",
          sectionRef: 3
        },
        {
          q: "合力の偏心量eがB/6を超えるとどうなる?",
          choices: ["底面全体が圧縮のまま", "つま先が浮き上がる", "かかと側の反力がゼロ以下(浮き上がり)になる", "滑動安全率が上がる"],
          answer: 2,
          expl: "ミドルサードを外れると後端(かかと)側の反力が計算上引張りになり、浮き上がり域が生じる",
          sectionRef: 3
        }
      ]
    },
    // ============================================================
    // u5 地盤内応力と変形
    // ============================================================
    {
      id: "u5",
      title: "地盤内の応力と変形(ブシネスク・即時沈下)",
      weeks: "第9〜11週",
      priority: 3,
      sections: [
        {
          heading: "荷重は地中で「広がって薄まる」— ブシネスクの式",
          body: "<p>地表に載った荷重は、深くなるほど広い範囲に分散して伝わる。地盤を均質な弾性体とみなすと、集中荷重Pによる深さz・水平距離rの点の鉛直応力増分は<b>[[ブシネスクの式]]</b> $\\Delta\\sigma_z = \\dfrac{3P z^3}{2\\pi R^5}$($R=\\sqrt{r^2+z^2}$)で与えられる。真下では $\\Delta\\sigma_z = \\dfrac{3P}{2\\pi z^2}$ となり、<b>深さの2乗に反比例</b>して急速に小さくなる。布団の上に立つと足元だけ沈むが、板を敷くと広く浅く沈むのと同じで、荷重は深部ほど広がって薄まる。等しい応力の点をつなぐと電球のような形になるので「圧力球根」と呼ばれる。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='70' x2='400' y2='70' stroke='var(--c-text)' stroke-width='2.5'/><line x1='210' y1='20' x2='210' y2='66' stroke='var(--c-accent)' stroke-width='4' marker-end='url(#a6)'/><text x='222' y='38' font-size='17' fill='var(--c-accent)'>P(集中荷重)</text><ellipse cx='210' cy='105' rx='38' ry='34' fill='none' stroke='var(--c-accent)' stroke-width='2.5'/><ellipse cx='210' cy='135' rx='70' ry='62' fill='none' stroke='var(--c-accent)' stroke-width='2' stroke-opacity='0.7'/><ellipse cx='210' cy='170' rx='105' ry='95' fill='none' stroke='var(--c-accent)' stroke-width='1.5' stroke-opacity='0.45'/><text x='258' y='108' font-size='15' fill='var(--c-accent)'>応力 大</text><text x='300' y='165' font-size='15' fill='var(--c-accent)' fill-opacity='0.8'>応力 小</text><line x1='210' y1='70' x2='210' y2='280' stroke='var(--c-line)' stroke-width='1.5' stroke-dasharray='5 4'/><text x='218' y='275' font-size='15' fill='var(--c-text)'>深さ z</text><text x='30' y='45' font-size='16' fill='var(--c-text)'>圧力球根:深いほど広く・薄く</text><defs><marker id='a6' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-accent)'/></marker></defs></svg>"
        },
        {
          heading: "線状荷重・帯状荷重・図表の使い方",
          body: "<p>実際の構造物は点ではなく、道路や基礎のように<b>線や帯状</b>に荷重が載る。線状荷重(単位長さあたりp)なら $\\Delta\\sigma_z = \\dfrac{2p z^3}{\\pi(x^2+z^2)^2}$、帯状荷重や長方形荷重はブシネスク解を面で積分した結果が<b>影響値の図表(オスターバーグ図など)</b>として整理されている。試験では「図表の軸(m=B/z, n=L/zなど)を作って影響値を読み、$\\Delta\\sigma_z = I\\cdot q$ を計算する」手順が問われる。手早い近似としては、荷重が深さ方向に1:2の勾配で広がるとみなす<b>2:1法</b> $\\Delta\\sigma_z = \\dfrac{qBL}{(B+z)(L+z)}$ も実務でよく使う。</p>"
        },
        {
          heading: "即時沈下:時間遅れのない弾性沈下",
          body: "<p>荷重をかけた瞬間に生じる沈下が[[即時沈下]]だ。粘土の圧密沈下(土質力学2)が水の絞り出しに時間がかかるのと違い、<b>載荷と同時に弾性変形として現れる</b>。基礎幅B、荷重強さq、地盤の変形係数E、ポアソン比νを使って $S_e = \\dfrac{qB(1-\\nu^2)}{E}I_s$ と計算する($I_s$は基礎の形状と剛性で決まる影響係数)。スポンジに手を押し付けた瞬間のへこみをイメージすればよい。砂地盤では沈下のほとんどが即時沈下なので、この式が沈下検討の主役になる。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "ブシネスクの式(集中荷重の鉛直応力)",
          latex: "\\Delta\\sigma_z = \\dfrac{3P z^3}{2\\pi R^5},\\quad R=\\sqrt{r^2+z^2}",
          vars: [
            { sym: "P", meaning: "地表の集中荷重", unit: "kN" },
            { sym: "z", meaning: "深さ", unit: "m" },
            { sym: "r", meaning: "荷重直下からの水平距離", unit: "m" },
            { sym: "R", meaning: "荷重点から着目点までの距離", unit: "m" }
          ],
          when: "集中荷重による任意の点の鉛直応力増分。全ての荷重解の基本形",
          intuition: "深く・横に離れるほど急減。弾性論のいちばん基本の解",
          derivation: "半無限弾性体の弾性論解(ブシネスク, 1885)。導出は積分だが結果を使えればよい",
          blank: "\\Delta\\sigma_z = \\dfrac{3P z^3}{2\\pi ?}",
          blankAnswer: "R^5"
        },
        {
          id: "f2",
          name: "集中荷重直下の鉛直応力(r=0)",
          latex: "\\Delta\\sigma_z = \\dfrac{3P}{2\\pi z^2} \\approx 0.478\\dfrac{P}{z^2}",
          vars: [
            { sym: "z", meaning: "荷重直下の深さ", unit: "m" }
          ],
          when: "「荷重の真下、深さzの応力」を問われたとき。最頻出の特別形",
          intuition: "深さ2倍で応力1/4。逆2乗で薄まる",
          derivation: "f1にr=0(R=z)を代入するとz³/z⁵=1/z²になる",
          blank: "\\Delta\\sigma_z = \\dfrac{3P}{2\\pi ?}",
          blankAnswer: "z^2"
        },
        {
          id: "f3",
          name: "線状荷重による鉛直応力",
          latex: "\\Delta\\sigma_z = \\dfrac{2p z^3}{\\pi(x^2+z^2)^2}",
          vars: [
            { sym: "p", meaning: "単位長さあたりの線状荷重", unit: "kN/m" },
            { sym: "x", meaning: "荷重線からの水平距離", unit: "m" }
          ],
          when: "細長い荷重(壁の基礎・レールなど)による地盤内応力",
          intuition: "ブシネスクを線に沿って足し合わせた(積分した)もの",
          derivation: "集中荷重解を荷重線方向に−∞〜∞で積分",
          blank: "\\Delta\\sigma_z = \\dfrac{2p z^3}{\\pi ?}",
          blankAnswer: "(x^2+z^2)^2"
        },
        {
          id: "f4",
          name: "帯状荷重による鉛直応力",
          latex: "\\Delta\\sigma_z = \\dfrac{q}{\\pi}\\left(\\alpha + \\sin\\alpha\\cos(\\alpha+2\\delta)\\right)",
          vars: [
            { sym: "q", meaning: "帯状の等分布荷重", unit: "kN/m²" },
            { sym: "\\alpha", meaning: "着目点から荷重帯の両端を見込む角(ラジアン)", unit: "rad" },
            { sym: "\\delta", meaning: "着目点から荷重端への角度", unit: "rad" }
          ],
          when: "道路盛土・連続フーチングなど帯状荷重の直下・側方の応力",
          intuition: "見込む角αが大きい(荷重が近い・広い)ほど応力が大きい",
          derivation: "線状荷重解を帯の幅で積分。αはラジアンで入れることに注意",
          blank: "\\Delta\\sigma_z = \\dfrac{q}{\\pi}\\left(? + \\sin\\alpha\\cos(\\alpha+2\\delta)\\right)",
          blankAnswer: "\\alpha"
        },
        {
          id: "f5",
          name: "2:1法(近似応力分散)",
          latex: "\\Delta\\sigma_z = \\dfrac{q\\,B\\,L}{(B+z)(L+z)}",
          vars: [
            { sym: "B, L", meaning: "基礎の幅と長さ", unit: "m" },
            { sym: "q", meaning: "基礎底面の荷重強さ", unit: "kN/m²" }
          ],
          when: "長方形基礎下の平均的な応力増分を手早く見積もるとき",
          intuition: "荷重が深さ1につき横に1/2ずつ(勾配2:1)広がると考える近似",
          derivation: "深さzで受け持ち面積が(B+z)(L+z)に広がるとした力のつり合い",
          blank: "\\Delta\\sigma_z = \\dfrac{q\\,B\\,L}{(B+z)(?)}",
          blankAnswer: "L+z"
        },
        {
          id: "f6",
          name: "即時沈下(弾性沈下)",
          latex: "S_e = \\dfrac{q\\,B\\,(1-\\nu^2)}{E}\\,I_s",
          vars: [
            { sym: "S_e", meaning: "即時沈下量", unit: "m" },
            { sym: "q", meaning: "基礎底面の荷重強さ", unit: "kN/m²" },
            { sym: "B", meaning: "基礎幅", unit: "m" },
            { sym: "\\nu", meaning: "地盤のポアソン比", unit: "無次元" },
            { sym: "E", meaning: "地盤の変形係数", unit: "kN/m²" },
            { sym: "I_s", meaning: "形状・剛性の影響係数(表から)", unit: "無次元" }
          ],
          when: "砂地盤の基礎など、載荷直後の沈下量を求めるとき",
          intuition: "硬い地盤(E大)ほど沈まない。幅Bが広いほど深くまで応力が及び沈む",
          derivation: "弾性論のひずみを深さ方向に積分した結果を係数Isにまとめたもの",
          blank: "S_e = \\dfrac{q\\,B\\,(1-\\nu^2)}{?}\\,I_s",
          blankAnswer: "E"
        }
      ],
      selectQuiz: [
        {
          q: "水槽の脚のような集中荷重の真下、深さ5mの鉛直応力増分を求めたい",
          choices: ["Δσz = 3P/(2πz²)", "Δσz = 2pz³/π(x²+z²)²", "Se = qB(1−ν²)Is/E", "Δσz = qBL/((B+z)(L+z))"],
          answer: 0,
          expl: "集中荷重の直下(r=0)ならブシネスクの特別形 3P/(2πz²)",
          formulaRef: "f2"
        },
        {
          q: "長方形基礎の下の応力増分を、荷重が2:1の勾配で広がると仮定して手早く見積もりたい",
          choices: ["ブシネスクの式", "2:1法 Δσz = qBL/((B+z)(L+z))", "帯状荷重の式", "即時沈下の式"],
          answer: 1,
          expl: "2:1法は面積の広がりだけで考える実務的近似。図表なしで計算できる",
          formulaRef: "f5"
        },
        {
          q: "砂地盤上の基礎に荷重をかけた直後の沈下量を求めたい",
          choices: ["圧密沈下の式", "Se = qB(1−ν²)Is/E", "Δσz = 3Pz³/(2πR⁵)", "qu = cNc + qNq + ½γBNγ"],
          answer: 1,
          expl: "載荷直後の弾性変形=即時沈下。圧密のような時間遅れはない",
          formulaRef: "f6"
        },
        {
          q: "集中荷重の真下から水平に3m離れた地中の点の鉛直応力を求めたい",
          choices: ["Δσz = 3P/(2πz²)", "Δσz = 3Pz³/(2πR⁵)、R=√(r²+z²)", "2:1法", "K0 = 1−sinφ'"],
          answer: 1,
          expl: "直下から外れた点はRを使う一般形。r=0のときだけ簡略形が使える",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "ブシネスク式による地盤内応力",
          variants: [
            {
              q: "地表面に集中荷重P=500 kNが作用する。荷重直下、深さz=5mの点の鉛直応力増分を求めよ。",
              steps: [
                { label: "① 式の選択", content: "直下(r=0)なので $\\Delta\\sigma_z = \\dfrac{3P}{2\\pi z^2}$" },
                { label: "② 代入", content: "$\\Delta\\sigma_z = \\dfrac{3\\times 500}{2\\pi\\times 5^2} = \\dfrac{1500}{157.1}$" },
                { label: "③ 計算", content: "$\\Delta\\sigma_z = 9.55$ kN/m²" },
                { label: "④ 妥当性確認", content: "500 kNもの荷重が5m下ではわずか10 kPa弱。深さの2乗で薄まる感覚と一致" }
              ],
              answer: "Δσz ≈ 9.55 kN/m²"
            },
            {
              q: "地表面に集中荷重P=1000 kNが作用する。荷重直下、深さz=4mの点の鉛直応力増分を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$\\Delta\\sigma_z = \\dfrac{3P}{2\\pi z^2}$" },
                { label: "② 代入", content: "$\\Delta\\sigma_z = \\dfrac{3\\times 1000}{2\\pi\\times 16} = \\dfrac{3000}{100.5}$" },
                { label: "③ 計算", content: "$\\Delta\\sigma_z = 29.8$ kN/m²" },
                { label: "④ 妥当性確認", content: "z=8mなら1/4の7.5 kPaになるはず(逆2乗)。オーダー感覚と整合" }
              ],
              answer: "Δσz ≈ 29.8 kN/m²"
            },
            {
              q: "地表面の集中荷重P=800 kNについて、荷重点から水平にr=3m離れ、深さz=4mの点の鉛直応力増分を求めよ。",
              steps: [
                { label: "① 式の選択", content: "直下ではないので一般形 $\\Delta\\sigma_z = \\dfrac{3Pz^3}{2\\pi R^5}$、まず $R=\\sqrt{r^2+z^2}$" },
                { label: "② 代入", content: "$R = \\sqrt{9+16} = 5$ m。$\\Delta\\sigma_z = \\dfrac{3\\times 800\\times 4^3}{2\\pi\\times 5^5} = \\dfrac{153600}{19635}$" },
                { label: "③ 計算", content: "$\\Delta\\sigma_z = 7.82$ kN/m²" },
                { label: "④ 妥当性確認", content: "同じ深さの直下なら $3\\times800/(2\\pi\\times16)=23.9$ kPa。横に3mずれただけで1/3に減る → 横方向の減衰も大きい" }
              ],
              answer: "Δσz ≈ 7.82 kN/m²"
            }
          ],
          formulaRefs: ["f1", "f2"]
        },
        {
          id: "p2",
          pattern: "即時沈下の計算",
          variants: [
            {
              q: "幅B=2mの基礎に等分布荷重q=100 kN/m²が作用する。地盤の変形係数E=10000 kN/m²、ポアソン比ν=0.3、影響係数Is=1.0のとき、即時沈下量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "即時沈下 $S_e = \\dfrac{qB(1-\\nu^2)}{E}I_s$" },
                { label: "② 代入", content: "$S_e = \\dfrac{100\\times 2\\times(1-0.09)}{10000}\\times 1.0 = \\dfrac{200\\times 0.91}{10000}$" },
                { label: "③ 計算", content: "$S_e = \\dfrac{182}{10000} = 0.0182$ m" },
                { label: "④ 単位・妥当性確認", content: "18.2 mm。砂地盤の中規模基礎の沈下として現実的なオーダー(数十mm以内)" }
              ],
              answer: "Se ≈ 0.018 m = 18.2 mm"
            },
            {
              q: "幅B=3mの基礎にq=150 kN/m²が作用する。E=15000 kN/m²、ν=0.5、Is=0.8のとき即時沈下量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$S_e = \\dfrac{qB(1-\\nu^2)}{E}I_s$" },
                { label: "② 代入", content: "$1-\\nu^2 = 1-0.25 = 0.75$。$S_e = \\dfrac{150\\times 3\\times 0.75}{15000}\\times 0.8$" },
                { label: "③ 計算", content: "$S_e = \\dfrac{337.5}{15000}\\times 0.8 = 0.0225\\times 0.8 = 0.018$ m" },
                { label: "④ 単位・妥当性確認", content: "18 mm。ν=0.5(非排水)は体積不変の粘土に対応する値であることも覚えておく" }
              ],
              answer: "Se = 0.018 m = 18 mm"
            }
          ],
          formulaRefs: ["f6"]
        }
      ],
      quiz: [
        {
          q: "ブシネスクの式が仮定している地盤のモデルは?",
          choices: ["剛塑性体", "均質等方な半無限弾性体", "粘弾性体", "粒状体"],
          answer: 1,
          expl: "地表面が水平で無限に広がる均質・等方の弾性体(半無限弾性体)を仮定している",
          sectionRef: 0
        },
        {
          q: "集中荷重の直下で深さを2倍にすると、鉛直応力増分はどうなる?",
          choices: ["1/2", "1/4", "1/8", "変わらない"],
          answer: 1,
          expl: "Δσz = 3P/(2πz²) は深さの2乗に反比例するので1/4",
          sectionRef: 0
        },
        {
          q: "「圧力球根」が表しているものは?",
          choices: ["地下水の流れ", "等しい応力増分の点をつないだ等値線", "すべり面の形", "沈下の等値線"],
          answer: 1,
          expl: "荷重による応力増分が等しい点の集合。深く・横に広がる電球形になる",
          sectionRef: 0
        },
        {
          q: "即時沈下が圧密沈下と本質的に違う点は?",
          choices: ["沈下量が必ず大きい", "時間遅れなく載荷と同時に生じる", "粘土でしか起きない", "水平方向に生じる"],
          answer: 1,
          expl: "即時沈下は弾性変形なので瞬時。圧密は間隙水の排出に時間がかかる",
          sectionRef: 2
        }
      ]
    },
    // ============================================================
    // u6 地盤の支持力
    // ============================================================
    {
      id: "u6",
      title: "地盤の支持力(Terzaghiの支持力式・深い基礎)",
      weeks: "第12〜14週",
      priority: 3,
      sections: [
        {
          heading: "支持力とは:地盤がせん断破壊せず支えられる限界",
          body: "<p>基礎に荷重をかけていくと、地盤はまず弾性的に沈み、やがて基礎の下に<b>くさび状の領域→らせん状のすべり面→地表へ抜ける受働域</b>という連続したすべり面が形成されて壊れる。これが[[全般せん断破壊]]で、そのときの底面圧力が[[極限支持力]] $q_u$ だ。硬い雪の上は歩けるが、ある体重を超えると踏み抜くのと同じで、地盤には支えられる限界がある。緩い地盤では明確なピークなく沈み続ける局所せん断破壊になる。設計では $q_u$ を安全率3で割った[[許容支持力]] $q_a$ を使う。</p>",
          svg: "<svg viewBox='0 0 420 300' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='110' x2='405' y2='110' stroke='var(--c-text)' stroke-width='2.5'/><rect x='175' y='60' width='70' height='50' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='2'/><line x1='210' y1='20' x2='210' y2='55' stroke='var(--c-accent)' stroke-width='4' marker-end='url(#a7)'/><text x='222' y='40' font-size='16' fill='var(--c-accent)'>qu</text><polygon points='175,110 245,110 210,160' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><text x='196' y='135' font-size='14' fill='var(--c-text)'>I</text><path d='M 210 160 Q 265 200 320 110' fill='none' stroke='var(--c-accent)' stroke-width='2.5'/><path d='M 210 160 Q 155 200 100 110' fill='none' stroke='var(--c-accent)' stroke-width='2.5'/><text x='268' y='170' font-size='14' fill='var(--c-text)'>II(放射せん断)</text><line x1='300' y1='95' x2='340' y2='80' stroke='var(--c-line)' stroke-width='2.5' marker-end='url(#a7b)'/><line x1='120' y1='95' x2='80' y2='80' stroke='var(--c-line)' stroke-width='2.5' marker-end='url(#a7b)'/><text x='330' y='65' font-size='14' fill='var(--c-text)'>III(受働域が持ち上がる)</text><polygon points='245,110 320,110 300,128' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='1.5'/><polygon points='175,110 100,110 120,128' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='1.5'/><text x='20' y='40' font-size='16' fill='var(--c-text)'>全般せん断破壊のすべり面</text><text x='20' y='285' font-size='15' fill='var(--c-text)'>I:くさび域 II:放射域 III:受働域</text><defs><marker id='a7' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-accent)'/></marker><marker id='a7b' markerWidth='9' markerHeight='9' refX='7' refY='4.5' orient='auto'><path d='M0,0 L9,4.5 L0,9 z' fill='var(--c-line)'/></marker></defs></svg>"
        },
        {
          heading: "Terzaghiの支持力式:3つの項の意味",
          body: "<p>帯状基礎の[[極限支持力]]は<b>Terzaghiの支持力式</b> $q_u = cN_c + \\gamma_1 D_f N_q + \\frac{1}{2}\\gamma_2 B N_\\gamma$ で計算する。3つの項はそれぞれ<b>①[[粘着力]]の踏ん張り(cNc)、②[[根入れ深さ]]の上載圧による押さえ(γDfNq)、③基礎幅の下の土の重さによる抵抗(½γBNγ)</b>を表す。[[支持力係数]]Nc・Nq・Nγは[[内部摩擦角]]φだけで決まり、表から読む。基礎の形の違いは形状係数で補正し、正方形なら $q_u = 1.3cN_c + \\gamma_1 D_f N_q + 0.4\\gamma_2 B N_\\gamma$。<b>「どの項に何の記号が入るか」と「形状係数1.3と0.4(円形は0.3)」</b>が試験の定番だ。</p>"
        },
        {
          heading: "深い基礎:杭は先端と摩擦で支える",
          body: "<p>浅い地盤が軟弱なら、荷重を深部の良好な層まで届ける<b>深い基礎</b>を使う。代表が[[杭基礎]]で、支持力は<b>先端支持力 $R_p$(杭先端の地盤が支える分)と周面摩擦力 $R_f$(杭の側面と土の摩擦)の和</b> $R_u = q_d A_p + \\sum f_i A_{si}$ で見積もる。画鋲は先端の一点で支えるが、割り箸を砂に深く差すと側面の摩擦だけでもかなり抜けにくい — 杭はこの両方を使う。支持層に届く「支持杭」と、摩擦主体の「摩擦杭」の区別、根入れが深いと破壊面が地表まで達しないため浅い基礎と扱いが変わる点を押さえよう。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "Terzaghiの支持力式(帯状基礎)",
          latex: "q_u = cN_c + \\gamma_1 D_f N_q + \\dfrac{1}{2}\\gamma_2 B N_\\gamma",
          vars: [
            { sym: "q_u", meaning: "極限支持力", unit: "kN/m²" },
            { sym: "c", meaning: "地盤の粘着力", unit: "kN/m²" },
            { sym: "\\gamma_1", meaning: "基礎底面より上の土の単位体積重量", unit: "kN/m³" },
            { sym: "D_f", meaning: "根入れ深さ", unit: "m" },
            { sym: "\\gamma_2", meaning: "基礎底面より下の土の単位体積重量", unit: "kN/m³" },
            { sym: "B", meaning: "基礎幅", unit: "m" },
            { sym: "N_c, N_q, N_\\gamma", meaning: "支持力係数(φから表で読む)", unit: "無次元" }
          ],
          when: "連続フーチング(帯状基礎)の極限支持力。支持力問題の大黒柱",
          intuition: "粘着の踏ん張り+上載圧の押さえ+土自重の抵抗、の3階建て",
          derivation: "基礎下のくさび・放射・受働域のつり合いを解いた極限平衡解",
          blank: "q_u = cN_c + \\gamma_1 D_f N_q + \\dfrac{1}{2}\\gamma_2 B\\,?",
          blankAnswer: "N_\\gamma"
        },
        {
          id: "f2",
          name: "Terzaghiの支持力式(正方形基礎)",
          latex: "q_u = 1.3cN_c + \\gamma_1 D_f N_q + 0.4\\gamma_2 B N_\\gamma",
          vars: [
            { sym: "B", meaning: "正方形基礎の一辺", unit: "m" }
          ],
          when: "独立フーチング(正方形)の支持力。形状係数1.3と0.4がポイント",
          intuition: "三次元効果で粘着項は3割増し、幅の項は0.5→0.4に減る",
          derivation: "帯状の解に実験に基づく形状係数を掛けた半経験式",
          blank: "q_u = ?\\,cN_c + \\gamma_1 D_f N_q + 0.4\\gamma_2 B N_\\gamma",
          blankAnswer: "1.3"
        },
        {
          id: "f3",
          name: "Terzaghiの支持力式(円形基礎)",
          latex: "q_u = 1.3cN_c + \\gamma_1 D_f N_q + 0.3\\gamma_2 B N_\\gamma",
          vars: [
            { sym: "B", meaning: "円形基礎の直径", unit: "m" }
          ],
          when: "円形フーチング。正方形との違いは幅の項の係数(0.4→0.3)だけ",
          intuition: "円形は角がない分、幅の項の寄与がさらに小さい",
          derivation: "帯状の解に形状係数(1.3, 0.3)を掛けた半経験式",
          blank: "q_u = 1.3cN_c + \\gamma_1 D_f N_q + ?\\,\\gamma_2 B N_\\gamma",
          blankAnswer: "0.3"
        },
        {
          id: "f4",
          name: "許容支持力",
          latex: "q_a = \\dfrac{q_u}{F_s}\\quad (F_s = 3)",
          vars: [
            { sym: "q_a", meaning: "許容支持力", unit: "kN/m²" },
            { sym: "F_s", meaning: "安全率(長期で通常3)", unit: "無次元" }
          ],
          when: "設計で実際に使ってよい地盤反力の上限を求めるとき",
          intuition: "限界の1/3までしか使わない。地盤の不確かさは大きいので安全率も大きめ",
          derivation: "定義。支持力の安全率3は斜面(1.2〜1.5)より大きいことに注意",
          blank: "q_a = \\dfrac{q_u}{?}",
          blankAnswer: "F_s"
        },
        {
          id: "f5",
          name: "粘土地盤(φ=0)の支持力",
          latex: "q_u = 5.7c + \\gamma D_f\\quad (N_c = 5.7,\\ N_q = 1,\\ N_\\gamma = 0)",
          vars: [
            { sym: "c", meaning: "非排水せん断強さ(粘着力)", unit: "kN/m²" }
          ],
          when: "飽和粘土の短期(非排水)支持力。φ=0のとき係数が固定値になる",
          intuition: "φ=0では幅の項が消え、支持力はほぼ粘着力の5.7倍",
          derivation: "TerzaghiのNc(φ=0)=5.7。Nq=1は上載圧がそのまま伝わる意味",
          blank: "q_u = ?\\,c + \\gamma D_f",
          blankAnswer: "5.7"
        },
        {
          id: "f6",
          name: "杭の極限支持力(先端+周面摩擦)",
          latex: "R_u = R_p + R_f = q_d A_p + \\sum f_i A_{si}",
          vars: [
            { sym: "R_p", meaning: "先端支持力", unit: "kN" },
            { sym: "R_f", meaning: "周面摩擦力の合計", unit: "kN" },
            { sym: "q_d", meaning: "先端地盤の極限支持力度", unit: "kN/m²" },
            { sym: "A_p", meaning: "杭先端の断面積", unit: "m²" },
            { sym: "f_i", meaning: "各層の周面摩擦力度", unit: "kN/m²" },
            { sym: "A_{si}", meaning: "各層での杭周面積", unit: "m²" }
          ],
          when: "深い基礎(杭)の鉛直支持力。支持杭・摩擦杭の区別とセットで",
          intuition: "先端の踏ん張り+側面の握力。深く刺すほど摩擦分が増える",
          derivation: "先端抵抗と周面抵抗の単純和。各項は静力学式や載荷試験で評価",
          blank: "R_u = q_d A_p + \\sum ?\\,A_{si}",
          blankAnswer: "f_i"
        }
      ],
      selectQuiz: [
        {
          q: "連続フーチング(帯状基礎)の極限支持力を求めたい",
          choices: ["qu = cNc + γ1DfNq + ½γ2BNγ", "qu = 1.3cNc + γ1DfNq + 0.4γ2BNγ", "Ru = qdAp + ΣfiAsi", "qa = qu/3"],
          answer: 0,
          expl: "帯状は係数補正なしの基本形。1.3や0.4が付くのは正方形・円形",
          formulaRef: "f1"
        },
        {
          q: "正方形の独立フーチングの極限支持力を求めたい",
          choices: ["qu = cNc + γ1DfNq + ½γ2BNγ", "qu = 1.3cNc + γ1DfNq + 0.4γ2BNγ", "qu = 5.7c + γDf", "Se = qB(1−ν²)Is/E"],
          answer: 1,
          expl: "正方形は形状係数1.3(粘着項)と0.4(幅の項)。円形なら0.3",
          formulaRef: "f2"
        },
        {
          q: "極限支持力から設計に使う許容支持力を求めたい",
          choices: ["qa = qu/1.5", "qa = qu/3", "qa = qu×3", "qa = qu − γDf"],
          answer: 1,
          expl: "支持力の安全率は通常3。斜面の1.2〜1.5と混同しないこと",
          formulaRef: "f4"
        },
        {
          q: "軟弱層を貫いて支持層に達する杭の極限支持力を求めたい",
          choices: ["Terzaghi式(帯状)", "Ru = qdAp + ΣfiAsi", "qu = 5.7c + γDf", "2:1法"],
          answer: 1,
          expl: "杭は先端支持力と周面摩擦力の和。浅い基礎の式は使えない",
          formulaRef: "f6"
        },
        {
          q: "飽和粘土地盤(φ=0)上の帯状基礎の短期支持力を手早く見積もりたい",
          choices: ["qu = 5.7c + γDf", "qu = ½γBNγ", "Fs = tanφ/tanβ", "K0 = 1−sinφ'"],
          answer: 0,
          expl: "φ=0ではNc=5.7、Nq=1、Nγ=0となり、粘着項と上載圧だけが残る",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "Terzaghi支持力式(帯状基礎)",
          variants: [
            {
              q: "幅B=2m、根入れ深さDf=1.5mの帯状基礎がある。地盤はc=20 kN/m²、φ=20°、γ=18 kN/m³(上下とも)。支持力係数はNc=17.7、Nq=7.4、Nγ=5.0とする。極限支持力quと許容支持力qa(Fs=3)を求めよ。",
              steps: [
                { label: "① 式の選択", content: "帯状基礎 → $q_u = cN_c + \\gamma D_f N_q + \\dfrac{1}{2}\\gamma B N_\\gamma$" },
                { label: "② 各項の計算", content: "第1項:$20\\times 17.7 = 354$。第2項:$18\\times 1.5\\times 7.4 = 199.8$。第3項:$\\dfrac{1}{2}\\times 18\\times 2\\times 5.0 = 90$" },
                { label: "③ 合計", content: "$q_u = 354 + 199.8 + 90 = 643.8 \\approx 644$ kN/m²" },
                { label: "④ 許容支持力・確認", content: "$q_a = 644/3 = 215$ kN/m²。粘着項が最大で、根入れ・幅の項が続く構成。中硬質地盤として妥当な値" }
              ],
              answer: "qu ≈ 644 kN/m²、qa ≈ 215 kN/m²"
            },
            {
              q: "幅B=3m、根入れDf=1.0mの帯状基礎を砂地盤(c=0、φ=30°、γ=17 kN/m³)に設ける。Nq=22.5、Nγ=19.7として極限支持力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "c=0なので $q_u = \\gamma D_f N_q + \\dfrac{1}{2}\\gamma B N_\\gamma$(粘着項が消える)" },
                { label: "② 各項の計算", content: "第2項:$17\\times 1.0\\times 22.5 = 382.5$。第3項:$\\dfrac{1}{2}\\times 17\\times 3\\times 19.7 = 502.4$" },
                { label: "③ 合計", content: "$q_u = 382.5 + 502.4 = 884.9 \\approx 885$ kN/m²" },
                { label: "④ 確認", content: "砂ではφが大きく係数が大きいので、cがなくても支持力は大きい。$q_a = 885/3 = 295$ kN/m²" }
              ],
              answer: "qu ≈ 885 kN/m²(qa ≈ 295 kN/m²)"
            }
          ],
          formulaRefs: ["f1", "f4"]
        },
        {
          id: "p2",
          pattern: "Terzaghi支持力式(正方形基礎)",
          variants: [
            {
              q: "一辺B=2m、根入れDf=1.0mの正方形基礎を飽和粘土地盤(c=25 kN/m²、φ=0、γ=16 kN/m³)に設ける。φ=0のときNc=5.7、Nq=1、Nγ=0として、極限支持力と許容支持力(Fs=3)を求めよ。",
              steps: [
                { label: "① 式の選択", content: "正方形基礎 → $q_u = 1.3cN_c + \\gamma D_f N_q + 0.4\\gamma B N_\\gamma$。φ=0でNγ=0なので第3項は消える" },
                { label: "② 各項の計算", content: "第1項:$1.3\\times 25\\times 5.7 = 185.25$。第2項:$16\\times 1.0\\times 1 = 16$" },
                { label: "③ 合計", content: "$q_u = 185.25 + 16 = 201.25 \\approx 201$ kN/m²" },
                { label: "④ 許容支持力・確認", content: "$q_a = 201/3 = 67$ kN/m²。柔らかめの粘土に小さめの建物しか載せられない、という実務感覚とも合う" }
              ],
              answer: "qu ≈ 201 kN/m²、qa ≈ 67 kN/m²"
            },
            {
              q: "一辺B=2.5m、根入れDf=1.2mの正方形基礎。地盤はc=15 kN/m²、φ=20°、γ=18 kN/m³で、Nc=17.7、Nq=7.4、Nγ=5.0とする。極限支持力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$q_u = 1.3cN_c + \\gamma D_f N_q + 0.4\\gamma B N_\\gamma$" },
                { label: "② 各項の計算", content: "第1項:$1.3\\times 15\\times 17.7 = 345.2$。第2項:$18\\times 1.2\\times 7.4 = 159.8$。第3項:$0.4\\times 18\\times 2.5\\times 5.0 = 90$" },
                { label: "③ 合計", content: "$q_u = 345.2 + 159.8 + 90 = 595$ kN/m²" },
                { label: "④ 確認", content: "$q_a = 595/3 = 198$ kN/m²。帯状(係数1.0と0.5)で計算した場合との違い=形状係数の効果を意識する" }
              ],
              answer: "qu ≈ 595 kN/m²(qa ≈ 198 kN/m²)"
            }
          ],
          formulaRefs: ["f2", "f4", "f5"]
        }
      ],
      quiz: [
        {
          q: "全般せん断破壊が起きやすいのはどんな地盤?",
          choices: ["緩い砂・軟らかい粘土", "密な砂・硬い粘土", "地下水位が高い地盤", "どの地盤でも同じ"],
          answer: 1,
          expl: "密な地盤は明確なすべり面とピーク荷重を示す全般せん断破壊。緩い地盤は局所せん断破壊",
          sectionRef: 0
        },
        {
          q: "Terzaghi式の第2項 γ1DfNq が表しているものは?",
          choices: ["粘着力の抵抗", "根入れ部の上載圧による押さえ効果", "基礎幅の下の土の重さ", "杭の周面摩擦"],
          answer: 1,
          expl: "基礎底面より上の土がおもしとして働き、すべり面の持ち上がりを押さえる",
          sectionRef: 1
        },
        {
          q: "支持力係数Nc・Nq・Nγを決めるパラメータは?",
          choices: ["粘着力c", "内部摩擦角φ", "基礎幅B", "根入れ深さDf"],
          answer: 1,
          expl: "3つの係数はすべてφだけの関数。φが大きいほど急増する",
          sectionRef: 1
        },
        {
          q: "杭基礎の極限支持力を構成する2つの成分は?",
          choices: ["先端支持力と周面摩擦力", "転倒抵抗と滑動抵抗", "主働土圧と受働土圧", "粘着力と内部摩擦角"],
          answer: 0,
          expl: "Ru = Rp + Rf。支持層で踏ん張る先端と、側面の摩擦の合計",
          sectionRef: 2
        },
        {
          q: "支持力の設計で通常用いる安全率は?",
          choices: ["1.2", "1.5", "2.0", "3.0"],
          answer: 3,
          expl: "支持力はFs=3が標準。斜面安定の1.2〜1.5より大きくとる",
          sectionRef: 0
        }
      ]
    }
  ]
};
