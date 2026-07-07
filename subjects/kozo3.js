window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA["kozo3"] = {
  id: "kozo3",
  name: "構造力学3",
  teacher: "永田 和寿",
  year: "3年・選択必修",
  examInfo: "定期試験70% / レポート30%",
  examTips: "到達目標が「ひずみエネルギーの表現」「仮想仕事の原理による静定構造の変位計算」「不静定はり・ラーメンの反力/断面力計算」の3本柱なので、単位荷重法によるたわみ計算と、弾性方程式による1次不静定ばりが最頻出。M図の掛け合わせ積分と X=−δ10/δ11 の流れを手が覚えるまで演習すること。",

  glossary: [
    { term: "静定構造", reading: "せいていこうぞう", def: "力のつり合い条件(ΣH=0, ΣV=0, ΣM=0)だけで反力・断面力がすべて決まる構造。支点を1つ外すと壊れる「ぎりぎりの支え方」。" },
    { term: "不静定構造", reading: "ふせいていこうぞう", def: "つり合い条件だけでは反力・断面力が決まらない構造。支えが余分にあるため、変形の条件(適合条件)を追加しないと解けない。実際の土木構造物の多くはこちら。" },
    { term: "不静定次数", reading: "ふせいていじすう", def: "未知の力の数がつり合い式の数をいくつ上回るか。1次不静定なら未知力が1つ余分で、弾性方程式が1本必要になる。" },
    { term: "支点反力", reading: "してんはんりょく", def: "支点が構造物を支えるために出す力。ローラーは1成分、ピンは2成分、固定端は3成分(水平・鉛直・モーメント)を持つ。" },
    { term: "外力仕事", reading: "がいりょくしごと", def: "外から加えた荷重が、載荷点の変位に沿ってなす仕事。荷重を0から徐々に増やす静的載荷では W=Pδ/2 と、1/2が付く。" },
    { term: "ひずみエネルギー", reading: "ひずみえねるぎー", def: "変形した弾性体の内部に蓄えられるエネルギー。ばねを縮めると戻る力を持つのと同じで、外力仕事が姿を変えて蓄積されたもの。" },
    { term: "曲げ剛性", reading: "まげごうせい", def: "EI のこと。ヤング率 E と断面二次モーメント I の積で、はりの曲げにくさを表す。大きいほどたわみにくい。" },
    { term: "伸び剛性", reading: "のびごうせい", def: "EA のこと。ヤング率 E と断面積 A の積で、部材の伸び縮みのしにくさを表す。トラスの計算で使う。" },
    { term: "仮想変位", reading: "かそうへんい", def: "実際に起きる変位ではなく、頭の中で「もし少しだけ動かしたら」と仮定する微小な変位。拘束条件を満たしていれば形は自由に選べる。" },
    { term: "仮想仕事の原理", reading: "かそうしごとのげんり", def: "つり合っている力系に仮想変位を与えたとき、外力のなす仮想仕事と内力のなす仮想仕事が等しい(剛体なら外力仮想仕事=0)という原理。反力や変位を「エネルギーの帳簿合わせ」で求める道具。" },
    { term: "仮想力の原理", reading: "かそうりょくのげんり", def: "変位を求めたい点に仮想の力(ふつう大きさ1の単位荷重)を掛け、実際の変形との間で仮想仕事の等式を立てる原理。単位荷重法の理論的な根拠。" },
    { term: "単位荷重法", reading: "たんいかじゅうほう", def: "変位を知りたい点・方向に大きさ1の荷重を掛け、実荷重によるM図と単位荷重によるM̄図を掛け合わせて積分することで変位を求める方法。δ=∫MM̄/(EI)dx。" },
    { term: "たわみ", reading: "たわみ", def: "はりが荷重で鉛直方向に変位する量。記号は δ や v。単位荷重法やカスチリアノの定理で計算できる。" },
    { term: "たわみ角", reading: "たわみかく", def: "はりの軸線が水平から傾く角度 θ。回転角ともいう。求めたい点に単位モーメントを掛けると単位荷重法で計算できる。" },
    { term: "カスチリアノの定理", reading: "かすちりあののていり", def: "ひずみエネルギー U を荷重 P で偏微分すると、その荷重の作用点・方向の変位が得られる(δ=∂U/∂P)という定理。第2定理と呼ばれることもある。" },
    { term: "最小仕事の原理", reading: "さいしょうしごとのげんり", def: "不静定力 X はひずみエネルギーが最小になるように決まる(∂U/∂X=0)という原理。カスチリアノの定理を不静定構造に応用したもの。" },
    { term: "応力法", reading: "おうりょくほう", def: "不静定構造の解法の一つ。余分な力(不静定力)を未知数に選び、変形の適合条件=弾性方程式を立てて解く。余力法・柔性法とも呼ばれる。" },
    { term: "不静定力", reading: "ふせいていりょく", def: "応力法で未知数に選ぶ「余分な力」。記号 X。支点反力を選ぶことも、部材力や断面力を選ぶこともできる。" },
    { term: "静定基本系", reading: "せいていきほんけい", def: "不静定構造から不静定力に対応する拘束を取り除いて作った静定構造。この上で δ10 や δ11 を計算する、応力法の作業台。" },
    { term: "弾性方程式", reading: "だんせいほうていしき", def: "静定基本系の変形が元の不静定構造の拘束条件と合うように立てる式。1次不静定なら X·δ11+δ10=0 の1本で、これを解くと不静定力 X が決まる。" },
    { term: "適合条件", reading: "てきごうじょうけん", def: "変形が支点条件や部材のつながりと矛盾しないための条件。「支点があるのだから、そこのたわみは0のはず」という当たり前の要求を式にしたもの。" },
    { term: "重ね合わせの原理", reading: "かさねあわせのげんり", def: "線形弾性の構造では、複数の荷重による応答は個々の荷重による応答の和になるという原理。M=M0+X·M̄ のように解を組み立てる根拠。" },
    { term: "曲げモーメント図", reading: "まげもーめんとず", def: "はり・ラーメンの各点の曲げモーメントの分布を描いた図。M図。単位荷重法ではM図どうしの掛け合わせが計算の中心になる。" },
    { term: "トラス", reading: "とらす", def: "部材をピン接合で三角形に組んだ構造。部材には軸力しか生じないので、エネルギーの式が ΣN²L/(2EA) のような和で書ける。" },
    { term: "ラーメン", reading: "らーめん", def: "部材を剛接合した骨組構造。曲げモーメントが支配的で、単位荷重法や応力法では部材ごとに積分して足し合わせる。" },
    { term: "断面力", reading: "だんめんりょく", def: "部材内部の断面に働く力の総称。曲げモーメント M・せん断力 Q・軸力 N。不静定構造ではこれらを求めるのが最終ゴール。" }
  ],

  units: [
    // ==================== u1 ====================
    {
      id: "u1",
      title: "仕事とひずみエネルギー",
      weeks: "第1〜3週",
      priority: 3,
      sections: [
        {
          heading: "静定と不静定 ― この科目の出発点",
          body: "<p>構造力学1・2で扱ったはりは、つり合い式3本(ΣH=0, ΣV=0, ΣM=0)だけで反力が全部求まる[[静定構造]]でした。しかし実際の橋やラーメン高架橋は、安全のために支点や部材が「余分に」入った[[不静定構造]]がほとんどです。余分な支えの数が[[不静定次数]]で、例えば固定端+ローラーのはりは反力が4つ・式が3本なので1次不静定。<b>足りない1本の式を「変形」から補う</b>のがこの科目のテーマで、その道具がエネルギー原理です。たとえるなら、3人で持てば運べる荷物を4人で持つと「誰がどれだけ力を出すか」は力のつり合いだけでは決まらず、各人の腕の硬さ(変形のしやすさ)まで考えて初めて決まる、という話です。</p>"
        },
        {
          heading: "外力のなす仕事 ― なぜ 1/2 が付くのか",
          body: "<p>力学の仕事は「力×距離」ですが、構造物に荷重を掛けるときは<b>0からゆっくり増やして</b>最終値 $P$ に達し、そのとき変位も0から $\\delta$ まで比例して増えます。だから[[外力仕事]]は $P\\delta$ ではなく、荷重-変位グラフの三角形の面積 $$W = \\dfrac{1}{2}P\\delta$$ になります。買い物カゴに品物を1個ずつ入れていくと、腕が感じる重さが徐々に増えるのと同じで、最初から満杯の重さを持ち上げるわけではないのです。モーメント荷重なら $W = \\dfrac{1}{2}M_0\\theta$ と、回転角との積になります。</p>",
          svg: "<svg viewBox='0 0 400 280' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='230' x2='360' y2='230' stroke='var(--c-line)' stroke-width='2'/><line x1='60' y1='230' x2='60' y2='30' stroke='var(--c-line)' stroke-width='2'/><polygon points='60,230 300,230 300,70' fill='var(--c-fill1)' opacity='0.6'/><line x1='60' y1='230' x2='300' y2='70' stroke='var(--c-accent)' stroke-width='3'/><line x1='300' y1='230' x2='300' y2='70' stroke='var(--c-line)' stroke-width='1' stroke-dasharray='4 3'/><line x1='60' y1='70' x2='300' y2='70' stroke='var(--c-line)' stroke-width='1' stroke-dasharray='4 3'/><text x='368' y='235' font-size='16' fill='var(--c-text)'>δ</text><text x='45' y='25' font-size='16' fill='var(--c-text)'>P</text><text x='38' y='76' font-size='15' fill='var(--c-text)'>P</text><text x='296' y='252' font-size='15' fill='var(--c-text)'>δ</text><text x='140' y='190' font-size='16' fill='var(--c-text)'>W = Pδ/2</text><text x='150' y='212' font-size='14' fill='var(--c-text)'>(三角形の面積)</text><text x='120' y='55' font-size='14' fill='var(--c-text)'>荷重を0から徐々に増やす</text></svg>"
        },
        {
          heading: "ひずみエネルギー ― 変形に蓄えられるエネルギー",
          body: "<p>外力がした仕事はどこへ行くのでしょうか。弾性体では消えずに、<b>変形した内部にエネルギーとして蓄えられます</b>。これが[[ひずみエネルギー]] $U$ で、エネルギー保存則から $W = U$ が成り立ちます。ばねを手で押し縮めると、離した瞬間に跳ね返ってくる ― あの「跳ね返る能力」がひずみエネルギーの正体です。はりでは微小区間 $dx$ ごとに曲げモーメント $M$ が蓄えるエネルギーを足し合わせて $$U = \\int_0^l \\dfrac{M^2}{2EI}\\,dx$$ と書けます。分母の $EI$ は[[曲げ剛性]]で、硬いはりほど同じ $M$ でも変形が小さく、蓄えるエネルギーは小さくなります。</p>"
        },
        {
          heading: "部材ごとのひずみエネルギーの使い分け",
          body: "<p>ひずみエネルギーは断面力の種類ごとに形が決まっています。曲げは $\\int M^2/(2EI)dx$、軸力は $\\int N^2/(2EA)dx$、せん断は $\\int \\kappa Q^2/(2GA)dx$、ねじりは $\\int T^2/(2GJ)dx$。どれも「(断面力)²÷(2×剛性)」という同じ顔をしているので、1つ覚えれば全部書けます。実用上は、<b>はり・[[ラーメン]]では曲げが支配的</b>なので曲げの項だけ、<b>[[トラス]]では軸力のみ</b>なので $U = \\sum \\dfrac{N^2 L}{2EA}$ と部材ごとの和で計算します。部材内で $N$ が一定だから積分が $N^2L/(2EA)$ に化ける、という理屈です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "外力仕事(集中荷重)",
          latex: "W = \\dfrac{1}{2}P\\delta",
          vars: [
            { sym: "W", meaning: "外力仕事", unit: "kN·m" },
            { sym: "P", meaning: "集中荷重の最終値", unit: "kN" },
            { sym: "\\delta", meaning: "載荷点の荷重方向変位", unit: "m" }
          ],
          when: "「荷重がなした仕事を求めよ」のとき。エネルギー保存 W=U と組み合わせて変位を逆算する問題でも使う",
          intuition: "荷重-変位グラフの三角形の面積。徐々に載せるから全力×全変位の半分",
          derivation: "P-δ が比例(線形弾性)なので W=∫P dδ = 三角形面積 = Pδ/2",
          blank: "W = \\dfrac{1}{2}P\\,?",
          blankAnswer: "\\delta"
        },
        {
          id: "f2",
          name: "外力仕事(モーメント荷重)",
          latex: "W = \\dfrac{1}{2}M_0\\theta",
          vars: [
            { sym: "M_0", meaning: "モーメント荷重の最終値", unit: "kN·m" },
            { sym: "\\theta", meaning: "載荷点の回転角", unit: "rad" }
          ],
          when: "モーメント荷重が作用するときの仕事。回転角と組になる",
          intuition: "力×距離の回転版=モーメント×角度。静的載荷だから1/2",
          derivation: "集中荷重の P→M0、δ→θ の置き換え。仕事の共役ペアで覚える",
          blank: "W = \\dfrac{1}{2}M_0\\,?",
          blankAnswer: "\\theta"
        },
        {
          id: "f3",
          name: "曲げのひずみエネルギー",
          latex: "U = \\int_0^l \\dfrac{M^2}{2EI}\\,dx",
          vars: [
            { sym: "U", meaning: "ひずみエネルギー", unit: "kN·m" },
            { sym: "M", meaning: "曲げモーメント(xの関数)", unit: "kN·m" },
            { sym: "EI", meaning: "曲げ剛性", unit: "kN·m²" }
          ],
          when: "はり・ラーメンのひずみエネルギーを求めるとき。この科目の全編で使う最重要式",
          intuition: "各断面が M に応じて蓄えるエネルギーの合計。M が2乗なので符号は気にせず大きさが効く",
          derivation: "微小区間の仕事 dW=M dθ/2 と dθ=(M/EI)dx を合わせると dU=M²/(2EI)dx",
          blank: "U = \\int_0^l \\dfrac{?}{2EI}\\,dx",
          blankAnswer: "M^2"
        },
        {
          id: "f4",
          name: "軸力のひずみエネルギー(トラス)",
          latex: "U = \\sum \\dfrac{N^2 L}{2EA}",
          vars: [
            { sym: "N", meaning: "部材軸力(引張正)", unit: "kN" },
            { sym: "L", meaning: "部材長", unit: "m" },
            { sym: "EA", meaning: "伸び剛性", unit: "kN" }
          ],
          when: "トラスのひずみエネルギー。部材ごとに N²L/(2EA) を計算して合計する",
          intuition: "部材内で N が一定だから ∫N²/(2EA)dx が N²L/(2EA) になっただけ",
          derivation: "一般形 ∫N²/(2EA)dx で N=一定、積分区間 L とすれば即得られる",
          blank: "U = \\sum \\dfrac{N^2 \\,?}{2EA}",
          blankAnswer: "L"
        },
        {
          id: "f5",
          name: "せん断のひずみエネルギー",
          latex: "U = \\int_0^l \\dfrac{\\kappa Q^2}{2GA}\\,dx",
          vars: [
            { sym: "Q", meaning: "せん断力", unit: "kN" },
            { sym: "\\kappa", meaning: "せん断補正係数(矩形断面で1.2)", unit: "無次元" },
            { sym: "GA", meaning: "せん断剛性", unit: "kN" }
          ],
          when: "せん断変形まで考慮するとき。通常のはりでは曲げに比べて小さく無視することが多い",
          intuition: "「(断面力)²÷(2×剛性)」パターンのせん断版。κは応力分布の偏りの補正",
          derivation: "曲げの式の M→Q、EI→GA/κ の置き換えで覚える",
          blank: "U = \\int_0^l \\dfrac{\\kappa\\, ?^2}{2GA}\\,dx",
          blankAnswer: "Q"
        },
        {
          id: "f6",
          name: "ねじりのひずみエネルギー",
          latex: "U = \\int_0^l \\dfrac{T^2}{2GJ}\\,dx",
          vars: [
            { sym: "T", meaning: "ねじりモーメント", unit: "kN·m" },
            { sym: "GJ", meaning: "ねじり剛性", unit: "kN·m²" }
          ],
          when: "ねじりを受ける部材(曲線橋の主桁など)のエネルギーを求めるとき",
          intuition: "同じパターンのねじり版。T² を 2GJ で割って積分",
          derivation: "曲げの式の M→T、EI→GJ の置き換え",
          blank: "U = \\int_0^l \\dfrac{T^2}{2\\,?}\\,dx",
          blankAnswer: "GJ"
        },
        {
          id: "f7",
          name: "エネルギー保存則",
          latex: "W = U",
          vars: [
            { sym: "W", meaning: "外力仕事", unit: "kN·m" },
            { sym: "U", meaning: "ひずみエネルギー", unit: "kN·m" }
          ],
          when: "荷重が1つだけのとき、U を計算して W=Pδ/2 と等置すれば変位 δ が求まる",
          intuition: "入れたエネルギーは全部変形に蓄えられる。摩擦や熱で逃げない(弾性体の仮定)",
          derivation: "エネルギー保存。ただし荷重が複数あると個々の変位は分離できない点に注意",
          blank: "W = \\,?",
          blankAnswer: "U"
        }
      ],
      selectQuiz: [
        {
          q: "集中荷重 P で載荷点が δ 沈んだ。荷重がなした仕事を求めたい",
          choices: ["W = Pδ/2", "W = Pδ", "U = ∫M²/(2EI)dx", "W = M₀θ/2"],
          answer: 0,
          expl: "静的載荷(0から徐々に増やす)なので三角形の面積 Pδ/2。Pδ としないのが最初の関門",
          formulaRef: "f1"
        },
        {
          q: "片持ちばりの M(x) が分かっている。はりに蓄えられるひずみエネルギーを求めたい",
          choices: ["U = ∫M²/(2EI)dx", "U = ΣN²L/(2EA)", "W = Pδ/2", "U = ∫T²/(2GJ)dx"],
          answer: 0,
          expl: "はりは曲げが支配的なので M² を 2EI で割って全長積分する",
          formulaRef: "f3"
        },
        {
          q: "トラス全部材の軸力 N と長さ L が求まった。トラス全体のひずみエネルギーは?",
          choices: ["U = ΣN²L/(2EA)", "U = ∫M²/(2EI)dx", "U = ∫κQ²/(2GA)dx", "W = Pδ/2"],
          answer: 0,
          expl: "トラス部材は軸力のみ・部材内で一定なので、部材ごとの N²L/(2EA) の和になる",
          formulaRef: "f4"
        },
        {
          q: "荷重が1つだけの静定ばりで、ひずみエネルギー U を計算済み。載荷点のたわみを一発で出したい",
          choices: ["W=U すなわち Pδ/2=U から δ を解く", "δ=∫M²/(2EI)dx", "δ=ΣN²L/(2EA)", "モーメントのつり合い ΣM=0"],
          answer: 0,
          expl: "外力仕事=ひずみエネルギー。Pδ/2=U を δ について解けばよい。荷重が複数だと使えないのが弱点",
          formulaRef: "f7"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "外力仕事の計算",
          variants: [
            {
              q: "はりに集中荷重 P=50kN を静的に載荷したところ、載荷点が δ=4mm 沈んだ。外力のなした仕事 W を求めよ。",
              steps: [
                { label: "① 式の選択", content: "静的載荷の集中荷重なので $W = \\dfrac{1}{2}P\\delta$。「静かに載せた」「徐々に増やした」が 1/2 の合図" },
                { label: "② 単位換算", content: "δ = 4mm = 0.004m に直す。kN と m で揃えると仕事は kN·m になる" },
                { label: "③ 計算", content: "$W = \\dfrac{1}{2} \\times 50 \\times 0.004 = 0.1$" },
                { label: "④ 単位・妥当性確認", content: "W = 0.1 kN·m = 100 J。数ミリの変位なので小さな値になるのが自然" }
              ],
              answer: "W = 0.1 kN·m (100 J)"
            },
            {
              q: "はり端部にモーメント荷重 M₀=30kN·m を静的に載荷したところ、その点が θ=0.002rad 回転した。外力のなした仕事 W を求めよ。",
              steps: [
                { label: "① 式の選択", content: "モーメント荷重なので $W = \\dfrac{1}{2}M_0\\theta$。回転角とペアになる" },
                { label: "② 代入", content: "$W = \\dfrac{1}{2} \\times 30 \\times 0.002$" },
                { label: "③ 計算", content: "$W = 0.03$" },
                { label: "④ 単位・妥当性確認", content: "W = 0.03 kN·m = 30 J。rad は無次元なので kN·m のまま" }
              ],
              answer: "W = 0.03 kN·m (30 J)"
            }
          ],
          formulaRefs: ["f1", "f2"]
        },
        {
          id: "p2",
          pattern: "曲げのひずみエネルギー計算(片持ちばり)",
          variants: [
            {
              q: "スパン l=2m の片持ちばりの先端に P=10kN が作用する。EI=2×10⁴kN·m² のとき、ひずみエネルギー U を求めよ。",
              steps: [
                { label: "① M(x)を立てる", content: "自由端から x をとると $M(x) = -Px$。2乗するので符号はどちらでもよい" },
                { label: "② 式の選択", content: "$U = \\displaystyle\\int_0^l \\dfrac{M^2}{2EI}dx = \\int_0^l \\dfrac{P^2x^2}{2EI}dx = \\dfrac{P^2l^3}{6EI}$" },
                { label: "③ 代入・計算", content: "$U = \\dfrac{10^2 \\times 2^3}{6 \\times 2\\times10^4} = \\dfrac{800}{1.2\\times10^5} = 6.67\\times10^{-3}$" },
                { label: "④ 単位・妥当性確認", content: "U ≒ 6.67×10⁻³ kN·m ≒ 6.7 J。検算: W=Pδ/2 で δ=Pl³/(3EI)=1.33mm → W=10×0.00133/2=6.7×10⁻³ で一致" }
              ],
              answer: "U ≒ 6.67×10⁻³ kN·m"
            },
            {
              q: "スパン l=3m の片持ちばりの先端に P=20kN が作用する。EI=4×10⁴kN·m² のとき、ひずみエネルギー U を求めよ。",
              steps: [
                { label: "① M(x)を立てる", content: "自由端から x をとって $M(x) = -Px$" },
                { label: "② 式の選択", content: "$U = \\dfrac{P^2l^3}{6EI}$(片持ち先端集中荷重の定積分結果)" },
                { label: "③ 代入・計算", content: "$U = \\dfrac{20^2 \\times 27}{6 \\times 4\\times10^4} = \\dfrac{10800}{2.4\\times10^5} = 0.045$" },
                { label: "④ 単位・妥当性確認", content: "U = 0.045 kN·m = 45 J。検算: δ=Pl³/(3EI)=4.5mm → W=20×0.0045/2=0.045 で一致" }
              ],
              answer: "U = 0.045 kN·m"
            }
          ],
          formulaRefs: ["f3", "f7"]
        }
      ],
      quiz: [
        {
          q: "外力仕事 W=Pδ/2 に 1/2 が付く理由として正しいのは?",
          choices: ["荷重を0から徐々に増やすため、荷重-変位グラフの三角形面積になるから", "安全率を2とするから", "変位が荷重の半分だから", "エネルギーの半分が熱になるから"],
          answer: 0,
          expl: "静的載荷では P と δ が比例しながら増えるので、仕事は長方形 Pδ ではなく三角形 Pδ/2",
          sectionRef: 1
        },
        {
          q: "トラスのひずみエネルギーで曲げの項 ∫M²/(2EI)dx を考えない理由は?",
          choices: ["ピン接合の部材には軸力しか生じないから", "トラスは変形しないから", "EI が無限大だから", "曲げは常にせん断と打ち消し合うから"],
          answer: 0,
          expl: "トラスは節点がピンで荷重も節点に作用するため、部材は引張か圧縮のみ。だから U=ΣN²L/(2EA)",
          sectionRef: 3
        },
        {
          q: "1次不静定のはりで、つり合い式だけで解けないのはなぜ?",
          choices: ["未知の反力が4つあるのに、つり合い式は3本しかないから", "荷重が大きすぎるから", "EI が与えられていないから", "はりが曲がってしまうから"],
          answer: 0,
          expl: "未知数>式の数。足りない1本を変形の条件(適合条件)で補うのがエネルギー原理・応力法の役割",
          sectionRef: 0
        },
        {
          q: "同じ曲げモーメント分布 M(x) を受けるはりで、EI を2倍にするとひずみエネルギーは?",
          choices: ["1/2倍になる", "2倍になる", "4倍になる", "変わらない"],
          answer: 0,
          expl: "U=∫M²/(2EI)dx で EI は分母。硬いはりは同じ M でも変形が小さく、蓄えるエネルギーも小さい",
          sectionRef: 2
        }
      ]
    },

    // ==================== u2 ====================
    {
      id: "u2",
      title: "仮想変位の原理と仮想仕事の原理",
      weeks: "第4〜5週",
      priority: 3,
      sections: [
        {
          heading: "仮想変位とは何をしているのか",
          body: "<p>[[仮想変位]]は「実際に起きる変位」ではありません。つり合って静止している構造物に対して、<b>頭の中で『もし支点をほんの少し動かしたら?』と仮定する架空の微小変位</b>です。ポイントは、つり合っている力系ではどんな仮想変位を与えても<b>外力のなす仮想仕事の合計が0になる</b>こと(剛体の場合)。これが仮想変位の原理です。シーソーが水平に静止しているとき、どちらかを少し押し下げても左右の仕事が打ち消し合ってプラスマイナス0 ― あの感覚を式にしたものです。逆に「仮想仕事の合計=0」を方程式として使えば、未知の[[支点反力]]をつり合い式を経由せずに直接求められます。</p>",
          svg: "<svg viewBox='0 0 420 280' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='120' x2='380' y2='120' stroke='var(--c-line)' stroke-width='4'/><polygon points='40,120 30,145 50,145' fill='var(--c-fill1)' stroke='var(--c-line)'/><circle cx='380' cy='132' r='9' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='240' y1='75' x2='240' y2='112' stroke='var(--c-accent)' stroke-width='3' marker-end='none'/><polygon points='240,120 234,106 246,106' fill='var(--c-accent)'/><text x='248' y='90' font-size='16' fill='var(--c-accent)'>P</text><line x1='40' y1='120' x2='380' y2='70' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='6 4'/><line x1='380' y1='120' x2='380' y2='70' stroke='var(--c-text)' stroke-width='2'/><polygon points='380,70 374,84 386,84' fill='var(--c-text)'/><text x='388' y='96' font-size='15' fill='var(--c-text)'>δ̄ (仮想変位)</text><line x1='240' y1='120' x2='240' y2='91' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='3 3'/><text x='170' y='108' font-size='14' fill='var(--c-text)'>(a/l)δ̄</text><text x='60' y='170' font-size='15' fill='var(--c-text)'>支点Bを δ̄ だけ持ち上げると仮定 →</text><text x='60' y='192' font-size='15' fill='var(--c-text)'>R_B·δ̄ − P·(a/l)δ̄ = 0 から R_B が出る</text><text x='30' y='108' font-size='15' fill='var(--c-text)'>A</text><text x='372' y='160' font-size='15' fill='var(--c-text)'>B</text></svg>"
        },
        {
          heading: "剛体の仮想変位の原理で反力を求める",
          body: "<p>単純ばりの支点Bの反力 $R_B$ が知りたいとします。手順は3つ。<b>①</b>知りたい反力の拘束(支点B)を外し、そこを微小量 $\\bar{\\delta}$ だけ動かす。<b>②</b>はりは剛体として直線のまま傾くので、荷重点の変位は比例配分($x$ の位置なら $\\frac{x}{l}\\bar{\\delta}$)。<b>③</b>「$R_B$ のする仕事+荷重のする仕事=0」を立てる。例えば A から $a$ の位置に $P$ が下向きに作用しているなら $R_B\\bar{\\delta} - P\\cdot\\frac{a}{l}\\bar{\\delta} = 0$ より $R_B = \\frac{Pa}{l}$。モーメントのつり合いと同じ答えが、<b>幾何学(変位図)だけから</b>出てくるのがこの原理の面白さです。$\\bar{\\delta}$ は必ず消えるので大きさは任意でかまいません。</p>"
        },
        {
          heading: "弾性体への拡張 ― 仮想仕事の原理",
          body: "<p>変形する弾性体では、仮想変位を与えると外力だけでなく<b>内力(曲げモーメントなど)も仮想仕事をします</b>。このとき成り立つのが[[仮想仕事の原理]]: $$W_{外部仮想仕事} = W_{内部仮想仕事}$$ つまり「外から見たエネルギーの出入り」と「内部に蓄えられる分」の帳簿が必ず一致する、という会計原則です。はりなら内部仮想仕事は $\\int M\\,\\delta\\kappa\\,dx$(モーメント×仮想曲率)の形になります。この等式は<b>つり合い条件と等価</b>であることが証明でき、しかも力とエネルギーを橋渡しするので、次週以降の[[仮想力の原理]]・[[単位荷重法]]・[[カスチリアノの定理]]がすべてここから派生します。この科目の「幹」にあたる原理です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "仮想変位の原理(剛体)",
          latex: "\\sum_i P_i\\,\\bar{\\delta}_i = 0",
          vars: [
            { sym: "P_i", meaning: "外力(反力を含む)", unit: "kN" },
            { sym: "\\bar{\\delta}_i", meaning: "各力の作用点の仮想変位(力の方向成分)", unit: "m" }
          ],
          when: "静定構造の反力・断面力を、つり合い式の代わりに変位図から求めたいとき",
          intuition: "つり合っていれば、どう動かしたつもりになっても仕事の収支はゼロ",
          derivation: "つり合い ΣP=0 の両辺に変位を掛けたものと等価。力のつり合いのエネルギー版",
          blank: "\\sum_i P_i\\,\\bar{\\delta}_i = \\,?",
          blankAnswer: "0"
        },
        {
          id: "f2",
          name: "仮想仕事の原理(弾性体)",
          latex: "\\sum P\\,\\bar{\\delta} = \\int_0^l M\\,\\delta\\kappa\\,dx",
          vars: [
            { sym: "P, \\bar{\\delta}", meaning: "外力とその作用点の仮想変位", unit: "kN, m" },
            { sym: "M", meaning: "実際の曲げモーメント", unit: "kN·m" },
            { sym: "\\delta\\kappa", meaning: "仮想変位に伴う仮想曲率", unit: "1/m" }
          ],
          when: "弾性体で外力と内力のエネルギー収支を立てるとき。単位荷重法の導出の出発点",
          intuition: "外部の仮想仕事=内部の仮想仕事。エネルギーの帳簿は必ず合う",
          derivation: "剛体の原理に内力の仕事の項を追加。つり合い条件と数学的に等価",
          blank: "\\sum P\\,\\bar{\\delta} = \\int_0^l ?\\,\\delta\\kappa\\,dx",
          blankAnswer: "M"
        },
        {
          id: "f3",
          name: "反力計算の手順(仮想変位法)",
          latex: "\\text{①拘束を外す} \\to \\text{②変位図を描く} \\to \\text{③} \\sum P_i\\bar{\\delta}_i=0",
          vars: [
            { sym: "①", meaning: "求めたい反力の支点を外して機構化する", unit: "—" },
            { sym: "②", meaning: "剛体のまま微小変位させ、各荷重点の変位を比例で求める", unit: "—" },
            { sym: "③", meaning: "仮想仕事の合計=0 を解く", unit: "—" }
          ],
          when: "仮想変位の原理で反力を求める問題全般。手順そのものが問われることもある",
          intuition: "「外す→動かす→帳簿を締める」の3ステップ",
          derivation: "手順カード。変位図の比例配分(相似三角形)がすべて",
          blank: "\\text{①拘束を外す} \\to \\text{②?を描く} \\to \\text{③} \\sum P_i\\bar{\\delta}_i=0",
          blankAnswer: "変位図"
        }
      ],
      selectQuiz: [
        {
          q: "単純ばりの支点反力を、モーメントのつり合いを使わずエネルギー的に求めたい",
          choices: ["仮想変位の原理 ΣPδ̄=0", "曲げのひずみエネルギー ∫M²/(2EI)dx", "エネルギー保存 W=U", "カスチリアノの定理"],
          answer: 0,
          expl: "剛体の仮想変位の原理。支点を外して仮想変位を与え、仕事の合計=0 を立てる",
          formulaRef: "f1"
        },
        {
          q: "弾性はりに仮想変位を与えたとき、外部仮想仕事と等しくなるのは?",
          choices: ["内部仮想仕事 ∫M δκ dx", "ひずみエネルギー U そのもの", "外力仕事 Pδ/2", "0(常にゼロ)"],
          answer: 0,
          expl: "弾性体では内力も仮想仕事をするので、剛体のように0ではなく内部仮想仕事と等しくなる",
          formulaRef: "f2"
        },
        {
          q: "仮想変位法で反力を求めるとき、最初にやることは?",
          choices: ["求めたい反力の拘束(支点)を外す", "M図を描く", "EIを調べる", "単位荷重を掛ける"],
          answer: 0,
          expl: "拘束を外して1自由度の機構にしないと、仮想変位が与えられない",
          formulaRef: "f3"
        },
        {
          q: "仮想変位 δ̄ の大きさはどう選ぶべきか",
          choices: ["微小でありさえすれば任意(最後に必ず消える)", "実際のたわみと同じ値", "1mちょうど", "EIに比例させる"],
          answer: 0,
          expl: "方程式の全項に δ̄ が掛かるので割り算で消える。拘束条件さえ守れば大きさは自由",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "仮想変位の原理による反力計算(集中荷重)",
          variants: [
            {
              q: "スパン l=6m の単純ばりAB。支点Aから a=4m の位置に P=30kN が下向きに作用する。仮想変位の原理で支点Bの反力 R_B を求めよ。",
              steps: [
                { label: "① 拘束を外す", content: "支点Bを外し、Bを上向きに仮想変位 $\\bar{\\delta}$ 持ち上げる。はりはAを中心に剛体回転する" },
                { label: "② 変位図", content: "荷重点(Aから4m)の上向き変位は比例配分で $\\dfrac{a}{l}\\bar{\\delta} = \\dfrac{4}{6}\\bar{\\delta}$" },
                { label: "③ 仮想仕事=0", content: "$R_B\\bar{\\delta} - 30 \\times \\dfrac{4}{6}\\bar{\\delta} = 0$(Pは下向きなので上向き変位に対して負の仕事)" },
                { label: "④ 計算・確認", content: "$R_B = 30 \\times \\dfrac{4}{6} = 20$ kN。検算: ΣM_A=0 → R_B=30×4/6=20 で一致" }
              ],
              answer: "R_B = 20 kN"
            },
            {
              q: "スパン l=8m の単純ばりAB。支点Aから a=2m の位置に P=40kN が下向きに作用する。仮想変位の原理で支点Bの反力 R_B を求めよ。",
              steps: [
                { label: "① 拘束を外す", content: "支点Bを外し、上向きに仮想変位 $\\bar{\\delta}$ を与える" },
                { label: "② 変位図", content: "荷重点の上向き変位は $\\dfrac{2}{8}\\bar{\\delta} = \\dfrac{1}{4}\\bar{\\delta}$" },
                { label: "③ 仮想仕事=0", content: "$R_B\\bar{\\delta} - 40 \\times \\dfrac{1}{4}\\bar{\\delta} = 0$" },
                { label: "④ 計算・確認", content: "$R_B = 10$ kN。荷重がA寄りなのでBの分担が小さい ― 直感とも合う" }
              ],
              answer: "R_B = 10 kN"
            }
          ],
          formulaRefs: ["f1", "f3"]
        },
        {
          id: "p2",
          pattern: "仮想変位の原理による反力計算(等分布荷重)",
          variants: [
            {
              q: "スパン l=6m の単純ばり全長に等分布荷重 w=10kN/m が作用する。仮想変位の原理で支点Bの反力 R_B を求めよ。",
              steps: [
                { label: "① 拘束を外す", content: "支点Bを上向きに $\\bar{\\delta}$ 持ち上げる。変位は A で0、B で $\\bar{\\delta}$ の直線分布" },
                { label: "② 等分布荷重の仮想仕事", content: "合力 $wl=60$kN はスパン中央(変位 $\\bar{\\delta}/2$)に作用するとみなせる" },
                { label: "③ 仮想仕事=0", content: "$R_B\\bar{\\delta} - 60 \\times \\dfrac{\\bar{\\delta}}{2} = 0$" },
                { label: "④ 計算・確認", content: "$R_B = 30$ kN。対称なので wl/2=30 ― 当然の結果と一致" }
              ],
              answer: "R_B = 30 kN"
            },
            {
              q: "スパン l=8m の単純ばり全長に等分布荷重 w=6kN/m が作用する。仮想変位の原理で支点Bの反力 R_B を求めよ。",
              steps: [
                { label: "① 拘束を外す", content: "支点Bを上向きに $\\bar{\\delta}$ 持ち上げ、直線の変位図を描く" },
                { label: "② 等分布荷重の仮想仕事", content: "合力 $wl=48$kN が中央(変位 $\\bar{\\delta}/2$)に作用" },
                { label: "③ 仮想仕事=0", content: "$R_B\\bar{\\delta} - 48 \\times \\dfrac{\\bar{\\delta}}{2} = 0$" },
                { label: "④ 計算・確認", content: "$R_B = 24$ kN。wl/2 = 24 で一致" }
              ],
              answer: "R_B = 24 kN"
            }
          ],
          formulaRefs: ["f1", "f3"]
        }
      ],
      quiz: [
        {
          q: "仮想変位について正しい説明は?",
          choices: ["実際には起きない、頭の中で仮定する微小な変位", "荷重によって実際に生じるたわみ", "地震時の最大変位", "許容される変位の上限値"],
          answer: 0,
          expl: "「仮想」=架空。つり合い状態を検査するための思考実験の変位で、実際の変形とは無関係に選べる",
          sectionRef: 0
        },
        {
          q: "剛体の仮想変位の原理 ΣPδ̄=0 が成り立つ条件は?",
          choices: ["力系がつり合っていること", "変位が大きいこと", "材料が弾性であること", "荷重が1つだけであること"],
          answer: 0,
          expl: "この原理はつり合い条件のエネルギー版。つり合っていれば任意の仮想変位で仕事の合計が0",
          sectionRef: 1
        },
        {
          q: "剛体と弾性体で仮想仕事の式が違う点は?",
          choices: ["弾性体では内力の仮想仕事の項が加わる", "弾性体では仮想変位が使えない", "剛体では外力が仕事をしない", "違いはない"],
          answer: 0,
          expl: "剛体は変形しないので内力は仕事をしないが、弾性体では ∫M δκ dx の内部仮想仕事が現れる",
          sectionRef: 2
        },
        {
          q: "仮想仕事の原理がこの科目で「幹」と呼べる理由は?",
          choices: ["単位荷重法やカスチリアノの定理など後続の解法がすべてここから導かれるから", "計算が最も速いから", "不静定構造専用の原理だから", "試験に出ないから"],
          answer: 0,
          expl: "仮想力の原理・単位荷重法・カスチリアノの定理は全部この原理の派生形。幹を理解すると枝が繋がる",
          sectionRef: 2
        }
      ]
    },

    // ==================== u3 ====================
    {
      id: "u3",
      title: "仮想力の原理と単位荷重法",
      weeks: "第6〜7週",
      priority: 3,
      sections: [
        {
          heading: "発想の逆転 ― 仮想「力」の原理",
          body: "<p>前単元では「本物の力系+仮想の変位」で反力を求めました。今度は逆に<b>「本物の変形+仮想の力」</b>を組み合わせます。これが[[仮想力の原理]]です。変位 $\\delta$ を知りたい点・方向に、<b>架空の力(計算しやすいように大きさ1の単位荷重)を掛けたと仮定</b>し、実際の変形との間で仮想仕事の等式を立てると $$1 \\cdot \\delta = \\int_0^l \\dfrac{M\\bar{M}}{EI}\\,dx$$ 左辺は「単位荷重×知りたい変位」、右辺は実荷重によるモーメント $M$ と単位荷重によるモーメント $\\bar{M}$ の掛け合わせ積分。<b>知りたい変位が測定器なしで式から出てくる</b>のがミソです。体重計に乗る代わりに「1Nで押したらどれだけ仕事をするか」から沈み量を逆算するイメージです。</p>",
          svg: "<svg viewBox='0 0 440 300' xmlns='http://www.w3.org/2000/svg'><text x='20' y='28' font-size='15' fill='var(--c-text)'>① 実荷重w による M図</text><line x1='40' y1='80' x2='200' y2='80' stroke='var(--c-line)' stroke-width='3'/><path d='M 40 80 Q 120 80 200 150' fill='none' stroke='var(--c-accent)' stroke-width='3'/><path d='M 40 80 Q 120 80 200 150 L 200 80 Z' fill='var(--c-fill1)' opacity='0.5'/><text x='150' y='170' font-size='14' fill='var(--c-accent)'>M(x)=−wx²/2</text><text x='240' y='28' font-size='15' fill='var(--c-text)'>② 単位荷重1 による M̄図</text><line x1='260' y1='80' x2='420' y2='80' stroke='var(--c-line)' stroke-width='3'/><line x1='260' y1='80' x2='420' y2='140' stroke='var(--c-accent)' stroke-width='3'/><polygon points='260,80 420,140 420,80' fill='var(--c-fill2)' opacity='0.5'/><text x='356' y='160' font-size='14' fill='var(--c-accent)'>M̄(x)=−x</text><text x='20' y='215' font-size='15' fill='var(--c-text)'>③ 2つの図を各点で掛けて EI で割り、全長で積分</text><text x='60' y='255' font-size='18' fill='var(--c-accent)'>δ = ∫ M·M̄/(EI) dx</text><text x='60' y='285' font-size='14' fill='var(--c-text)'>符号が同じ区間どうしの積は正(たわみは単位荷重の向き)</text></svg>"
        },
        {
          heading: "単位荷重法の手順 ― M図の掛け算",
          body: "<p>[[単位荷重法]]の実際の手順は4ステップです。<b>①</b>実荷重による曲げモーメント $M(x)$ を求める。<b>②</b>実荷重を全部取り除き、変位を知りたい点・方向に大きさ1の荷重だけを掛けて $\\bar{M}(x)$ を求める([[たわみ角]]が欲しければ単位モーメントを掛ける)。<b>③</b>区間ごとに $\\dfrac{M\\bar{M}}{EI}$ を積分して足す。<b>④</b>結果が正なら単位荷重と同じ向きに変位。注意点は2つ: $M$ と $\\bar{M}$ で<b>座標 $x$ の取り方を必ず揃える</b>こと、荷重や支点で式が変わる場合は<b>区間を分けて積分</b>することです。[[曲げモーメント図]]を2枚並べて描いてから計算すると間違いが激減します。</p>"
        },
        {
          heading: "トラスの単位荷重法と、覚えておく基本たわみ公式",
          body: "<p>[[トラス]]では積分が部材ごとの和になり $$\\delta = \\sum \\dfrac{N\\bar{N}L}{EA}$$ と書けます。$N$ は実荷重による軸力、$\\bar{N}$ は単位荷重による軸力。表を作って部材ごとに $N,\\bar{N},L$ を並べ、掛けて足すだけの「作業」に落とし込めるのが強みです。また、はりの代表的なたわみは今後(特に応力法の $\\delta_{10},\\delta_{11}$ 計算で)何度も使うので、<b>片持ち先端集中荷重 $\\frac{Pl^3}{3EI}$、片持ち等分布 $\\frac{wl^4}{8EI}$、単純ばり中央集中 $\\frac{Pl^3}{48EI}$、単純ばり等分布 $\\frac{5wl^4}{384EI}$</b> の4つは公式として暗記しておきましょう。単位荷重法で毎回導出もできますが、覚えておくと検算にも使えます。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "単位荷重法(はりのたわみ)",
          latex: "\\delta = \\int_0^l \\dfrac{M\\bar{M}}{EI}\\,dx",
          vars: [
            { sym: "\\delta", meaning: "求めたい点のたわみ", unit: "m" },
            { sym: "M", meaning: "実荷重による曲げモーメント", unit: "kN·m" },
            { sym: "\\bar{M}", meaning: "単位荷重(大きさ1)による曲げモーメント", unit: "m" }
          ],
          when: "「点◯のたわみを求めよ」全般。この科目の看板公式。応力法の δ10, δ11 計算もこの式",
          intuition: "実際の変形(M/EI)を、単位荷重の目線(M̄)で重み付けして拾い集める",
          derivation: "仮想力の原理で外部仮想仕事 1·δ =内部仮想仕事 ∫M̄·(M/EI)dx とおく",
          blank: "\\delta = \\int_0^l \\dfrac{M\\,?}{EI}\\,dx",
          blankAnswer: "\\bar{M}"
        },
        {
          id: "f2",
          name: "単位荷重法(たわみ角)",
          latex: "\\theta = \\int_0^l \\dfrac{M\\bar{m}}{EI}\\,dx",
          vars: [
            { sym: "\\theta", meaning: "求めたい点のたわみ角", unit: "rad" },
            { sym: "\\bar{m}", meaning: "単位モーメント(大きさ1)による曲げモーメント", unit: "無次元" }
          ],
          when: "回転角・たわみ角を求めるとき。掛けるのが単位「モーメント」に変わるだけ",
          intuition: "角度が知りたければ、その点を単位モーメントで「こじって」みる",
          derivation: "仮想力の原理で 1·θ = ∫m̄·(M/EI)dx。共役ペア(M↔θ)の置き換え",
          blank: "\\theta = \\int_0^l \\dfrac{M\\,?}{EI}\\,dx",
          blankAnswer: "\\bar{m}"
        },
        {
          id: "f3",
          name: "単位荷重法(トラス)",
          latex: "\\delta = \\sum \\dfrac{N\\bar{N}L}{EA}",
          vars: [
            { sym: "N", meaning: "実荷重による部材軸力", unit: "kN" },
            { sym: "\\bar{N}", meaning: "単位荷重による部材軸力", unit: "無次元" },
            { sym: "L", meaning: "部材長", unit: "m" },
            { sym: "EA", meaning: "伸び剛性", unit: "kN" }
          ],
          when: "トラスの節点変位を求めるとき。表を作って部材ごとに N·N̄·L を計算して合計",
          intuition: "はりの積分がトラスでは部材の和になる。軸力一定だから",
          derivation: "∫NN̄/(EA)dx で部材内 N,N̄ 一定 → NN̄L/EA の和",
          blank: "\\delta = \\sum \\dfrac{N\\bar{N}\\,?}{EA}",
          blankAnswer: "L"
        },
        {
          id: "f4",
          name: "単位荷重法の手順",
          latex: "\\text{①実荷重の}M \\to \\text{②単位荷重の}\\bar{M} \\to \\text{③}\\int\\dfrac{M\\bar{M}}{EI}dx \\to \\text{④符号判定}",
          vars: [
            { sym: "①", meaning: "実荷重だけでM(x)を区間ごとに立てる", unit: "—" },
            { sym: "②", meaning: "実荷重を外し、知りたい点・方向に1を掛けてM̄(x)", unit: "—" },
            { sym: "③", meaning: "同じ座標で掛けて積分(区間分割に注意)", unit: "—" },
            { sym: "④", meaning: "正なら単位荷重と同じ向きの変位", unit: "—" }
          ],
          when: "単位荷重法の問題すべて。手順の穴埋めが小テストで問われることも",
          intuition: "「本物のM図」×「1の力のM̄図」→ 掛けて積分、の一本道",
          derivation: "手順カード。座標の取り方を M と M̄ で揃えるのが最大の注意点",
          blank: "\\text{①実荷重の}M \\to \\text{②単位荷重の}? \\to \\text{③}\\int\\dfrac{M\\bar{M}}{EI}dx \\to \\text{④符号判定}",
          blankAnswer: "\\bar{M}"
        },
        {
          id: "f5",
          name: "基本たわみ公式:片持ちばり先端集中荷重",
          latex: "\\delta = \\dfrac{Pl^3}{3EI}",
          vars: [
            { sym: "P", meaning: "先端集中荷重", unit: "kN" },
            { sym: "l", meaning: "スパン", unit: "m" }
          ],
          when: "片持ち先端に P。応力法の δ11(単位荷重によるたわみ)計算で最頻出",
          intuition: "l の3乗で効く=長いはりは劇的にたわむ",
          derivation: "単位荷重法で ∫(Px)(x)/EI dx = Pl³/3EI(自由端から x)",
          blank: "\\delta = \\dfrac{Pl^3}{?\\,EI}",
          blankAnswer: "3"
        },
        {
          id: "f6",
          name: "基本たわみ公式:片持ちばり等分布荷重",
          latex: "\\delta = \\dfrac{wl^4}{8EI}",
          vars: [
            { sym: "w", meaning: "等分布荷重", unit: "kN/m" },
            { sym: "l", meaning: "スパン", unit: "m" }
          ],
          when: "片持ち全長に w が載るときの先端たわみ。応力法の δ10 計算で最頻出",
          intuition: "等分布は l の4乗。集中荷重より1つ次数が上がる",
          derivation: "単位荷重法で ∫(wx²/2)(x)/EI dx = wl⁴/8EI",
          blank: "\\delta = \\dfrac{wl^4}{?\\,EI}",
          blankAnswer: "8"
        },
        {
          id: "f7",
          name: "基本たわみ公式:単純ばり中央集中荷重",
          latex: "\\delta = \\dfrac{Pl^3}{48EI}",
          vars: [
            { sym: "P", meaning: "スパン中央の集中荷重", unit: "kN" },
            { sym: "l", meaning: "スパン", unit: "m" }
          ],
          when: "単純ばり中央に P が載るときの中央たわみ",
          intuition: "両端支持は片持ちよりはるかに硬い(分母48)",
          derivation: "対称性から半分を積分して2倍: 2∫₀^{l/2}(Px/2)(x/2)/EI dx = Pl³/48EI",
          blank: "\\delta = \\dfrac{Pl^3}{?\\,EI}",
          blankAnswer: "48"
        },
        {
          id: "f8",
          name: "基本たわみ公式:単純ばり等分布荷重",
          latex: "\\delta = \\dfrac{5wl^4}{384EI}",
          vars: [
            { sym: "w", meaning: "等分布荷重", unit: "kN/m" },
            { sym: "l", meaning: "スパン", unit: "m" }
          ],
          when: "単純ばり全長に w が載るときの中央たわみ。連続ばりの δ10 計算にも登場",
          intuition: "「384分の5」は語呂で丸暗記推奨。等分布はやはり l⁴",
          derivation: "M=wx(l−x)/2 と M̄=x/2(半分)を掛けて積分すると得られる",
          blank: "\\delta = \\dfrac{?\\,wl^4}{384EI}",
          blankAnswer: "5"
        },
        {
          id: "f9",
          name: "基本たわみ公式:片持ちばり先端モーメント",
          latex: "\\delta = \\dfrac{M_0 l^2}{2EI},\\quad \\theta = \\dfrac{M_0 l}{EI}",
          vars: [
            { sym: "M_0", meaning: "先端に作用するモーメント荷重", unit: "kN·m" },
            { sym: "\\delta, \\theta", meaning: "先端のたわみ・たわみ角", unit: "m, rad" }
          ],
          when: "モーメント荷重を受ける片持ちばり。回転バネ的な問題や検算に",
          intuition: "M一定のはり。次数が1つずつ下がって l², l になる",
          derivation: "M(x)=M₀(一定)を単位荷重法に入れるだけ",
          blank: "\\delta = \\dfrac{M_0 l^2}{2EI},\\quad \\theta = \\dfrac{M_0\\, ?}{EI}",
          blankAnswer: "l"
        }
      ],
      selectQuiz: [
        {
          q: "単純ばりの中央点のたわみを積分計算で求めたい",
          choices: ["δ=∫MM̄/(EI)dx(中央に単位荷重)", "δ=ΣNN̄L/EA", "W=Pδ/2", "θ=∫Mm̄/(EI)dx"],
          answer: 0,
          expl: "はりのたわみ→単位荷重法。知りたい点(中央)・方向(鉛直)に大きさ1の荷重を掛ける",
          formulaRef: "f1"
        },
        {
          q: "はりのある点の「たわみ角」を単位荷重法で求めたい。掛けるべき仮想荷重は?",
          choices: ["大きさ1の単位モーメント", "大きさ1の鉛直集中荷重", "実荷重と同じ荷重", "等分布荷重1kN/m"],
          answer: 0,
          expl: "角度が欲しければモーメントを掛ける。変位と力は必ず「共役なペア」(δ↔P、θ↔M)",
          formulaRef: "f2"
        },
        {
          q: "トラスの節点の鉛直変位を求めたい",
          choices: ["δ=ΣNN̄L/EA", "δ=∫MM̄/(EI)dx", "U=ΣN²L/(2EA)", "ΣPδ̄=0"],
          answer: 0,
          expl: "トラスは軸力のみなので部材ごとの NN̄L/EA の和。表計算に落とすのが定石",
          formulaRef: "f3"
        },
        {
          q: "片持ちばり(スパンl)全長に等分布荷重 w。先端たわみを公式で即答したい",
          choices: ["wl⁴/(8EI)", "Pl³/(3EI)", "5wl⁴/(384EI)", "wl⁴/(384EI)"],
          answer: 0,
          expl: "片持ち×等分布=wl⁴/8EI。応力法の δ10 で頻出なので即答できるように",
          formulaRef: "f6"
        },
        {
          q: "応力法で δ11(単位荷重を掛けた点自身のたわみ)を出すとき、片持ち基本系ならよく使う公式は?",
          choices: ["Pl³/(3EI) に P=1 を代入", "wl⁴/(8EI) に w=1 を代入", "Pl³/(48EI) に P=1 を代入", "M₀l/(EI)"],
          answer: 0,
          expl: "片持ち先端に単位集中荷重 → l³/3EI。次単元への布石として覚えておく",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "単位荷重法による片持ちばりのたわみ計算",
          variants: [
            {
              q: "スパン l=2m の片持ちばり全長に等分布荷重 w=5kN/m が作用する。EI=1×10⁴kN·m² のとき、単位荷重法で先端たわみ δ を求めよ。",
              steps: [
                { label: "① 実荷重のM", content: "自由端から x をとると $M(x) = -\\dfrac{wx^2}{2}$" },
                { label: "② 単位荷重のM̄", content: "実荷重を外し先端に下向き1を掛けると $\\bar{M}(x) = -x$(同じ座標で!)" },
                { label: "③ 掛けて積分", content: "$\\delta = \\displaystyle\\int_0^l \\dfrac{(wx^2/2)(x)}{EI}dx = \\dfrac{wl^4}{8EI} = \\dfrac{5 \\times 2^4}{8 \\times 1\\times10^4}$" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = \\dfrac{80}{8\\times10^4} = 1.0\\times10^{-3}$ m = 1.0 mm。正の値=単位荷重と同じ下向き。公式 wl⁴/8EI とも一致" }
              ],
              answer: "δ = 1.0×10⁻³ m = 1.0 mm(下向き)"
            },
            {
              q: "スパン l=3m の片持ちばり全長に等分布荷重 w=8kN/m が作用する。EI=3×10⁴kN·m² のとき、単位荷重法で先端たわみ δ を求めよ。",
              steps: [
                { label: "① 実荷重のM", content: "自由端から x で $M(x) = -\\dfrac{8x^2}{2} = -4x^2$" },
                { label: "② 単位荷重のM̄", content: "先端に下向き1で $\\bar{M}(x) = -x$" },
                { label: "③ 掛けて積分", content: "$\\delta = \\displaystyle\\int_0^3 \\dfrac{4x^3}{EI}dx = \\dfrac{x^4}{EI}\\Big|_0^3 = \\dfrac{81}{3\\times10^4}$(=wl⁴/8EI=8·81/(8·3×10⁴))" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = 2.7\\times10^{-3}$ m = 2.7 mm(下向き)。負×負=正なので下向きたわみで妥当" }
              ],
              answer: "δ = 2.7×10⁻³ m = 2.7 mm(下向き)"
            }
          ],
          formulaRefs: ["f1", "f4", "f6"]
        },
        {
          id: "p2",
          pattern: "単位荷重法による単純ばり中央たわみ",
          variants: [
            {
              q: "スパン l=4m の単純ばり中央に P=24kN。EI=8×10⁴kN·m² のとき、単位荷重法で中央たわみ δ を求めよ。",
              steps: [
                { label: "① 実荷重のM", content: "左支点から x(0≤x≤l/2)で $M(x) = \\dfrac{P}{2}x = 12x$。対称なので左半分だけ考えて2倍する" },
                { label: "② 単位荷重のM̄", content: "中央に1を掛けると同区間で $\\bar{M}(x) = \\dfrac{x}{2}$" },
                { label: "③ 掛けて積分", content: "$\\delta = 2\\displaystyle\\int_0^{2} \\dfrac{(12x)(x/2)}{EI}dx = \\dfrac{2}{EI}\\Big[2x^3\\Big]_0^2 = \\dfrac{32}{8\\times10^4}$" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = 4.0\\times10^{-4}$ m = 0.40 mm。公式 Pl³/48EI = 24×64/(48×8×10⁴) = 0.40 mm で一致" }
              ],
              answer: "δ = 4.0×10⁻⁴ m = 0.40 mm(下向き)"
            },
            {
              q: "スパン l=6m の単純ばり中央に P=48kN。EI=1.2×10⁵kN·m² のとき、単位荷重法で中央たわみ δ を求めよ。",
              steps: [
                { label: "① 実荷重のM", content: "左半分(0≤x≤3)で $M(x) = 24x$" },
                { label: "② 単位荷重のM̄", content: "中央に1で $\\bar{M}(x) = \\dfrac{x}{2}$" },
                { label: "③ 掛けて積分", content: "$\\delta = 2\\displaystyle\\int_0^{3} \\dfrac{(24x)(x/2)}{EI}dx = \\dfrac{2}{EI}\\Big[4x^3\\Big]_0^3 = \\dfrac{216}{1.2\\times10^5}$" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = 1.8\\times10^{-3}$ m = 1.8 mm。公式 Pl³/48EI = 48×216/(48×1.2×10⁵) = 1.8 mm で一致" }
              ],
              answer: "δ = 1.8×10⁻³ m = 1.8 mm(下向き)"
            }
          ],
          formulaRefs: ["f1", "f4", "f7"]
        },
        {
          id: "p3",
          pattern: "トラスの単位荷重法",
          variants: [
            {
              q: "左右対称な2本の斜材(鉛直から45°)が上端で支持され、下の節点Bに鉛直荷重 P=20kN が作用する。節点までの高さ h=2m、各部材 EA=2×10⁵kN のとき、Bの鉛直変位 δ を求めよ。",
              steps: [
                { label: "① 実荷重の軸力N", content: "節点Bの鉛直つり合い: $2N\\cos 45° = P$ より $N = \\dfrac{P}{\\sqrt{2}} = 14.14$ kN(引張)。部材長 $L = \\dfrac{h}{\\cos 45°} = \\sqrt{2}h = 2.83$ m" },
                { label: "② 単位荷重のN̄", content: "Bに鉛直下向き1を掛けると同様に $\\bar{N} = \\dfrac{1}{\\sqrt{2}} = 0.707$" },
                { label: "③ 表で合計", content: "$\\delta = \\sum\\dfrac{N\\bar{N}L}{EA} = 2 \\times \\dfrac{(P/\\sqrt{2})(1/\\sqrt{2})(\\sqrt{2}h)}{EA} = \\dfrac{\\sqrt{2}Ph}{EA} = \\dfrac{1.414 \\times 20 \\times 2}{2\\times10^5}$" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = \\dfrac{56.6}{2\\times10^5} = 2.83\\times10^{-4}$ m ≒ 0.28 mm(下向き)。全部材引張×引張で正 → 荷重方向に沈む、で妥当" }
              ],
              answer: "δ ≒ 2.83×10⁻⁴ m ≒ 0.28 mm(下向き)"
            },
            {
              q: "同じ形(斜材2本・鉛直から45°)のトラスで、P=40kN、h=3m、EA=4×10⁵kN のとき、節点Bの鉛直変位 δ を求めよ。",
              steps: [
                { label: "① 実荷重の軸力N", content: "$N = \\dfrac{P}{\\sqrt{2}} = 28.28$ kN(引張)、$L = \\sqrt{2}h = 4.24$ m" },
                { label: "② 単位荷重のN̄", content: "$\\bar{N} = \\dfrac{1}{\\sqrt{2}} = 0.707$" },
                { label: "③ 表で合計", content: "$\\delta = \\dfrac{\\sqrt{2}Ph}{EA} = \\dfrac{1.414 \\times 40 \\times 3}{4\\times10^5}$" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = \\dfrac{169.7}{4\\times10^5} = 4.24\\times10^{-4}$ m ≒ 0.42 mm(下向き)" }
              ],
              answer: "δ ≒ 4.24×10⁻⁴ m ≒ 0.42 mm(下向き)"
            }
          ],
          formulaRefs: ["f3", "f4"]
        }
      ],
      quiz: [
        {
          q: "単位荷重法で「単位荷重」を掛ける場所と向きは?",
          choices: ["変位を知りたい点に、知りたい変位の方向へ", "荷重が作用している点に、荷重と同じ方向へ", "支点に鉛直方向へ", "どこでもよい"],
          answer: 0,
          expl: "仮想力は「知りたい変位の共役な力」。知りたい点・方向に1を掛けるから 1×δ が式に現れる",
          sectionRef: 0
        },
        {
          q: "単位荷重法の計算で M と M̄ について特に注意すべきことは?",
          choices: ["両者で座標 x の取り方を揃える", "M̄ は常に正にする", "M を2乗する", "EI を掛け算する"],
          answer: 0,
          expl: "M は左から、M̄ は右から、のように座標がずれると掛け合わせが無意味になる。区間分割も揃える",
          sectionRef: 1
        },
        {
          q: "単位荷重法の結果 δ が負になった。その意味は?",
          choices: ["単位荷重と逆向きに変位する", "計算ミスが確定", "変位がゼロ", "はりが破壊する"],
          answer: 0,
          expl: "符号は単位荷重の向きに対する相対的な向き。負なら仮定と逆向きに動くだけで計算は正しい",
          sectionRef: 1
        },
        {
          q: "仮想変位の原理(前単元)と仮想力の原理(本単元)の関係は?",
          choices: ["本物と仮想の役割を入れ替えた双対の関係", "全く無関係", "仮想力の原理は剛体専用", "同じ式を別名で呼んだだけ"],
          answer: 0,
          expl: "「実力系×仮想変位」→反力を求める、「実変形×仮想力」→変位を求める。役割の入れ替え",
          sectionRef: 0
        },
        {
          q: "トラスの単位荷重法 δ=ΣNN̄L/EA が積分でなく和で書ける理由は?",
          choices: ["各部材内で軸力が一定だから", "トラスが変形しないから", "部材数が少ないから", "EAが無限大だから"],
          answer: 0,
          expl: "N も N̄ も部材内で一定なので ∫dx が L になり、部材ごとの積の和になる",
          sectionRef: 2
        }
      ]
    },

    // ==================== u4 ====================
    {
      id: "u4",
      title: "カスチリアノの定理",
      weeks: "第8〜9週",
      priority: 2,
      sections: [
        {
          heading: "ひずみエネルギーを微分すると変位が出る",
          body: "<p>[[カスチリアノの定理]]は、[[ひずみエネルギー]] $U$ を荷重 $P_i$ で偏微分すると、その荷重の作用点・作用方向の変位が得られるという定理です: $$\\delta_i = \\dfrac{\\partial U}{\\partial P_i}$$ 「エネルギーの荷重に対する敏感さ=変位」と読めます。坂道で例えると、$U$ を $P$ の関数としてグラフに描いたとき、その<b>接線の傾きがそのまま変位</b>になるイメージ。単位荷重法と結果は同じですが、$\\bar{M}$ 図を別に作る代わりに「$M$ を $P$ で偏微分する」操作で済むのが持ち味です。実は $\\partial M/\\partial P$ は単位荷重による $\\bar{M}$ と完全に一致します ― 2つの方法は同じものの別表現なのです。</p>",
          svg: "<svg viewBox='0 0 400 280' xmlns='http://www.w3.org/2000/svg'><line x1='55' y1='230' x2='370' y2='230' stroke='var(--c-line)' stroke-width='2'/><line x1='55' y1='230' x2='55' y2='30' stroke='var(--c-line)' stroke-width='2'/><path d='M 55 230 Q 200 220 330 60' fill='none' stroke='var(--c-accent)' stroke-width='3'/><line x1='180' y1='245' x2='320 ' y2='105' stroke='var(--c-text)' stroke-width='2' stroke-dasharray='6 4'/><circle cx='252' cy='175' r='5' fill='var(--c-accent)'/><line x1='252' y1='175' x2='252' y2='230' stroke='var(--c-line)' stroke-width='1' stroke-dasharray='3 3'/><text x='378' y='235' font-size='16' fill='var(--c-text)'>P</text><text x='40' y='25' font-size='16' fill='var(--c-text)'>U</text><text x='246' y='252' font-size='14' fill='var(--c-text)'>P₁</text><text x='268' y='150' font-size='15' fill='var(--c-text)'>接線の傾き = ∂U/∂P = δ</text><text x='90' y='70' font-size='14' fill='var(--c-text)'>U(P) 曲線(線形弾性ではP²に比例)</text></svg>"
        },
        {
          heading: "実際の計算 ―「微分してから積分」が楽",
          body: "<p>はりでは $U = \\int \\frac{M^2}{2EI}dx$ なので、そのまま微分すると $$\\delta = \\dfrac{\\partial U}{\\partial P} = \\int_0^l \\dfrac{M}{EI}\\dfrac{\\partial M}{\\partial P}\\,dx$$ となります。実務のコツは<b>「$U$ を先に計算してから微分」ではなく「$M$ を $P$ で微分してから積分」</b>すること。$M^2$ の積分は面倒ですが、$M\\cdot\\partial M/\\partial P$ なら次数が下がって楽です。また、変位を知りたい点に荷重がないときは、<b>そこに仮想の荷重 $P'$ を置いて計算し、最後に $P'=0$ を代入</b>すれば任意の点の変位が求められます。この「架空の荷重を置く」テクニックは単位荷重法の単位荷重と同じ役割です。</p>"
        },
        {
          heading: "最小仕事の原理 ― 不静定への橋渡し",
          body: "<p>カスチリアノの定理を[[不静定構造]]に使うとどうなるでしょう。[[不静定力]] $X$(例えば余分な支点反力)で $U$ を偏微分すると、その点の変位が出ますが、<b>支点なのだから変位は0のはず</b>。つまり $$\\dfrac{\\partial U}{\\partial X} = 0$$ これが[[最小仕事の原理]]で、「ひずみエネルギーが最小になるように不静定力が決まる」ことを意味します。自然は無駄なエネルギーを蓄えない、と読むと覚えやすいでしょう。この式は次単元で学ぶ[[弾性方程式]] $X\\delta_{11}+\\delta_{10}=0$ と完全に同じ内容です。エネルギーの言葉で書くか、変位の言葉で書くかの違いだけ ― ここが前半(エネルギー原理)と後半(応力法)の接続点になります。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "カスチリアノの定理(変位)",
          latex: "\\delta_i = \\dfrac{\\partial U}{\\partial P_i}",
          vars: [
            { sym: "\\delta_i", meaning: "荷重 P_i の作用点・方向の変位", unit: "m" },
            { sym: "U", meaning: "ひずみエネルギー(荷重の関数として表す)", unit: "kN·m" },
            { sym: "P_i", meaning: "着目する集中荷重", unit: "kN" }
          ],
          when: "「カスチリアノの定理を用いて変位を求めよ」と指定されたとき。荷重が作用する点の変位に直行できる",
          intuition: "エネルギーを荷重でつつくと、変位が顔を出す。U-Pグラフの接線の傾き",
          derivation: "U を P_i の関数とみて全微分し、仮想仕事の原理と比較すると得られる",
          blank: "\\delta_i = \\dfrac{\\partial\\, ?}{\\partial P_i}",
          blankAnswer: "U"
        },
        {
          id: "f2",
          name: "カスチリアノの定理(回転角)",
          latex: "\\theta_i = \\dfrac{\\partial U}{\\partial M_i}",
          vars: [
            { sym: "\\theta_i", meaning: "モーメント M_i の作用点の回転角", unit: "rad" },
            { sym: "M_i", meaning: "着目するモーメント荷重", unit: "kN·m" }
          ],
          when: "回転角が欲しいとき。モーメント荷重で偏微分する",
          intuition: "共役ペアの原則: P で微分→δ、M で微分→θ",
          derivation: "変位版の P→M、δ→θ 置き換え",
          blank: "\\theta_i = \\dfrac{\\partial U}{\\partial \\,?}",
          blankAnswer: "M_i"
        },
        {
          id: "f3",
          name: "微分してから積分する形",
          latex: "\\delta = \\int_0^l \\dfrac{M}{EI}\\dfrac{\\partial M}{\\partial P}\\,dx",
          vars: [
            { sym: "M", meaning: "曲げモーメント(Pを文字のまま含む)", unit: "kN·m" },
            { sym: "\\partial M/\\partial P", meaning: "MのPによる偏微分(=単位荷重のM̄と一致)", unit: "m" }
          ],
          when: "カスチリアノの定理の実計算。M² を積分するより先に微分する方が圧倒的に楽",
          intuition: "∂M/∂P は「P が1増えたときの M の増え方」=単位荷重の M̄ そのもの",
          derivation: "U=∫M²/(2EI)dx を P で微分し、微分と積分の順序を交換",
          blank: "\\delta = \\int_0^l \\dfrac{M}{EI}\\,?\\,dx",
          blankAnswer: "\\dfrac{\\partial M}{\\partial P}"
        },
        {
          id: "f4",
          name: "最小仕事の原理",
          latex: "\\dfrac{\\partial U}{\\partial X} = 0",
          vars: [
            { sym: "X", meaning: "不静定力(余分な反力・部材力)", unit: "kN" },
            { sym: "U", meaning: "ひずみエネルギー(Xを含む形で表す)", unit: "kN·m" }
          ],
          when: "不静定構造をエネルギーで解くとき。支点の変位=0 の条件がこの1本になる",
          intuition: "自然は余計なエネルギーを蓄えない。Uが最小になる X が実現する",
          derivation: "カスチリアノの定理で ∂U/∂X=(Xの点の変位)=0(支点だから動けない)",
          blank: "\\dfrac{\\partial U}{\\partial X} = \\,?",
          blankAnswer: "0"
        }
      ],
      selectQuiz: [
        {
          q: "「カスチリアノの定理を用いて」先端荷重Pの作用点のたわみを求めよ、と指定された",
          choices: ["δ=∂U/∂P", "δ=∫MM̄/(EI)dx", "W=Pδ/2", "X·δ11+δ10=0"],
          answer: 0,
          expl: "指定があればカスチリアノ一択。U を P の関数で表して偏微分する",
          formulaRef: "f1"
        },
        {
          q: "カスチリアノの定理で計算量を減らすコツは?",
          choices: ["Mを先にPで微分してから積分する", "M²を展開してから積分する", "EIを無視する", "数値を先に代入する"],
          answer: 0,
          expl: "δ=∫(M/EI)(∂M/∂P)dx の形なら被積分関数の次数が下がる。P は最後まで文字のまま",
          formulaRef: "f3"
        },
        {
          q: "荷重が作用していない点Cのたわみをカスチリアノの定理で求めたい",
          choices: ["Cに仮想荷重P'を置き、最後にP'=0を代入", "求められない", "Cに実荷重を移動する", "U=W を使う"],
          answer: 0,
          expl: "偏微分の相手が必要なので架空の P' を置く。役割は単位荷重法の「1」と同じ",
          formulaRef: "f1"
        },
        {
          q: "不静定ばりの余分な反力 X をエネルギー原理で決めたい",
          choices: ["∂U/∂X=0(最小仕事の原理)", "∂U/∂P=δ", "W=U", "ΣPδ̄=0"],
          answer: 0,
          expl: "支点は動けない→Xの共役変位が0→∂U/∂X=0。次単元の弾性方程式と同じ内容",
          formulaRef: "f4"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "カスチリアノの定理による先端たわみ",
          variants: [
            {
              q: "スパン l=2m の片持ちばり先端に P=15kN。EI=3×10⁴kN·m² のとき、カスチリアノの定理で先端たわみ δ を求めよ。",
              steps: [
                { label: "① MをPの関数で", content: "自由端から x で $M(x) = -Px$。P は数値にせず文字のまま置くのが鉄則" },
                { label: "② 偏微分", content: "$\\dfrac{\\partial M}{\\partial P} = -x$(単位荷重法の $\\bar{M}$ と同じ形になることを確認)" },
                { label: "③ 積分", content: "$\\delta = \\displaystyle\\int_0^l \\dfrac{(-Px)(-x)}{EI}dx = \\dfrac{Pl^3}{3EI} = \\dfrac{15 \\times 8}{3 \\times 3\\times10^4}$" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = \\dfrac{120}{9\\times10^4} = 1.33\\times10^{-3}$ m ≒ 1.33 mm(下向き)。公式 Pl³/3EI と一致" }
              ],
              answer: "δ ≒ 1.33×10⁻³ m = 1.33 mm(下向き)"
            },
            {
              q: "スパン l=4m の片持ちばり先端に P=30kN。EI=1.2×10⁵kN·m² のとき、カスチリアノの定理で先端たわみ δ を求めよ。",
              steps: [
                { label: "① MをPの関数で", content: "$M(x) = -Px$(自由端から x)" },
                { label: "② 偏微分", content: "$\\dfrac{\\partial M}{\\partial P} = -x$" },
                { label: "③ 積分", content: "$\\delta = \\dfrac{Pl^3}{3EI} = \\dfrac{30 \\times 64}{3 \\times 1.2\\times10^5}$" },
                { label: "④ 計算・妥当性確認", content: "$\\delta = \\dfrac{1920}{3.6\\times10^5} = 5.33\\times10^{-3}$ m ≒ 5.33 mm(下向き)" }
              ],
              answer: "δ ≒ 5.33×10⁻³ m = 5.33 mm(下向き)"
            }
          ],
          formulaRefs: ["f1", "f3"]
        },
        {
          id: "p2",
          pattern: "カスチリアノの定理による回転角",
          variants: [
            {
              q: "スパン l=3m の片持ちばり先端にモーメント荷重 M₀=20kN·m。EI=6×10⁴kN·m² のとき、カスチリアノの定理で先端の回転角 θ を求めよ。",
              steps: [
                { label: "① MをM₀の関数で", content: "はり全長で $M(x) = M_0$(一定)。モーメント荷重だけなら M図は長方形" },
                { label: "② 偏微分", content: "$\\dfrac{\\partial M}{\\partial M_0} = 1$" },
                { label: "③ 積分", content: "$\\theta = \\displaystyle\\int_0^l \\dfrac{M_0 \\cdot 1}{EI}dx = \\dfrac{M_0 l}{EI} = \\dfrac{20 \\times 3}{6\\times10^4}$" },
                { label: "④ 計算・妥当性確認", content: "$\\theta = \\dfrac{60}{6\\times10^4} = 1.0\\times10^{-3}$ rad。基本公式 M₀l/EI と一致" }
              ],
              answer: "θ = 1.0×10⁻³ rad"
            },
            {
              q: "スパン l=4m の片持ちばり先端に M₀=45kN·m。EI=9×10⁴kN·m² のとき、先端の回転角 θ をカスチリアノの定理で求めよ。",
              steps: [
                { label: "① MをM₀の関数で", content: "$M(x) = M_0$(全長一定)" },
                { label: "② 偏微分", content: "$\\dfrac{\\partial M}{\\partial M_0} = 1$" },
                { label: "③ 積分", content: "$\\theta = \\dfrac{M_0 l}{EI} = \\dfrac{45 \\times 4}{9\\times10^4}$" },
                { label: "④ 計算・妥当性確認", content: "$\\theta = \\dfrac{180}{9\\times10^4} = 2.0\\times10^{-3}$ rad" }
              ],
              answer: "θ = 2.0×10⁻³ rad"
            }
          ],
          formulaRefs: ["f2", "f3"]
        }
      ],
      quiz: [
        {
          q: "カスチリアノの定理 δ=∂U/∂P の幾何学的な意味は?",
          choices: ["U-P グラフの接線の傾きが変位", "U-P グラフの面積が変位", "U の最大値が変位", "P の2乗が変位"],
          answer: 0,
          expl: "偏微分=接線の傾き。エネルギーが荷重にどれだけ敏感かが、そのまま変位になる",
          sectionRef: 0
        },
        {
          q: "∂M/∂P は単位荷重法の何と一致する?",
          choices: ["単位荷重によるモーメント M̄", "実荷重によるモーメント M", "ひずみエネルギー U", "たわみ角 θ"],
          answer: 0,
          expl: "P を1増やしたときの M の増分=大きさ1の荷重による M̄。両解法は同じものの別表現",
          sectionRef: 1
        },
        {
          q: "最小仕事の原理 ∂U/∂X=0 の物理的な意味は?",
          choices: ["不静定力の作用点(支点)の変位が0であること", "エネルギーが常に0であること", "荷重が最小であること", "はりが壊れないこと"],
          answer: 0,
          expl: "カスチリアノの定理で ∂U/∂X=Xの共役変位。支点は動けないのでこれが0になる",
          sectionRef: 2
        },
        {
          q: "カスチリアノの定理で P を最後まで数値代入しない理由は?",
          choices: ["P で偏微分する必要があるから", "数値だと積分できないから", "単位が合わないから", "教科書の慣習にすぎない"],
          answer: 0,
          expl: "∂M/∂P を作る前に P=15 などと入れてしまうと微分できなくなる。文字のまま進めて最後に代入",
          sectionRef: 1
        }
      ]
    },

    // ==================== u5 ====================
    {
      id: "u5",
      title: "応力法の基礎 ― 不静定力・静定基本系・弾性方程式",
      weeks: "第10〜11週",
      priority: 3,
      sections: [
        {
          heading: "応力法の戦略 ― 余分な力を主役にする",
          body: "<p>いよいよ[[不静定構造]]を解きます。[[応力法]]の戦略はシンプルで、<b>「余分な拘束の力を未知数 $X$ に選び、いったん取り除いて静定にしてしまう」</b>こと。取り除いてできた静定構造を[[静定基本系]]、選んだ未知数を[[不静定力]]と呼びます。例えば固定端+ローラーの1次不静定ばりなら、ローラー反力を $X$ に選べば基本系は片持ちばり。ただし取り除いただけでは、基本系はローラーがあった点で勝手にたわんでしまい、実物と矛盾します。そこで<b>「$X$ がちょうど良い大きさなら、その点のたわみは0に戻るはず」</b>という[[適合条件]]で $X$ を決める ― これが応力法の全体像です。</p>",
          svg: "<svg viewBox='0 0 460 320' xmlns='http://www.w3.org/2000/svg'><text x='16' y='24' font-size='15' fill='var(--c-text)'>元の1次不静定ばり(固定端A+ローラーB)</text><rect x='30' y='42' width='10' height='44' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='40' y1='64' x2='210' y2='64' stroke='var(--c-line)' stroke-width='4'/><circle cx='210' cy='75' r='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><polygon points='120,40 114,52 126,52' fill='var(--c-accent)'/><line x1='120' y1='28' x2='120' y2='46' stroke='var(--c-accent)' stroke-width='3'/><text x='128' y='40' font-size='14' fill='var(--c-accent)'>w</text><text x='250' y='60' font-size='22' fill='var(--c-text)'>=</text><text x='16' y='130' font-size='15' fill='var(--c-text)'>基本系① 実荷重のみ → Bが δ10 たわむ</text><rect x='30' y='148' width='10' height='44' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='40' y1='170' x2='210' y2='170' stroke='var(--c-line)' stroke-width='2' stroke-dasharray='5 4'/><path d='M 40 170 Q 140 172 210 200' fill='none' stroke='var(--c-accent)' stroke-width='3'/><line x1='210' y1='170' x2='210' y2='200' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='3 3'/><text x='218' y='192' font-size='14' fill='var(--c-text)'>δ10</text><text x='16' y='240' font-size='15' fill='var(--c-text)'>基本系② X(上向き)のみ → Bが X·δ11 戻る</text><rect x='30' y='258' width='10' height='44' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='40' y1='280' x2='210' y2='280' stroke='var(--c-line)' stroke-width='2' stroke-dasharray='5 4'/><path d='M 40 280 Q 140 278 210 254' fill='none' stroke='var(--c-accent)' stroke-width='3'/><line x1='210' y1='305' x2='210' y2='262' stroke='var(--c-accent)' stroke-width='3'/><polygon points='210,254 204,268 216,268' fill='var(--c-accent)'/><text x='220' y='270' font-size='14' fill='var(--c-accent)'>X</text><text x='250' y='285' font-size='15' fill='var(--c-text)'>条件: δ10 + X·δ11 = 0</text><text x='250' y='307' font-size='14' fill='var(--c-text)'>(Bのたわみは実際には0)</text></svg>"
        },
        {
          heading: "弾性方程式 ― たわみの帳尻を合わせる式",
          body: "<p>[[重ね合わせの原理]]を使うと、基本系の挙動は「実荷重だけの場合」+「$X$ だけの場合」に分解できます。$X$ の作用点・方向のたわみに注目して、実荷重によるたわみを $\\delta_{10}$、<b>大きさ1の $X$</b> によるたわみを $\\delta_{11}$ とすると、$X$ による分は比例して $X\\delta_{11}$。実物ではこの点は支点で動けないので $$X\\delta_{11} + \\delta_{10} = 0 \\quad\\Rightarrow\\quad X = -\\dfrac{\\delta_{10}}{\\delta_{11}}$$ これが[[弾性方程式]]です。添字は「1番目の不静定力の位置の、荷重(0)/不静定力(1)による変位」の意味。$\\delta_{10}$、$\\delta_{11}$ はどちらも<b>静定構造のたわみ計算</b>なので、前単元までの[[単位荷重法]]や基本たわみ公式がそのまま使えます。不静定問題が「静定のたわみ計算2回+1次方程式」に化けるのです。</p>"
        },
        {
          heading: "解法手順と符号のルール",
          body: "<p>手順は5ステップ: <b>①</b>[[不静定次数]]を数える(外的不静定なら 反力数−3)。<b>②</b>[[静定基本系]]を選ぶ(計算しやすいものを! 片持ちや単純ばりになる選び方が楽)。<b>③</b>実荷重による $\\delta_{10}$ と単位不静定力による $\\delta_{11}$ を単位荷重法・たわみ公式で計算。<b>④</b>弾性方程式から $X = -\\delta_{10}/\\delta_{11}$。<b>⑤</b>残りの反力・[[断面力]]を、つり合いか重ね合わせ $M = M_0 + X\\bar{M}$ で求める。符号は「$X$ の正方向を最初に決め、$\\delta_{10}$ も $\\delta_{11}$ も<b>その方向を正として測る</b>」のが鉄則。荷重で下がる($\\delta_{10}<0$)なら $X$ は正(押し戻す向き)に出ます。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "不静定次数(外的不静定)",
          latex: "m = r - 3",
          vars: [
            { sym: "m", meaning: "不静定次数", unit: "—" },
            { sym: "r", meaning: "支点反力の総数", unit: "—" },
            { sym: "3", meaning: "平面のつり合い式の数", unit: "—" }
          ],
          when: "解き始める前に必ず次数を確認。1次なら弾性方程式1本、2次なら連立2本",
          intuition: "未知数が式より何個多いか。固定端(3)+ローラー(1)=4 → 4−3=1次",
          derivation: "未知反力数−つり合い式数。内的不静定(部材の余剰)がある場合は別途加算",
          blank: "m = r - \\,?",
          blankAnswer: "3"
        },
        {
          id: "f2",
          name: "弾性方程式(1次不静定)",
          latex: "X\\,\\delta_{11} + \\delta_{10} = 0",
          vars: [
            { sym: "X", meaning: "不静定力", unit: "kN" },
            { sym: "\\delta_{11}", meaning: "単位不静定力(X=1)によるXの位置・方向の変位", unit: "m/kN" },
            { sym: "\\delta_{10}", meaning: "実荷重によるXの位置・方向の変位", unit: "m" }
          ],
          when: "1次不静定構造すべて。この科目後半の主役の式",
          intuition: "「荷重でたわんだ分を、Xがちょうど押し戻して0にする」という帳尻合わせ",
          derivation: "重ね合わせ: Xの点の全変位=δ10+X·δ11。支点だから=0(適合条件)",
          blank: "X\\,\\delta_{11} + ? = 0",
          blankAnswer: "\\delta_{10}"
        },
        {
          id: "f3",
          name: "不静定力の解",
          latex: "X = -\\dfrac{\\delta_{10}}{\\delta_{11}}",
          vars: [
            { sym: "X", meaning: "不静定力(正なら仮定した向き)", unit: "kN" }
          ],
          when: "弾性方程式を解いた最終形。δ10 と δ11 さえ出せばここに代入",
          intuition: "δ11 は必ず正(自分で押せば自分は沈む)なので、X の符号は δ10 の逆",
          derivation: "X·δ11+δ10=0 を X について解くだけ",
          blank: "X = -\\dfrac{?}{\\delta_{11}}",
          blankAnswer: "\\delta_{10}"
        },
        {
          id: "f4",
          name: "δ11 の計算式",
          latex: "\\delta_{11} = \\int_0^l \\dfrac{\\bar{M}^2}{EI}\\,dx",
          vars: [
            { sym: "\\bar{M}", meaning: "X=1 を掛けたときの基本系の曲げモーメント", unit: "m" }
          ],
          when: "弾性方程式の係数計算。単位荷重法で「掛ける相手も自分自身」の場合",
          intuition: "M̄×M̄ だから必ず正。だから δ11>0 が検算になる",
          derivation: "単位荷重法 δ=∫MM̄/EI dx で M=M̄ とおいたもの",
          blank: "\\delta_{11} = \\int_0^l \\dfrac{?}{EI}\\,dx",
          blankAnswer: "\\bar{M}^2"
        },
        {
          id: "f5",
          name: "δ10 の計算式",
          latex: "\\delta_{10} = \\int_0^l \\dfrac{M_0\\bar{M}}{EI}\\,dx",
          vars: [
            { sym: "M_0", meaning: "実荷重による基本系の曲げモーメント", unit: "kN·m" },
            { sym: "\\bar{M}", meaning: "X=1 による基本系の曲げモーメント", unit: "m" }
          ],
          when: "弾性方程式の定数項計算。基本たわみ公式(wl⁴/8EIなど)で代用できることも多い",
          intuition: "実荷重のたわみを X の目線(M̄)で測ったもの",
          derivation: "単位荷重法そのもの。単位荷重=X の位置・方向の1",
          blank: "\\delta_{10} = \\int_0^l \\dfrac{M_0\\,?}{EI}\\,dx",
          blankAnswer: "\\bar{M}"
        },
        {
          id: "f6",
          name: "応力法の解法手順",
          latex: "\\text{①次数} \\to \\text{②静定基本系} \\to \\text{③}\\delta_{10},\\delta_{11} \\to \\text{④}X \\to \\text{⑤重ね合わせ}",
          vars: [
            { sym: "①", meaning: "不静定次数 m=r−3 を数える", unit: "—" },
            { sym: "②", meaning: "余分な拘束を外し静定基本系を作る(Xの向きも決める)", unit: "—" },
            { sym: "③", meaning: "単位荷重法・たわみ公式で δ10, δ11 を計算", unit: "—" },
            { sym: "④", meaning: "X=−δ10/δ11", unit: "—" },
            { sym: "⑤", meaning: "M=M0+X·M̄ とつり合いで反力・断面力を出す", unit: "—" }
          ],
          when: "不静定ばり・ラーメン・トラスすべてに共通の手順。流れごと暗記",
          intuition: "「外す→たわみ2つ→割り算→戻す」の一本道",
          derivation: "手順カード。②の基本系の選び方で計算量が大きく変わる",
          blank: "\\text{①次数} \\to \\text{②?} \\to \\text{③}\\delta_{10},\\delta_{11} \\to \\text{④}X \\to \\text{⑤重ね合わせ}",
          blankAnswer: "静定基本系"
        },
        {
          id: "f7",
          name: "断面力の重ね合わせ",
          latex: "M = M_0 + X\\,\\bar{M}",
          vars: [
            { sym: "M", meaning: "元の不静定構造の曲げモーメント", unit: "kN·m" },
            { sym: "M_0", meaning: "基本系・実荷重によるモーメント", unit: "kN·m" },
            { sym: "\\bar{M}", meaning: "基本系・X=1 によるモーメント", unit: "m" }
          ],
          when: "X が求まった後、最終的な M図(や反力)を描くとき",
          intuition: "答え=「荷重だけの世界」+「X倍した単位力の世界」の足し算",
          derivation: "重ね合わせの原理。線形弾性だから成分ごとに足してよい",
          blank: "M = M_0 + X\\,?",
          blankAnswer: "\\bar{M}"
        }
      ],
      selectQuiz: [
        {
          q: "固定端+ローラーのはり(1次不静定)を応力法で解く。最初に立てるべき式は?",
          choices: ["X·δ11+δ10=0", "W=Pδ/2", "δ=∫MM̄/(EI)dx", "ΣM=0のみ"],
          answer: 0,
          expl: "1次不静定→弾性方程式1本。δ10, δ11 の計算に単位荷重法を使う、という階層構造",
          formulaRef: "f2"
        },
        {
          q: "δ11 の計算に使う式は?",
          choices: ["∫M̄²/(EI)dx", "∫M₀²/(EI)dx", "∫M₀M̄/(2EI)dx", "ΣN²L/(2EA)"],
          answer: 0,
          expl: "X=1 の荷重で、X=1 の位置の変位を測る → M̄ どうしの掛け合わせ",
          formulaRef: "f4"
        },
        {
          q: "δ10 と δ11 が求まった。不静定力 X は?",
          choices: ["X=−δ10/δ11", "X=δ11/δ10", "X=δ10·δ11", "X=δ10+δ11"],
          answer: 0,
          expl: "弾性方程式 Xδ11+δ10=0 を解くだけ。符号のマイナスを忘れない",
          formulaRef: "f3"
        },
        {
          q: "X が求まった後、元の不静定ばりの M図を描くには?",
          choices: ["M=M0+X·M̄ の重ね合わせ", "M=M0のみでよい", "M=X·M̄のみでよい", "M図は描けない"],
          answer: 0,
          expl: "基本系の2つの世界を足し合わせると元の構造の答えになる(重ね合わせの原理)",
          formulaRef: "f7"
        },
        {
          q: "反力数6の平面ラーメン(閉路なし)の不静定次数は?",
          choices: ["3次(6−3)", "6次", "2次", "静定"],
          answer: 0,
          expl: "外的不静定 m=r−3=6−3=3。次数の分だけ弾性方程式が必要になる",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "1次不静定ばりの弾性方程式(等分布荷重)",
          variants: [
            {
              q: "固定端A・ローラーBのはり(スパン l=4m)全長に等分布荷重 w=12kN/m。ローラー反力を不静定力 X として弾性方程式で X, V_A, M_A を求めよ。",
              steps: [
                { label: "① 次数と基本系", content: "反力数4−3=1次不静定。Bのローラーを外すと基本系は片持ちばり。X はB点上向きと仮定" },
                { label: "② δ10, δ11", content: "実荷重: Bは $\\dfrac{wl^4}{8EI}$ 下がる → 上向き正で $\\delta_{10} = -\\dfrac{wl^4}{8EI}$。X=1(上向き): $\\delta_{11} = \\dfrac{l^3}{3EI}$" },
                { label: "③ 弾性方程式", content: "$X\\dfrac{l^3}{3EI} - \\dfrac{wl^4}{8EI} = 0$ → $X = \\dfrac{3wl}{8} = \\dfrac{3 \\times 12 \\times 4}{8} = 18$ kN(上向き)" },
                { label: "④ 残りの反力・確認", content: "$V_A = wl - X = 48 - 18 = 30$ kN、$M_A = \\dfrac{wl^2}{2} - Xl = 96 - 72 = 24$ kN·m。検算: ΣV=30+18−48=0 ✓" }
              ],
              answer: "X = 18 kN(上向き)、V_A = 30 kN、M_A = 24 kN·m"
            },
            {
              q: "固定端A・ローラーBのはり(スパン l=6m)全長に等分布荷重 w=8kN/m。ローラー反力を X として弾性方程式で X, V_A, M_A を求めよ。",
              steps: [
                { label: "① 次数と基本系", content: "1次不静定。基本系=片持ちばり、X=B点上向き反力" },
                { label: "② δ10, δ11", content: "$\\delta_{10} = -\\dfrac{wl^4}{8EI} = -\\dfrac{8 \\times 1296}{8EI} = -\\dfrac{1296}{EI}$、$\\delta_{11} = \\dfrac{l^3}{3EI} = \\dfrac{72}{EI}$" },
                { label: "③ 弾性方程式", content: "$X = -\\dfrac{\\delta_{10}}{\\delta_{11}} = \\dfrac{1296}{72} = 18$ kN(=3wl/8=3×8×6/8 ✓)" },
                { label: "④ 残りの反力・確認", content: "$V_A = 48 - 18 = 30$ kN、$M_A = \\dfrac{8 \\times 36}{2} - 18 \\times 6 = 144 - 108 = 36$ kN·m。ΣV=0 ✓" }
              ],
              answer: "X = 18 kN(上向き)、V_A = 30 kN、M_A = 36 kN·m"
            }
          ],
          formulaRefs: ["f2", "f3", "f6"]
        }
      ],
      quiz: [
        {
          q: "静定基本系とは何か?",
          choices: ["不静定構造から余分な拘束を外して作った静定構造", "最も安全な構造形式", "基礎地盤の模型", "トラスの別名"],
          answer: 0,
          expl: "不静定力に対応する拘束を取り除いた「作業台」。この上で δ10, δ11 を計算する",
          sectionRef: 0
        },
        {
          q: "弾性方程式 Xδ11+δ10=0 が表している物理的条件は?",
          choices: ["不静定力の作用点の変位が実物では0(または既知値)であること", "エネルギーが最大になること", "モーメントの合計が0であること", "荷重が対称であること"],
          answer: 0,
          expl: "支点を外した点も、実物では支点があるので動けない。その適合条件を式にしたもの",
          sectionRef: 1
        },
        {
          q: "δ11 が必ず正になる理由は?",
          choices: ["M̄²の積分だから(自分で押した点は押した向きに動く)", "EIが正だから", "荷重が下向きだから", "偶然そうなるだけ"],
          answer: 0,
          expl: "δ11=∫M̄²/EI dx で被積分関数が2乗。計算して負になったら即ミスと分かる検算ポイント",
          sectionRef: 2
        },
        {
          q: "静定基本系の選び方について正しいのは?",
          choices: ["複数の選び方があり、どれでも答えは同じだが計算量が変わる", "選び方は1通りに決まっている", "必ずローラーを外す", "必ず固定端を外す"],
          answer: 0,
          expl: "どの拘束を外しても最終的な答えは一致する。片持ちや単純ばりになる選び方が計算しやすい",
          sectionRef: 2
        },
        {
          q: "最小仕事の原理 ∂U/∂X=0 と弾性方程式の関係は?",
          choices: ["同じ内容の別表現(エネルギーで書くか変位で書くか)", "全く別の原理", "最小仕事の原理は静定専用", "弾性方程式の近似版"],
          answer: 0,
          expl: "∂U/∂X=0 を展開すると Xδ11+δ10=0 が出てくる。前半と後半をつなぐ接続点",
          sectionRef: 1
        }
      ]
    },

    // ==================== u6 ====================
    {
      id: "u6",
      title: "弾性方程式による不静定ばり・トラス・ラーメンの計算",
      weeks: "第12〜15週",
      priority: 3,
      sections: [
        {
          heading: "不静定ばりの計算 ― M図の重ね合わせで仕上げる",
          body: "<p>1次不静定ばりの解答は、$X$ を求めて終わりではありません。試験で問われるのは<b>反力と[[断面力]]、そしてM図</b>まで。流れは、$X$ 決定後に $M = M_0 + X\\bar{M}$ で各点のモーメントを合成します。例えば固定端+ローラーのはり(等分布荷重)なら、$X=\\frac{3wl}{8}$ を使うと固定端モーメントは $M_A = \\frac{wl^2}{2} - \\frac{3wl}{8}l = \\frac{wl^2}{8}$。<b>スパン内には正のモーメント、固定端には負のモーメントが現れ、M図が途中で符号を変える</b>のが不静定ばりの特徴です。単純ばりとも片持ちばりとも違う「中間の顔」を持つ ― 拘束が増えるとモーメントが分散される、という構造設計の基本感覚がここで身につきます。</p>",
          svg: "<svg viewBox='0 0 460 300' xmlns='http://www.w3.org/2000/svg'><text x='16' y='24' font-size='15' fill='var(--c-text)'>M = M0 + X·M̄ の重ね合わせ(等分布荷重の例)</text><text x='16' y='60' font-size='14' fill='var(--c-text)'>M0図(片持ち+w)</text><line x1='30' y1='90' x2='170' y2='90' stroke='var(--c-line)' stroke-width='2.5'/><path d='M 30 90 Q 100 92 170 150 L 170 90 Z' fill='var(--c-fill1)' opacity='0.6' stroke='var(--c-accent)' stroke-width='2'/><text x='58' y='140' font-size='13' fill='var(--c-text)'>−wl²/2(A側)</text><text x='196' y='95' font-size='18' fill='var(--c-text)'>+</text><text x='230' y='60' font-size='14' fill='var(--c-text)'>X·M̄図(X=1のl倍)</text><line x1='240' y1='120' x2='380' y2='120' stroke='var(--c-line)' stroke-width='2.5'/><polygon points='240,120 240,75 380,120' fill='var(--c-fill2)' opacity='0.6' stroke='var(--c-accent)' stroke-width='2'/><text x='250' y='68' font-size='13' fill='var(--c-text)'>+X·l(A側)</text><text x='16' y='200' font-size='14) ' fill='var(--c-text)'>合成M図: 固定端で負、スパン内で正に反転</text><line x1='60' y1='245' x2='340' y2='245' stroke='var(--c-line)' stroke-width='2.5'/><path d='M 60 245 L 60 210 Q 150 290 340 245' fill='none' stroke='var(--c-accent)' stroke-width='3'/><text x='42' y='205' font-size='13' fill='var(--c-text)'>M_A=−wl²/8</text><text x='180' y='285' font-size='13' fill='var(--c-text)'>スパン内は正(下側引張)</text></svg>"
        },
        {
          heading: "不静定トラス ― 積分が表計算になる",
          body: "<p>[[トラス]]が1次不静定(部材が1本余分、または支点が1つ余分)の場合も考え方は全く同じで、たわみ計算をトラス版に置き換えるだけです: $$\\delta_{10} = \\sum \\dfrac{N_0\\bar{N}L}{EA}, \\qquad \\delta_{11} = \\sum \\dfrac{\\bar{N}^2 L}{EA}$$ 余分な部材を切って(または支点を外して)基本系を作り、実荷重による軸力 $N_0$ と、切った箇所に単位力のペアを掛けたときの軸力 $\\bar{N}$ を全部材について表にまとめ、掛けて足すだけ。$X$ が求まれば各部材力は $N = N_0 + X\\bar{N}$ です。<b>積分が一切登場せず、表の作成が答案のほぼすべて</b>になるので、部材ごとの符号(引張正・圧縮負)を丁寧に追うことが正解への近道です。</p>"
        },
        {
          heading: "不静定ラーメン ― 部材ごとに積分して足す",
          body: "<p>[[ラーメン]]では部材(柱・はり)ごとに座標を設定し、$\\delta_{10} = \\sum_{部材} \\int \\frac{M_0\\bar{M}}{EI}dx$ のように<b>部材ごとの積分を足し合わせ</b>ます。例えば門形ラーメンの片方のローラー支点の水平反力を $X$ に選ぶと、基本系は「単純支持の門形」になり、柱にも $\\bar{M}$ が立つので柱・はり全部材の積分が必要です。注意点は3つ。<b>①</b>各部材で座標の原点と向きを図に明記する、<b>②</b>$M_0$ と $\\bar{M}$ の符号規約(内側引張を正、など)を統一する、<b>③</b>部材で $EI$ が異なる場合は積分ごとに分ける。手間は増えますが、<b>「基本系→$\\delta_{10},\\delta_{11}$→$X$→重ね合わせ」の骨組みは、はりと1ミリも変わりません</b>。総括演習では、この同型性に気づけているかが問われます。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "不静定トラスの δ10",
          latex: "\\delta_{10} = \\sum \\dfrac{N_0\\bar{N}L}{EA}",
          vars: [
            { sym: "N_0", meaning: "実荷重による基本系の部材軸力", unit: "kN" },
            { sym: "\\bar{N}", meaning: "X=1 による部材軸力", unit: "無次元" },
            { sym: "L", meaning: "部材長", unit: "m" }
          ],
          when: "不静定トラスの弾性方程式の定数項。表を作って全部材分を合計",
          intuition: "はりの ∫M0M̄/EI dx のトラス版。積分→和",
          derivation: "単位荷重法のトラス版をそのまま δ10 に適用",
          blank: "\\delta_{10} = \\sum \\dfrac{?\\,\\bar{N}L}{EA}",
          blankAnswer: "N_0"
        },
        {
          id: "f2",
          name: "不静定トラスの δ11",
          latex: "\\delta_{11} = \\sum \\dfrac{\\bar{N}^2 L}{EA}",
          vars: [
            { sym: "\\bar{N}", meaning: "X=1 による部材軸力", unit: "無次元" }
          ],
          when: "不静定トラスの弾性方程式の係数。N̄ の2乗なので必ず正",
          intuition: "自分(単位力)による自分の位置の変位。正になるのが検算",
          derivation: "δ11=ΣNN̄L/EA で N=N̄ とおく",
          blank: "\\delta_{11} = \\sum \\dfrac{?\\, L}{EA}",
          blankAnswer: "\\bar{N}^2"
        },
        {
          id: "f3",
          name: "部材力の重ね合わせ(トラス)",
          latex: "N = N_0 + X\\,\\bar{N}",
          vars: [
            { sym: "N", meaning: "元の不静定トラスの部材軸力", unit: "kN" }
          ],
          when: "X 決定後に各部材の最終軸力を出すとき",
          intuition: "はりの M=M0+X·M̄ と同じ形。表に列を1本足すだけ",
          derivation: "重ね合わせの原理",
          blank: "N = N_0 + X\\,?",
          blankAnswer: "\\bar{N}"
        },
        {
          id: "f4",
          name: "弾性方程式(2次不静定・連立)",
          latex: "\\begin{cases} X_1\\delta_{11} + X_2\\delta_{12} + \\delta_{10} = 0 \\\\ X_1\\delta_{21} + X_2\\delta_{22} + \\delta_{20} = 0 \\end{cases}",
          vars: [
            { sym: "X_1, X_2", meaning: "2つの不静定力", unit: "kN" },
            { sym: "\\delta_{ij}", meaning: "Xj=1 による Xi の位置・方向の変位", unit: "m/kN" },
            { sym: "\\delta_{i0}", meaning: "実荷重による Xi の位置・方向の変位", unit: "m" }
          ],
          when: "2次不静定(連続ばり2径間超、両端固定ばりなど)。適合条件が2本になる",
          intuition: "「どの外した点も動けない」を人数分並べただけ。相反定理より δ12=δ21",
          derivation: "1次の式を各不静定力について並べる。行列で書くと柔性マトリクス",
          blank: "X_1\\delta_{11} + X_2\\,? + \\delta_{10} = 0",
          blankAnswer: "\\delta_{12}"
        }
      ],
      selectQuiz: [
        {
          q: "部材が1本余分な不静定トラスの δ11 を求めたい",
          choices: ["ΣN̄²L/EA", "∫M̄²/(EI)dx", "ΣN₀²L/(2EA)", "ΣN₀N̄L/EA"],
          answer: 0,
          expl: "トラスなので和の形。X=1 による軸力 N̄ の2乗を部材ごとに合計する",
          formulaRef: "f2"
        },
        {
          q: "不静定トラスで X が求まった。部材ADの最終軸力は?",
          choices: ["N = N₀ + X·N̄", "N = N₀ − X", "N = X·N̄ のみ", "N = N₀ のみ"],
          answer: 0,
          expl: "重ね合わせ。実荷重の世界と X 倍した単位力の世界を足す",
          formulaRef: "f3"
        },
        {
          q: "2径間を超える連続ばり(2次不静定)を応力法で解くには?",
          choices: ["弾性方程式を2本連立する", "弾性方程式1本で足りる", "応力法では解けない", "つり合い式だけで解ける"],
          answer: 0,
          expl: "不静定次数の数だけ適合条件=弾性方程式が必要。δ12=δ21(相反定理)で計算は少し楽になる",
          formulaRef: "f4"
        },
        {
          q: "門形ラーメンの δ10 計算で、はりの場合と変わる点は?",
          choices: ["部材(柱・はり)ごとに積分して合計する", "積分が不要になる", "δ10が常に0になる", "EIを使わない"],
          answer: 0,
          expl: "ラーメンは複数部材の集合。各部材で座標を決め、∫M₀M̄/EI dx を部材ごとに足す",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "1次不静定ばりの弾性方程式(集中荷重)",
          variants: [
            {
              q: "固定端A・ローラーBのはり(スパン l=4m)の中央に P=32kN。ローラー反力を X として X, V_A, M_A を求めよ。",
              steps: [
                { label: "① 基本系", content: "Bのローラーを外して片持ちばり。X はB点上向き。1次不静定" },
                { label: "② δ10, δ11", content: "中央の P による先端(B)たわみは $\\delta = \\dfrac{Pa^2(3l-a)}{6EI}$ に $a=l/2$ を代入して $\\dfrac{5Pl^3}{48EI}$(下向き)。よって $\\delta_{10} = -\\dfrac{5Pl^3}{48EI}$、$\\delta_{11} = \\dfrac{l^3}{3EI}$" },
                { label: "③ 弾性方程式", content: "$X = -\\dfrac{\\delta_{10}}{\\delta_{11}} = \\dfrac{5Pl^3/48}{l^3/3} = \\dfrac{5P}{16} = \\dfrac{5 \\times 32}{16} = 10$ kN" },
                { label: "④ 残りの反力・確認", content: "$V_A = 32 - 10 = 22$ kN、$M_A = P\\dfrac{l}{2} - Xl = 64 - 40 = 24$ kN·m。ΣV: 22+10−32=0 ✓" }
              ],
              answer: "X = 10 kN(上向き)、V_A = 22 kN、M_A = 24 kN·m"
            },
            {
              q: "固定端A・ローラーBのはり(スパン l=6m)の中央に P=48kN。ローラー反力を X として X, V_A, M_A を求めよ。",
              steps: [
                { label: "① 基本系", content: "基本系=片持ちばり、X=B点上向き反力" },
                { label: "② δ10, δ11", content: "$\\delta_{10} = -\\dfrac{5Pl^3}{48EI} = -\\dfrac{5 \\times 48 \\times 216}{48EI} = -\\dfrac{1080}{EI}$、$\\delta_{11} = \\dfrac{l^3}{3EI} = \\dfrac{72}{EI}$" },
                { label: "③ 弾性方程式", content: "$X = \\dfrac{1080}{72} = 15$ kN(=5P/16=5×48/16 ✓)" },
                { label: "④ 残りの反力・確認", content: "$V_A = 48 - 15 = 33$ kN、$M_A = 48 \\times 3 - 15 \\times 6 = 144 - 90 = 54$ kN·m。ΣV=0 ✓" }
              ],
              answer: "X = 15 kN(上向き)、V_A = 33 kN、M_A = 54 kN·m"
            }
          ],
          formulaRefs: ["f4"]
        },
        {
          id: "p2",
          pattern: "2径間連続ばり(中間支点反力を不静定力に)",
          variants: [
            {
              q: "等スパン l=4m の2径間連続ばり(両端ローラー・中央支点C)全長に w=8kN/m。中央支点反力を X として X と端支点反力を求めよ。",
              steps: [
                { label: "① 基本系", content: "中央支点Cを外すと、スパン $2l=8$m の単純ばり。1次不静定で X はC点上向き" },
                { label: "② δ10, δ11", content: "$\\delta_{10} = -\\dfrac{5w(2l)^4}{384EI} = -\\dfrac{5 \\times 8 \\times 4096}{384EI} = -\\dfrac{426.7}{EI}$、$\\delta_{11} = \\dfrac{(2l)^3}{48EI} = \\dfrac{512}{48EI} = \\dfrac{10.67}{EI}$" },
                { label: "③ 弾性方程式", content: "$X = \\dfrac{426.7}{10.67} = 40$ kN(公式 $\\frac{5wl}{4} = \\frac{5\\times8\\times4}{4} = 40$ ✓)" },
                { label: "④ 端反力・確認", content: "全荷重 $w \\times 8 = 64$ kN。対称なので端反力は $\\dfrac{64-40}{2} = 12$ kN ずつ(=3wl/8 ✓)。ΣV: 12+40+12−64=0 ✓" }
              ],
              answer: "X = 40 kN(中央)、端反力 各12 kN"
            },
            {
              q: "等スパン l=6m の2径間連続ばり全長に w=6kN/m。中央支点反力 X と端支点反力を求めよ。",
              steps: [
                { label: "① 基本系", content: "中央支点を外してスパン 12m の単純ばりを基本系にする" },
                { label: "② δ10, δ11", content: "$\\delta_{10} = -\\dfrac{5 \\times 6 \\times 12^4}{384EI} = -\\dfrac{1620}{EI}$、$\\delta_{11} = \\dfrac{12^3}{48EI} = \\dfrac{36}{EI}$" },
                { label: "③ 弾性方程式", content: "$X = \\dfrac{1620}{36} = 45$ kN(=5wl/4=5×6×6/4 ✓)" },
                { label: "④ 端反力・確認", content: "全荷重 72 kN。端反力は $\\dfrac{72-45}{2} = 13.5$ kN(=3wl/8=13.5 ✓)。ΣV=0 ✓" }
              ],
              answer: "X = 45 kN(中央)、端反力 各13.5 kN"
            }
          ],
          formulaRefs: ["f4"]
        }
      ],
      quiz: [
        {
          q: "1次不静定ばり(固定端+ローラー、等分布荷重)のM図の特徴は?",
          choices: ["固定端で負、スパン内で正と、符号が途中で変わる", "全長で正のまま", "全長で負のまま", "常に直線になる"],
          answer: 0,
          expl: "拘束が強い固定端側に負のモーメントが集まり、スパン内は正。モーメントが「分散」される",
          sectionRef: 0
        },
        {
          q: "不静定トラスの計算で積分が現れない理由は?",
          choices: ["軸力が部材内で一定なので、和(表計算)で済むから", "トラスは変形しないから", "EAが共通だから", "弾性方程式を使わないから"],
          answer: 0,
          expl: "δ10=ΣN₀N̄L/EA、δ11=ΣN̄²L/EA。表の作成と符号管理が答案の中心になる",
          sectionRef: 1
        },
        {
          q: "不静定ラーメンの δ10 計算で最も注意すべきことは?",
          choices: ["部材ごとの座標設定と M の符号規約の統一", "積分を使わないこと", "柱を無視すること", "EIを大きくすること"],
          answer: 0,
          expl: "柱・はりで座標や符号がずれると掛け合わせが崩壊する。図に原点・向き・符号規約を明記する",
          sectionRef: 2
        },
        {
          q: "はり・トラス・ラーメンの応力法に共通する解法の骨組みは?",
          choices: ["基本系を作る→δ10,δ11→X=−δ10/δ11→重ね合わせ", "それぞれ全く別の手順", "ラーメンだけ弾性方程式が不要", "トラスだけXが2つ必要"],
          answer: 0,
          expl: "たわみ計算の道具(積分か表か)が変わるだけで、骨組みは完全に同型。総括演習の核心",
          sectionRef: 2
        },
        {
          q: "2次不静定構造で弾性方程式が連立になる理由は?",
          choices: ["外した拘束が2箇所あり、それぞれで適合条件が必要だから", "計算を難しくするため", "EIが2種類あるから", "荷重が2つあるから"],
          answer: 0,
          expl: "「外した点はどれも動けない」を全部の不静定力について書くと、次数の数だけ式が並ぶ",
          sectionRef: 0
        }
      ]
    }
  ]
};
