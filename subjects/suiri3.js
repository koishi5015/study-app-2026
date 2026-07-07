window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA["suiri3"] = {
  id: "suiri3",
  name: "水理学3",
  teacher: "岡本 隆明",
  year: "3年・選択必修",
  examInfo: "レポート30% / 定期試験70%",
  examTips: "基本到達目標(管路計算・開水路の基本・水面形方程式)に直結する単元が最頻出。限界水深と跳水、マニング公式の等流計算、ダルシー・ワイスバッハを含む管路の損失計算は毎年出るつもりで準備すること。発展目標の次元解析・N-S方程式・ベルヌイ導出は「式を書けるか」「手順を説明できるか」が問われる。",
  glossary: [
    { term: "比エネルギー", reading: "ひエネルギー", def: "水路床を基準にした単位重量あたりの流れのエネルギー。水深 h と速度水頭 v²/2g の和で、開水路の水深変化を考える出発点になる。" },
    { term: "限界水深", reading: "げんかいすいしん", def: "流量一定のとき比エネルギーが最小になる水深。長方形断面では h_c=(q²/g)^(1/3)。常流と射流の境目。" },
    { term: "常流", reading: "じょうりゅう", def: "フルード数 Fr<1 の穏やかな流れ。水深が大きく流速が小さい。波(擾乱)が上流にも伝わるので、下流の条件が上流に影響する。" },
    { term: "射流", reading: "しゃりゅう", def: "フルード数 Fr>1 の速い流れ。水深が小さく流速が大きい。波が上流に伝われず、上流の条件だけで流れが決まる。" },
    { term: "フルード数", reading: "フルードすう", def: "慣性力と重力の比を表す無次元数。Fr=v/√(gh)。Fr<1で常流、Fr>1で射流、Fr=1で限界流。" },
    { term: "跳水", reading: "ちょうすい", def: "射流が常流に遷移するときに水面が急に跳ね上がる現象。大きなエネルギー損失を伴うため、ダム下流の減勢工などに利用される。" },
    { term: "比力", reading: "ひりき", def: "運動量流束と圧力による力を単位重量あたりで表した量。M=Q²/(gA)+h_G A。跳水の前後で保存されるので共役水深の計算に使う。" },
    { term: "共役水深", reading: "きょうやくすいしん", def: "跳水の前後の水深の組。比力が等しくなる2つの水深のことで、跳水前(射流)の水深から跳水後(常流)の水深を求められる。" },
    { term: "運動量保存則", reading: "うんどうりょうほぞんそく", def: "検査体積に出入りする運動量の変化が外力に等しいという法則。F=ρQ(v₂-v₁)。エネルギー損失があっても使えるのが強み。" },
    { term: "摩擦損失", reading: "まさつそんしつ", def: "管の壁面との摩擦で失われるエネルギー。管の長さに比例し、ダルシー・ワイスバッハの式 h_f=f(L/D)(v²/2g) で計算する。" },
    { term: "形状損失", reading: "けいじょうそんしつ", def: "管の入口・出口・曲がり・断面変化など、局所的な形の変化で発生するエネルギー損失。h=f_m·v²/2g の形で表す。" },
    { term: "径深", reading: "けいしん", def: "流水断面積 A を潤辺(水が壁に触れる長さ)P で割った値。R=A/P。断面の「流れやすさ」を表し、円管の満流では R=D/4。" },
    { term: "粗度係数", reading: "そどけいすう", def: "マニング公式に使う水路壁面の粗さの係数 n。コンクリート水路で0.012〜0.015、自然河川で0.03程度。大きいほど流れにくい。" },
    { term: "等流", reading: "とうりゅう", def: "流下方向に水深・流速が変化しない流れ。重力の流下成分と底面摩擦がつり合った状態で、シェジー公式・マニング公式で計算する。" },
    { term: "不等流", reading: "ふとうりゅう", def: "流下方向に水深が徐々に変化する流れ。堰やダムの上流の水面(背水)などがこれにあたり、水面形方程式で水面の形を追う。" },
    { term: "水面形方程式", reading: "すいめんけいほうていしき", def: "不等流の水深の変化率を表す微分方程式。dh/dx=(i-I_e)/(1-Fr²)。分子は勾配の差、分母はフルード数で決まる。" },
    { term: "次元解析", reading: "じげんかいせき", def: "物理量の次元(M, L, T)の整合性だけから式の形を推定する方法。レイリー法とπ定理が代表。実験計画にも使う。" },
    { term: "π定理", reading: "パイていり", def: "バッキンガムのπ定理。n個の変数と m個の基本次元があるとき、現象は n-m 個の無次元数で記述できるという定理。" },
    { term: "相似則", reading: "そうじそく", def: "模型実験の結果を実物(原型)に換算するための法則。重力が支配する流れはフルード相似則、粘性が支配する流れはレイノルズ相似則を使う。" },
    { term: "レイノルズ数", reading: "レイノルズすう", def: "慣性力と粘性力の比を表す無次元数。Re=vL/ν。小さいと層流、大きいと乱流になる。円管では約2000〜4000が遷移の目安。" },
    { term: "動粘性係数", reading: "どうねんせいけいすう", def: "粘性係数μを密度ρで割った値 ν=μ/ρ。単位は m²/s。水は約1.0×10⁻⁶ m²/s(20℃)。レイノルズ数の計算に使う。" },
    { term: "ラグランジュ的記述", reading: "ラグランジュてききじゅつ", def: "流体の粒子ひとつひとつを追いかけて運動を記述する方法。川に流したボールを目で追うイメージ。" },
    { term: "オイラー的記述", reading: "オイラーてききじゅつ", def: "空間の固定点を決めて、そこを通過する流体の速度や圧力を記述する方法。橋の上から定点観測するイメージ。水理学の標準的な記述法。" },
    { term: "ナヴィエ・ストークス方程式", reading: "ナヴィエ・ストークスほうていしき", def: "粘性流体の運動方程式。オイラー方程式に粘性項 ν∇²u を加えた形で、あらゆる流体運動の基礎方程式。" },
    { term: "層流", reading: "そうりゅう", def: "流体が層状に滑らかに流れる状態。レイノルズ数が小さいときに現れ、混合が起きにくい。蜂蜜がゆっくり流れるイメージ。" },
    { term: "乱流", reading: "らんりゅう", def: "不規則な渦を伴って激しく混合しながら流れる状態。自然界の水の流れはほとんど乱流。時間平均で扱うのが基本。" },
    { term: "対数則", reading: "たいすうそく", def: "乱流の壁面近くの流速分布が対数関数で表されるという法則。u/u*=(1/κ)ln(z/z₀) の形。開水路や河川の流速分布の基本。" },
    { term: "サイフォン", reading: "サイフォン", def: "管路の途中が動水勾配線より高くなる管。その区間は負圧になり、負圧が大きすぎる(約-7m水柱以下)と流れが切れる。" },
    { term: "水理学的に有利な断面", reading: "すいりがくてきにゆうりなだんめん", def: "同じ断面積で流量が最大(=潤辺が最小)になる断面。長方形では水深が幅の半分(B=2h)のときに実現する。" },
    { term: "摩擦速度", reading: "まさつそくど", def: "底面せん断応力を速度の次元で表した量。u*=√(τ₀/ρ)=√(gRI)。対数則の流速分布のスケールになる。" }
  ],
  units: [
    // ================= u1 =================
    {
      id: "u1",
      title: "開水路のエネルギー保存則(比エネルギーと限界水深)",
      weeks: "第2週",
      priority: 3,
      sections: [
        {
          heading: "比エネルギー:水路床から測ったエネルギー",
          body: "<p>開水路の流れのエネルギーを<b>水路床を基準に</b>測ったものが[[比エネルギー]]です。$E = h + \\dfrac{v^2}{2g}$、つまり<b>水深 + 速度水頭</b>。ベルヌーイの定理の開水路版と考えれば OK です。</p><p>同じ流量でも「深くてゆっくり」と「浅くて速い」の2通りの流れ方があり、どちらも同じ E を持ち得ます。貯金(水深)と現金(速度)の配分が違うだけで総資産(E)は同じ、というイメージです。この2つの水深を行き来するのが開水路水理の面白いところです。</p>"
        },
        {
          heading: "比エネルギー曲線と限界水深",
          body: "<p>流量一定のまま水深 h を横軸、E を縦軸に描くと、下図のような<b>C字型の曲線</b>になります。E が最小になる点の水深が[[限界水深]] $h_c$ です。長方形断面で単位幅流量 $q$ のとき $h_c = \\left(\\dfrac{q^2}{g}\\right)^{1/3}$。</p><p>曲線の上の枝($h > h_c$)が[[常流]]、下の枝($h < h_c$)が[[射流]]。<b>同じ E に対して水深が2つある</b>こと、E の最小値より小さいエネルギーでは流れが存在できないことが試験の頻出ポイントです。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='260' x2='380' y2='260' stroke='var(--c-line)' stroke-width='2'/><line x1='50' y1='260' x2='50' y2='20' stroke='var(--c-line)' stroke-width='2'/><text x='360' y='285' font-size='15' fill='var(--c-text)'>E</text><text x='20' y='35' font-size='15' fill='var(--c-text)'>h</text><path d='M 370 240 Q 200 235 155 180 Q 130 145 132 120 Q 140 80 200 55 Q 270 30 370 25' fill='none' stroke='var(--c-accent)' stroke-width='3'/><line x1='50' y1='260' x2='250' y2='60' stroke='var(--c-line)' stroke-width='1.5' stroke-dasharray='6 4'/><text x='215' y='55' font-size='14' fill='var(--c-text)'>h=E(45°線)</text><circle cx='132' cy='120' r='5' fill='var(--c-accent)'/><line x1='132' y1='120' x2='50' y2='120' stroke='var(--c-line)' stroke-width='1' stroke-dasharray='4 3'/><text x='55' y='113' font-size='15' fill='var(--c-accent)'>h_c</text><text x='240' y='90' font-size='15' fill='var(--c-text)'>常流 (h&gt;h_c)</text><text x='240' y='225' font-size='15' fill='var(--c-text)'>射流 (h&lt;h_c)</text><line x1='132' y1='260' x2='132' y2='120' stroke='var(--c-line)' stroke-width='1' stroke-dasharray='4 3'/><text x='105' y='280' font-size='15' fill='var(--c-text)'>E_min</text></svg>"
        },
        {
          heading: "常流と射流:波が上れるかどうか",
          body: "<p>[[常流]]と[[射流]]の違いは[[フルード数]] $Fr = \\dfrac{v}{\\sqrt{gh}}$ で判定します。$\\sqrt{gh}$ は水面の小さな波が伝わる速さ。<b>流速がこれより遅ければ(Fr&lt;1)波は上流に遡れる</b>ので、下流の堰などの影響が上流に届きます。これが常流。</p><p>逆に流速が波より速い(Fr&gt;1)と、エスカレーターを逆走しても進めないように波は上流へ届かず、流れは上流条件だけで決まります。これが射流。水路床が上がる・水路幅が狭まるとき、常流では水深が<b>下がり</b>、射流では<b>上がる</b>という逆の応答をすることも頻出です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "比エネルギー",
          latex: "E = h + \\dfrac{v^2}{2g}",
          vars: [
            { sym: "E", meaning: "比エネルギー", unit: "m" },
            { sym: "h", meaning: "水深", unit: "m" },
            { sym: "v", meaning: "断面平均流速", unit: "m/s" },
            { sym: "g", meaning: "重力加速度", unit: "m/s²" }
          ],
          when: "開水路で「エネルギー」「水路床の変化に伴う水深変化」が問われたとき。E一定で水深を求める問題の起点",
          intuition: "水深(位置)と速度水頭(運動)の合計。水路床から測るのがポイント",
          derivation: "ベルヌーイの定理で基準面を水路床に取り、圧力水頭を水深hで表しただけ",
          blank: "E = h + \\dfrac{?}{2g}",
          blankAnswer: "v^2"
        },
        {
          id: "f2",
          name: "限界水深(長方形断面)",
          latex: "h_c = \\left( \\dfrac{q^2}{g} \\right)^{1/3}",
          vars: [
            { sym: "h_c", meaning: "限界水深", unit: "m" },
            { sym: "q", meaning: "単位幅流量 Q/B", unit: "m²/s" },
            { sym: "g", meaning: "重力加速度", unit: "m/s²" }
          ],
          when: "「限界水深を求めよ」「常流か射流か判定せよ」のとき。流量Qと水路幅Bからまずq=Q/Bを作る",
          intuition: "流量が大きいほど限界水深も大きい。qの2/3乗に比例",
          derivation: "dE/dh=0 を解くと v²=gh、これに v=q/h を代入すると出る",
          blank: "h_c = \\left( \\dfrac{?}{g} \\right)^{1/3}",
          blankAnswer: "q^2"
        },
        {
          id: "f3",
          name: "フルード数",
          latex: "Fr = \\dfrac{v}{\\sqrt{gh}}",
          vars: [
            { sym: "Fr", meaning: "フルード数", unit: "無次元" },
            { sym: "v", meaning: "流速", unit: "m/s" },
            { sym: "h", meaning: "水深", unit: "m" }
          ],
          when: "常流・射流の判定。跳水や水面形の問題でも最初に計算することが多い",
          intuition: "流速÷波の速さ。1より大きければ波より速い=射流",
          derivation: "慣性力と重力の比の平方根。√(gh)は長波の伝播速度",
          blank: "Fr = \\dfrac{v}{?}",
          blankAnswer: "\\sqrt{gh}"
        },
        {
          id: "f4",
          name: "限界流速",
          latex: "v_c = \\sqrt{g h_c}",
          vars: [
            { sym: "v_c", meaning: "限界流速", unit: "m/s" },
            { sym: "h_c", meaning: "限界水深", unit: "m" }
          ],
          when: "限界水深時の流速が必要なとき。Fr=1の条件そのもの",
          intuition: "限界流では流速=波の速さ。Fr=1をvについて解いた形",
          derivation: "Fr=v/√(gh)=1 に h=h_c を入れるだけ",
          blank: "v_c = \\sqrt{g \\, ?}",
          blankAnswer: "h_c"
        },
        {
          id: "f5",
          name: "連続式(開水路)",
          latex: "Q = A_1 v_1 = A_2 v_2",
          vars: [
            { sym: "Q", meaning: "流量", unit: "m³/s" },
            { sym: "A", meaning: "流水断面積", unit: "m²" },
            { sym: "v", meaning: "断面平均流速", unit: "m/s" }
          ],
          when: "2断面の間で流速や水深を換算するとき。ほぼ全ての問題で暗黙に使う",
          intuition: "水は途中で消えない。断面が狭くなれば速くなる",
          derivation: "質量保存則。密度一定なら体積流量が保存される",
          blank: "Q = A_1 v_1 = ? \\, v_2",
          blankAnswer: "A_2"
        }
      ],
      selectQuiz: [
        {
          q: "水路幅と流量が与えられ、常流か射流かの境目となる水深を求めたい",
          choices: ["限界水深 h_c=(q²/g)^(1/3)", "比エネルギー E=h+v²/2g", "マニング公式", "連続式"],
          answer: 0,
          expl: "常流と射流の境目の水深=限界水深。まず q=Q/B を作ってから代入する",
          formulaRef: "f2"
        },
        {
          q: "水深と流速が与えられ、この流れが常流か射流か判定したい",
          choices: ["フルード数 Fr=v/√(gh)", "レイノルズ数", "限界流速の式", "比エネルギー"],
          answer: 0,
          expl: "常流・射流の判定は必ずフルード数。Fr<1で常流、Fr>1で射流",
          formulaRef: "f3"
        },
        {
          q: "水路床が滑らかに隆起する区間で、隆起後の水深を求めたい(損失なし)",
          choices: ["比エネルギー E=h+v²/2g の保存", "運動量保存則", "マニング公式", "水面形方程式"],
          answer: 0,
          expl: "損失がない緩やかな変化はエネルギー保存で解く。E₁=E₂+Δz(隆起分)の関係を立てる",
          formulaRef: "f1"
        },
        {
          q: "水路幅4mの水路に流量12m³/sが流れる。限界水深を求める前にまず計算すべき量は?",
          choices: ["単位幅流量 q=Q/B", "径深 R=A/P", "速度水頭 v²/2g", "粗度係数 n"],
          answer: 0,
          expl: "限界水深の式は単位幅流量qで書かれている。q=12/4=3 m²/s を先に作る",
          formulaRef: "f2"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "限界水深の計算",
          variants: [
            {
              q: "長方形断面水路に単位幅流量 q = 2 m²/s が流れている。限界水深 h_c を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "長方形断面の限界水深 $h_c = \\left(\\dfrac{q^2}{g}\\right)^{1/3}$ を使う。「限界水深」と聞かれたら即この式" },
                { label: "② 代入", content: "$h_c = \\left(\\dfrac{2^2}{9.8}\\right)^{1/3} = (0.408)^{1/3}$" },
                { label: "③ 計算", content: "$0.408^{1/3} \\approx 0.742$。3乗根は「0.74³≈0.41」で検算できる" },
                { label: "④ 単位・妥当性確認", content: "h_c ≈ 0.74 m。q=2 m²/s の水路として1m弱は妥当な値" }
              ],
              answer: "h_c ≈ 0.74 m"
            },
            {
              q: "幅 B = 4 m の長方形水路に流量 Q = 12 m³/s が流れている。限界水深 h_c を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "まず単位幅流量 $q = Q/B$ を作ってから $h_c = (q^2/g)^{1/3}$ に入れる" },
                { label: "② 代入", content: "$q = 12/4 = 3$ m²/s。$h_c = \\left(\\dfrac{3^2}{9.8}\\right)^{1/3} = (0.918)^{1/3}$" },
                { label: "③ 計算", content: "$0.918^{1/3} \\approx 0.972$" },
                { label: "④ 単位・妥当性確認", content: "h_c ≈ 0.97 m。0.97³ = 0.91 ≈ 0.918 で検算OK" }
              ],
              answer: "h_c ≈ 0.97 m"
            }
          ],
          formulaRefs: ["f2"]
        },
        {
          id: "p2",
          pattern: "比エネルギーとフルード数の計算",
          variants: [
            {
              q: "水深 h = 2.0 m、流速 v = 1.5 m/s の開水路流れについて、比エネルギー E とフルード数 Fr を求め、常流か射流か判定せよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "$E = h + \\dfrac{v^2}{2g}$ と $Fr = \\dfrac{v}{\\sqrt{gh}}$ の2本を使う" },
                { label: "② 代入", content: "$E = 2.0 + \\dfrac{1.5^2}{2 \\times 9.8} = 2.0 + \\dfrac{2.25}{19.6}$、$Fr = \\dfrac{1.5}{\\sqrt{9.8 \\times 2.0}}$" },
                { label: "③ 計算", content: "$E = 2.0 + 0.115 = 2.11$ m。$Fr = \\dfrac{1.5}{4.43} = 0.34$" },
                { label: "④ 単位・妥当性確認", content: "Fr = 0.34 < 1 なので常流。深くてゆっくりの流れなので直感とも合う" }
              ],
              answer: "E ≈ 2.11 m、Fr ≈ 0.34(常流)"
            },
            {
              q: "水深 h = 0.5 m、流速 v = 3.0 m/s の流れについて、比エネルギー E とフルード数 Fr を求め、常流か射流か判定せよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "$E = h + \\dfrac{v^2}{2g}$、$Fr = \\dfrac{v}{\\sqrt{gh}}$" },
                { label: "② 代入", content: "$E = 0.5 + \\dfrac{9.0}{19.6}$、$Fr = \\dfrac{3.0}{\\sqrt{9.8 \\times 0.5}} = \\dfrac{3.0}{\\sqrt{4.9}}$" },
                { label: "③ 計算", content: "$E = 0.5 + 0.459 = 0.96$ m。$Fr = \\dfrac{3.0}{2.21} = 1.36$" },
                { label: "④ 単位・妥当性確認", content: "Fr = 1.36 > 1 なので射流。浅くて速い流れ。速度水頭が水深に匹敵している点も射流らしい" }
              ],
              answer: "E ≈ 0.96 m、Fr ≈ 1.36(射流)"
            }
          ],
          formulaRefs: ["f1", "f3"]
        }
      ],
      quiz: [
        {
          q: "比エネルギー曲線で、同じ比エネルギー E に対応する水深はいくつある?(E > E_min のとき)",
          choices: ["1つ", "2つ(常流側と射流側)", "3つ", "無数にある"],
          answer: 1,
          expl: "C字型の曲線なので、同じEに対して上の枝(常流)と下の枝(射流)の2つの水深が対応する",
          sectionRef: 1
        },
        {
          q: "常流の説明として正しいのはどれ?",
          choices: ["Fr>1 で浅く速い流れ", "Fr<1 で、下流の影響が上流に伝わる流れ", "水深が限界水深より小さい流れ", "波が上流に伝われない流れ"],
          answer: 1,
          expl: "常流はFr<1。波(擾乱)が上流に遡れるので、下流の堰などの影響が上流に及ぶ",
          sectionRef: 2
        },
        {
          q: "常流の水路で水路床が滑らかに隆起すると、隆起部の水深はどうなる?",
          choices: ["上昇する", "低下する", "変わらない", "必ず限界水深になる"],
          answer: 1,
          expl: "常流では比エネルギーが減ると水深も減る(曲線の上の枝)。床が上がるとEが減るので水深は低下する。射流なら逆に上昇",
          sectionRef: 2
        },
        {
          q: "限界水深における流れの状態として正しいのは?",
          choices: ["Fr=0", "Fr=1で比エネルギーが最小", "Fr=1で比エネルギーが最大", "流速がゼロ"],
          answer: 1,
          expl: "限界水深はdE/dh=0の点。このときFr=1で、流量一定なら比エネルギーが最小になる",
          sectionRef: 1
        }
      ]
    },
    // ================= u2 =================
    {
      id: "u2",
      title: "運動量保存則と跳水(比力・共役水深)",
      weeks: "第1・3週",
      priority: 3,
      sections: [
        {
          heading: "運動量保存則:損失があっても使える武器",
          body: "<p>検査体積(流れの一区間を箱で囲んだもの)を考えると、流入・流出する運動量の差は外力に等しくなります。$F = \\rho Q (v_2 - v_1)$。これが流体の[[運動量保存則]]です。</p><p>エネルギー保存(ベルヌーイ)は損失があると補正が必要ですが、<b>運動量保存則は内部でエネルギーが失われていても成立する</b>のが最大の強み。渦だらけの[[跳水]]や、水流が構造物(シル)に及ぼす力の計算はこちらで解きます。「力を求めよ」「跳水」と来たら運動量、と覚えてください。</p>"
        },
        {
          heading: "跳水:射流から常流への乗り換え",
          body: "<p>ダムの放流のような速い[[射流]]が下流の穏やかな[[常流]]に接続するとき、水面が渦を巻いて急激に跳ね上がります。これが[[跳水]]です。滑り台の下でクッションに突っ込むように、流れは激しく乱れて<b>エネルギーを大量に失い</b>ながら深い流れに変わります。</p><p>跳水の前後ではエネルギーは保存されませんが、[[比力]]は保存されます。跳水前の水深 $h_1$(射流)と跳水後の水深 $h_2$(常流)の組を[[共役水深]]と呼び、$\\dfrac{h_2}{h_1} = \\dfrac{1}{2}\\left(\\sqrt{1+8Fr_1^2}-1\\right)$ で結ばれます。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='250' x2='380' y2='250' stroke='var(--c-line)' stroke-width='3'/><path d='M 20 215 L 150 215 Q 175 215 200 185 Q 230 148 270 140 L 380 138' fill='none' stroke='var(--c-accent)' stroke-width='3'/><path d='M 20 215 L 150 215 Q 175 215 200 185 Q 230 148 270 140 L 380 138 L 380 250 L 20 250 Z' fill='var(--c-fill1)' opacity='0.5'/><circle cx='215' cy='185' r='9' fill='none' stroke='var(--c-line)' stroke-width='2'/><circle cx='240' cy='165' r='11' fill='none' stroke='var(--c-line)' stroke-width='2'/><line x1='60' y1='250' x2='60' y2='215' stroke='var(--c-text)' stroke-width='1.5'/><text x='68' y='238' font-size='15' fill='var(--c-text)'>h₁(射流)</text><line x1='330' y1='250' x2='330' y2='138' stroke='var(--c-text)' stroke-width='1.5'/><text x='250' y='120' font-size='15' fill='var(--c-text)'>h₂(常流)</text><path d='M 45 200 L 95 200' stroke='var(--c-accent)' stroke-width='2.5' marker-end='none'/><path d='M 95 200 L 86 195 M 95 200 L 86 205' stroke='var(--c-accent)' stroke-width='2.5' fill='none'/><text x='40' y='190' font-size='14' fill='var(--c-accent)'>v₁ 速い</text><path d='M 300 190 L 330 190' stroke='var(--c-accent)' stroke-width='2.5'/><path d='M 330 190 L 321 185 M 330 190 L 321 195' stroke='var(--c-accent)' stroke-width='2.5' fill='none'/><text x='290' y='215' font-size='14' fill='var(--c-accent)'>v₂ 遅い</text><text x='170' y='280' font-size='15' fill='var(--c-text)'>跳水(エネルギー損失大)</text></svg>"
        },
        {
          heading: "比力:跳水を解く鍵",
          body: "<p>[[比力]] M は「運動量の流れ+圧力による力」を単位重量あたりにした量で、一般断面では $M = \\dfrac{Q^2}{gA} + h_G A$($h_G$:図心水深)。長方形断面の単位幅なら $M = \\dfrac{q^2}{gh} + \\dfrac{h^2}{2}$ です。</p><p>比力曲線もC字型で、同じMを持つ2つの水深が[[共役水深]]です。<b>使い分けはシンプル</b>:滑らかな床の隆起など損失が無視できる区間は比エネルギー、跳水のように損失が大きい区間は比力。「エネルギーのEか、力(モーメンタム)のMか」を最初に選ぶのが跳水問題の第一歩です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "運動量保存則(検査体積)",
          latex: "F = \\rho Q (v_2 - v_1)",
          vars: [
            { sym: "F", meaning: "検査体積に働く外力の合計", unit: "N" },
            { sym: "\\rho", meaning: "水の密度", unit: "kg/m³" },
            { sym: "Q", meaning: "流量", unit: "m³/s" },
            { sym: "v_1, v_2", meaning: "流入・流出断面の流速", unit: "m/s" }
          ],
          when: "「水流が構造物に及ぼす力」「シルにかかる力」を求めるとき。損失があっても使える",
          intuition: "運動量の変化率=力。流速が変わった分だけ力を受けている",
          derivation: "ニュートンの第2法則を検査体積に適用。単位時間に通過する質量がρQ",
          blank: "F = \\rho \\, ? \\, (v_2 - v_1)",
          blankAnswer: "Q"
        },
        {
          id: "f2",
          name: "比力(一般断面)",
          latex: "M = \\dfrac{Q^2}{gA} + h_G A",
          vars: [
            { sym: "M", meaning: "比力", unit: "m³" },
            { sym: "A", meaning: "流水断面積", unit: "m²" },
            { sym: "h_G", meaning: "水面から図心までの深さ", unit: "m" }
          ],
          when: "跳水の前後をつなぐとき。M₁=M₂と置いて共役水深を求める",
          intuition: "第1項が運動量(速い流れで大)、第2項が圧力(深い流れで大)。合計が保存",
          derivation: "運動量保存則を断面1・2の間に適用し、ρgで割った形",
          blank: "M = \\dfrac{Q^2}{gA} + ? \\, A",
          blankAnswer: "h_G"
        },
        {
          id: "f3",
          name: "比力(長方形・単位幅)",
          latex: "M = \\dfrac{q^2}{gh} + \\dfrac{h^2}{2}",
          vars: [
            { sym: "q", meaning: "単位幅流量", unit: "m²/s" },
            { sym: "h", meaning: "水深", unit: "m" }
          ],
          when: "長方形水路の跳水問題。M₁=M₂から共役水深式が導かれる",
          intuition: "一般式でA=h(単位幅)、h_G=h/2としただけ",
          derivation: "M=Q²/(gA)+h_G A に A=h・1、h_G=h/2 を代入",
          blank: "M = \\dfrac{q^2}{gh} + \\dfrac{?}{2}",
          blankAnswer: "h^2"
        },
        {
          id: "f4",
          name: "共役水深の式(跳水)",
          latex: "\\dfrac{h_2}{h_1} = \\dfrac{1}{2}\\left( \\sqrt{1 + 8Fr_1^2} - 1 \\right)",
          vars: [
            { sym: "h_1", meaning: "跳水前の水深(射流)", unit: "m" },
            { sym: "h_2", meaning: "跳水後の水深(常流)", unit: "m" },
            { sym: "Fr_1", meaning: "跳水前のフルード数", unit: "無次元" }
          ],
          when: "「跳水後の水深を求めよ」と来たら即この式。Fr₁を先に計算する",
          intuition: "Fr₁が大きい(激しい射流)ほど跳水後は深くなる",
          derivation: "M₁=M₂(長方形断面)を整理するとh₂/h₁の2次方程式になり、正の解がこれ",
          blank: "\\dfrac{h_2}{h_1} = \\dfrac{1}{2}\\left( \\sqrt{1 + 8\\,?} - 1 \\right)",
          blankAnswer: "Fr_1^2"
        },
        {
          id: "f5",
          name: "跳水のエネルギー損失",
          latex: "\\Delta E = \\dfrac{(h_2 - h_1)^3}{4 h_1 h_2}",
          vars: [
            { sym: "\\Delta E", meaning: "跳水で失われるエネルギー水頭", unit: "m" },
            { sym: "h_1, h_2", meaning: "共役水深", unit: "m" }
          ],
          when: "「跳水によるエネルギー損失を求めよ」のとき。共役水深を先に求めてから",
          intuition: "水深差の3乗に比例。跳水が大きいほど損失は急激に増える",
          derivation: "E₁-E₂を共役水深の関係式で整理すると綺麗にこの形になる",
          blank: "\\Delta E = \\dfrac{(h_2 - h_1)^3}{4 \\, ?}",
          blankAnswer: "h_1 h_2"
        }
      ],
      selectQuiz: [
        {
          q: "ダム放流の射流が下流で跳水を起こす。跳水後の水深を求めたい",
          choices: ["共役水深の式(比力保存)", "比エネルギーの保存", "マニング公式", "ダルシー・ワイスバッハの式"],
          answer: 0,
          expl: "跳水は損失が大きいのでエネルギー保存は使えない。比力保存から導いた共役水深式を使う",
          formulaRef: "f4"
        },
        {
          q: "水路に置かれたシル(小さい段差)に水流が及ぼす力を求めたい",
          choices: ["運動量保存則 F=ρQ(v₂-v₁)", "比エネルギー", "限界水深の式", "連続式のみ"],
          answer: 0,
          expl: "「力を求めよ」は運動量保存則の合図。前後の流速・水深から力を逆算する",
          formulaRef: "f1"
        },
        {
          q: "跳水で失われるエネルギーの大きさを求めたい(共役水深は既知)",
          choices: ["ΔE=(h₂-h₁)³/(4h₁h₂)", "F=ρQ(v₂-v₁)", "E=h+v²/2g を2回計算して引く", "h_c=(q²/g)^(1/3)"],
          answer: 0,
          expl: "公式一発ならΔE=(h₂-h₁)³/(4h₁h₂)。E₁-E₂を計算しても同じ値になる(検算に使える)",
          formulaRef: "f5"
        },
        {
          q: "滑らかな床の隆起を通過する流れ(損失なし)と、跳水(損失大)。それぞれで保存される量の正しい組合せは?",
          choices: ["隆起:比エネルギー / 跳水:比力", "隆起:比力 / 跳水:比エネルギー", "両方とも比エネルギー", "両方とも比力"],
          answer: 0,
          expl: "損失が無視できる→エネルギー保存、損失が大きい→運動量(比力)保存。使い分けの典型問題",
          formulaRef: "f2"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "跳水の共役水深計算",
          variants: [
            {
              q: "水深 h₁ = 0.5 m、流速 v₁ = 6.0 m/s の射流が跳水を起こした。跳水後の水深 h₂ を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "跳水→共役水深の式 $\\dfrac{h_2}{h_1} = \\dfrac{1}{2}(\\sqrt{1+8Fr_1^2}-1)$。まず $Fr_1$ を計算する" },
                { label: "② Fr₁の計算", content: "$Fr_1 = \\dfrac{6.0}{\\sqrt{9.8 \\times 0.5}} = \\dfrac{6.0}{2.21} = 2.71$(>1 で射流を確認)" },
                { label: "③ 代入・計算", content: "$1+8 \\times 2.71^2 = 1+58.8 = 59.8$、$\\sqrt{59.8} = 7.73$。$h_2 = \\dfrac{0.5}{2}(7.73-1) = 0.25 \\times 6.73$" },
                { label: "④ 単位・妥当性確認", content: "$h_2 \\approx 1.68$ m。跳水後の水深が跳水前より深い(h₂>h₁)ので妥当" }
              ],
              answer: "h₂ ≈ 1.68 m"
            },
            {
              q: "水深 h₁ = 0.4 m、フルード数 Fr₁ = 3.0 の射流が跳水を起こした。跳水後の水深 h₂ を求めよ。",
              steps: [
                { label: "① 式の選択", content: "Fr₁が直接与えられているので、共役水深の式にそのまま入れる" },
                { label: "② 代入", content: "$\\dfrac{h_2}{h_1} = \\dfrac{1}{2}(\\sqrt{1+8 \\times 3.0^2}-1) = \\dfrac{1}{2}(\\sqrt{73}-1)$" },
                { label: "③ 計算", content: "$\\sqrt{73} = 8.54$。$\\dfrac{h_2}{h_1} = \\dfrac{7.54}{2} = 3.77$。$h_2 = 0.4 \\times 3.77$" },
                { label: "④ 単位・妥当性確認", content: "$h_2 \\approx 1.51$ m。Fr₁=3の強い射流なので水深が約3.8倍に跳ね上がるのは妥当" }
              ],
              answer: "h₂ ≈ 1.51 m"
            }
          ],
          formulaRefs: ["f4"]
        },
        {
          id: "p2",
          pattern: "跳水のエネルギー損失計算",
          variants: [
            {
              q: "跳水の前後の水深が h₁ = 0.5 m、h₂ = 1.68 m であった。跳水によるエネルギー損失 ΔE を求めよ。",
              steps: [
                { label: "① 式の選択", content: "共役水深が両方わかっているので $\\Delta E = \\dfrac{(h_2-h_1)^3}{4h_1 h_2}$ が最短" },
                { label: "② 代入", content: "$\\Delta E = \\dfrac{(1.68-0.5)^3}{4 \\times 0.5 \\times 1.68} = \\dfrac{1.18^3}{3.36}$" },
                { label: "③ 計算", content: "$1.18^3 = 1.643$。$\\Delta E = \\dfrac{1.643}{3.36} = 0.489$" },
                { label: "④ 単位・妥当性確認", content: "ΔE ≈ 0.49 m。跳水前の比エネルギー(約2.3m)の2割程度が失われており、跳水として妥当" }
              ],
              answer: "ΔE ≈ 0.49 m"
            },
            {
              q: "跳水の前後の水深が h₁ = 0.4 m、h₂ = 1.6 m であった。跳水によるエネルギー損失 ΔE を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$\\Delta E = \\dfrac{(h_2-h_1)^3}{4h_1 h_2}$" },
                { label: "② 代入", content: "$\\Delta E = \\dfrac{(1.6-0.4)^3}{4 \\times 0.4 \\times 1.6} = \\dfrac{1.2^3}{2.56}$" },
                { label: "③ 計算", content: "$1.2^3 = 1.728$。$\\Delta E = \\dfrac{1.728}{2.56} = 0.675$" },
                { label: "④ 単位・妥当性確認", content: "ΔE = 0.675 m ≈ 0.68 m。水深差が大きいので前問より損失が大きい。傾向も一致" }
              ],
              answer: "ΔE ≈ 0.68 m"
            }
          ],
          formulaRefs: ["f5"]
        }
      ],
      quiz: [
        {
          q: "跳水の前後で保存される量はどれ?",
          choices: ["比エネルギー", "比力", "水深", "流速"],
          answer: 1,
          expl: "跳水は渦による損失が大きいのでエネルギーは保存されない。運動量(比力)は内部損失に関係なく保存される",
          sectionRef: 2
        },
        {
          q: "跳水が起こるのはどんなとき?",
          choices: ["常流が射流に変わるとき", "射流が常流に変わるとき", "等流が続くとき", "流量が増えたとき"],
          answer: 1,
          expl: "射流→常流の遷移で跳水が起こる。逆(常流→射流)は水面が滑らかに低下するだけで跳水しない",
          sectionRef: 1
        },
        {
          q: "運動量保存則がエネルギー保存則より有利な点は?",
          choices: ["計算が必ず簡単になる", "内部のエネルギー損失を知らなくても使える", "水深が不要", "粘性を無視できる"],
          answer: 1,
          expl: "運動量保存は外力と運動量変化だけの関係なので、検査体積内部で何が起きていても(渦で損失しても)成立する",
          sectionRef: 0
        },
        {
          q: "跳水がダム下流の減勢工に利用される理由は?",
          choices: ["水深を浅くできるから", "エネルギーを大量に消散できるから", "流量を減らせるから", "水温を下げられるから"],
          answer: 1,
          expl: "跳水はエネルギー損失が非常に大きい。放流水の破壊力を跳水で殺してから下流に流す",
          sectionRef: 1
        }
      ]
    },
    // ================= u3 =================
    {
      id: "u3",
      title: "管路の流れの損失(摩擦損失・形状損失)",
      weeks: "第4週",
      priority: 3,
      sections: [
        {
          heading: "管路のエネルギーはどこで失われるか",
          body: "<p>管路(圧力で満たされて流れる管)では、流れが進むにつれてエネルギーが失われます。損失は2種類。管の壁との摩擦でじわじわ失われる[[摩擦損失]]と、入口・曲がり・断面変化などの「形」で局所的に失われる[[形状損失]]です。</p><p>長いストローでジュースを飲むと疲れるのが摩擦損失、ストローが折れ曲がっていると余計に疲れるのが形状損失、とイメージしてください。管路の問題は<b>全ての損失を数え上げてエネルギー式に入れる</b>のが基本方針です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='60' width='50' height='120' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><text x='24' y='50' font-size='14' fill='var(--c-text)'>水槽</text><line x1='30' y1='60' x2='80' y2='60' stroke='var(--c-accent)' stroke-width='2'/><rect x='80' y='150' width='260' height='24' fill='var(--c-fill2)' stroke='var(--c-line)' stroke-width='2'/><text x='170' y='195' font-size='14' fill='var(--c-text)'>管路 L, D</text><path d='M 80 60 L 120 85 L 340 128' fill='none' stroke='var(--c-accent)' stroke-width='2.5' stroke-dasharray='7 4'/><text x='150' y='75' font-size='14' fill='var(--c-accent)'>エネルギー勾配線</text><line x1='108' y1='68' x2='108' y2='88' stroke='var(--c-text)' stroke-width='1.5'/><text x='112' y='105' font-size='13' fill='var(--c-text)'>入口損失</text><line x1='330' y1='120' x2='330' y2='150' stroke='var(--c-text)' stroke-width='1.5'/><text x='255' y='118' font-size='13' fill='var(--c-text)'>摩擦損失 h_f</text><path d='M 340 150 L 375 150' stroke='var(--c-accent)' stroke-width='3'/><path d='M 375 150 L 366 145 M 375 150 L 366 155' stroke='var(--c-accent)' stroke-width='3' fill='none'/><text x='340' y='140' font-size='14' fill='var(--c-accent)'>流出</text><text x='60' y='250' font-size='15' fill='var(--c-text)'>水頭差 H = 入口損失 + 摩擦損失 + 速度水頭</text></svg>"
        },
        {
          heading: "ダルシー・ワイスバッハの式",
          body: "<p>[[摩擦損失]]の計算は $h_f = f \\dfrac{L}{D} \\dfrac{v^2}{2g}$(ダルシー・ワイスバッハの式)が主役です。<b>管が長いほど、細いほど、流れが速いほど損失が増える</b>という直感がそのまま式になっています。</p><p>摩擦損失係数 f は流れの状態で変わり、[[層流]]なら理論的に $f = \\dfrac{64}{Re}$、[[乱流]]では管の粗さと[[レイノルズ数]]に依存します(ムーディ図)。試験では f が与えられることが多いので、式の形と「v² に比例」という感覚を確実に。</p>"
        },
        {
          heading: "形状損失とBorda-Carnotの式",
          body: "<p>[[形状損失]]は $h = f_m \\dfrac{v^2}{2g}$ の形で表し、係数 $f_m$ は形で決まります。代表値は<b>入口 0.5、出口 1.0</b>(全速度水頭を失う)。</p><p>管が急に太くなる「急拡大」では、噴き出した流れが渦を作って混ざるため損失が大きく、<b>Borda-Carnot の式</b> $h_{se} = \\dfrac{(v_1 - v_2)^2}{2g}$ で表されます。これは運動量保存則から導かれる理論式で、「速度差の2乗」が効くのがポイント。急縮小より急拡大の方が損失が大きい理由もこの渦にあります。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "ダルシー・ワイスバッハの式(摩擦損失)",
          latex: "h_f = f \\dfrac{L}{D} \\dfrac{v^2}{2g}",
          vars: [
            { sym: "h_f", meaning: "摩擦損失水頭", unit: "m" },
            { sym: "f", meaning: "摩擦損失係数", unit: "無次元" },
            { sym: "L", meaning: "管長", unit: "m" },
            { sym: "D", meaning: "管径", unit: "m" },
            { sym: "v", meaning: "管内平均流速", unit: "m/s" }
          ],
          when: "管路の摩擦損失は全部これ。管路の流量計算でも必ず登場する",
          intuition: "長いほど・細いほど・速いほど損失大。L/Dは「管の細長さ」",
          derivation: "せん断応力と圧力のつり合いから。v²/2g(速度水頭)を基準に無次元係数fでスケール",
          blank: "h_f = f \\dfrac{L}{D} \\dfrac{?}{2g}",
          blankAnswer: "v^2"
        },
        {
          id: "f2",
          name: "形状損失の一般形",
          latex: "h_m = f_m \\dfrac{v^2}{2g}",
          vars: [
            { sym: "h_m", meaning: "形状損失水頭", unit: "m" },
            { sym: "f_m", meaning: "形状損失係数(入口0.5、出口1.0など)", unit: "無次元" }
          ],
          when: "入口・出口・曲がり・弁などの局所損失。係数を足し合わせて使うことが多い",
          intuition: "どの損失も「速度水頭の何倍か」で表す。出口では速度水頭を丸ごと失うのでf_m=1.0",
          derivation: "局所の複雑な渦を実験係数f_mに押し込めた実用式",
          blank: "h_m = ? \\times \\dfrac{v^2}{2g}",
          blankAnswer: "f_m"
        },
        {
          id: "f3",
          name: "Borda-Carnotの式(急拡大損失)",
          latex: "h_{se} = \\dfrac{(v_1 - v_2)^2}{2g}",
          vars: [
            { sym: "h_{se}", meaning: "急拡大による損失水頭", unit: "m" },
            { sym: "v_1", meaning: "拡大前(細い管)の流速", unit: "m/s" },
            { sym: "v_2", meaning: "拡大後(太い管)の流速", unit: "m/s" }
          ],
          when: "管が急に太くなる箇所の損失。「急拡大」「Borda-Carnot」の文字を見たら",
          intuition: "速度差の2乗。速い流れが遅い流れに合流して渦で混ざる分が損失",
          derivation: "拡大部に運動量保存則+エネルギー式を併用すると理論的に導ける",
          blank: "h_{se} = \\dfrac{(? )^2}{2g}",
          blankAnswer: "v_1 - v_2"
        },
        {
          id: "f4",
          name: "層流の摩擦損失係数",
          latex: "f = \\dfrac{64}{Re}",
          vars: [
            { sym: "f", meaning: "摩擦損失係数", unit: "無次元" },
            { sym: "Re", meaning: "レイノルズ数 vD/ν", unit: "無次元" }
          ],
          when: "円管の層流(Re<約2000)でfを求めるとき。理論値なので実験不要",
          intuition: "層流ではfはReに反比例。遅い流れほど相対的に粘性が効く",
          derivation: "ハーゲン・ポアズイユ流の厳密解をダルシー・ワイスバッハの形に直すと出る",
          blank: "f = \\dfrac{?}{Re}",
          blankAnswer: "64"
        },
        {
          id: "f5",
          name: "レイノルズ数(円管)",
          latex: "Re = \\dfrac{vD}{\\nu}",
          vars: [
            { sym: "Re", meaning: "レイノルズ数", unit: "無次元" },
            { sym: "v", meaning: "平均流速", unit: "m/s" },
            { sym: "D", meaning: "管径", unit: "m" },
            { sym: "\\nu", meaning: "動粘性係数", unit: "m²/s" }
          ],
          when: "層流か乱流かの判定。fの決定の前段として計算する",
          intuition: "慣性÷粘性。約2000以下で層流、4000以上で乱流が目安",
          derivation: "慣性項ρv²とせん断項μv/Dの比を取ると vD/ν になる",
          blank: "Re = \\dfrac{v D}{?}",
          blankAnswer: "\\nu"
        }
      ],
      selectQuiz: [
        {
          q: "長さ100m、直径0.2mの管に水が流れている。摩擦による損失水頭を求めたい",
          choices: ["ダルシー・ワイスバッハの式", "Borda-Carnotの式", "マニング公式", "共役水深の式"],
          answer: 0,
          expl: "管路の摩擦損失はダルシー・ワイスバッハ h_f=f(L/D)(v²/2g) 一択",
          formulaRef: "f1"
        },
        {
          q: "管の断面が急に大きくなる箇所での損失を求めたい",
          choices: ["Borda-Carnot式 (v₁-v₂)²/2g", "ダルシー・ワイスバッハの式", "f=64/Re", "比エネルギーの式"],
          answer: 0,
          expl: "急拡大損失はBorda-Carnot。前後の流速差の2乗で決まる",
          formulaRef: "f3"
        },
        {
          q: "管内の流れが層流か乱流かを判定したい",
          choices: ["レイノルズ数 Re=vD/ν", "フルード数", "摩擦損失係数f", "限界水深"],
          answer: 0,
          expl: "層流・乱流の判定はレイノルズ数。開水路の常流・射流判定(フルード数)と混同しないこと",
          formulaRef: "f5"
        },
        {
          q: "円管の層流で摩擦損失係数fを求めたい(Reは既知)",
          choices: ["f=64/Re", "ムーディ図を必ず引く", "f=0.02で固定", "Borda-Carnot式"],
          answer: 0,
          expl: "層流のfは理論式f=64/Reで決まる。ムーディ図が必要なのは乱流域",
          formulaRef: "f4"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "摩擦損失の計算",
          variants: [
            {
              q: "長さ L = 100 m、直径 D = 0.2 m の管に流速 v = 2.0 m/s で水が流れる。摩擦損失係数 f = 0.02 のとき摩擦損失水頭 h_f を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "管路の摩擦損失→ダルシー・ワイスバッハ $h_f = f\\dfrac{L}{D}\\dfrac{v^2}{2g}$" },
                { label: "② 代入", content: "$h_f = 0.02 \\times \\dfrac{100}{0.2} \\times \\dfrac{2.0^2}{2 \\times 9.8} = 0.02 \\times 500 \\times \\dfrac{4.0}{19.6}$" },
                { label: "③ 計算", content: "$= 10 \\times 0.204 = 2.04$" },
                { label: "④ 単位・妥当性確認", content: "h_f ≈ 2.04 m。100mの管で約2mの損失。L/D=500と細長い管なので妥当" }
              ],
              answer: "h_f ≈ 2.04 m"
            },
            {
              q: "長さ L = 200 m、直径 D = 0.5 m の管に流速 v = 1.5 m/s で水が流れる。f = 0.03 のとき摩擦損失水頭 h_f を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "$h_f = f\\dfrac{L}{D}\\dfrac{v^2}{2g}$" },
                { label: "② 代入", content: "$h_f = 0.03 \\times \\dfrac{200}{0.5} \\times \\dfrac{1.5^2}{19.6} = 0.03 \\times 400 \\times \\dfrac{2.25}{19.6}$" },
                { label: "③ 計算", content: "$= 12 \\times 0.1148 = 1.38$" },
                { label: "④ 単位・妥当性確認", content: "h_f ≈ 1.38 m。管が太い分、前問より損失は控えめ。単位はmでOK" }
              ],
              answer: "h_f ≈ 1.38 m"
            }
          ],
          formulaRefs: ["f1"]
        },
        {
          id: "p2",
          pattern: "急拡大損失(Borda-Carnot)の計算",
          variants: [
            {
              q: "管の急拡大部で、拡大前の流速 v₁ = 3.0 m/s、拡大後の流速 v₂ = 1.0 m/s である。急拡大による損失水頭を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "急拡大→Borda-Carnot $h_{se} = \\dfrac{(v_1-v_2)^2}{2g}$" },
                { label: "② 代入", content: "$h_{se} = \\dfrac{(3.0-1.0)^2}{2 \\times 9.8} = \\dfrac{4.0}{19.6}$" },
                { label: "③ 計算", content: "$= 0.204$" },
                { label: "④ 単位・妥当性確認", content: "h_se ≈ 0.20 m。速度水頭(3²/19.6=0.46m)の半分程度で妥当な範囲" }
              ],
              answer: "h_se ≈ 0.20 m"
            },
            {
              q: "急拡大部で v₁ = 2.5 m/s、v₂ = 1.5 m/s のとき、Borda-Carnot式による損失水頭を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "$h_{se} = \\dfrac{(v_1-v_2)^2}{2g}$" },
                { label: "② 代入", content: "$h_{se} = \\dfrac{(2.5-1.5)^2}{19.6} = \\dfrac{1.0}{19.6}$" },
                { label: "③ 計算", content: "$= 0.051$" },
                { label: "④ 単位・妥当性確認", content: "h_se ≈ 0.051 m ≈ 5.1 cm。速度差が小さいので損失も小さい。(v₁-v₂)²の効き方を体感できる" }
              ],
              answer: "h_se ≈ 0.051 m"
            }
          ],
          formulaRefs: ["f3"]
        }
      ],
      quiz: [
        {
          q: "摩擦損失h_fが2倍になるのは次のどの場合?(他の条件は同じ)",
          choices: ["流速を2倍にする", "管長を2倍にする", "管径を2倍にする", "fを半分にする"],
          answer: 1,
          expl: "h_fはLに比例するので管長2倍で損失2倍。流速2倍なら4倍(v²)、管径2倍なら半分になる",
          sectionRef: 1
        },
        {
          q: "管の出口で水槽に流れ込むときの出口損失係数はいくつ?",
          choices: ["0.1", "0.5", "1.0", "2.0"],
          answer: 2,
          expl: "出口では管内の速度水頭がすべて水槽内で消散するのでf_m=1.0。入口の0.5とセットで覚える",
          sectionRef: 2
        },
        {
          q: "急拡大の損失が急縮小より大きい主な理由は?",
          choices: ["管が長くなるから", "噴流の周りに大きな渦が発生して混合損失が生じるから", "重力が増すから", "水温が上がるから"],
          answer: 1,
          expl: "急拡大では細い管からの噴流が太い管の淀みと激しく混ざり、渦でエネルギーが消散する",
          sectionRef: 2
        },
        {
          q: "層流と乱流の判定に使う無次元数は?",
          choices: ["フルード数", "レイノルズ数", "マッハ数", "ウェーバー数"],
          answer: 1,
          expl: "層流/乱流はレイノルズ数(粘性との比)。常流/射流のフルード数(重力との比)と対で整理しておく",
          sectionRef: 1
        }
      ]
    },
    // ================= u4 =================
    {
      id: "u4",
      title: "管路の流れの解析(単一管路・サイフォン・並列管)",
      weeks: "第5週",
      priority: 3,
      sections: [
        {
          heading: "単一管路の解析:水頭差=損失の合計",
          body: "<p>2つの水槽を1本の管でつないだとき、水面の高さの差 H はすべて損失に使われます。$H = \\left( f_e + f\\dfrac{L}{D} + f_o \\right) \\dfrac{v^2}{2g}$。<b>「水頭差=入口損失+摩擦損失+出口損失」</b>という会計簿を作るのが解法の型です。</p><p>お小遣い H を、入口・摩擦・出口の3人で山分けするイメージ。全員の取り分が $v^2/2g$ の定数倍なので、括弧でまとめて v について解けば流速、さらに $Q = Av$ で流量が出ます。管路計算はこのパターンの反復です。</p>"
        },
        {
          heading: "サイフォン:動水勾配線より高い管",
          body: "<p>[[サイフォン]]は管の途中が両水槽の水面(正確には動水勾配線)より高くなる管路です。灯油ポンプと同じ原理で、いったん流れ出せば水は峠を越えて流れ続けます。</p><p>ただし峠の頂部では圧力が<b>負圧(大気圧以下)</b>になります。負圧が大きくなりすぎる(理論上 −10.3 m、実用上<b>約 −7〜8 m 水柱</b>を超える)と水中の空気が泡になって流れが切れます。試験では「頂部の圧力を求め、サイフォンが成立するか判定せよ」という形で出ます。ベルヌーイの式を水槽水面から頂部まで立てるのが定石です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='120' width='80' height='120' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><line x1='20' y1='120' x2='100' y2='120' stroke='var(--c-accent)' stroke-width='2'/><rect x='300' y='180' width='80' height='80' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><line x1='300' y1='180' x2='380' y2='180' stroke='var(--c-accent)' stroke-width='2'/><path d='M 90 150 Q 150 40 200 40 Q 250 40 320 200' fill='none' stroke='var(--c-line)' stroke-width='8' opacity='0.7'/><circle cx='200' cy='40' r='6' fill='var(--c-accent)'/><text x='212' y='38' font-size='15' fill='var(--c-accent)'>頂部(負圧)</text><line x1='20' y1='120' x2='380' y2='120' stroke='var(--c-line)' stroke-width='1' stroke-dasharray='5 4'/><text x='105' y='112' font-size='14' fill='var(--c-text)'>上流水面</text><line x1='200' y1='40' x2='200' y2='120' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='4 3'/><text x='150' y='85' font-size='14' fill='var(--c-text)'>z_s</text><text x='30' y='270' font-size='15' fill='var(--c-text)'>頂部が水面より高い → 圧力は大気圧以下</text></svg>"
        },
        {
          heading: "並列管:損失が共通、流量は分担",
          body: "<p>1本の管が2本に分かれて再び合流する並列管では、<b>分岐点と合流点の間の損失水頭はどちらの管でも同じ</b>です(同じ2点をつなぐので当然)。一方、流量は $Q = Q_1 + Q_2$ と分担されます。</p><p>電気回路の並列抵抗とそっくりで、「電圧(損失水頭)共通・電流(流量)は和」と対応させると覚えやすいです。各管でダルシー・ワイスバッハの式を立て、$h_{f1} = h_{f2}$ と $Q = Q_1 + Q_2$ を連立するのが解法です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "単一管路のエネルギー式",
          latex: "H = \\left( f_e + f\\dfrac{L}{D} + f_o \\right) \\dfrac{v^2}{2g}",
          vars: [
            { sym: "H", meaning: "2水槽の水面差", unit: "m" },
            { sym: "f_e", meaning: "入口損失係数(≈0.5)", unit: "無次元" },
            { sym: "f_o", meaning: "出口損失係数(≈1.0)", unit: "無次元" },
            { sym: "f L/D", meaning: "摩擦損失の係数部分", unit: "無次元" }
          ],
          when: "水槽をつなぐ管の流速・流量を求める問題。損失を全部数え上げて括弧に入れる",
          intuition: "水面差という予算を各損失で分け合う。係数の合計で割ってvを出す",
          derivation: "両水槽水面間でベルヌーイ+全損失。水面では速度・ゲージ圧ゼロなので H=損失合計",
          blank: "H = \\left( f_e + f\\dfrac{L}{D} + f_o \\right) \\dfrac{v^2}{?}",
          blankAnswer: "2g"
        },
        {
          id: "f2",
          name: "サイフォン頂部の圧力(ベルヌーイ)",
          latex: "\\dfrac{p_s}{\\rho g} = -z_s - (1 + \\Sigma f_m + f\\tfrac{L_s}{D}) \\dfrac{v^2}{2g}",
          vars: [
            { sym: "p_s", meaning: "頂部の圧力(ゲージ圧)", unit: "Pa" },
            { sym: "z_s", meaning: "上流水面から頂部までの高さ", unit: "m" },
            { sym: "L_s", meaning: "上流水槽から頂部までの管長", unit: "m" }
          ],
          when: "サイフォンの成立判定。「頂部の圧力を求めよ」で使う。-7〜8m水柱より下なら流れが切れる",
          intuition: "高く上るほど・速く流すほど頂部の圧力は下がる。負圧の限界がサイフォンの限界",
          derivation: "上流水面と頂部の間でベルヌーイの式を立て、途中の損失を引く",
          blank: "\\dfrac{p_s}{\\rho g} = -\\,? - (1 + \\Sigma f_m + f\\tfrac{L_s}{D}) \\dfrac{v^2}{2g}",
          blankAnswer: "z_s"
        },
        {
          id: "f3",
          name: "並列管の条件",
          latex: "h_{f1} = h_{f2}, \\quad Q = Q_1 + Q_2",
          vars: [
            { sym: "h_{f1}, h_{f2}", meaning: "各管の損失水頭", unit: "m" },
            { sym: "Q_1, Q_2", meaning: "各管の流量", unit: "m³/s" }
          ],
          when: "管が分岐・合流する問題。この2条件+各管のダルシー・ワイスバッハで連立する",
          intuition: "並列回路と同じ。「電圧(損失)共通・電流(流量)は和」",
          derivation: "分岐点と合流点は共通なので2点間のエネルギー差はどの経路でも同じ",
          blank: "h_{f1} = h_{f2}, \\quad Q = Q_1 + ?",
          blankAnswer: "Q_2"
        }
      ],
      selectQuiz: [
        {
          q: "水面差5mの2つの水槽をつなぐ管の流量を求めたい(f, L, D, 損失係数は既知)",
          choices: ["H=(f_e+fL/D+f_o)v²/2g を v について解く", "マニング公式", "共役水深の式", "π定理"],
          answer: 0,
          expl: "単一管路の定番。水面差=全損失の式を立て、vを出してからQ=Avで流量にする",
          formulaRef: "f1"
        },
        {
          q: "サイフォンが正常に流れるかどうかを判定したい",
          choices: ["頂部の負圧を計算して限界(約-7m水柱)と比べる", "フルード数を計算する", "並列管の条件式を使う", "限界水深と比べる"],
          answer: 0,
          expl: "サイフォンの成立条件は頂部の負圧。ベルヌーイで頂部圧力を求めて限界負圧と比較する",
          formulaRef: "f2"
        },
        {
          q: "2本の管に分かれて流れる管路で、各管の流量の配分を求めたい",
          choices: ["損失水頭が等しい条件と流量の和の条件を連立", "太い管に全部流れるとする", "エネルギーを2等分する", "Borda-Carnot式"],
          answer: 0,
          expl: "並列管はh_f1=h_f2とQ=Q1+Q2の連立。損失が等しくなるように流量が自然に配分される",
          formulaRef: "f3"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "単一管路の流量計算",
          variants: [
            {
              q: "水面差 H = 5.0 m の2水槽を、長さ L = 50 m、直径 D = 0.1 m の管がつなぐ。f = 0.03、入口損失係数 0.5、出口損失係数 1.0 のとき流量 Q を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "単一管路:$H = (f_e + f\\frac{L}{D} + f_o)\\dfrac{v^2}{2g}$。損失係数を全部数える" },
                { label: "② 係数の合計", content: "$f\\dfrac{L}{D} = 0.03 \\times \\dfrac{50}{0.1} = 15$。合計 $= 0.5 + 15 + 1.0 = 16.5$" },
                { label: "③ vの計算", content: "$v^2 = \\dfrac{2gH}{16.5} = \\dfrac{19.6 \\times 5.0}{16.5} = 5.94$、$v = 2.44$ m/s" },
                { label: "④ Qの計算と確認", content: "$A = \\dfrac{\\pi \\times 0.1^2}{4} = 7.85 \\times 10^{-3}$ m²。$Q = Av = 0.0191$ m³/s ≈ 19.1 L/s。細い管なので数十L/sは妥当" }
              ],
              answer: "Q ≈ 0.019 m³/s(約19 L/s)"
            },
            {
              q: "水面差 H = 8.0 m、L = 100 m、D = 0.2 m、f = 0.02、入口損失係数 0.5、出口損失係数 1.0 のとき、管の流量 Q を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "$H = (f_e + f\\frac{L}{D} + f_o)\\dfrac{v^2}{2g}$" },
                { label: "② 係数の合計", content: "$f\\dfrac{L}{D} = 0.02 \\times \\dfrac{100}{0.2} = 10$。合計 $= 0.5 + 10 + 1.0 = 11.5$" },
                { label: "③ vの計算", content: "$v^2 = \\dfrac{19.6 \\times 8.0}{11.5} = 13.6$、$v = 3.69$ m/s" },
                { label: "④ Qの計算と確認", content: "$A = \\dfrac{\\pi \\times 0.2^2}{4} = 0.0314$ m²。$Q = 0.0314 \\times 3.69 = 0.116$ m³/s。管が太く水頭も大きいので前問より1桁大きい" }
              ],
              answer: "Q ≈ 0.116 m³/s"
            }
          ],
          formulaRefs: ["f1"]
        },
        {
          id: "p2",
          pattern: "サイフォン頂部の負圧判定",
          variants: [
            {
              q: "サイフォンの頂部が上流水面より z_s = 4.0 m 高い。管内流速 v = 2.0 m/s、水面から頂部までの損失係数の合計(速度水頭込み)を 2.0 とするとき、頂部の圧力水頭を求め、サイフォンが成立するか判定せよ(限界を -7.0 m とする)。",
              steps: [
                { label: "① 式の選択", content: "上流水面〜頂部でベルヌーイ:$\\dfrac{p_s}{\\rho g} = -z_s - (\\text{係数合計}) \\times \\dfrac{v^2}{2g}$" },
                { label: "② 代入", content: "$\\dfrac{v^2}{2g} = \\dfrac{4.0}{19.6} = 0.204$ m。$\\dfrac{p_s}{\\rho g} = -4.0 - 2.0 \\times 0.204$" },
                { label: "③ 計算", content: "$= -4.0 - 0.41 = -4.41$ m" },
                { label: "④ 判定", content: "-4.41 m > -7.0 m なので負圧は限界内。サイフォンは成立する" }
              ],
              answer: "p_s/ρg ≈ -4.4 m(成立する)"
            },
            {
              q: "頂部が上流水面より z_s = 6.5 m 高いサイフォンで、v = 3.0 m/s、水面から頂部までの損失係数の合計(速度水頭込み)を 2.5 とする。頂部の圧力水頭を求め、成立するか判定せよ(限界 -7.0 m)。",
              steps: [
                { label: "① 式の選択", content: "$\\dfrac{p_s}{\\rho g} = -z_s - (\\text{係数合計}) \\times \\dfrac{v^2}{2g}$" },
                { label: "② 代入", content: "$\\dfrac{v^2}{2g} = \\dfrac{9.0}{19.6} = 0.459$ m。$\\dfrac{p_s}{\\rho g} = -6.5 - 2.5 \\times 0.459$" },
                { label: "③ 計算", content: "$= -6.5 - 1.15 = -7.65$ m" },
                { label: "④ 判定", content: "-7.65 m < -7.0 m で限界を超える。空気が発生して流れが切れるため、このサイフォンは成立しない" }
              ],
              answer: "p_s/ρg ≈ -7.7 m(成立しない)"
            }
          ],
          formulaRefs: ["f2"]
        }
      ],
      quiz: [
        {
          q: "2水槽をつなぐ単一管路で、水面差Hはどう使われる?",
          choices: ["すべて速度エネルギーになる", "すべて損失(入口+摩擦+出口)に消費される", "半分だけ損失になる", "位置エネルギーとして残る"],
          answer: 1,
          expl: "両水槽の水面では流速もゲージ圧もゼロ。水面差は途中の損失の合計にちょうど等しい",
          sectionRef: 0
        },
        {
          q: "サイフォンの頂部で流れが切れる原因は?",
          choices: ["流速が速すぎる", "負圧が大きくなりすぎて空気(気泡)が発生する", "水温が下がる", "摩擦係数が大きくなる"],
          answer: 1,
          expl: "負圧が約-7〜8m水柱を超えると溶存空気が気泡化し(さらに水蒸気化)、水柱が切れて流れが止まる",
          sectionRef: 1
        },
        {
          q: "並列管で2本の管に共通なのはどれ?",
          choices: ["流量", "流速", "分岐点〜合流点の損失水頭", "管径"],
          answer: 2,
          expl: "同じ2点をつなぐので損失水頭は共通。流量はQ=Q1+Q2と分担される。電気の並列回路と同じ構造",
          sectionRef: 2
        }
      ]
    },
    // ================= u5 =================
    {
      id: "u5",
      title: "等流(シェジー公式・マニング公式)",
      weeks: "第6週",
      priority: 3,
      sections: [
        {
          heading: "等流:重力と摩擦のつり合い",
          body: "<p>長くて一様な水路では、水深も流速も変化しない[[等流]]になります。これは<b>重力の流下成分と底面の摩擦がちょうどつり合った状態</b>。自転車で坂を下るとき、空気抵抗とつり合って一定速度になるのと同じです。</p><p>つり合いを式にすると底面せん断応力は $\\tau_0 = \\rho g R I$($R$:[[径深]]、$I$:水路勾配)。ここから平均流速の公式(シェジー、マニング)が生まれます。等流は水路設計の基本状態で、後の[[不等流]]計算でも「最終的に落ち着く水深(等流水深)」として登場します。</p>"
        },
        {
          heading: "径深と水理学的に有利な断面",
          body: "<p>[[径深]] $R = A/P$ は断面積を潤辺(水が壁に触れる長さ)で割った量で、<b>断面の流れやすさ</b>を表します。同じ面積でも壁との接触が少ないほど摩擦が減って流れやすい=Rが大きい。</p><p>同じ断面積で流量を最大にする断面が[[水理学的に有利な断面]]で、長方形なら<b>水深が幅の半分(B=2h)</b>のとき。円に近い形ほど潤辺が短くなる、という直感で覚えられます。掘削量を変えずに流せる水を増やせるので、水路設計の頻出テーマです。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='80' x2='60' y2='200' stroke='var(--c-line)' stroke-width='3'/><line x1='60' y1='200' x2='300' y2='200' stroke='var(--c-line)' stroke-width='3'/><line x1='300' y1='200' x2='300' y2='80' stroke='var(--c-line)' stroke-width='3'/><rect x='60' y='110' width='240' height='90' fill='var(--c-fill1)' opacity='0.6'/><line x1='60' y1='110' x2='300' y2='110' stroke='var(--c-accent)' stroke-width='2.5'/><text x='150' y='160' font-size='16' fill='var(--c-text)'>A(断面積)</text><path d='M 60 95 L 60 200 L 300 200 L 300 95' fill='none' stroke='var(--c-accent)' stroke-width='4' stroke-dasharray='2 6'/><text x='120' y='230' font-size='15' fill='var(--c-accent)'>潤辺 P(太点線)</text><line x1='320' y1='110' x2='320' y2='200' stroke='var(--c-text)' stroke-width='1.5'/><text x='328' y='160' font-size='15' fill='var(--c-text)'>h</text><line x1='60' y1='250' x2='300' y2='250' stroke='var(--c-text)' stroke-width='1.5'/><text x='170' y='272' font-size='15' fill='var(--c-text)'>B</text><text x='60' y='50' font-size='16' fill='var(--c-text)'>径深 R = A / P(水面は含まない)</text></svg>"
        },
        {
          heading: "シェジー公式とマニング公式",
          body: "<p>等流の平均流速は、シェジー公式 $v = C\\sqrt{RI}$、または実務の主役<b>マニング公式</b> $v = \\dfrac{1}{n} R^{2/3} I^{1/2}$ で計算します。$n$ は[[粗度係数]]で、コンクリート水路 0.012〜0.015、自然河川 0.03 程度。</p><p>計算の型は決まっています:<b>① A と P から R を出す → ② マニング公式で v → ③ Q = Av</b>。逆に「流量から水深(等流水深)を求めよ」なら試行錯誤(または式変形)になります。$R^{2/3}$ の指数を書き間違えないこと、n の単位系(SI)に注意することが実戦上のポイントです。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "等流の力のつり合い(底面せん断応力)",
          latex: "\\tau_0 = \\rho g R I",
          vars: [
            { sym: "\\tau_0", meaning: "底面せん断応力", unit: "N/m²" },
            { sym: "R", meaning: "径深", unit: "m" },
            { sym: "I", meaning: "水路勾配", unit: "無次元" }
          ],
          when: "等流の成り立ちの説明、摩擦速度u*=√(gRI)の計算の元になる",
          intuition: "重力の流下成分を底面の摩擦が全部受け止めている",
          derivation: "水の重さの斜面方向成分 ρgALsinθ と底面摩擦 τ₀PL のつり合いから。A/P=R",
          blank: "\\tau_0 = \\rho g \\, ? \\, I",
          blankAnswer: "R"
        },
        {
          id: "f2",
          name: "シェジー公式",
          latex: "v = C\\sqrt{RI}",
          vars: [
            { sym: "v", meaning: "平均流速", unit: "m/s" },
            { sym: "C", meaning: "シェジー係数", unit: "m^{1/2}/s" },
            { sym: "R", meaning: "径深", unit: "m" },
            { sym: "I", meaning: "水路勾配", unit: "無次元" }
          ],
          when: "シェジー係数Cが与えられた等流計算。歴史的にマニングより先の式",
          intuition: "力のつり合いτ₀=ρgRIと「摩擦はv²に比例」から自然に√RIが出る",
          derivation: "τ₀∝v²と置いてτ₀=ρgRIに代入し、vについて解く",
          blank: "v = C\\sqrt{? \\, I}",
          blankAnswer: "R"
        },
        {
          id: "f3",
          name: "マニング公式",
          latex: "v = \\dfrac{1}{n} R^{2/3} I^{1/2}",
          vars: [
            { sym: "v", meaning: "平均流速", unit: "m/s" },
            { sym: "n", meaning: "粗度係数", unit: "s/m^{1/3}" },
            { sym: "R", meaning: "径深", unit: "m" },
            { sym: "I", meaning: "水路勾配", unit: "無次元" }
          ],
          when: "等流計算の主役。水路の流量・流速・等流水深を求める問題はほぼこれ",
          intuition: "粗いほど(n大)遅い。Rの2/3乗・Iの1/2乗という指数まで正確に",
          derivation: "シェジー係数を C=R^{1/6}/n と実験的に表したもの",
          blank: "v = \\dfrac{1}{n} R^{?} I^{1/2}",
          blankAnswer: "2/3"
        },
        {
          id: "f4",
          name: "径深",
          latex: "R = \\dfrac{A}{P}",
          vars: [
            { sym: "R", meaning: "径深", unit: "m" },
            { sym: "A", meaning: "流水断面積", unit: "m²" },
            { sym: "P", meaning: "潤辺(水が壁に接する長さ。水面は含まない)", unit: "m" }
          ],
          when: "マニング・シェジー公式の前段。長方形ならA=Bh、P=B+2h",
          intuition: "断面の流れやすさ。広くて浅い川ではR≈h(水深)になる",
          derivation: "定義。円管満流ではR=D/4になることも覚えておく",
          blank: "R = \\dfrac{A}{?}",
          blankAnswer: "P"
        },
        {
          id: "f5",
          name: "水理学的に有利な断面(長方形)",
          latex: "B = 2h",
          vars: [
            { sym: "B", meaning: "水路幅", unit: "m" },
            { sym: "h", meaning: "水深", unit: "m" }
          ],
          when: "「同じ断面積で流量最大の断面」「最も経済的な断面」と聞かれたとき",
          intuition: "幅が水深の2倍=半正方形。半円に一番近い長方形が潤辺最小",
          derivation: "A一定でP=B+2h=A/h+2hを最小化(dP/dh=0)するとA=2h²、つまりB=2h",
          blank: "B = ? \\, h",
          blankAnswer: "2"
        }
      ],
      selectQuiz: [
        {
          q: "コンクリート水路(nが既知)の勾配と断面から、等流の流速を求めたい",
          choices: ["マニング公式 v=(1/n)R^(2/3)I^(1/2)", "ダルシー・ワイスバッハの式", "共役水深の式", "Borda-Carnot式"],
          answer: 0,
          expl: "開水路の等流計算はマニング公式。R=A/Pを先に計算してから代入する",
          formulaRef: "f3"
        },
        {
          q: "シェジー係数Cが与えられた水路の等流の流速を求めたい",
          choices: ["シェジー公式 v=C√(RI)", "マニング公式", "対数則", "比エネルギー"],
          answer: 0,
          expl: "Cが与えられたらシェジー。nが与えられたらマニング。問題文の係数で使い分ける",
          formulaRef: "f2"
        },
        {
          q: "マニング公式を使う前に、断面積と潤辺から計算すべき量は?",
          choices: ["径深 R=A/P", "フルード数", "限界水深", "レイノルズ数"],
          answer: 0,
          expl: "マニング公式のRは径深。長方形断面ならA=Bh、P=B+2h(水面は潤辺に含めない)",
          formulaRef: "f4"
        },
        {
          q: "掘削断面積を変えずに流せる流量を最大にする長方形断面の条件は?",
          choices: ["B=2h(水理学的に有利な断面)", "B=h", "h=2B", "Bを無限に大きくする"],
          answer: 0,
          expl: "A一定で潤辺Pを最小化するとB=2h。潤辺最小→R最大→流速最大の論理をたどれるように",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "マニング公式による等流計算",
          variants: [
            {
              q: "幅 B = 4.0 m の長方形水路に水深 h = 1.0 m で等流が生じている。n = 0.02、勾配 I = 0.001 のとき流速 v と流量 Q を求めよ。",
              steps: [
                { label: "① 式の選択", content: "等流→マニング公式。まず $R = A/P$ を作る" },
                { label: "② 径深の計算", content: "$A = 4.0 \\times 1.0 = 4.0$ m²、$P = 4.0 + 2 \\times 1.0 = 6.0$ m、$R = \\dfrac{4.0}{6.0} = 0.667$ m" },
                { label: "③ 流速の計算", content: "$v = \\dfrac{1}{0.02} \\times 0.667^{2/3} \\times 0.001^{1/2} = 50 \\times 0.763 \\times 0.0316 = 1.21$ m/s" },
                { label: "④ 流量と確認", content: "$Q = Av = 4.0 \\times 1.21 = 4.83$ m³/s。用水路として妥当なオーダー" }
              ],
              answer: "v ≈ 1.21 m/s、Q ≈ 4.83 m³/s"
            },
            {
              q: "幅 B = 6.0 m の長方形水路に水深 h = 1.5 m で等流が生じている。n = 0.025、I = 0.0004 のとき流速 v と流量 Q を求めよ。",
              steps: [
                { label: "① 式の選択", content: "マニング公式。$R = A/P$ から" },
                { label: "② 径深の計算", content: "$A = 6.0 \\times 1.5 = 9.0$ m²、$P = 6.0 + 2 \\times 1.5 = 9.0$ m、$R = 1.0$ m(計算が楽になる設定)" },
                { label: "③ 流速の計算", content: "$v = \\dfrac{1}{0.025} \\times 1.0^{2/3} \\times 0.0004^{1/2} = 40 \\times 1 \\times 0.02 = 0.80$ m/s" },
                { label: "④ 流量と確認", content: "$Q = 9.0 \\times 0.80 = 7.2$ m³/s。粗い水路+緩勾配なので流速が遅めなのも妥当" }
              ],
              answer: "v = 0.80 m/s、Q = 7.2 m³/s"
            }
          ],
          formulaRefs: ["f3", "f4"]
        },
        {
          id: "p2",
          pattern: "水理学的に有利な断面の設計",
          variants: [
            {
              q: "断面積 A = 8.0 m² の長方形水路を、水理学的に有利な断面で設計したい。水路幅 B と水深 h、そのときの径深 R を求めよ。",
              steps: [
                { label: "① 式の選択", content: "有利な断面の条件 $B = 2h$ と $A = Bh$ を連立する" },
                { label: "② 代入", content: "$A = 2h \\times h = 2h^2 = 8.0$ より $h^2 = 4.0$" },
                { label: "③ 計算", content: "$h = 2.0$ m、$B = 4.0$ m。$P = B + 2h = 8.0$ m、$R = \\dfrac{8.0}{8.0} = 1.0$ m" },
                { label: "④ 妥当性確認", content: "有利な断面ではR=h/2になる性質がある。R=1.0=2.0/2 で一致。検算OK" }
              ],
              answer: "h = 2.0 m、B = 4.0 m、R = 1.0 m"
            },
            {
              q: "断面積 A = 18 m² の長方形水路を水理学的に有利な断面で設計するとき、B、h、R を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$B = 2h$、$A = Bh = 2h^2$" },
                { label: "② 代入", content: "$2h^2 = 18$ より $h^2 = 9$" },
                { label: "③ 計算", content: "$h = 3.0$ m、$B = 6.0$ m。$P = 6.0 + 6.0 = 12$ m、$R = \\dfrac{18}{12} = 1.5$ m" },
                { label: "④ 妥当性確認", content: "R = h/2 = 1.5 m と一致。有利断面の性質どおり" }
              ],
              answer: "h = 3.0 m、B = 6.0 m、R = 1.5 m"
            }
          ],
          formulaRefs: ["f5", "f4"]
        }
      ],
      quiz: [
        {
          q: "等流はどんな力のつり合いで生じる?",
          choices: ["圧力と粘性力", "重力の流下成分と底面摩擦", "慣性力と表面張力", "遠心力と重力"],
          answer: 1,
          expl: "水路勾配による重力の流下成分を底面せん断力が受け止めてつり合うと、加速も減速もしない等流になる",
          sectionRef: 0
        },
        {
          q: "潤辺Pに含まれないのはどれ?",
          choices: ["水路の底", "左の側壁の水に触れる部分", "右の側壁の水に触れる部分", "水面"],
          answer: 3,
          expl: "潤辺は水が固体壁に触れる長さ。水面は空気と接しているだけで摩擦がほぼないので含めない",
          sectionRef: 1
        },
        {
          q: "マニング公式で粗度係数nが大きくなると流速は?",
          choices: ["速くなる", "遅くなる", "変わらない", "勾配による"],
          answer: 1,
          expl: "v=(1/n)R^(2/3)I^(1/2)なのでnに反比例。粗い自然河川(n≈0.03)はコンクリート水路(n≈0.013)より遅い",
          sectionRef: 2
        },
        {
          q: "広くて浅い川(B≫h)の径深Rはどの値に近づく?",
          choices: ["水路幅B", "水深h", "B+h", "h/2"],
          answer: 1,
          expl: "R=Bh/(B+2h)でB≫hなら分母≈B、よってR≈h。「広い川ではR≈水深」は実務でも多用する近似",
          sectionRef: 1
        }
      ]
    },
    // ================= u6 =================
    {
      id: "u6",
      title: "不等流と水面形方程式",
      weeks: "第7週",
      priority: 3,
      sections: [
        {
          heading: "不等流:水面がゆるやかに変化する流れ",
          body: "<p>ダムで川をせき止めると、上流側の水面はダムに近づくにつれて盛り上がります(背水)。このように水深が流下方向にゆっくり変わる流れが[[不等流]]です。急変する跳水と違い、<b>断面ごとにエネルギー式が使える</b>くらい緩やかに変化するのが特徴です。</p><p>不等流の水面の形を予測する道具が[[水面形方程式]]です。「この先、水面は上がるのか下がるのか、どんなカーブを描くのか」を1本の微分方程式で答えます。河川の洪水位計算の基礎で、到達目標にも「水面形方程式を導出し、初歩的な水面形が計算できる」と明記されています。</p>"
        },
        {
          heading: "水面形方程式の構造を読む",
          body: "<p>水面形方程式は $\\dfrac{dh}{dx} = \\dfrac{i - I_e}{1 - Fr^2}$。エネルギー保存を x で微分して整理すると導けます。重要なのは<b>分子と分母の符号を読む</b>こと。</p><p>分子 $i - I_e$ は「水路勾配と摩擦(エネルギー勾配)の差」で、等流水深 $h_0$ と比べて水深が深いか浅いかで符号が決まります。分母 $1 - Fr^2$ は[[限界水深]] $h_c$ と比べて[[常流]]か[[射流]]かで符号が決まります。つまり<b>h を h₀ と h_c の2つの物差しと比べれば dh/dx の符号=水面の上がり下がりがわかる</b>、という仕組みです。</p>"
        },
        {
          heading: "緩勾配水路の水面形(M曲線)",
          body: "<p>緩勾配($h_0 > h_c$)の水路では、水深の位置によって3種類の水面形が現れます。$h > h_0 > h_c$ なら<b>M1曲線</b>(ダム背水。水面はゆるやかに上昇して水平に漸近)、$h_0 > h > h_c$ なら<b>M2曲線</b>(自由落下に向かう低下背水)、$h_0 > h_c > h$ なら<b>M3曲線</b>(ゲート下流の射流が跳水へ向かう)。</p><p>「今の水深が h₀ と h_c で作る3つの帯のどこにいるか」で曲線名が決まる、と整理すれば暗記量は激減します。試験では「この流況はどの水面形か」の分類問題が定番です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='240' x2='390' y2='260' stroke='var(--c-line)' stroke-width='3'/><line x1='30' y1='130' x2='390' y2='150' stroke='var(--c-line)' stroke-width='1.5' stroke-dasharray='7 4'/><text x='35' y='122' font-size='14' fill='var(--c-text)'>等流水深線 h₀</text><line x1='30' y1='185' x2='390' y2='205' stroke='var(--c-line)' stroke-width='1.5' stroke-dasharray='3 4'/><text x='35' y='180' font-size='14' fill='var(--c-text)'>限界水深線 h_c</text><path d='M 40 120 Q 200 95 380 60' fill='none' stroke='var(--c-accent)' stroke-width='3'/><text x='300' y='50' font-size='15' fill='var(--c-accent)'>M1(背水)</text><path d='M 40 140 Q 220 165 320 200' fill='none' stroke='var(--c-accent)' stroke-width='2.5' stroke-dasharray='8 4'/><text x='240' y='190' font-size='15' fill='var(--c-accent)'>M2</text><path d='M 40 232 Q 120 222 170 207' fill='none' stroke='var(--c-accent)' stroke-width='2.5' stroke-dasharray='2 4'/><text x='60' y='222' font-size='15' fill='var(--c-accent)'>M3</text><text x='120' y='290' font-size='15' fill='var(--c-text)'>緩勾配水路(h₀ &gt; h_c)のM曲線</text></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "水面形方程式",
          latex: "\\dfrac{dh}{dx} = \\dfrac{i - I_e}{1 - Fr^2}",
          vars: [
            { sym: "dh/dx", meaning: "水深の流下方向変化率", unit: "無次元" },
            { sym: "i", meaning: "水路床勾配", unit: "無次元" },
            { sym: "I_e", meaning: "エネルギー勾配(摩擦による損失勾配)", unit: "無次元" },
            { sym: "Fr", meaning: "フルード数", unit: "無次元" }
          ],
          when: "不等流の水面形の分類・計算。「水面は上がるか下がるか」は分子分母の符号で判定",
          intuition: "分子=勾配の貯金と摩擦の支出の差、分母=常流/射流の判定。h₀とh_cの2つの物差しで読む",
          derivation: "H=z+h+v²/2gをxで微分し、dz/dx=-i、dH/dx=-I_e、v=q/hを使って整理する",
          blank: "\\dfrac{dh}{dx} = \\dfrac{i - I_e}{1 - ?}",
          blankAnswer: "Fr^2"
        },
        {
          id: "f2",
          name: "エネルギー勾配(マニング型)",
          latex: "I_e = \\dfrac{n^2 v^2}{R^{4/3}}",
          vars: [
            { sym: "I_e", meaning: "エネルギー勾配", unit: "無次元" },
            { sym: "n", meaning: "粗度係数", unit: "s/m^{1/3}" },
            { sym: "v", meaning: "流速", unit: "m/s" },
            { sym: "R", meaning: "径深", unit: "m" }
          ],
          when: "水面形方程式の分子I_eを具体的に計算するとき。マニング公式をI_eについて解いた形",
          intuition: "等流ならI_e=i。等流水深より浅い(速い)とI_e>i、深い(遅い)とI_e<i",
          derivation: "マニング公式 v=(1/n)R^(2/3)I^(1/2) を I について解くだけ",
          blank: "I_e = \\dfrac{n^2 v^2}{R^{?}}",
          blankAnswer: "4/3"
        },
        {
          id: "f3",
          name: "平均流速と流量(断面通過)",
          latex: "v = \\dfrac{Q}{A}, \\quad q = \\dfrac{Q}{B}",
          vars: [
            { sym: "v", meaning: "断面平均流速", unit: "m/s" },
            { sym: "Q", meaning: "流量", unit: "m³/s" },
            { sym: "A", meaning: "流水断面積", unit: "m²" },
            { sym: "q", meaning: "単位幅流量", unit: "m²/s" }
          ],
          when: "水面形計算の各断面で流速・フルード数を出すとき。全単元共通の基本",
          intuition: "流量は一定、水深が変わると流速が変わる。不等流計算の駆動源",
          derivation: "連続式そのもの",
          blank: "v = \\dfrac{?}{A}",
          blankAnswer: "Q"
        }
      ],
      selectQuiz: [
        {
          q: "ダムの上流の背水がどこまで及ぶか、水面の形を計算したい",
          choices: ["水面形方程式 dh/dx=(i-I_e)/(1-Fr²)", "マニング公式のみ", "共役水深の式", "Borda-Carnot式"],
          answer: 0,
          expl: "水深が徐々に変化する不等流の水面形は水面形方程式。背水はM1曲線の代表例",
          formulaRef: "f1"
        },
        {
          q: "水面形方程式の中のエネルギー勾配I_eを具体的に計算したい(nは既知)",
          choices: ["I_e=n²v²/R^(4/3)", "I_e=f(L/D)", "I_e=Fr²", "I_e=水路勾配iと常に等しい"],
          answer: 0,
          expl: "マニング公式をIについて解いた形。等流のときだけI_e=iになる",
          formulaRef: "f2"
        },
        {
          q: "水面形方程式の分母 1-Fr² の符号は何で決まる?",
          choices: ["水深が限界水深より深いか浅いか(常流か射流か)", "水深が等流水深より深いか浅いか", "水路勾配の大きさ", "粗度係数"],
          answer: 0,
          expl: "Fr<1(h>h_c、常流)なら分母は正、Fr>1(h<h_c、射流)なら負。分子はh₀との比較で決まる",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "水面形の分類",
          variants: [
            {
              q: "緩勾配水路で等流水深 h₀ = 1.5 m、限界水深 h_c = 0.97 m である。ダムの背水で水深が h = 2.0 m になっている地点の水面形を分類し、水面が流下方向に上昇するか低下するか答えよ。",
              steps: [
                { label: "① 物差しの確認", content: "h₀=1.5 > h_c=0.97 なので緩勾配(M曲線)。h=2.0 と h₀、h_c を比較する" },
                { label: "② 帯の判定", content: "h=2.0 > h₀=1.5 > h_c=0.97 → 一番上の帯なのでM1曲線" },
                { label: "③ 符号の確認", content: "h>h₀より流速は等流より遅くI_e<i(分子は正)。h>h_cで常流、Fr<1(分母も正)" },
                { label: "④ 結論", content: "dh/dx=(正)/(正)>0。水深は流下方向に増加(水面はダムに向けて上昇し水平に漸近)。M1=背水曲線の典型" }
              ],
              answer: "M1曲線。dh/dx > 0 で水深は流下方向に増加する"
            },
            {
              q: "同じ水路(h₀ = 1.5 m、h_c = 0.97 m)で、下流端の自由落下に向かう区間の水深が h = 1.2 m の地点の水面形を分類し、水深が流下方向にどう変化するか答えよ。",
              steps: [
                { label: "① 物差しの確認", content: "緩勾配(h₀>h_c)は同じ。h=1.2 の位置を確認する" },
                { label: "② 帯の判定", content: "h₀=1.5 > h=1.2 > h_c=0.97 → 真ん中の帯なのでM2曲線" },
                { label: "③ 符号の確認", content: "h<h₀より流速は等流より速くI_e>i(分子は負)。h>h_cで常流(分母は正)" },
                { label: "④ 結論", content: "dh/dx=(負)/(正)<0。水深は流下方向に減少し、下流端で限界水深に近づく。M2=低下背水曲線" }
              ],
              answer: "M2曲線。dh/dx < 0 で水深は流下方向に減少する"
            }
          ],
          formulaRefs: ["f1"]
        },
        {
          id: "p2",
          pattern: "水面形方程式の符号計算",
          variants: [
            {
              q: "ある断面で水路勾配 i = 0.001、エネルギー勾配 I_e = 0.0004、フルード数 Fr = 0.4 である。dh/dx を求め、水面の変化傾向を述べよ。",
              steps: [
                { label: "① 式の選択", content: "$\\dfrac{dh}{dx} = \\dfrac{i - I_e}{1 - Fr^2}$ に数値を入れるだけ" },
                { label: "② 代入", content: "分子 $= 0.001 - 0.0004 = 0.0006$。分母 $= 1 - 0.16 = 0.84$" },
                { label: "③ 計算", content: "$\\dfrac{dh}{dx} = \\dfrac{0.0006}{0.84} = 7.1 \\times 10^{-4}$" },
                { label: "④ 解釈", content: "dh/dx>0なので水深は流下方向に増加。1km(1000m)進むと約0.7m深くなるオーダー。M1型の挙動" }
              ],
              answer: "dh/dx ≈ 7.1×10⁻⁴ > 0(水深は流下方向に増加)"
            },
            {
              q: "ある断面で i = 0.001、I_e = 0.0025、Fr = 0.6 のとき、dh/dx を求め、水面の変化傾向を述べよ。",
              steps: [
                { label: "① 式の選択", content: "$\\dfrac{dh}{dx} = \\dfrac{i - I_e}{1 - Fr^2}$" },
                { label: "② 代入", content: "分子 $= 0.001 - 0.0025 = -0.0015$。分母 $= 1 - 0.36 = 0.64$" },
                { label: "③ 計算", content: "$\\dfrac{dh}{dx} = \\dfrac{-0.0015}{0.64} = -2.3 \\times 10^{-3}$" },
                { label: "④ 解釈", content: "dh/dx<0で水深は流下方向に減少。摩擦の支出(I_e)が勾配の収入(i)を上回っている=等流水深より浅く速い流れ。M2型の挙動" }
              ],
              answer: "dh/dx ≈ -2.3×10⁻³ < 0(水深は流下方向に減少)"
            }
          ],
          formulaRefs: ["f1", "f2"]
        }
      ],
      quiz: [
        {
          q: "等流のとき、水面形方程式のdh/dxはいくつになる?",
          choices: ["正の値", "負の値", "0(I_e=iだから)", "無限大"],
          answer: 2,
          expl: "等流は摩擦と重力がつり合った状態でI_e=i。分子がゼロになりdh/dx=0、水深は変化しない",
          sectionRef: 1
        },
        {
          q: "ダム上流の背水(M1曲線)が生じる水深の条件は?",
          choices: ["h > h₀ > h_c", "h₀ > h > h_c", "h₀ > h_c > h", "h = h_c"],
          answer: 0,
          expl: "M1は一番上の帯。水深が等流水深よりも限界水深よりも大きい常流で、水面は上昇して水平に漸近する",
          sectionRef: 2
        },
        {
          q: "水面形方程式で水深が限界水深(Fr=1)に近づくと何が起こる?",
          choices: ["dh/dxがゼロに近づく", "分母がゼロに近づきdh/dxが非常に大きくなる(水面が急変)", "水面が必ず水平になる", "流量が増える"],
          answer: 1,
          expl: "Fr→1で分母1-Fr²→0。dh/dx→∞は「緩やかな変化」の仮定が破れるサイン。実際には跳水などの急変が起こる",
          sectionRef: 1
        },
        {
          q: "不等流と跳水の違いとして正しいのは?",
          choices: ["不等流は水深が急変する", "不等流は水深が緩やかに変化し、断面ごとにエネルギー式が使える", "跳水はエネルギー損失がない", "同じ現象の別名"],
          answer: 1,
          expl: "不等流(漸変流)は緩やかな変化でエネルギー的に扱える。跳水は急変流で運動量(比力)で扱う",
          sectionRef: 0
        }
      ]
    },
    // ================= u7 =================
    {
      id: "u7",
      title: "次元解析と相似則",
      weeks: "第8・9週",
      priority: 2,
      sections: [
        {
          heading: "次元解析:単位の整合性から式を推理する",
          body: "<p>[[次元解析]]は、物理量の次元(質量M・長さL・時間T)のつじつまだけから式の形を推定する方法です。<b>レイリー法</b>では「求めたい量=関係しそうな量のべき乗の積」と仮定し、両辺の次元が合うように指数を決めます。</p><p>たとえば抗力 F が密度ρ・流速v・代表長さLで決まるとすれば、$F = k\\rho^a v^b L^c$ と置いて M, L, T の3本の方程式を解くと $F \\propto \\rho v^2 L^2$ が出ます。実験する前に式の骨格がわかる、料理の前にレシピの分量比だけ先に決まる、というイメージです。</p>"
        },
        {
          heading: "バッキンガムのπ定理",
          body: "<p>変数が多くなるとレイリー法は大変です。そこで[[π定理]]:<b>n個の変数と m個の基本次元があれば、現象は n−m 個の無次元数(π)で記述できる</b>。手順は ①変数を列挙(n個) ②基本次元を数える(通常m=3) ③繰り返し変数をm個選ぶ ④残りの変数と組み合わせて無次元数を作る、の4ステップです。</p><p>変数6個・次元3個なら無次元数は3個に減り、実験の整理が劇的に楽になります。[[フルード数]]も[[レイノルズ数]]も、こうして生まれる無次元数の代表です。</p>"
        },
        {
          heading: "相似則:模型実験を実物に換算する",
          body: "<p>ダムや河川の模型実験の結果を実物(原型)に換算するルールが[[相似則]]です。<b>模型と原型で支配的な無次元数を一致させる</b>のが原則。重力が支配する開水路・波はフルード数を一致させる<b>フルード相似則</b>、粘性が支配する管内流はレイノルズ数を一致させる<b>レイノルズ相似則</b>を使います。</p><p>フルード相似則で縮尺 $L_r$(模型/原型)のとき、流速比は $\\sqrt{L_r}$、時間比も $\\sqrt{L_r}$、流量比は $L_r^{5/2}$。<b>両方の相似則を同時に満たすことは(同じ流体では)できない</b>ので、支配する力を見極めて選ぶ、というのが試験の頻出論点です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='50' width='200' height='110' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><text x='75' y='40' font-size='15' fill='var(--c-text)'>原型(実物の川)</text><path d='M 40 90 Q 130 70 220 95' fill='none' stroke='var(--c-accent)' stroke-width='3'/><text x='95' y='140' font-size='14' fill='var(--c-text)'>v_p, L_p</text><rect x='280' y='90' width='80' height='45' fill='var(--c-fill2)' stroke='var(--c-line)' stroke-width='2'/><text x='270' y='80' font-size='15' fill='var(--c-text)'>模型(1/25)</text><path d='M 285 105 Q 320 98 355 107' fill='none' stroke='var(--c-accent)' stroke-width='2'/><text x='288' y='128' font-size='13' fill='var(--c-text)'>v_m, L_m</text><path d='M 240 105 L 272 105' stroke='var(--c-text)' stroke-width='2'/><path d='M 272 105 L 263 100 M 272 105 L 263 110' stroke='var(--c-text)' stroke-width='2' fill='none'/><text x='40' y='210' font-size='15' fill='var(--c-text)'>フルード相似則: Fr_m = Fr_p を一致させる</text><text x='40' y='240' font-size='15' fill='var(--c-accent)'>流速比 = √L_r、流量比 = L_r^(5/2)</text><text x='40' y='270' font-size='14' fill='var(--c-text)'>(重力支配の開水路・波の実験で使用)</text></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "レイリー法(抗力の例)",
          latex: "F = k \\rho^a v^b L^c \\; \\Rightarrow \\; F \\propto \\rho v^2 L^2",
          vars: [
            { sym: "F", meaning: "抗力(次元 MLT⁻²)", unit: "N" },
            { sym: "a, b, c", meaning: "次元の整合から決める指数", unit: "-" },
            { sym: "k", meaning: "無次元定数(実験で決める)", unit: "無次元" }
          ],
          when: "「次元解析により式の形を求めよ」でπ定理を使うまでもない少変数のとき",
          intuition: "M, L, Tそれぞれの帳尻を合わせる連立方程式。M:a=1、T:b=2、L:c=2の順に決まる",
          derivation: "[F]=MLT⁻²、[ρ]=ML⁻³、[v]=LT⁻¹、[L]=L を代入し指数比較",
          blank: "F \\propto \\rho \\, v^{?} L^2",
          blankAnswer: "2"
        },
        {
          id: "f2",
          name: "バッキンガムのπ定理",
          latex: "\\text{無次元数の個数} = n - m",
          vars: [
            { sym: "n", meaning: "現象に関係する変数の数", unit: "個" },
            { sym: "m", meaning: "基本次元の数(通常 M,L,T の3)", unit: "個" }
          ],
          when: "変数が多い現象を無次元数で整理するとき。「無次元数はいくつ作れるか」も頻出",
          intuition: "変数n個から次元のm本の制約を引いた自由度が無次元数の数",
          derivation: "定理として記憶。手順:変数列挙→次元数確認→繰り返し変数m個→残りでπを作る",
          blank: "\\text{無次元数の個数} = n - ?",
          blankAnswer: "m"
        },
        {
          id: "f3",
          name: "抗力の一般式(抗力係数)",
          latex: "F_D = \\dfrac{1}{2} C_D \\rho A v^2",
          vars: [
            { sym: "F_D", meaning: "抗力", unit: "N" },
            { sym: "C_D", meaning: "抗力係数(無次元、Reの関数)", unit: "無次元" },
            { sym: "A", meaning: "投影面積", unit: "m²" }
          ],
          when: "橋脚や物体に働く流体力の計算。次元解析の結論を実用形にしたもの",
          intuition: "動圧(1/2)ρv²×面積×形の係数。次元解析のρv²L²と同じ骨格",
          derivation: "レイリー法の結果F∝ρv²L²に、係数C_Dと面積Aを当てはめた実用形",
          blank: "F_D = \\dfrac{1}{2} C_D \\rho A \\, ?",
          blankAnswer: "v^2"
        },
        {
          id: "f4",
          name: "フルード相似則の換算比",
          latex: "v_r = \\sqrt{L_r}, \\quad t_r = \\sqrt{L_r}, \\quad Q_r = L_r^{5/2}",
          vars: [
            { sym: "L_r", meaning: "長さの縮尺(模型/原型)", unit: "無次元" },
            { sym: "v_r", meaning: "流速比", unit: "無次元" },
            { sym: "Q_r", meaning: "流量比", unit: "無次元" }
          ],
          when: "開水路・波・ダム放流など重力支配の模型実験の換算。縮尺から各量の比を出す",
          intuition: "Fr=v/√(gL)を一致させるとv∝√L。Q=Av∝L²×√L=L^(5/2)",
          derivation: "Fr_m=Fr_pでg共通なら v_m/v_p=√(L_m/L_p)。流量は面積×流速",
          blank: "Q_r = L_r^{?}",
          blankAnswer: "5/2"
        },
        {
          id: "f5",
          name: "レイノルズ相似則",
          latex: "Re_m = Re_p \\; \\Rightarrow \\; v_r = \\dfrac{\\nu_r}{L_r}",
          vars: [
            { sym: "Re", meaning: "レイノルズ数 vL/ν", unit: "無次元" },
            { sym: "\\nu_r", meaning: "動粘性係数の比(模型/原型)", unit: "無次元" }
          ],
          when: "管内流・潜水体など粘性支配の模型実験。同じ流体(ν_r=1)なら模型の方が速くする必要がある",
          intuition: "模型を1/10にしたら流速は10倍にしないとReが揃わない。フルードと同時成立は不可能",
          derivation: "v_m L_m/ν_m = v_p L_p/ν_p を流速比について解く",
          blank: "v_r = \\dfrac{\\nu_r}{?}",
          blankAnswer: "L_r"
        }
      ],
      selectQuiz: [
        {
          q: "河川の1/25模型実験を計画する。模型と原型で一致させるべき無次元数は?",
          choices: ["フルード数(重力支配だから)", "レイノルズ数", "マッハ数", "粗度係数"],
          answer: 0,
          expl: "自由水面のある開水路の流れは重力が支配する。フルード相似則を採用する",
          formulaRef: "f4"
        },
        {
          q: "変数が6個、基本次元が3個(M,L,T)の現象。作れる独立な無次元数の個数は?",
          choices: ["π定理より 6-3=3個", "6個", "18個", "2個"],
          answer: 0,
          expl: "π定理:無次元数の個数=n-m=6-3=3。定理の適用そのものを問う頻出パターン",
          formulaRef: "f2"
        },
        {
          q: "橋脚に働く流体力の式の形を、実験なしに次元の整合性から推定したい",
          choices: ["レイリー法(F=kρ^a v^b L^c と置く)", "マニング公式", "ベルヌーイの定理", "水面形方程式"],
          answer: 0,
          expl: "少数の変数で式の形を推定するのはレイリー法。指数a,b,cをM,L,Tの整合で決める",
          formulaRef: "f1"
        },
        {
          q: "管内の層流の模型実験(同じ水を使用)で一致させるべき無次元数は?",
          choices: ["レイノルズ数(粘性支配だから)", "フルード数", "抗力係数", "π"],
          answer: 0,
          expl: "自由水面がなく粘性が支配する管内流はレイノルズ相似則。模型が小さいほど流速を上げる必要がある",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "レイリー法による式の導出",
          variants: [
            {
              q: "物体に働く抗力 F が密度 ρ、流速 v、代表長さ L で決まるとして、レイリー法で F の式の形を求めよ。",
              steps: [
                { label: "① 仮定を置く", content: "$F = k\\rho^a v^b L^c$ と置く。次元は $[F]=MLT^{-2}$、$[\\rho]=ML^{-3}$、$[v]=LT^{-1}$、$[L]=L$" },
                { label: "② 次元の方程式", content: "M: $1 = a$。T: $-2 = -b$。L: $1 = -3a + b + c$" },
                { label: "③ 指数を解く", content: "$a=1$、$b=2$、$c = 1+3-2 = 2$" },
                { label: "④ 結論と確認", content: "$F = k\\rho v^2 L^2$。抗力の実用式 $F_D=\\frac{1}{2}C_D\\rho Av^2$ と同じ骨格になっており妥当" }
              ],
              answer: "F = kρv²L²(F ∝ ρv²L²)"
            },
            {
              q: "単振り子の周期 T が振り子の長さ L と重力加速度 g で決まるとして、レイリー法で T の式の形を求めよ。",
              steps: [
                { label: "① 仮定を置く", content: "$T = kL^a g^b$ と置く。次元は $[T]=T$、$[L]=L$、$[g]=LT^{-2}$" },
                { label: "② 次元の方程式", content: "T: $1 = -2b$。L: $0 = a + b$" },
                { label: "③ 指数を解く", content: "$b = -\\dfrac{1}{2}$、$a = \\dfrac{1}{2}$" },
                { label: "④ 結論と確認", content: "$T = k\\sqrt{L/g}$。物理で習う $T=2\\pi\\sqrt{L/g}$ と一致(k=2πは次元解析では決まらない)" }
              ],
              answer: "T = k√(L/g)"
            }
          ],
          formulaRefs: ["f1"]
        },
        {
          id: "p2",
          pattern: "フルード相似則による換算",
          variants: [
            {
              q: "縮尺 1/25 の河川模型でフルード相似則を用いる。原型の流速が 5.0 m/s のとき模型の流速を求めよ。また模型の流量 0.02 m³/s は原型の流量いくらに相当するか。",
              steps: [
                { label: "① 換算比の計算", content: "$L_r = 1/25$。流速比 $v_r = \\sqrt{L_r} = 1/5$、流量比 $Q_r = L_r^{5/2} = (1/25)^{5/2} = 1/3125$" },
                { label: "② 流速の換算", content: "$v_m = v_p \\times v_r = 5.0 \\times \\dfrac{1}{5} = 1.0$ m/s" },
                { label: "③ 流量の換算", content: "$Q_p = Q_m \\div Q_r = 0.02 \\times 3125 = 62.5$ m³/s" },
                { label: "④ 妥当性確認", content: "25^(5/2)=25²×5=3125 で検算OK。中小河川の流量として62.5 m³/sは妥当なオーダー" }
              ],
              answer: "模型流速 1.0 m/s、原型流量 62.5 m³/s"
            },
            {
              q: "縮尺 1/100 のダム模型でフルード相似則を用いる。原型の流速 8.0 m/s に対応する模型の流速と、模型で測った現象の継続時間 30 秒が原型で何秒に相当するかを求めよ。",
              steps: [
                { label: "① 換算比の計算", content: "$L_r = 1/100$。流速比 $v_r = \\sqrt{1/100} = 1/10$、時間比 $t_r = \\sqrt{L_r} = 1/10$" },
                { label: "② 流速の換算", content: "$v_m = 8.0 \\times \\dfrac{1}{10} = 0.80$ m/s" },
                { label: "③ 時間の換算", content: "$t_p = t_m \\div t_r = 30 \\times 10 = 300$ 秒" },
                { label: "④ 妥当性確認", content: "模型の30秒=原型の5分。模型では現象が速く進む(時間も√L_r倍)という感覚と一致" }
              ],
              answer: "模型流速 0.80 m/s、原型時間 300 秒(5分)"
            }
          ],
          formulaRefs: ["f4"]
        }
      ],
      quiz: [
        {
          q: "フルード相似則とレイノルズ相似則を同じ流体で同時に満たすことは?",
          choices: ["いつでもできる", "縮尺1以外では原理的にできない", "流速を上げればできる", "温度を変えれば必ずできる"],
          answer: 1,
          expl: "フルードはv∝√L、レイノルズはv∝1/Lを要求し矛盾する。だから支配的な力を見極めて一方を選ぶ",
          sectionRef: 2
        },
        {
          q: "π定理で「繰り返し変数」を選ぶ個数は?",
          choices: ["変数の総数nと同じ", "基本次元の数mと同じ", "常に1個", "n-m個"],
          answer: 1,
          expl: "繰り返し変数は基本次元の数(通常3個)だけ選び、残りの変数と組み合わせてn-m個のπを作る",
          sectionRef: 1
        },
        {
          q: "次元解析でわからないのはどれ?",
          choices: ["式に現れる変数の組合せ", "各変数の指数", "無次元の比例定数の値", "無次元数の個数"],
          answer: 2,
          expl: "次元解析は式の「形」までしか決められない。比例定数(kや2πなど)は実験か理論で決める",
          sectionRef: 0
        },
        {
          q: "開水路の模型実験でフルード相似則を選ぶ理由は?",
          choices: ["粘性力が支配的だから", "自由水面があり重力が支配的だから", "計算が簡単だから", "表面張力が支配的だから"],
          answer: 1,
          expl: "自由水面の変形(波・水深変化)は重力との戦い。重力支配の現象はフルード数を合わせる",
          sectionRef: 2
        }
      ]
    },
    // ================= u8 =================
    {
      id: "u8",
      title: "流れの記述と粘性流体(オイラー方程式・N-S方程式・対数則)",
      weeks: "第10〜13週",
      priority: 2,
      sections: [
        {
          heading: "ラグランジュとオイラー:流れの2つの見方",
          body: "<p>流れの記述には2つの立場があります。[[ラグランジュ的記述]]は<b>水の粒子を追いかける</b>見方(川に流したボールをずっと目で追う)。[[オイラー的記述]]は<b>場所を固定して観測する</b>見方(橋の上から真下の流速を測り続ける)。水理学では観測に対応しやすいオイラー的記述が標準です。</p><p>オイラーの立場では、粒子の加速度は $\\dfrac{Du}{Dt} = \\dfrac{\\partial u}{\\partial t} + u\\dfrac{\\partial u}{\\partial x} + v\\dfrac{\\partial u}{\\partial y} + w\\dfrac{\\partial u}{\\partial z}$ という<b>時間微分+移流項</b>の形になります。定常流でも場所によって速度が違えば加速度がある、というのが要点です。</p>"
        },
        {
          heading: "オイラー方程式からベルヌーイへ",
          body: "<p>粘性のない完全流体にニュートンの運動法則を適用したのが<b>オイラー方程式</b>:$\\dfrac{Du}{Dt} = X - \\dfrac{1}{\\rho}\\dfrac{\\partial p}{\\partial x}$(x成分。Xは単位質量あたりの外力)。「加速度=外力+圧力勾配」というシンプルな構造です。</p><p>これを<b>定常・流線に沿って・重力場</b>という条件で積分すると、$\\dfrac{v^2}{2g} + \\dfrac{p}{\\rho g} + z = \\text{一定}$、つまりベルヌーイの定理が導けます。到達目標(6)「ベルヌイ式を導出できる」はこの流れ。<b>ベルヌーイは仮定(非粘性・定常・流線上)つきの定理</b>だと理解することが導出問題の核心です。</p>"
        },
        {
          heading: "ナヴィエ・ストークス方程式:粘性を加える",
          body: "<p>実在の流体には粘性があります。オイラー方程式に粘性項 $\\nu \\nabla^2 u$ を加えたのが[[ナヴィエ・ストークス方程式]]です(x成分):$$\\dfrac{Du}{Dt} = X - \\dfrac{1}{\\rho}\\dfrac{\\partial p}{\\partial x} + \\nu\\left(\\dfrac{\\partial^2 u}{\\partial x^2} + \\dfrac{\\partial^2 u}{\\partial y^2} + \\dfrac{\\partial^2 u}{\\partial z^2}\\right)$$</p><p>「<b>加速度=外力+圧力勾配+粘性拡散</b>」と4つの部品で覚えます。[[乱流]]では速度を平均+変動に分けて平均化した<b>レイノルズ方程式</b>を使い、そこにレイノルズ応力(乱れによる見かけのせん断力)が現れます。到達目標(5)は「この式を書けること」なので、各項の物理的意味とセットで暗記しましょう。</p>"
        },
        {
          heading: "対数則:乱流の流速分布",
          body: "<p>開水路や河川の壁面近くの流速分布は[[対数則]] $\\dfrac{u}{u_*} = \\dfrac{1}{\\kappa}\\ln\\dfrac{z}{z_0}$ に従います。$u_*$ は[[摩擦速度]]($=\\sqrt{gRI}$)、κ≈0.4はカルマン定数。プラントルの<b>混合距離モデル</b>(乱れの渦が運動量を運ぶ距離 $l=\\kappa z$ と仮定)から導かれます。</p><p>壁の近くは遅く、水面に向かって対数的に速くなる——川の流速を深さ方向に測るとこのカーブが現れます。「壁から離れるほど大きい渦が運動量を混ぜられる」というイメージを持てば、$l = \\kappa z$ の仮定も自然に感じられるはずです。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='260' x2='380' y2='260' stroke='var(--c-line)' stroke-width='3'/><text x='300' y='283' font-size='14' fill='var(--c-text)'>水路床(壁)</text><line x1='60' y1='260' x2='60' y2='30' stroke='var(--c-line)' stroke-width='2'/><text x='30' y='45' font-size='15' fill='var(--c-text)'>z</text><path d='M 60 255 Q 100 220 130 170 Q 160 115 180 75 L 195 45' fill='none' stroke='var(--c-accent)' stroke-width='3'/><line x1='60' y1='220' x2='108' y2='220' stroke='var(--c-line)' stroke-width='1.5'/><path d='M 108 220 L 99 215 M 108 220 L 99 225' stroke='var(--c-line)' stroke-width='1.5' fill='none'/><line x1='60' y1='150' x2='143' y2='150' stroke='var(--c-line)' stroke-width='1.5'/><path d='M 143 150 L 134 145 M 143 150 L 134 155' stroke='var(--c-line)' stroke-width='1.5' fill='none'/><line x1='60' y1='70' x2='183' y2='70' stroke='var(--c-line)' stroke-width='1.5'/><path d='M 183 70 L 174 65 M 183 70 L 174 75' stroke='var(--c-line)' stroke-width='1.5' fill='none'/><text x='210' y='60' font-size='15' fill='var(--c-accent)'>u(z):対数分布</text><text x='210' y='150' font-size='14' fill='var(--c-text)'>壁から離れるほど</text><text x='210' y='172' font-size='14' fill='var(--c-text)'>対数的に速くなる</text><text x='210' y='220' font-size='14' fill='var(--c-text)'>u/u* = (1/κ)ln(z/z₀)</text></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "オイラー方程式(x成分)",
          latex: "\\dfrac{\\partial u}{\\partial t} + u\\dfrac{\\partial u}{\\partial x} + v\\dfrac{\\partial u}{\\partial y} + w\\dfrac{\\partial u}{\\partial z} = X - \\dfrac{1}{\\rho}\\dfrac{\\partial p}{\\partial x}",
          vars: [
            { sym: "u, v, w", meaning: "x, y, z方向の流速成分", unit: "m/s" },
            { sym: "X", meaning: "単位質量あたりの外力(重力など)", unit: "m/s²" },
            { sym: "p", meaning: "圧力", unit: "Pa" }
          ],
          when: "完全流体(粘性なし)の運動方程式を書けと言われたら。ベルヌーイ導出の出発点",
          intuition: "左辺=加速度(時間変化+移流)、右辺=外力+圧力勾配。F=maの流体版",
          derivation: "微小流体要素にニュートンの第2法則を適用し、粘性を無視した形",
          blank: "\\dfrac{Du}{Dt} = X - \\dfrac{1}{\\rho}\\dfrac{\\partial ?}{\\partial x}",
          blankAnswer: "p"
        },
        {
          id: "f2",
          name: "ナヴィエ・ストークス方程式(x成分)",
          latex: "\\dfrac{Du}{Dt} = X - \\dfrac{1}{\\rho}\\dfrac{\\partial p}{\\partial x} + \\nu \\nabla^2 u",
          vars: [
            { sym: "Du/Dt", meaning: "物質微分(時間項+移流項)", unit: "m/s²" },
            { sym: "\\nu", meaning: "動粘性係数", unit: "m²/s" },
            { sym: "\\nabla^2 u", meaning: "uのラプラシアン(粘性拡散)", unit: "1/(m·s)⁻¹相当" }
          ],
          when: "到達目標「N-S方程式を記述できる」。オイラー方程式+粘性項の形で書く",
          intuition: "加速度=外力+圧力勾配+粘性拡散。オイラー方程式に粘性のブレーキを足しただけ",
          derivation: "微小要素に働くせん断応力(ニュートンの粘性法則)を運動方程式に加える",
          blank: "\\dfrac{Du}{Dt} = X - \\dfrac{1}{\\rho}\\dfrac{\\partial p}{\\partial x} + ? \\, \\nabla^2 u",
          blankAnswer: "\\nu"
        },
        {
          id: "f3",
          name: "ベルヌーイの定理(オイラー方程式の積分)",
          latex: "\\dfrac{v^2}{2g} + \\dfrac{p}{\\rho g} + z = \\text{const}",
          vars: [
            { sym: "v^2/2g", meaning: "速度水頭", unit: "m" },
            { sym: "p/\\rho g", meaning: "圧力水頭", unit: "m" },
            { sym: "z", meaning: "位置水頭", unit: "m" }
          ],
          when: "「オイラー方程式からベルヌイ式を導出せよ」。定常・流線に沿う・非粘性の3条件を明記する",
          intuition: "エネルギー保存。3つの水頭の合計(全水頭)が流線上で一定",
          derivation: "オイラー方程式を定常条件で流線に沿って積分。外力は重力ポテンシャルから",
          blank: "\\dfrac{v^2}{2g} + \\dfrac{?}{\\rho g} + z = \\text{const}",
          blankAnswer: "p"
        },
        {
          id: "f4",
          name: "動粘性係数",
          latex: "\\nu = \\dfrac{\\mu}{\\rho}",
          vars: [
            { sym: "\\nu", meaning: "動粘性係数(水:約1.0×10⁻⁶)", unit: "m²/s" },
            { sym: "\\mu", meaning: "粘性係数", unit: "Pa·s" },
            { sym: "\\rho", meaning: "密度", unit: "kg/m³" }
          ],
          when: "レイノルズ数の計算、N-S方程式の粘性項。μとνの違いを問う問題も出る",
          intuition: "μは「ねばさ」そのもの、νは「密度あたりのねばさ」=運動量の拡散のしやすさ",
          derivation: "定義。N-S方程式をρで割ると自然にν=μ/ρが現れる",
          blank: "\\nu = \\dfrac{\\mu}{?}",
          blankAnswer: "\\rho"
        },
        {
          id: "f5",
          name: "摩擦速度",
          latex: "u_* = \\sqrt{\\dfrac{\\tau_0}{\\rho}} = \\sqrt{gRI}",
          vars: [
            { sym: "u_*", meaning: "摩擦速度", unit: "m/s" },
            { sym: "\\tau_0", meaning: "底面せん断応力", unit: "N/m²" },
            { sym: "R", meaning: "径深(広い水路ではhで近似)", unit: "m" }
          ],
          when: "対数則の計算の前段。「摩擦速度を求めよ」は等流の力のつり合いτ₀=ρgRIとセット",
          intuition: "底面の摩擦の強さを速度の単位で表したスケール。実際の流速の1/10〜1/20程度",
          derivation: "τ₀=ρgRIをρで割って平方根を取る",
          blank: "u_* = \\sqrt{g \\, ? \\, I}",
          blankAnswer: "R"
        },
        {
          id: "f6",
          name: "対数則(流速分布)",
          latex: "\\dfrac{u}{u_*} = \\dfrac{1}{\\kappa} \\ln \\dfrac{z}{z_0}",
          vars: [
            { sym: "u", meaning: "高さzでの流速", unit: "m/s" },
            { sym: "\\kappa", meaning: "カルマン定数(≈0.4)", unit: "無次元" },
            { sym: "z_0", meaning: "流速がゼロになる基準高さ", unit: "m" }
          ],
          when: "乱流の流速分布。「壁面近くの流速分布の形は?」→対数分布と即答できるように",
          intuition: "壁から離れるほど対数的に速い。両対数でなく片対数グラフで直線になる",
          derivation: "混合距離l=κzを仮定し、τ=ρl²(du/dz)²=τ₀を積分すると対数が出る",
          blank: "\\dfrac{u}{u_*} = \\dfrac{1}{?} \\ln \\dfrac{z}{z_0}",
          blankAnswer: "\\kappa"
        },
        {
          id: "f7",
          name: "混合距離モデル(プラントル)",
          latex: "\\tau = \\rho l^2 \\left| \\dfrac{du}{dz} \\right| \\dfrac{du}{dz}, \\quad l = \\kappa z",
          vars: [
            { sym: "\\tau", meaning: "乱流せん断応力(レイノルズ応力)", unit: "N/m²" },
            { sym: "l", meaning: "混合距離(渦が運動量を運ぶ距離)", unit: "m" }
          ],
          when: "対数則の導出過程を問われたとき。「混合距離モデルを説明せよ」にも対応",
          intuition: "乱れの渦がl だけ移動して運動量を混ぜる。壁の近くは渦が小さいのでl=κzと壁からの距離に比例",
          derivation: "分子の平均自由行程のアナロジーで乱流の運動量輸送をモデル化",
          blank: "l = ? \\, z",
          blankAnswer: "\\kappa"
        }
      ],
      selectQuiz: [
        {
          q: "粘性流体の運動方程式(N-S方程式)を書けと言われた。オイラー方程式に加えるべき項は?",
          choices: ["粘性項 ν∇²u", "移流項", "圧力勾配項", "重力項"],
          answer: 0,
          expl: "N-S=オイラー+粘性拡散項ν∇²u。「加速度=外力+圧力勾配+粘性」の4部品で覚える",
          formulaRef: "f2"
        },
        {
          q: "オイラー方程式からベルヌーイの定理を導くときに必要な条件の組合せは?",
          choices: ["定常・流線に沿う・非粘性", "非定常・乱流・粘性あり", "等流・層流のみ", "圧縮性流体であること"],
          answer: 0,
          expl: "この3条件(+重力場)でオイラー方程式を流線に沿って積分するとベルヌーイになる。条件の明記が採点ポイント",
          formulaRef: "f3"
        },
        {
          q: "開水路の底面近くの乱流の流速分布を表す式は?",
          choices: ["対数則 u/u*=(1/κ)ln(z/z₀)", "マニング公式", "ベルヌーイの定理", "Borda-Carnot式"],
          answer: 0,
          expl: "壁面乱流の流速分布は対数則。u*(摩擦速度)とκ(カルマン定数0.4)が部品",
          formulaRef: "f6"
        },
        {
          q: "対数則の計算に必要な摩擦速度u*を、水深と勾配から求めたい",
          choices: ["u*=√(gRI)", "u*=v/2", "u*=C√(RI)", "u*=(1/n)R^(2/3)"],
          answer: 0,
          expl: "τ₀=ρgRIから u*=√(τ₀/ρ)=√(gRI)。広い水路ならR≈hで√(ghI)",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "摩擦速度の計算",
          variants: [
            {
              q: "水深 h = 2.0 m、勾配 I = 0.001 の広い(R ≈ h)開水路の摩擦速度 u* を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "広い水路なのでR≈h。$u_* = \\sqrt{ghI}$ を使う" },
                { label: "② 代入", content: "$u_* = \\sqrt{9.8 \\times 2.0 \\times 0.001} = \\sqrt{0.0196}$" },
                { label: "③ 計算", content: "$= 0.14$ m/s(0.14²=0.0196 で検算一発)" },
                { label: "④ 妥当性確認", content: "実際の流速(1〜2m/s程度)の1/10前後になるのが摩擦速度の相場。0.14 m/sは妥当" }
              ],
              answer: "u* = 0.14 m/s"
            },
            {
              q: "水深 h = 1.0 m、勾配 I = 0.0004 の広い開水路の摩擦速度 u* を求めよ(g = 9.8 m/s²)。",
              steps: [
                { label: "① 式の選択", content: "$u_* = \\sqrt{ghI}$(R≈h)" },
                { label: "② 代入", content: "$u_* = \\sqrt{9.8 \\times 1.0 \\times 0.0004} = \\sqrt{0.00392}$" },
                { label: "③ 計算", content: "$= 0.063$ m/s" },
                { label: "④ 妥当性確認", content: "緩勾配・浅めなのでu*も小さい。cmオーダー/秒の摩擦速度は緩流河川で典型的" }
              ],
              answer: "u* ≈ 0.063 m/s"
            }
          ],
          formulaRefs: ["f5"]
        },
        {
          id: "p2",
          pattern: "レイノルズ数による層流・乱流判定",
          variants: [
            {
              q: "直径 D = 0.05 m の円管に流速 v = 2.0 m/s で水(ν = 1.0×10⁻⁶ m²/s)が流れる。レイノルズ数を求め、層流か乱流か判定せよ。",
              steps: [
                { label: "① 式の選択", content: "円管のレイノルズ数 $Re = \\dfrac{vD}{\\nu}$" },
                { label: "② 代入", content: "$Re = \\dfrac{2.0 \\times 0.05}{1.0 \\times 10^{-6}} = \\dfrac{0.1}{10^{-6}}$" },
                { label: "③ 計算", content: "$Re = 1.0 \\times 10^5$" },
                { label: "④ 判定", content: "10⁵ ≫ 4000 なので完全に乱流。水道管など実用の管流れはほぼ乱流になる" }
              ],
              answer: "Re = 1.0×10⁵(乱流)"
            },
            {
              q: "直径 D = 0.01 m の細管に流速 v = 0.02 m/s で水(ν = 1.0×10⁻⁶ m²/s)が流れる。レイノルズ数を求め、層流か乱流か判定せよ。",
              steps: [
                { label: "① 式の選択", content: "$Re = \\dfrac{vD}{\\nu}$" },
                { label: "② 代入", content: "$Re = \\dfrac{0.02 \\times 0.01}{1.0 \\times 10^{-6}} = \\dfrac{2 \\times 10^{-4}}{10^{-6}}$" },
                { label: "③ 計算", content: "$Re = 200$" },
                { label: "④ 判定", content: "200 < 2000 なので層流。このときf=64/Re=0.32と理論値でfも求められる" }
              ],
              answer: "Re = 200(層流)"
            }
          ],
          formulaRefs: ["f4"]
        }
      ],
      quiz: [
        {
          q: "橋の上から川の1点の流速を測り続けるのはどちらの記述?",
          choices: ["ラグランジュ的記述", "オイラー的記述", "ニュートン的記述", "ストークス的記述"],
          answer: 1,
          expl: "場所を固定して観測するのがオイラー的記述。粒子を追いかけるのがラグランジュ的記述",
          sectionRef: 0
        },
        {
          q: "N-S方程式とオイラー方程式の違いは?",
          choices: ["重力項の有無", "粘性項 ν∇²u の有無", "圧力項の有無", "移流項の有無"],
          answer: 1,
          expl: "オイラー方程式は完全流体(粘性なし)、N-Sは粘性項を加えた実在流体の式。それ以外の構造は同じ",
          sectionRef: 2
        },
        {
          q: "定常流でも流体粒子が加速度を持ちうる理由は?",
          choices: ["時間項があるから", "移流項(場所による速度差)があるから", "粘性があるから", "加速度は持てない"],
          answer: 1,
          expl: "定常でも狭い断面に入れば速くなる。粒子が速度の違う場所へ移動することによる加速が移流項u(∂u/∂x)など",
          sectionRef: 0
        },
        {
          q: "混合距離モデルで l=κz と壁からの距離に比例させる理由は?",
          choices: ["壁の近くほど渦が大きいから", "壁の近くでは渦の大きさが壁までの距離に制限されるから", "計算を難しくするため", "κが距離の単位を持つから"],
          answer: 1,
          expl: "壁があると渦はそれより大きくなれない。壁から離れるほど大きな渦が運動量を混ぜられる→l∝z",
          sectionRef: 3
        }
      ]
    }
  ]
};
