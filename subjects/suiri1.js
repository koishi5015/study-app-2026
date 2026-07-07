window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA["suiri1"] = {
  id: "suiri1",
  name: "水理学1",
  teacher: "原田 守博",
  year: "2年・必修",
  examInfo: "レポート・小テスト20% / 定期試験80%",
  examTips: "到達目標より、平面・曲面の全水圧と作用点、浮体の安定・相対的静止、ベルヌーイの定理と運動量の定理の応用計算が最頻出。レジュメではkgfとNの換算、ゲージ圧/絶対圧、流れの分類、オリフィスの流量係数も強調されているため、基本用語として押さえる。発展目標のレイノルズ数による層流・乱流の判別も1問は想定しておくこと。",
  glossary: [
    { term: "密度", reading: "みつど", def: "単位体積あたりの質量。水は約1000 kg/m³。記号はρ(ロー)。" },
    { term: "単位体積重量", reading: "たんいたいせきじゅうりょう", def: "単位体積あたりの重量(力)。γ=ρg で求まり、水は約9.8 kN/m³。密度が「質量」なのに対しこちらは「力」である点が最重要。" },
    { term: "重力単位系", reading: "じゅうりょくたんいけい", def: "力をkgfで表す古い工学系の単位系。水理学の資料ではkgf/m²やkgf/m³が出ることがあり、1 kgf=9.8 NでSI単位系へ換算する。" },
    { term: "ゲージ圧", reading: "ゲージあつ", def: "大気圧を0として測る圧力。水理計算のp=γhやベルヌーイのpは、特に断りがなければゲージ圧で扱うことが多い。" },
    { term: "絶対圧", reading: "ぜったいあつ", def: "真空を0として測る圧力。絶対圧=大気圧+ゲージ圧で、深さhの水中ではp_abs=p_atm+γhとなる。" },
    { term: "比重", reading: "ひじゅう", def: "その流体の密度を水の密度(4℃で1000 kg/m³)で割った無次元の値。水銀は13.6、油は0.8前後。" },
    { term: "粘性", reading: "ねんせい", def: "流体が変形(ずれ)に抵抗する性質。水あめのようにねばい流体ほど粘性が大きい。せん断応力 τ=μ(du/dy) で表される。" },
    { term: "動粘性係数", reading: "どうねんせいけいすう", def: "粘性係数μを密度ρで割った値 ν=μ/ρ。単位はm²/s。水は約1.0×10⁻⁶ m²/s。レイノルズ数の計算に使う。" },
    { term: "静水圧", reading: "せいすいあつ", def: "静止した水の中で働く圧力。深さに比例して p=γh で大きくなり、あらゆる方向に等しく面に垂直に働く。" },
    { term: "等圧面", reading: "とうあつめん", def: "圧力が等しい点を連ねた面。静止した水では水平面になる。マノメータ計算では「同じ流体で同じ高さなら同じ圧力」として使う。" },
    { term: "パスカルの原理", reading: "パスカルのげんり", def: "密閉容器内の流体の一部に加えた圧力は、そのままの大きさで流体全体に伝わるという原理。油圧ジャッキの原理。" },
    { term: "マノメータ", reading: "マノメータ", def: "U字管などに液体(水銀など)を入れ、液面の高さの差から圧力を測る器具。等圧面を基準に左右の圧力をつり合わせて解く。" },
    { term: "全水圧", reading: "ぜんすいあつ", def: "面全体に働く静水圧を足し合わせた合力。平面なら P=γh_G A(図心の圧力×面積)で求まる。" },
    { term: "図心", reading: "ずしん", def: "面積の重心。長方形なら対角線の交点。全水圧の大きさは「図心での圧力×面積」で計算できる。" },
    { term: "圧力中心", reading: "あつりょくちゅうしん", def: "全水圧の合力が作用する点。圧力は深いほど大きいので、圧力中心は必ず図心より深い側にある。" },
    { term: "断面二次モーメント", reading: "だんめんにじモーメント", def: "面の曲げにくさを表す幾何量。幅b高さhの長方形で I_G=bh³/12。圧力中心の位置計算に登場する。" },
    { term: "浮力", reading: "ふりょく", def: "水中の物体が受ける上向きの力。物体が押しのけた水の重量に等しい(アルキメデスの原理)。F=γV。" },
    { term: "喫水", reading: "きっすい", def: "浮体が水面下に沈んでいる深さ。浮体の重量と浮力がつり合う深さで決まる。" },
    { term: "浮心", reading: "ふしん", def: "浮体が押しのけた水(排除体積)の図心。浮力はこの点に作用する。傾くと浮心の位置が移動する。" },
    { term: "メタセンタ", reading: "メタセンタ", def: "浮体が微小に傾いたとき、浮力の作用線と浮体の中心軸との交点M。Mが重心Gより上にあれば(GM>0)浮体は安定。" },
    { term: "相対的静止", reading: "そうたいてきせいし", def: "容器ごと加速したり回転したりして、水が容器に対して動かず一体で運動している状態。水面は傾いたり放物面になったりする。" },
    { term: "完全流体", reading: "かんぜんりゅうたい", def: "粘性を無視した理想的な流体。エネルギー損失がないと考えられるので、ベルヌーイの定理がそのまま成り立つ。" },
    { term: "粘性流体", reading: "ねんせいりゅうたい", def: "粘性を考慮した実在の流体。壁との摩擦でエネルギーを失い、層流・乱流という流れの区別が生まれる。" },
    { term: "流線", reading: "りゅうせん", def: "各点での流速ベクトルに接するように描いた曲線。流れの向きを可視化したもので、定常流では水の粒子の通り道と一致する。" },
    { term: "連続式", reading: "れんぞくしき", def: "質量保存則を流れに適用した式。管が細くなっても流量は変わらないので A₁v₁=A₂v₂。細いところほど速い。" },
    { term: "定常流", reading: "ていじょうりゅう", def: "同じ場所で見た流速・水深などの水理量が時間的に変化しない流れ。時間で分類する言葉。" },
    { term: "非定常流", reading: "ひていじょうりゅう", def: "同じ場所で見た水理量が時間とともに変化する流れ。洪水の立ち上がりや水門操作中の流れが例。" },
    { term: "等流", reading: "とうりゅう", def: "定常流のうち、流下方向に水深や流速が変化しない流れ。場所で分類する言葉。" },
    { term: "不等流", reading: "ふとうりゅう", def: "定常流のうち、流下方向に水深や流速が変化する流れ。定常/非定常との混同に注意。" },
    { term: "管水路", reading: "かんすいろ", def: "管内が水で満たされた流れ。上水道管など。自由水面を持つ開水路と区別する。" },
    { term: "開水路", reading: "かいすいろ", def: "河川や水路のように自由水面を持つ流れ。水面の乱れが上流へ伝わるかで常流・射流に分かれる。" },
    { term: "フルード数", reading: "フルードすう", def: "開水路で流速と波速の比を表す無次元数。Fr=v/√(gh)で、Fr<1なら常流、Fr>1なら射流。" },
    { term: "常流", reading: "じょうりゅう", def: "開水路でFr<1の流れ。水面の擾乱が上流へ伝わるため、水面形は下流条件の影響を受けやすい。" },
    { term: "射流", reading: "しゃりゅう", def: "開水路でFr>1の流れ。流れが波より速く、擾乱は下流へ押し流される。" },
    { term: "ベルヌーイの定理", reading: "ベルヌーイのていり", def: "完全流体のエネルギー保存則。位置水頭+圧力水頭+速度水頭の合計が流線に沿って一定になる。" },
    { term: "水頭", reading: "すいとう", def: "エネルギーを水柱の高さ(m)で表したもの。圧力はp/γ、速度はv²/2gで高さに換算できる。単位がそろい比較しやすくなる。" },
    { term: "ピトー管", reading: "ピトーかん", def: "流れを正面で受け止めてよどみ点を作り、圧力の上昇分(速度水頭)から流速を測る管。v=√(2gΔh)。" },
    { term: "流量係数", reading: "りゅうりょうけいすう", def: "オリフィスの実流量が理論流量より小さくなる効果をまとめた係数。流速係数と断面収縮係数を掛けたもので、C=0.6〜0.9程度が目安。" },
    { term: "運動量", reading: "うんどうりょう", def: "質量×速度。単位時間あたりの運動量の変化が力に等しい(運動量の定理)。流れではρQvが単位時間の運動量になる。" },
    { term: "検査体積", reading: "けんさたいせき", def: "運動量の定理を適用するために流れの中に設定する仮想の領域。出入りする運動量と外力のつり合いを考える。" },
    { term: "層流", reading: "そうりゅう", def: "水の粒子が層をなして規則正しく流れる状態。流速が小さいときに現れる。レイノルズ数が小さい(管路で約2000以下)。" },
    { term: "乱流", reading: "らんりゅう", def: "水の粒子が不規則に混ざり合いながら流れる状態。実際の河川や管路の流れのほとんどは乱流。" },
    { term: "レイノルズ数", reading: "レイノルズすう", def: "慣性力と粘性力の比を表す無次元数 Re=vD/ν。層流と乱流を判別する指標で、管路では約2000が限界値。" }
  ],
  units: [
    // ================================================================
    // u1 流体の性質
    // ================================================================
    {
      id: "u1",
      title: "流体の性質(密度・単位体積重量・比重)",
      weeks: "第1〜2週",
      priority: 3,
      sections: [
        {
          heading: "密度と単位体積重量は「質量」と「力」の違い",
          body: "<p>水理学で最初につまずくのがここ。[[密度]] $\\rho$ は<b>1m³あたりの質量</b>(kg/m³)、[[単位体積重量]] $\\gamma$ は<b>1m³あたりの重量=力</b>(N/m³)です。体重計の数字(kg)と、床を押す力(N)の関係と同じで、質量に重力加速度 $g$ を掛けると力になります。</p><p>$$\\gamma = \\rho g$$</p><p>水なら $\\rho=1000$ kg/m³、$g=9.8$ m/s² なので $\\gamma=9800$ N/m³ $=9.8$ kN/m³。この「水は9.8 kN/m³」は水理学1全体で何十回も使う最重要数値です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='120' y='60' width='120' height='120' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><text x='180' y='50' text-anchor='middle' font-size='15' fill='var(--c-text)'>水 1m³</text><text x='180' y='125' text-anchor='middle' font-size='15' fill='var(--c-text)'>質量 ρ=1000kg</text><line x1='180' y1='185' x2='180' y2='250' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a1)'/><defs><marker id='a1' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-accent)'/></marker></defs><text x='195' y='230' font-size='15' fill='var(--c-accent)'>重量 γ=ρg=9.8kN</text><text x='60' y='285' font-size='14' fill='var(--c-text)'>質量(kg)に g を掛けると力(N)になる</text></svg>"
        },
        {
          heading: "SI単位系と重力単位系:kgfをNへ直す",
          body: "<p>レジュメでは、SI単位系(N, Pa)と[[重力単位系]](kgf, kgf/m²)の換算が繰り返し出てきます。試験で古い単位が混ざっても、橋渡しはひとつだけです。</p><p>$$1\\,\\mathrm{kgf} = 9.8\\,\\mathrm{N}$$</p><p>圧力なら $1\\,\\mathrm{kgf/m^2}=9.8\\,\\mathrm{N/m^2}$、水の単位体積重量なら $1000\\,\\mathrm{kgf/m^3}=9800\\,\\mathrm{N/m^3}=9.8\\,\\mathrm{kN/m^3}$。kgは質量、kgfは力なので、記号が似ていても別物として扱います。</p>"
        },
        {
          heading: "比重は水との比べっこ",
          body: "<p>[[比重]] $s$ は、その流体の密度を水の密度で割った<b>無次元の値</b>です。</p><p>$$s = \\dfrac{\\rho}{\\rho_w}$$</p><p>「水の何倍重いか」を表すラベルのようなもので、水銀は $s=13.6$(水の13.6倍重い)、油は $s=0.8$ 前後(水より軽いので水に浮く)。比重が与えられたら $\\rho = s \\times 1000$ kg/m³、$\\gamma = s \\times 9.8$ kN/m³ とすぐ変換できるようにしておくと、[[マノメータ]]や[[浮力]]の問題で迷いません。</p>"
        },
        {
          heading: "粘性:流体のねばり気",
          body: "<p>[[粘性]]は流体の「ねばり気」、つまりずれ変形への抵抗です。はちみつをスプーンでかき混ぜると水より重いのは粘性のせい。壁の近くで流速に差($du/dy$)があると、層の間にせん断応力 $\\tau = \\mu \\dfrac{du}{dy}$ が生じます。$\\mu$ が粘性係数です。</p><p>実際の計算では $\\mu$ を密度で割った[[動粘性係数]] $\\nu = \\mu / \\rho$ をよく使い、水では $\\nu \\approx 1.0\\times10^{-6}$ m²/s。これは後半の[[レイノルズ数]]で再登場します。粘性を無視した理想の流体が[[完全流体]]、考慮したのが[[粘性流体]]です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "単位体積重量",
          latex: "\\gamma = \\rho g",
          vars: [
            { sym: "\\gamma", meaning: "単位体積重量", unit: "N/m³" },
            { sym: "\\rho", meaning: "密度", unit: "kg/m³" },
            { sym: "g", meaning: "重力加速度(9.8)", unit: "m/s²" }
          ],
          when: "密度と重量の変換が必要なとき。静水圧・浮力などほぼ全ての公式の入口",
          intuition: "質量に g を掛けて力にする。水なら 1000×9.8=9800 N/m³=9.8 kN/m³",
          derivation: "1m³の質量ρ[kg]に働く重力 W=mg をそのまま体積あたりで書いた式",
          blank: "\\gamma = \\rho \\times ?",
          blankAnswer: "g"
        },
        {
          id: "f2",
          name: "比重の定義",
          latex: "s = \\dfrac{\\rho}{\\rho_w} = \\dfrac{\\gamma}{\\gamma_w}",
          vars: [
            { sym: "s", meaning: "比重", unit: "無次元" },
            { sym: "\\rho", meaning: "対象流体の密度", unit: "kg/m³" },
            { sym: "\\rho_w", meaning: "水の密度(1000)", unit: "kg/m³" }
          ],
          when: "「比重0.8の油」「水銀(比重13.6)」のように比重で流体が指定されたとき",
          intuition: "水の何倍重いか。1より小さければ水に浮く",
          derivation: "定義式。γ=ρg なので密度比=単位体積重量比になる",
          blank: "s = \\dfrac{\\rho}{?}",
          blankAnswer: "\\rho_w"
        },
        {
          id: "f3",
          name: "ニュートンの粘性法則",
          latex: "\\tau = \\mu \\dfrac{du}{dy}",
          vars: [
            { sym: "\\tau", meaning: "せん断応力", unit: "N/m²" },
            { sym: "\\mu", meaning: "粘性係数", unit: "Pa·s" },
            { sym: "du/dy", meaning: "速度勾配", unit: "1/s" }
          ],
          when: "壁近くのせん断応力や粘性の定義を問われたとき",
          intuition: "速度差が大きい場所ほど、流体の層同士が強くこすれ合う",
          derivation: "薄い層のずれ変形速度に応力が比例するというニュートンの実験則",
          blank: "\\tau = ? \\dfrac{du}{dy}",
          blankAnswer: "\\mu"
        },
        {
          id: "f4",
          name: "動粘性係数",
          latex: "\\nu = \\dfrac{\\mu}{\\rho}",
          vars: [
            { sym: "\\nu", meaning: "動粘性係数", unit: "m²/s" },
            { sym: "\\mu", meaning: "粘性係数", unit: "Pa·s" },
            { sym: "\\rho", meaning: "密度", unit: "kg/m³" }
          ],
          when: "レイノルズ数の計算。水は ν≒1.0×10⁻⁶ m²/s と覚えておく",
          intuition: "粘性を密度で割って「運動のしやすさ」ベースにした粘性",
          derivation: "μをρで割っただけ。単位がm²/sと運動学的な次元になるので「動」粘性係数",
          blank: "\\nu = \\dfrac{?}{\\rho}",
          blankAnswer: "\\mu"
        },
        {
          id: "f5",
          name: "kgfとNの換算",
          latex: "1\\,\\mathrm{kgf} = 9.8\\,\\mathrm{N}",
          vars: [
            { sym: "\\mathrm{kgf}", meaning: "重力単位系の力", unit: "kgf" },
            { sym: "\\mathrm{N}", meaning: "SI単位系の力", unit: "N" }
          ],
          when: "レジュメや教科書の古い単位(kgf, kgf/m², kgf/m³)をSI単位へ直すとき",
          intuition: "1kgの質量に重力がかかった力が1kgf。その力はSIでは約9.8N",
          derivation: "F=mgより、1kgf=1kg×9.8m/s²=9.8N",
          blank: "1\\,\\mathrm{kgf} = ?\\,\\mathrm{N}",
          blankAnswer: "9.8"
        }
      ],
      selectQuiz: [
        {
          q: "海水の密度1030 kg/m³が与えられ、単位体積重量を求めたい",
          choices: ["γ=ρg", "s=ρ/ρw", "τ=μ(du/dy)", "ν=μ/ρ"],
          answer: 0,
          expl: "密度→重量の変換はγ=ρg。1030×9.8=10094 N/m³ ≒10.1 kN/m³",
          formulaRef: "f1"
        },
        {
          q: "比重13.6の水銀の単位体積重量を求めたい",
          choices: ["s=ρ/ρw から ρ を出して γ=ρg", "τ=μ(du/dy)", "ν=μ/ρ", "p=γh"],
          answer: 0,
          expl: "比重→密度(13600 kg/m³)→γ=ρg=133.3 kN/m³ の2段変換",
          formulaRef: "f2"
        },
        {
          q: "レイノルズ数の計算に使うため、粘性係数μと密度ρから ν を求めたい",
          choices: ["ν=μ/ρ", "γ=ρg", "τ=μ(du/dy)", "s=ρ/ρw"],
          answer: 0,
          expl: "動粘性係数の定義 ν=μ/ρ。Re=vD/ν で使う",
          formulaRef: "f4"
        },
        {
          q: "平板の近くで速度勾配が与えられ、流体内のせん断応力を求めたい",
          choices: ["τ=μ(du/dy)", "γ=ρg", "ν=μ/ρ", "P=γh_G A"],
          answer: 0,
          expl: "せん断応力はニュートンの粘性法則。速度勾配×粘性係数",
          formulaRef: "f3"
        },
        {
          q: "2000 kgf/m²で与えられた圧力をSI単位に直したい",
          choices: ["2000×9.8=19600 N/m²", "2000÷9.8=204 N/m²", "2000 kN/m²", "2000 kg/m³"],
          answer: 0,
          expl: "1 kgf=9.8 Nなので、面積あたりでも2000 kgf/m²=19600 N/m²=19.6 kN/m²",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "密度・単位体積重量・比重の換算",
          variants: [
            {
              q: "海水の密度が1030 kg/m³のとき、単位体積重量γをkN/m³で求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "密度から重量への変換なので $\\gamma = \\rho g$ を使う" },
                { label: "② 代入", content: "$\\gamma = 1030 \\times 9.8$" },
                { label: "③ 計算", content: "$\\gamma = 10094$ N/m³ $= 10.094$ kN/m³" },
                { label: "④ 単位・妥当性確認", content: "水(9.8 kN/m³)よりわずかに大きい値で妥当。NからkNへの換算(÷1000)を忘れない" }
              ],
              answer: "γ ≒ 10.1 kN/m³"
            },
            {
              q: "比重13.6の水銀について、密度ρと単位体積重量γを求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "比重の定義 $s = \\rho/\\rho_w$ と $\\gamma = \\rho g$ を組み合わせる" },
                { label: "② 代入", content: "$\\rho = s \\times \\rho_w = 13.6 \\times 1000 = 13600$ kg/m³" },
                { label: "③ 計算", content: "$\\gamma = 13600 \\times 9.8 = 133280$ N/m³" },
                { label: "④ 単位・妥当性確認", content: "水の13.6倍の 9.8×13.6=133.28 kN/m³ と一致。検算OK" }
              ],
              answer: "ρ = 13600 kg/m³、γ ≒ 133.3 kN/m³"
            }
          ],
          formulaRefs: ["f1", "f2"]
        },
        {
          id: "p2",
          pattern: "体積と質量から比重を求める",
          variants: [
            {
              q: "体積0.5 m³の油の質量が400 kgだった。この油の比重を求めよ。",
              steps: [
                { label: "① 式の選択", content: "まず密度 $\\rho = m/V$、次に比重 $s = \\rho/\\rho_w$" },
                { label: "② 代入", content: "$\\rho = 400 / 0.5 = 800$ kg/m³" },
                { label: "③ 計算", content: "$s = 800 / 1000 = 0.8$" },
                { label: "④ 単位・妥当性確認", content: "比重は無次元。油は0.8前後が普通なので妥当。1未満なので水に浮く" }
              ],
              answer: "s = 0.8"
            },
            {
              q: "体積2 m³の液体の質量が2500 kgだった。この液体の比重と単位体積重量を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$\\rho = m/V$ → $s = \\rho/\\rho_w$ → $\\gamma = \\rho g$ の3段構え" },
                { label: "② 代入", content: "$\\rho = 2500/2 = 1250$ kg/m³" },
                { label: "③ 計算", content: "$s = 1250/1000 = 1.25$、$\\gamma = 1250 \\times 9.8 = 12250$ N/m³" },
                { label: "④ 単位・妥当性確認", content: "s>1 なので水より重い液体。γ=12.25 kN/m³ は 9.8×1.25 と一致し検算OK" }
              ],
              answer: "s = 1.25、γ ≒ 12.3 kN/m³"
            }
          ],
          formulaRefs: ["f1", "f2"]
        },
        {
          id: "p3",
          pattern: "重力単位系とSI単位系の換算",
          variants: [
            {
              q: "体重(質量)60kgの人に働く重力を、重力単位系とSI単位系で答えよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "重力単位系では質量60kgの人の重量は60kgf。SIでは $F=mg$" },
                { label: "② 代入", content: "$F = 60 \\times 9.8$" },
                { label: "③ 計算", content: "$F = 588$ N。換算式でも $60\\,\\mathrm{kgf} = 60\\times9.8 = 588$ N" },
                { label: "④ 単位・妥当性確認", content: "kgは質量、kgfとNは力。60kgそのものをNと書かない" }
              ],
              answer: "重力単位系:60 kgf、SI単位系:588 N"
            },
            {
              q: "水圧2000 kgf/m²をSI単位に直し、面積3.0 m²に働く力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$1\\,\\mathrm{kgf}=9.8\\,\\mathrm{N}$ で圧力を換算し、力は $P=pA$" },
                { label: "② 代入", content: "$p = 2000 \\times 9.8 = 19600$ N/m²、$P = 19600 \\times 3.0$" },
                { label: "③ 計算", content: "$P = 58800$ N $=58.8$ kN" },
                { label: "④ 単位・妥当性確認", content: "圧力(N/m²)×面積(m²)=力(N)。kgf/m²のまま足し算しない" }
              ],
              answer: "p=19.6 kN/m²、P=58.8 kN"
            }
          ],
          formulaRefs: ["f5"]
        }
      ],
      quiz: [
        {
          q: "密度と単位体積重量の違いとして正しいのは?",
          choices: ["どちらも力を表す", "密度は質量、単位体積重量は力(重量)を表す", "密度は力、単位体積重量は質量を表す", "同じ量の別名"],
          answer: 1,
          expl: "密度ρは1m³あたりの質量(kg/m³)、γ=ρgは1m³あたりの力(N/m³)。gを掛けるかどうかの差",
          sectionRef: 0
        },
        {
          q: "水の単位体積重量として正しいのは?",
          choices: ["1000 N/m³", "9.8 kN/m³", "9.8 kN/m²", "1000 kN/m³"],
          answer: 1,
          expl: "γ=1000×9.8=9800 N/m³=9.8 kN/m³。単位はm³あたりであることに注意(kN/m²は圧力の単位)",
          sectionRef: 0
        },
        {
          q: "1 kgfをSI単位へ直すときの値は?",
          choices: ["9.8 N", "1 N", "9.8 kg", "1000 N"],
          answer: 0,
          expl: "1kgの質量に働く重力が1kgfで、SIでは1×9.8=9.8N。kgとkgfを混同しない",
          sectionRef: 1
        },
        {
          q: "比重0.9の油について正しいのは?",
          choices: ["水より重く沈む", "水より軽く浮く", "水と同じ重さ", "比重からは分からない"],
          answer: 1,
          expl: "比重<1は水より軽いことを意味するので水に浮く。ρ=900 kg/m³",
          sectionRef: 2
        },
        {
          q: "動粘性係数νの単位は?",
          choices: ["Pa·s", "m²/s", "kg/m³", "N/m²"],
          answer: 1,
          expl: "ν=μ/ρの単位は (Pa·s)/(kg/m³)=m²/s。水はν≒1.0×10⁻⁶ m²/s",
          sectionRef: 3
        }
      ]
    },
    // ================================================================
    // u2 静水圧の基礎
    // ================================================================
    {
      id: "u2",
      title: "静水圧の基礎(パスカルの原理・マノメータ)",
      weeks: "第3週",
      priority: 2,
      sections: [
        {
          heading: "静水圧は深さに比例する",
          body: "<p>[[静水圧]]は、静止した水の中で働く圧力です。プールで深く潜るほど耳が痛くなるのは、上に載っている水の重さが増えるから。深さ $h$ の点の圧力は</p><p>$$p = \\gamma h$$</p><p>で、水面からの深さだけで決まります。水なら深さ1mごとに9.8 kN/m²ずつ増える計算です。大事な性質は2つ。<b>①同じ深さなら容器の形によらず圧力は同じ</b>、<b>②圧力はあらゆる方向に等しく、面に垂直に働く</b>。圧力(N/m²)は「単位面積あたりの力」であって、力そのもの(N)ではない点も混同しやすいので注意しましょう。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='60' width='180' height='190' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><line x1='60' y1='60' x2='240' y2='60' stroke='var(--c-accent)' stroke-width='2'/><text x='250' y='65' font-size='14' fill='var(--c-text)'>水面 p=0</text><polygon points='240,60 240,250 330,250' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><line x1='240' y1='120' x2='268' y2='120' stroke='var(--c-accent)' stroke-width='2'/><line x1='240' y1='185' x2='298' y2='185' stroke='var(--c-accent)' stroke-width='2'/><text x='300' y='125' font-size='14' fill='var(--c-text)'>p=γh</text><text x='150' y='160' text-anchor='middle' font-size='15' fill='var(--c-text)'>深いほど圧力大</text><text x='250' y='275' font-size='14' fill='var(--c-text)'>三角形の圧力分布</text></svg>"
        },
        {
          heading: "ゲージ圧と絶対圧:大気圧を足すかどうか",
          body: "<p>レジュメでは水深20mの圧力を、[[ゲージ圧]]表示と[[絶対圧]]表示の両方で求めています。$p=\\gamma h$ は水面の大気圧を0と見たゲージ圧です。真空を0にする絶対圧で答えるときは、大気圧 $p_{atm}$ を足します。</p><p>$$p_{abs}=p_{atm}+\\gamma h$$</p><p>たとえば水深20mならゲージ圧は $9.8\\times20=196$ kN/m²。大気圧を約101 kN/m²とすると絶対圧は約297 kN/m²です。問題文が「絶対圧」と言ったときだけ大気圧を足す、と覚えると混乱しにくいです。</p>"
        },
        {
          heading: "パスカルの原理:小さな力で大きな力を生む",
          body: "<p>[[パスカルの原理]]は「密閉した流体に加えた圧力は、そのまま全体に伝わる」という法則です。油圧ジャッキで車を片手で持ち上げられるのはこのおかげ。断面積 $A_1$ の小ピストンに力 $F_1$ を加えると、圧力 $p = F_1/A_1$ が流体全体に伝わり、断面積 $A_2$ の大ピストンには</p><p>$$F_2 = F_1 \\dfrac{A_2}{A_1}$$</p><p>の力が生まれます。面積が100倍なら力も100倍。自転車の空気入れを大きくしたようなイメージで、「圧力は同じ、面積の差で力が変わる」が本質です。</p>"
        },
        {
          heading: "マノメータ:等圧面でつなぐパズル",
          body: "<p>[[マノメータ]]はU字管に水銀などを入れて圧力を測る器具です。解き方はパズルのように機械的で、<b>「同じ流体でつながった同じ高さの2点は同じ圧力」</b>という[[等圧面]]の性質を使います。手順は3つ。①U字管内の低い方の液面(または液体の境界)に等圧面を引く。②左側から等圧面まで、下がる分は $+\\gamma h$、上がる分は $-\\gamma h$ で圧力をたどる。③右側も同様にたどって等号で結ぶ。液体が変わったら $\\gamma$ もその液体のものに変える、これだけです。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='80' width='90' height='40' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><text x='85' y='105' text-anchor='middle' font-size='15' fill='var(--c-text)'>管A</text><path d='M130 100 L180 100 L180 220 L240 220 L240 130' fill='none' stroke='var(--c-line)' stroke-width='14'/><path d='M180 150 L180 220 L240 220 L240 160' fill='none' stroke='var(--c-accent)' stroke-width='10'/><line x1='150' y1='160' x2='300' y2='160' stroke='var(--c-text)' stroke-width='1' stroke-dasharray='6 4'/><text x='305' y='165' font-size='14' fill='var(--c-text)'>等圧面</text><text x='150' y='260' font-size='14' fill='var(--c-text)'>水銀柱の高低差から圧力を求める</text><text x='250' y='120' font-size='14' fill='var(--c-accent)'>水銀</text></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "静水圧の式",
          latex: "p = \\gamma h",
          vars: [
            { sym: "p", meaning: "静水圧(ゲージ圧)", unit: "N/m²" },
            { sym: "\\gamma", meaning: "単位体積重量", unit: "N/m³" },
            { sym: "h", meaning: "水面からの深さ", unit: "m" }
          ],
          when: "「深さ○mの圧力を求めよ」。全水圧・マノメータ・ベルヌーイの部品としても常用",
          intuition: "上に載っている水柱の重さ。深さ1mごとに9.8 kN/m²増える",
          derivation: "深さhまでの水柱(底面積1m²)の重量 γ×h×1 が底面を押すと考える",
          blank: "p = \\gamma \\times ?",
          blankAnswer: "h"
        },
        {
          id: "f2",
          name: "パスカルの原理(油圧ジャッキ)",
          latex: "F_2 = F_1 \\dfrac{A_2}{A_1}",
          vars: [
            { sym: "F_1, F_2", meaning: "各ピストンに働く力", unit: "N" },
            { sym: "A_1, A_2", meaning: "各ピストンの断面積", unit: "m²" }
          ],
          when: "油圧ジャッキ・水圧機の問題。「小ピストンに力を加えて大ピストンで持ち上げる」とき",
          intuition: "圧力p=F/Aが共通。面積が大きい側では同じ圧力でも力が大きくなる",
          derivation: "p₁=p₂ すなわち F₁/A₁=F₂/A₂ を変形しただけ",
          blank: "F_2 = F_1 \\dfrac{?}{A_1}",
          blankAnswer: "A_2"
        },
        {
          id: "f3",
          name: "マノメータの等圧面計算",
          latex: "p_A + \\gamma_1 h_1 = \\gamma_2 h_2",
          vars: [
            { sym: "p_A", meaning: "測りたい点の圧力", unit: "N/m²" },
            { sym: "\\gamma_1, h_1", meaning: "管内流体の単位体積重量と高さ", unit: "N/m³, m" },
            { sym: "\\gamma_2, h_2", meaning: "計器液(水銀等)の単位体積重量と高さ", unit: "N/m³, m" }
          ],
          when: "U字管マノメータで管内圧力を求めるとき。液面の境界に等圧面を引いて左右をつなぐ",
          intuition: "下がったら+γh、上がったら−γh。左右の道のりの合計が等しい",
          derivation: "等圧面上の左右の点の圧力が等しいことを、各柱のγhを足し引きして表した式",
          blank: "p_A + \\gamma_1 h_1 = ? \\, h_2",
          blankAnswer: "\\gamma_2"
        },
        {
          id: "f4",
          name: "絶対圧とゲージ圧",
          latex: "p_{abs} = p_{atm} + p_g = p_{atm} + \\gamma h",
          vars: [
            { sym: "p_{abs}", meaning: "絶対圧", unit: "N/m²" },
            { sym: "p_{atm}", meaning: "大気圧", unit: "N/m²" },
            { sym: "p_g", meaning: "ゲージ圧", unit: "N/m²" }
          ],
          when: "問題文で絶対圧表示を求められたとき。ゲージ圧だけならp=γhで止める",
          intuition: "水による上乗せ分がゲージ圧。絶対圧はそこに大気圧を足した値",
          derivation: "真空を基準にすると、水面にも大気圧がかかっているためp_atmを加える",
          blank: "p_{abs} = p_{atm} + ?",
          blankAnswer: "p_g"
        }
      ],
      selectQuiz: [
        {
          q: "水深8mのダム壁面上の1点に働く圧力を求めたい",
          choices: ["p=γh", "P=γh_G A", "F₂=F₁A₂/A₁", "γ=ρg"],
          answer: 0,
          expl: "1点の圧力ならp=γh。面全体の合力(全水圧)と混同しないこと",
          formulaRef: "f1"
        },
        {
          q: "水深20mの圧力を絶対圧で答えるよう求められた",
          choices: ["p_abs=p_atm+γh", "p=γhだけ", "P=γh_GA", "F=ρQv"],
          answer: 0,
          expl: "絶対圧は大気圧を足す。ゲージ圧ならp=γhで止める",
          formulaRef: "f4"
        },
        {
          q: "断面積の異なる2つのピストンで、小さい力で重い物を持ち上げたい",
          choices: ["パスカルの原理 F₂=F₁A₂/A₁", "p=γh", "アルキメデスの原理", "連続式"],
          answer: 0,
          expl: "油圧ジャッキ=パスカルの原理。圧力共通・面積比で力が増幅",
          formulaRef: "f2"
        },
        {
          q: "U字管に水銀を入れて管内の水の圧力を測りたい",
          choices: ["等圧面でつなぐマノメータ計算", "ベルヌーイの定理", "p=γhのみで完結", "運動量の定理"],
          answer: 0,
          expl: "水銀と水の境界に等圧面を引き、左右の圧力をγhの足し引きで等号で結ぶ",
          formulaRef: "f3"
        },
        {
          q: "「同じ深さでも容器の形が違えば圧力は違う」は正しいか判断したい",
          choices: ["p=γh(深さだけで決まる)", "P=γh_G A", "τ=μdu/dy", "F=ρQv"],
          answer: 0,
          expl: "静水圧は深さのみの関数。容器の形・水の総量には無関係(静水圧のパラドックス)",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "深さから静水圧を求める",
          variants: [
            {
              q: "水深5mの点における静水圧を求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "1点の圧力なので $p = \\gamma h$" },
                { label: "② 代入", content: "$p = 9.8 \\times 5$" },
                { label: "③ 計算", content: "$p = 49$ kN/m²" },
                { label: "④ 単位・妥当性確認", content: "kN/m³×m=kN/m²で単位OK。約0.5気圧に相当し、水深5mとして妥当" }
              ],
              answer: "p = 49 kN/m²"
            },
            {
              q: "水深12mのタンク底面における静水圧を求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "$p = \\gamma h$" },
                { label: "② 代入", content: "$p = 9.8 \\times 12$" },
                { label: "③ 計算", content: "$p = 117.6$ kN/m²" },
                { label: "④ 単位・妥当性確認", content: "深さ10mで約1気圧(98 kN/m²)。12mでそれよりやや大きく妥当" }
              ],
              answer: "p ≒ 117.6 kN/m²"
            }
          ],
          formulaRefs: ["f1"]
        },
        {
          id: "p2",
          pattern: "U字管マノメータの圧力計算",
          variants: [
            {
              q: "水が流れる管Aに水銀U字管マノメータを接続した。管の中心から水銀面まで水柱がh₁=0.2m、水銀柱の高低差がh₂=0.3mのとき、管中心の圧力p_Aを求めよ。(水銀の比重13.6、γw=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "低い方の水銀面に[[等圧面]]を引き、左右の圧力を等号で結ぶ:$p_A + \\gamma_w h_1 = \\gamma_{Hg} h_2$" },
                { label: "② 代入", content: "$\\gamma_{Hg} = 13.6 \\times 9.8 = 133.28$ kN/m³。$p_A = 133.28 \\times 0.3 - 9.8 \\times 0.2$" },
                { label: "③ 計算", content: "$p_A = 39.984 - 1.96 = 38.024$ kN/m²" },
                { label: "④ 単位・妥当性確認", content: "水銀柱0.3m≒40 kN/m²から水柱分を引いた値で妥当。符号(下がる=+、上がる=−)を再確認" }
              ],
              answer: "p_A ≒ 38.0 kN/m²"
            },
            {
              q: "同じ形のマノメータで、水柱h₁=0.4m、水銀柱の高低差h₂=0.5mのとき、管中心の圧力p_Aを求めよ。(水銀の比重13.6、γw=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "$p_A + \\gamma_w h_1 = \\gamma_{Hg} h_2$" },
                { label: "② 代入", content: "$p_A = 133.28 \\times 0.5 - 9.8 \\times 0.4$" },
                { label: "③ 計算", content: "$p_A = 66.64 - 3.92 = 62.72$ kN/m²" },
                { label: "④ 単位・妥当性確認", content: "水銀0.5m分(約67 kN/m²)より少し小さい値。水柱の分だけ差し引かれており整合" }
              ],
              answer: "p_A ≒ 62.7 kN/m²"
            }
          ],
          formulaRefs: ["f3"]
        },
        {
          id: "p3",
          pattern: "パスカルの原理(油圧ジャッキ)",
          variants: [
            {
              q: "断面積10 cm²の小ピストンに50 Nの力を加えた。断面積500 cm²の大ピストンに生じる力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "パスカルの原理 $F_2 = F_1 \\dfrac{A_2}{A_1}$" },
                { label: "② 代入", content: "$F_2 = 50 \\times \\dfrac{500}{10}$(面積比なのでcm²のままでよい)" },
                { label: "③ 計算", content: "$F_2 = 50 \\times 50 = 2500$ N" },
                { label: "④ 単位・妥当性確認", content: "面積50倍→力も50倍。2.5 kNで人力でも約250 kgを支えられる計算" }
              ],
              answer: "F₂ = 2500 N (2.5 kN)"
            },
            {
              q: "断面積20 cm²の小ピストンに100 Nの力を加えたとき、断面積0.1 m²の大ピストンで持ち上げられる力を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$F_2 = F_1 \\dfrac{A_2}{A_1}$。まず単位をそろえる" },
                { label: "② 代入", content: "$A_1 = 20$ cm² $= 0.002$ m²。$F_2 = 100 \\times \\dfrac{0.1}{0.002}$" },
                { label: "③ 計算", content: "$F_2 = 100 \\times 50 = 5000$ N" },
                { label: "④ 単位・妥当性確認", content: "cm²とm²の混在に注意。面積比50倍で力50倍、5 kN" }
              ],
              answer: "F₂ = 5000 N (5 kN)"
            }
          ],
          formulaRefs: ["f2"]
        },
        {
          id: "p4",
          pattern: "ゲージ圧と絶対圧の使い分け",
          variants: [
            {
              q: "水深20mの点の水圧を、ゲージ圧表示と絶対圧表示で求めよ。水の単位体積重量は9.8 kN/m³、大気圧は101 kN/m²とする。",
              steps: [
                { label: "① 式の選択", content: "ゲージ圧は $p_g=\\gamma h$、絶対圧は $p_{abs}=p_{atm}+p_g$" },
                { label: "② 代入", content: "$p_g=9.8\\times20=196$ kN/m²" },
                { label: "③ 計算", content: "$p_{abs}=101+196=297$ kN/m²" },
                { label: "④ 単位・妥当性確認", content: "絶対圧はゲージ圧より大気圧分だけ大きい。水深10mで約98kN/m²なので20mで196kN/m²は妥当" }
              ],
              answer: "ゲージ圧:196 kN/m²、絶対圧:297 kN/m²"
            },
            {
              q: "水深5mの点のゲージ圧と絶対圧を求めよ。γ=9.8 kN/m³、p_atm=101 kN/m²とする。",
              steps: [
                { label: "① 式の選択", content: "$p_g=\\gamma h$、$p_{abs}=p_{atm}+p_g$" },
                { label: "② 代入", content: "$p_g=9.8\\times5=49$ kN/m²" },
                { label: "③ 計算", content: "$p_{abs}=101+49=150$ kN/m²" },
                { label: "④ 単位・妥当性確認", content: "ゲージ圧は水による増分だけ。絶対圧は必ず大気圧より大きい" }
              ],
              answer: "ゲージ圧:49 kN/m²、絶対圧:150 kN/m²"
            }
          ],
          formulaRefs: ["f1", "f4"]
        }
      ],
      quiz: [
        {
          q: "静水圧の性質として誤っているのは?",
          choices: ["深さに比例する", "面に垂直に働く", "あらゆる方向に等しい", "容器の底面積が大きいほど同じ深さでも圧力が大きい"],
          answer: 3,
          expl: "静水圧は深さだけで決まり、容器の形や大きさには無関係(静水圧のパラドックス)",
          sectionRef: 0
        },
        {
          q: "圧力と力の違いとして正しいのは?",
          choices: ["同じもの", "圧力は単位面積あたりの力(N/m²)、力はN", "力は単位面積あたりの圧力", "圧力の方が常に大きい"],
          answer: 1,
          expl: "圧力p(N/m²)に面積(m²)を掛けてはじめて力(N)になる。全水圧の計算で効いてくる区別",
          sectionRef: 0
        },
        {
          q: "ゲージ圧と絶対圧の関係として正しいのは?",
          choices: ["絶対圧=大気圧+ゲージ圧", "ゲージ圧=大気圧+絶対圧", "常に同じ", "絶対圧は負になる"],
          answer: 0,
          expl: "ゲージ圧は大気圧を0とした圧力。絶対圧表示では大気圧を足す",
          sectionRef: 1
        },
        {
          q: "油圧ジャッキで力が増幅されるのはなぜ?",
          choices: ["圧力が増幅されるから", "圧力は同じで受け手の面積が大きいから", "油の粘性が大きいから", "油が圧縮されるから"],
          answer: 1,
          expl: "パスカルの原理で圧力は等しく伝わり、F=pAより面積が大きい側で力が大きくなる",
          sectionRef: 2
        },
        {
          q: "マノメータ計算の基本ルールは?",
          choices: ["同じ流体でつながった同じ高さは同じ圧力", "液面はいつも同じ高さになる", "水銀の方が常に高くなる", "圧力は管の長さに比例する"],
          answer: 0,
          expl: "等圧面の性質。境界に等圧面を引き、下がれば+γh、上がれば−γhでたどる",
          sectionRef: 3
        }
      ]
    },
    // ================================================================
    // u3 平面・曲面に働く全水圧
    // ================================================================
    {
      id: "u3",
      title: "平面・曲面に働く全水圧と作用点",
      weeks: "第4〜5週",
      priority: 3,
      sections: [
        {
          heading: "全水圧=図心の圧力×面積",
          body: "<p>ダムのゲートのような面全体が受ける水圧の合力を[[全水圧]]といいます。圧力は深さで変わるので本来は積分が必要ですが、結論はシンプルで</p><p>$$P = \\gamma h_G A$$</p><p>つまり<b>面の[[図心]](面積の重心)での圧力 $\\gamma h_G$ に面積 $A$ を掛けるだけ</b>。クラスの平均点×人数=合計点、と同じ発想です。圧力(N/m²)×面積(m²)=力(N)なので、単位もここで力に変わります。$h_G$ は必ず<b>水面から図心までの鉛直深さ</b>で測ることに注意。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='50' x2='370' y2='50' stroke='var(--c-accent)' stroke-width='2'/><text x='300' y='42' font-size='14' fill='var(--c-text)'>水面</text><rect x='120' y='50' width='16' height='200' fill='var(--c-fill2)' stroke='var(--c-line)' stroke-width='2'/><polygon points='136,50 136,250 260,250' fill='var(--c-fill1)' stroke='var(--c-accent)' stroke-width='2'/><line x1='136' y1='150' x2='198' y2='150' stroke='var(--c-accent)' stroke-width='2'/><circle cx='136' cy='150' r='5' fill='var(--c-text)'/><text x='205' y='148' font-size='14' fill='var(--c-text)'>図心 h_G</text><circle cx='136' cy='183' r='5' fill='var(--c-accent)'/><line x1='136' y1='183' x2='230' y2='183' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a3)'/><defs><marker id='a3' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-accent)'/></marker></defs><text x='205' y='205' font-size='14' fill='var(--c-accent)'>作用点 h_C(図心より下)</text><text x='60' y='280' font-size='14' fill='var(--c-text)'>圧力分布は三角形 → 合力は下寄りに働く</text></svg>"
        },
        {
          heading: "作用点は図心より必ず深い",
          body: "<p>全水圧が働く点([[圧力中心]])は図心ではありません。圧力は深いほど大きいので、合力の位置は<b>深い側に引っ張られて図心より下</b>になります。シーソーで重い子の側に支点が寄るのと同じ理屈です。水面から作用点までの深さは</p><p>$$h_C = h_G + \\dfrac{I_G}{h_G A}$$</p><p>$I_G$ は図心まわりの[[断面二次モーメント]]で、幅 $b$・高さ $H$ の長方形なら $I_G = bH^3/12$。上端が水面にある長方形ゲートでは $h_C = \\tfrac{2}{3}H$ になることを覚えておくと検算に便利です。ゲートが深く沈むほど圧力分布が長方形に近づき、$h_C$ は図心に近づいていきます。</p>"
        },
        {
          heading: "曲面は水平と鉛直に分解する",
          body: "<p>曲面に働く水圧は向きが場所ごとに変わるため、そのまま足せません。そこで<b>水平分力と鉛直分力に分けて</b>攻めます。</p><ul><li><b>水平分力 $P_H$</b>:曲面を鉛直な平面に投影した面に働く全水圧と同じ。$P_H = \\gamma h_G A_v$</li><li><b>鉛直分力 $P_V$</b>:曲面の上に載っている(または仮想的に載る)水の重量。$P_V = \\gamma V$</li></ul><p>合力は $P = \\sqrt{P_H^2 + P_V^2}$。「横から見た影に働く水圧」+「上に乗った水の重さ」と考えると、複雑な曲面でも機械的に解けます。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "平面に働く全水圧",
          latex: "P = \\gamma h_G A",
          vars: [
            { sym: "P", meaning: "全水圧", unit: "N" },
            { sym: "h_G", meaning: "水面から図心までの深さ", unit: "m" },
            { sym: "A", meaning: "受圧面の面積", unit: "m²" }
          ],
          when: "「ゲート・壁面に働く全水圧を求めよ」。曲面の水平分力にも同じ式を使う",
          intuition: "図心での圧力を面全体の平均圧力とみなして面積を掛ける",
          derivation: "p=γhを面全体で積分すると γ∫h dA=γ h_G A(図心の定義そのもの)",
          blank: "P = \\gamma \\, ? \\, A",
          blankAnswer: "h_G"
        },
        {
          id: "f2",
          name: "作用点(圧力中心)の深さ",
          latex: "h_C = h_G + \\dfrac{I_G}{h_G A}",
          vars: [
            { sym: "h_C", meaning: "水面から作用点までの深さ", unit: "m" },
            { sym: "h_G", meaning: "水面から図心までの深さ", unit: "m" },
            { sym: "I_G", meaning: "図心まわりの断面二次モーメント", unit: "m⁴" }
          ],
          when: "全水圧の作用点を問われたら必ずセットで。ゲートの支点まわりのモーメント計算でも使う",
          intuition: "圧力が深い側ほど大きいぶん、合力の位置は図心より I_G/(h_G A) だけ下がる",
          derivation: "圧力分布のモーメントを全水圧で割る。上端水面の長方形なら h_C=(2/3)H",
          blank: "h_C = h_G + \\dfrac{?}{h_G A}",
          blankAnswer: "I_G"
        },
        {
          id: "f3",
          name: "長方形の断面二次モーメント",
          latex: "I_G = \\dfrac{b H^3}{12}",
          vars: [
            { sym: "b", meaning: "幅", unit: "m" },
            { sym: "H", meaning: "高さ(深さ方向)", unit: "m" }
          ],
          when: "長方形ゲートの作用点計算の部品。Hは必ず「深さ方向」の辺",
          intuition: "高さの3乗で効く。縦長の面ほど作用点が図心から離れる",
          derivation: "構造力学と同じ定義 ∫y²dA を長方形で積分した結果",
          blank: "I_G = \\dfrac{b H^3}{?}",
          blankAnswer: "12"
        },
        {
          id: "f4",
          name: "曲面の水平分力",
          latex: "P_H = \\gamma h_G A_v",
          vars: [
            { sym: "P_H", meaning: "水平分力", unit: "N" },
            { sym: "A_v", meaning: "曲面を鉛直面に投影した面積", unit: "m²" },
            { sym: "h_G", meaning: "投影面の図心の深さ", unit: "m" }
          ],
          when: "曲面ゲート・円弧ゲートの水平方向の力。投影面を長方形とみなして平面の式を適用",
          intuition: "横から見た「影」に働く全水圧と同じ。曲がり方は水平方向には関係ない",
          derivation: "水平方向の圧力成分だけ積分すると投影面への全水圧に一致する",
          blank: "P_H = \\gamma h_G \\, ?",
          blankAnswer: "A_v"
        },
        {
          id: "f5",
          name: "曲面の鉛直分力",
          latex: "P_V = \\gamma V",
          vars: [
            { sym: "P_V", meaning: "鉛直分力", unit: "N" },
            { sym: "V", meaning: "曲面上の(仮想)水体積", unit: "m³" }
          ],
          when: "曲面ゲートの鉛直方向の力。曲面から水面まで持ち上げた水柱の体積を使う",
          intuition: "曲面の上に載っている水の重さがそのまま押し下げる(下に水があれば押し上げる)",
          derivation: "鉛直方向の圧力成分を積分すると曲面上の水柱の重量になる",
          blank: "P_V = \\gamma \\, ?",
          blankAnswer: "V"
        }
      ],
      selectQuiz: [
        {
          q: "水面下にある長方形ゲート全体に働く水圧の合力を求めたい",
          choices: ["P=γh_G A", "p=γh", "F=ρQv", "P_V=γV"],
          answer: 0,
          expl: "面全体の合力=全水圧。図心の深さ×γ×面積。1点の圧力p=γhと混同しない",
          formulaRef: "f1"
        },
        {
          q: "全水圧の作用点の位置(深さ)を求めたい",
          choices: ["h_C=h_G+I_G/(h_G A)", "h_C=h_G", "h_C=H/2", "P=γh_G A"],
          answer: 0,
          expl: "作用点は図心よりI_G/(h_G A)だけ深い。図心と作用点は別物",
          formulaRef: "f2"
        },
        {
          q: "四分円の曲面ゲートに働く水平方向の力を求めたい",
          choices: ["投影面にP_H=γh_G A_v", "曲面積にp=γhを掛ける", "P_V=γV", "アルキメデスの原理"],
          answer: 0,
          expl: "曲面の水平分力=鉛直投影面に働く全水圧。曲面そのものの面積は使わない",
          formulaRef: "f4"
        },
        {
          q: "曲面ゲートに働く鉛直方向の力を求めたい",
          choices: ["P_V=γV(曲面上の水の重量)", "P_H=γh_G A_v", "h_C=h_G+I_G/(h_G A)", "p=γh"],
          answer: 0,
          expl: "鉛直分力は曲面の上に載る水柱の重量γV",
          formulaRef: "f5"
        },
        {
          q: "幅b・高さHの長方形ゲートの作用点計算に必要なI_Gを求めたい",
          choices: ["I_G=bH³/12", "I_G=bH²/6", "I_G=bH³/3", "I_G=πd⁴/64"],
          answer: 0,
          expl: "長方形の図心まわりの断面二次モーメントはbH³/12。Hは深さ方向の辺",
          formulaRef: "f3"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "上端が水面にある鉛直長方形ゲートの全水圧と作用点",
          variants: [
            {
              q: "幅2m、高さ3mの鉛直な長方形ゲートの上端が水面に一致している。全水圧Pと作用点の深さh_Cを求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "全水圧 $P=\\gamma h_G A$、作用点 $h_C = h_G + \\dfrac{I_G}{h_G A}$" },
                { label: "② 代入", content: "$h_G = 3/2 = 1.5$ m、$A = 2\\times3 = 6$ m²、$I_G = \\dfrac{2\\times3^3}{12} = 4.5$ m⁴" },
                { label: "③ 計算", content: "$P = 9.8 \\times 1.5 \\times 6 = 88.2$ kN。$h_C = 1.5 + \\dfrac{4.5}{1.5\\times6} = 1.5+0.5 = 2.0$ m" },
                { label: "④ 単位・妥当性確認", content: "上端水面の長方形は $h_C = \\tfrac{2}{3}H = \\tfrac{2}{3}\\times3 = 2.0$ m と一致。検算OK" }
              ],
              answer: "P = 88.2 kN、h_C = 2.0 m"
            },
            {
              q: "幅3m、高さ4mの鉛直な長方形ゲートの上端が水面に一致している。全水圧Pと作用点の深さh_Cを求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "$P=\\gamma h_G A$ と $h_C = h_G + \\dfrac{I_G}{h_G A}$" },
                { label: "② 代入", content: "$h_G = 2$ m、$A = 12$ m²、$I_G = \\dfrac{3\\times4^3}{12} = 16$ m⁴" },
                { label: "③ 計算", content: "$P = 9.8\\times2\\times12 = 235.2$ kN。$h_C = 2 + \\dfrac{16}{2\\times12} = 2+0.667 = 2.67$ m" },
                { label: "④ 単位・妥当性確認", content: "$\\tfrac{2}{3}\\times4 = 2.67$ m と一致。作用点が図心(2m)より下にあり妥当" }
              ],
              answer: "P ≒ 235.2 kN、h_C ≒ 2.67 m"
            }
          ],
          formulaRefs: ["f1", "f2", "f3"]
        },
        {
          id: "p2",
          pattern: "水面下に沈んだゲートの全水圧と作用点",
          variants: [
            {
              q: "幅2m、高さ2mの鉛直な長方形ゲートの上端が水面下3mにある。全水圧Pと作用点の深さh_Cを求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "$P=\\gamma h_G A$、$h_C = h_G + \\dfrac{I_G}{h_G A}$。h_Gは水面からゲート中央まで" },
                { label: "② 代入", content: "$h_G = 3 + 1 = 4$ m、$A = 4$ m²、$I_G = \\dfrac{2\\times2^3}{12} = 1.333$ m⁴" },
                { label: "③ 計算", content: "$P = 9.8\\times4\\times4 = 156.8$ kN。$h_C = 4 + \\dfrac{1.333}{4\\times4} = 4+0.083 = 4.08$ m" },
                { label: "④ 単位・妥当性確認", content: "深く沈むほど補正項は小さくなる。0.083m≪2mで、図心のわずかに下。妥当" }
              ],
              answer: "P ≒ 156.8 kN、h_C ≒ 4.08 m"
            },
            {
              q: "幅1.5m、高さ3mの鉛直な長方形ゲートの上端が水面下2mにある。全水圧Pと作用点の深さh_Cを求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "$P=\\gamma h_G A$、$h_C = h_G + \\dfrac{I_G}{h_G A}$" },
                { label: "② 代入", content: "$h_G = 2 + 1.5 = 3.5$ m、$A = 4.5$ m²、$I_G = \\dfrac{1.5\\times3^3}{12} = 3.375$ m⁴" },
                { label: "③ 計算", content: "$P = 9.8\\times3.5\\times4.5 = 154.35$ kN。$h_C = 3.5 + \\dfrac{3.375}{3.5\\times4.5} = 3.5+0.214 = 3.71$ m" },
                { label: "④ 単位・妥当性確認", content: "作用点は図心3.5mより0.21m下でゲート範囲内(2〜5m)に収まる。妥当" }
              ],
              answer: "P ≒ 154.4 kN、h_C ≒ 3.71 m"
            }
          ],
          formulaRefs: ["f1", "f2", "f3"]
        },
        {
          id: "p3",
          pattern: "曲面(四分円)ゲートの全水圧",
          variants: [
            {
              q: "半径2m、幅3mの四分円曲面ゲートがあり、円の上端が水面に一致し、水は曲面の上側にある。水平分力P_H、鉛直分力P_V、合力Pを求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "水平は投影面に $P_H = \\gamma h_G A_v$、鉛直は水の重量 $P_V = \\gamma V$、合力 $P=\\sqrt{P_H^2+P_V^2}$" },
                { label: "② 代入", content: "投影面:2m×3m、$h_G=1$ m → $P_H = 9.8\\times1\\times6$。水の体積:$V = \\dfrac{\\pi r^2}{4}\\times B = \\dfrac{\\pi\\times4}{4}\\times3 = 3\\pi = 9.42$ m³" },
                { label: "③ 計算", content: "$P_H = 58.8$ kN、$P_V = 9.8\\times9.42 = 92.4$ kN、$P = \\sqrt{58.8^2+92.4^2} = \\sqrt{11989} \\approx 109.5$ kN" },
                { label: "④ 単位・妥当性確認", content: "P_V(上に載る水が多い)>P_Hで直感と整合。合力は各分力より大きく√2倍以内。妥当" }
              ],
              answer: "P_H = 58.8 kN、P_V ≒ 92.4 kN、P ≒ 109.5 kN"
            },
            {
              q: "半径1m、幅2mの四分円曲面ゲートで、円の上端が水面に一致し水は曲面の上側にある。水平分力P_H、鉛直分力P_V、合力Pを求めよ。(γ=9.8 kN/m³)",
              steps: [
                { label: "① 式の選択", content: "$P_H = \\gamma h_G A_v$、$P_V = \\gamma V$、$P=\\sqrt{P_H^2+P_V^2}$" },
                { label: "② 代入", content: "投影面:1m×2m、$h_G=0.5$ m。$V = \\dfrac{\\pi\\times1^2}{4}\\times2 = 1.571$ m³" },
                { label: "③ 計算", content: "$P_H = 9.8\\times0.5\\times2 = 9.8$ kN、$P_V = 9.8\\times1.571 = 15.4$ kN、$P = \\sqrt{9.8^2+15.4^2} = \\sqrt{333.2} \\approx 18.3$ kN" },
                { label: "④ 単位・妥当性確認", content: "半径が半分になるとP_Hは1/4、P_Vは(体積比で)約1/6。スケール感も整合" }
              ],
              answer: "P_H = 9.8 kN、P_V ≒ 15.4 kN、P ≒ 18.3 kN"
            }
          ],
          formulaRefs: ["f4", "f5"]
        }
      ],
      quiz: [
        {
          q: "全水圧の作用点(圧力中心)は図心に対してどこにある?",
          choices: ["常に図心と一致", "常に図心より浅い", "常に図心より深い", "問題による"],
          answer: 2,
          expl: "深い側ほど圧力が大きいので、合力は図心よりI_G/(h_G A)だけ必ず深い位置に働く",
          sectionRef: 1
        },
        {
          q: "ゲートが水面から深く沈むほど、作用点と図心の距離はどうなる?",
          choices: ["広がる", "変わらない", "縮まって図心に近づく", "ゲートの外に出る"],
          answer: 2,
          expl: "h_Gが大きくなると補正項I_G/(h_G A)が小さくなる。圧力分布が長方形に近づくため",
          sectionRef: 1
        },
        {
          q: "曲面に働く水圧の水平分力の求め方は?",
          choices: ["曲面の面積×図心の圧力", "鉛直投影面に働く全水圧", "曲面上の水の重量", "曲面の弧長×γh"],
          answer: 1,
          expl: "水平分力は曲面を鉛直面に投影した「影」に働く全水圧に等しい",
          sectionRef: 2
        },
        {
          q: "上端が水面に一致する高さHの長方形ゲートの作用点の深さは?",
          choices: ["H/2", "H/3", "2H/3", "H"],
          answer: 2,
          expl: "三角形分布の重心位置。h_C=h_G+I_G/(h_G A)にh_G=H/2を代入しても2H/3になる",
          sectionRef: 1
        },
        {
          q: "全水圧P=γh_G Aの単位として正しいのは?",
          choices: ["N/m²(圧力)", "N(力)", "N/m³", "無次元"],
          answer: 1,
          expl: "圧力γh_G(N/m²)×面積A(m²)=力(N)。全水圧は「力」である",
          sectionRef: 0
        }
      ]
    },
    // ================================================================
    // u4 浮力と浮体の安定・相対的静止
    // ================================================================
    {
      id: "u4",
      title: "浮力・浮体の安定・相対的静止",
      weeks: "第6〜7週",
      priority: 3,
      sections: [
        {
          heading: "アルキメデスの原理:押しのけた水の重さ",
          body: "<p>水中の物体には上向きの[[浮力]]が働きます。大きさは<b>物体が押しのけた水の重量</b>に等しく、</p><p>$$F_B = \\gamma V$$</p><p>($V$ は水没している部分の体積)。お風呂に入ると体が軽く感じるあの力です。正体は「物体の下面が受ける圧力(深い=大きい)と上面が受ける圧力(浅い=小さい)の差」で、新しい力ではなく静水圧の合力にすぎません。浮いている物体では<b>重量W=浮力F_B</b>がつり合っており、これから[[喫水]](沈んでいる深さ)が決まります。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='120' x2='370' y2='120' stroke='var(--c-accent)' stroke-width='2'/><text x='310' y='112' font-size='14' fill='var(--c-text)'>水面</text><rect x='30' y='120' width='340' height='150' fill='var(--c-fill1)' opacity='0.5'/><rect x='140' y='80' width='120' height='120' fill='var(--c-fill2)' stroke='var(--c-line)' stroke-width='2'/><text x='200' y='105' text-anchor='middle' font-size='14' fill='var(--c-text)'>浮体</text><line x1='200' y1='140' x2='200' y2='60' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a4)'/><text x='210' y='68' font-size='14' fill='var(--c-accent)'>浮力 F=γV</text><line x1='185' y1='160' x2='185' y2='240' stroke='var(--c-text)' stroke-width='3' marker-end='url(#a4b)'/><text x='195' y='235' font-size='14' fill='var(--c-text)'>重量 W</text><defs><marker id='a4' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-accent)'/></marker><marker id='a4b' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-text)'/></marker></defs><text x='60' y='290' font-size='14' fill='var(--c-text)'>浮いている物体は W=γV(喫水で決まる)</text></svg>"
        },
        {
          heading: "浮体の安定はメタセンタで判定",
          body: "<p>船が傾いたとき元に戻るか転覆するかは、[[メタセンタ]] M と重心 G の位置関係で決まります。浮体が微小に傾くと[[浮心]] C(排除体積の図心)が横に移動し、浮力の作用線が浮体の中心軸と交わる点が M。<b>M が G より上なら復元モーメントが働いて安定</b>です。</p><p>$$\\overline{MC} = \\dfrac{I}{V'}, \\qquad \\overline{GM} = \\overline{MC} - \\overline{GC}$$</p><p>$I$ は水面で切った浮面(喫水面)の断面二次モーメント、$V'$ は排除体積。だるまが起き上がるのは重心が低い(GMが大きい)から、と考えるとイメージしやすいでしょう。$\\overline{GM}>0$ で安定、$<0$ で不安定です。</p>"
        },
        {
          heading: "相対的静止:動く容器の中の水面",
          body: "<p>水槽ごと一定加速度で動かすと、水は容器に対して止まったまま全体が運動します。これが[[相対的静止]]。バスが発進すると持っているコーヒーの液面が後ろに傾く、あの現象です。</p><ul><li><b>水平加速度 $\\alpha$</b>:水面は $\\tan\\theta = \\alpha/g$ だけ傾く。慣性力と重力の合力に垂直な面が新しい[[等圧面]]になる</li><li><b>角速度 $\\omega$ で回転</b>:水面は回転放物面 $z = \\dfrac{\\omega^2 r^2}{2g}$ になる。外側ほど遠心力で盛り上がる</li></ul><p>どちらも「見かけの重力の向きに水面が垂直になる」と考えれば1本の原理で説明できます。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='80' width='140' height='140' fill='none' stroke='var(--c-line)' stroke-width='2'/><polygon points='50,110 190,170 190,220 50,220' fill='var(--c-fill1)' stroke='var(--c-accent)' stroke-width='2'/><line x1='120' y1='250' x2='190' y2='250' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a5)'/><text x='120' y='272' font-size='14' fill='var(--c-text)'>加速度 α</text><text x='60' y='100' font-size='14' fill='var(--c-text)'>tanθ=α/g</text><rect x='240' y='80' width='120' height='140' fill='none' stroke='var(--c-line)' stroke-width='2'/><path d='M240 130 Q300 190 360 130 L360 220 L240 220 Z' fill='var(--c-fill1)' stroke='var(--c-accent)' stroke-width='2'/><line x1='300' y1='70' x2='300' y2='225' stroke='var(--c-text)' stroke-width='1' stroke-dasharray='5 4'/><text x='250' y='262' font-size='14' fill='var(--c-text)'>回転 → 放物面</text><defs><marker id='a5' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-accent)'/></marker></defs></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "アルキメデスの浮力",
          latex: "F_B = \\gamma V",
          vars: [
            { sym: "F_B", meaning: "浮力", unit: "N" },
            { sym: "\\gamma", meaning: "水の単位体積重量", unit: "N/m³" },
            { sym: "V", meaning: "水没部分の体積(排除体積)", unit: "m³" }
          ],
          when: "浮体・水中物体の問題全般。喫水計算はW=γVのつり合いから",
          intuition: "押しのけた水の重さの分だけ持ち上げられる",
          derivation: "物体の上下面に働く静水圧の差を積分すると排除水の重量になる",
          blank: "F_B = \\gamma \\, ?",
          blankAnswer: "V"
        },
        {
          id: "f2",
          name: "浮体のつり合い(喫水)",
          latex: "W = \\gamma A d",
          vars: [
            { sym: "W", meaning: "浮体の重量", unit: "N" },
            { sym: "A", meaning: "浮体の水平断面積", unit: "m²" },
            { sym: "d", meaning: "喫水", unit: "m" }
          ],
          when: "箱型・角柱の浮体が「どこまで沈むか」を問われたとき",
          intuition: "重いほど深く沈んで浮力を稼ぐ。比重×高さ=喫水(均質な角柱の場合)",
          derivation: "浮力F=γV=γAdと重量Wのつり合いをdについて解く",
          blank: "W = \\gamma A \\, ?",
          blankAnswer: "d"
        },
        {
          id: "f3",
          name: "メタセンタ高さ",
          latex: "\\overline{GM} = \\dfrac{I}{V'} - \\overline{GC}",
          vars: [
            { sym: "\\overline{GM}", meaning: "メタセンタ高さ", unit: "m" },
            { sym: "I", meaning: "喫水面の断面二次モーメント", unit: "m⁴" },
            { sym: "V'", meaning: "排除体積", unit: "m³" },
            { sym: "\\overline{GC}", meaning: "重心Gと浮心Cの距離", unit: "m" }
          ],
          when: "浮体の安定判別。GM>0なら安定、GM<0なら不安定(転覆)",
          intuition: "喫水面が広い(Iが大きい)ほど、重心が低いほど安定",
          derivation: "微小傾斜時の浮心の移動量からMC=I/V'を導き、Gとの位置関係を差し引く",
          blank: "\\overline{GM} = \\dfrac{I}{?} - \\overline{GC}",
          blankAnswer: "V'"
        },
        {
          id: "f4",
          name: "水平加速度時の水面勾配",
          latex: "\\tan\\theta = \\dfrac{\\alpha}{g}",
          vars: [
            { sym: "\\theta", meaning: "水面の傾き角", unit: "rad(度)" },
            { sym: "\\alpha", meaning: "水平加速度", unit: "m/s²" },
            { sym: "g", meaning: "重力加速度", unit: "m/s²" }
          ],
          when: "タンクローリー・水槽を一定加速度で動かす問題",
          intuition: "加速が強いほど水面は大きく傾く。α=gなら45°",
          derivation: "慣性力mαと重力mgの合力に垂直な面が水面(等圧面)になる",
          blank: "\\tan\\theta = \\dfrac{?}{g}",
          blankAnswer: "\\alpha"
        },
        {
          id: "f5",
          name: "回転容器の水面形",
          latex: "z = \\dfrac{\\omega^2 r^2}{2g}",
          vars: [
            { sym: "z", meaning: "中心からの水面上昇量", unit: "m" },
            { sym: "\\omega", meaning: "角速度", unit: "rad/s" },
            { sym: "r", meaning: "回転軸からの距離", unit: "m" }
          ],
          when: "円筒容器を回転させたときの水面の形・上昇量を問われたとき",
          intuition: "外側ほど遠心力が強く盛り上がる。r²に比例する放物面",
          derivation: "遠心力ω²rと重力のつり合いから等圧面の勾配dz/dr=ω²r/gを積分",
          blank: "z = \\dfrac{\\omega^2 r^2}{?}",
          blankAnswer: "2g"
        }
      ],
      selectQuiz: [
        {
          q: "比重0.6の木塊が水に浮いている。喫水を求めたい",
          choices: ["W=γAd(浮力とのつり合い)", "P=γh_G A", "tanθ=α/g", "GM=I/V'−GC"],
          answer: 0,
          expl: "浮体は重量=浮力。均質な角柱なら喫水=比重×高さ",
          formulaRef: "f2"
        },
        {
          q: "箱型ケーソンが転覆しないか安定性を判定したい",
          choices: ["GM=I/V'−GC の符号", "F_B=γV", "p=γh", "z=ω²r²/2g"],
          answer: 0,
          expl: "安定判別はメタセンタ高さGM。正なら安定、負なら不安定",
          formulaRef: "f3"
        },
        {
          q: "水を積んだタンク車が一定加速度で走るときの水面の傾きを求めたい",
          choices: ["tanθ=α/g", "z=ω²r²/2g", "W=γAd", "P=γh_G A"],
          answer: 0,
          expl: "水平加速度の相対的静止。慣性力/重力=tanθ",
          formulaRef: "f4"
        },
        {
          q: "円筒容器を回転させたときの縁での水面上昇量を求めたい",
          choices: ["z=ω²r²/2g", "tanθ=α/g", "F_B=γV", "h_C=h_G+I_G/(h_G A)"],
          answer: 0,
          expl: "回転の相対的静止は放物面。縁はr=容器半径を代入",
          formulaRef: "f5"
        },
        {
          q: "水中に完全に沈んだコンクリートブロックの見かけの重さを求めたい",
          choices: ["F_B=γVを重量から引く", "W=γAd", "GM=I/V'−GC", "tanθ=α/g"],
          answer: 0,
          expl: "水中重量=空中重量−浮力γV。Vはブロック全体積",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "浮体の喫水計算",
          variants: [
            {
              q: "一辺0.5mの立方体の木塊(比重0.6)が水に浮いている。喫水dを求めよ。",
              steps: [
                { label: "① 式の選択", content: "浮体のつり合い $W = \\gamma A d$。重量は $W = s\\gamma \\times V_{全体}$" },
                { label: "② 代入", content: "$W = 0.6\\times9.8\\times0.5^3 = 0.735$ kN。$A = 0.25$ m² より $0.735 = 9.8\\times0.25\\times d$" },
                { label: "③ 計算", content: "$d = \\dfrac{0.735}{2.45} = 0.3$ m" },
                { label: "④ 単位・妥当性確認", content: "均質な角柱では喫水=比重×高さ=0.6×0.5=0.3 m。一致し検算OK" }
              ],
              answer: "d = 0.3 m"
            },
            {
              q: "一辺1mの立方体(比重0.8)が水に浮いている。喫水dと水面上に出ている高さを求めよ。",
              steps: [
                { label: "① 式の選択", content: "$W = \\gamma A d$ のつり合い" },
                { label: "② 代入", content: "$W = 0.8\\times9.8\\times1 = 7.84$ kN、$A=1$ m² より $7.84 = 9.8\\times1\\times d$" },
                { label: "③ 計算", content: "$d = 0.8$ m。水面上は $1-0.8 = 0.2$ m" },
                { label: "④ 単位・妥当性確認", content: "喫水=比重×高さの関係と一致。比重0.8なら8割沈む、直感とも整合" }
              ],
              answer: "d = 0.8 m(水面上 0.2 m)"
            }
          ],
          formulaRefs: ["f1", "f2"]
        },
        {
          id: "p2",
          pattern: "メタセンタ高さによる安定判別",
          variants: [
            {
              q: "幅4m、長さ10mの箱型浮体が喫水1mで浮いている。重心Gは底面から1.2mの高さにある。メタセンタ高さGMを求め、安定か判別せよ。",
              steps: [
                { label: "① 式の選択", content: "$\\overline{GM} = \\dfrac{I}{V'} - \\overline{GC}$。傾く方向(幅方向)のIを使う" },
                { label: "② 代入", content: "$I = \\dfrac{10\\times4^3}{12} = 53.3$ m⁴、$V' = 4\\times10\\times1 = 40$ m³。浮心Cは喫水の半分=底面から0.5m → $\\overline{GC} = 1.2-0.5 = 0.7$ m" },
                { label: "③ 計算", content: "$\\dfrac{I}{V'} = 1.33$ m、$\\overline{GM} = 1.33-0.7 = 0.63$ m" },
                { label: "④ 単位・妥当性確認", content: "GM=0.63 m > 0 なので安定。幅広の浮体はIが大きく安定しやすい、と整合" }
              ],
              answer: "GM ≒ 0.63 m > 0 で安定"
            },
            {
              q: "幅2m、長さ8mの箱型浮体が喫水1.5mで浮いている。重心Gは底面から1.5mの高さにある。メタセンタ高さGMを求め、安定か判別せよ。",
              steps: [
                { label: "① 式の選択", content: "$\\overline{GM} = \\dfrac{I}{V'} - \\overline{GC}$" },
                { label: "② 代入", content: "$I = \\dfrac{8\\times2^3}{12} = 5.33$ m⁴、$V' = 2\\times8\\times1.5 = 24$ m³。浮心は底面から0.75m → $\\overline{GC} = 1.5-0.75 = 0.75$ m" },
                { label: "③ 計算", content: "$\\dfrac{I}{V'} = 0.222$ m、$\\overline{GM} = 0.222-0.75 = -0.53$ m" },
                { label: "④ 単位・妥当性確認", content: "GM<0 なので不安定(転覆する)。幅が狭く重心が高い浮体は不安定、直感とも一致" }
              ],
              answer: "GM ≒ −0.53 m < 0 で不安定"
            }
          ],
          formulaRefs: ["f3"]
        },
        {
          id: "p3",
          pattern: "相対的静止(水平加速度)",
          variants: [
            {
              q: "水を入れた水槽を水平方向に加速度α=2.45 m/s²で動かす。水面の傾き角θを求めよ。また水槽の長さが4mのとき、端での水面の上昇量を求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "水平加速度の相対的静止 $\\tan\\theta = \\dfrac{\\alpha}{g}$" },
                { label: "② 代入", content: "$\\tan\\theta = \\dfrac{2.45}{9.8} = 0.25$" },
                { label: "③ 計算", content: "$\\theta = \\arctan 0.25 \\approx 14.0°$。上昇量 $= \\dfrac{L}{2}\\tan\\theta = 2\\times0.25 = 0.5$ m" },
                { label: "④ 単位・妥当性確認", content: "中央を支点に後端が+0.5m、前端が−0.5m。α<gなので45°未満、妥当" }
              ],
              answer: "θ ≒ 14.0°、上昇量 0.5 m"
            },
            {
              q: "水槽を水平方向に加速度α=4.9 m/s²で動かすときの水面の傾き角θと、長さ2mの水槽の端での上昇量を求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "$\\tan\\theta = \\dfrac{\\alpha}{g}$" },
                { label: "② 代入", content: "$\\tan\\theta = \\dfrac{4.9}{9.8} = 0.5$" },
                { label: "③ 計算", content: "$\\theta = \\arctan 0.5 \\approx 26.6°$。上昇量 $= 1\\times0.5 = 0.5$ m" },
                { label: "④ 単位・妥当性確認", content: "加速度がgの半分でtanθ=0.5。α=gのとき45°になる感覚と整合" }
              ],
              answer: "θ ≒ 26.6°、上昇量 0.5 m"
            }
          ],
          formulaRefs: ["f4"]
        }
      ],
      quiz: [
        {
          q: "浮力の大きさを決めるのは?",
          choices: ["物体の重さ", "物体が押しのけた水の重量", "物体の材質", "水深"],
          answer: 1,
          expl: "アルキメデスの原理。F=γV(Vは水没部分の体積)。物体の重さや材質は浮力自体には無関係",
          sectionRef: 0
        },
        {
          q: "浮体が安定である条件は?",
          choices: ["メタセンタMが重心Gより上", "Mが浮心Cより下", "GがCより下ならいつでも安定", "喫水が浅い"],
          answer: 0,
          expl: "GM>0(MがGより上)が安定条件。GがCより上でもGM>0なら安定になれる点に注意",
          sectionRef: 1
        },
        {
          q: "浮心とは何の図心?",
          choices: ["浮体全体の体積", "浮体が押しのけた水(排除体積)", "喫水面の面積", "浮体の重量分布"],
          answer: 1,
          expl: "浮心Cは排除体積の図心で、浮力はこの点に作用する。傾くと排除体積の形が変わりCが動く",
          sectionRef: 1
        },
        {
          q: "回転する円筒容器内の水面の形は?",
          choices: ["平面のまま", "円錐面", "回転放物面", "球面"],
          answer: 2,
          expl: "z=ω²r²/2g のr²に比例する放物面。外側ほど遠心力で盛り上がる",
          sectionRef: 2
        },
        {
          q: "水平加速度αで動く水槽の水面が傾く理由は?",
          choices: ["水が蒸発するから", "慣性力と重力の合力に垂直な面が等圧面になるから", "粘性のせい", "浮力が変わるから"],
          answer: 1,
          expl: "見かけの重力(重力+慣性力)の向きが変わり、それに垂直になるよう水面が傾く。tanθ=α/g",
          sectionRef: 2
        }
      ]
    },
    // ================================================================
    // u5 流れの分類と連続式
    // ================================================================
    {
      id: "u5",
      title: "流れの分類と連続式",
      weeks: "第8〜9週",
      priority: 2,
      sections: [
        {
          heading: "流れを分類する4つの軸",
          body: "<p>ここから水が「動く」世界に入ります。まず流れを整理する軸を押さえましょう。</p><ul><li><b>[[完全流体]]か[[粘性流体]]か</b>:粘性(摩擦)を無視するか考えるか</li><li><b>[[定常流]]か[[非定常流]]か</b>:時間が経っても流れの様子が変わらないか</li><li><b>[[等流]]か[[不等流]]か</b>:場所によって流速・水深が変わらないか</li><li><b>[[層流]]か[[乱流]]か</b>:粒子が整然と流れるか混ざり合うか</li></ul><p>流れの形態では、管内が水で満たされた[[管水路]]と、河川のように自由水面を持つ[[開水路]]を分けます。さらに開水路では[[フルード数]]によって[[常流]]と[[射流]]に分かれます。試験では「定常・非定常」と「等流・不等流」の区別(時間か場所か)がよく問われます。</p>"
        },
        {
          heading: "連続式:細いところほど速い",
          body: "<p>[[流線]]の束(流管)を水が流れるとき、途中で水が消えたり湧いたりしない限り、どの断面でも単位時間に通過する水量(流量 $Q$)は同じです。これが質量保存則からくる[[連続式]]:</p><p>$$Q = A_1 v_1 = A_2 v_2$$</p><p>ホースの先を指でつぶすと水が勢いよく飛ぶのは、断面積 $A$ が小さくなった分だけ流速 $v$ が大きくなるから。断面積が1/4になれば流速は4倍です。円管では $A = \\pi d^2/4$ なので、<b>直径が半分→面積1/4→流速4倍</b>という比例関係をすぐ出せるようにしておきましょう。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><path d='M40 90 L180 90 Q230 90 230 115 L230 115 Q230 130 280 130 L360 130' fill='none' stroke='var(--c-line)' stroke-width='2'/><path d='M40 210 L180 210 Q230 210 230 185 Q230 170 280 170 L360 170' fill='none' stroke='var(--c-line)' stroke-width='2'/><line x1='70' y1='150' x2='130' y2='150' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a6)'/><text x='70' y='140' font-size='14' fill='var(--c-text)'>v1(遅い)</text><line x1='290' y1='150' x2='390' y2='150' stroke='var(--c-accent)' stroke-width='4' marker-end='url(#a6)'/><text x='290' y='140' font-size='14' fill='var(--c-text)'>v2(速い)</text><line x1='60' y1='90' x2='60' y2='210' stroke='var(--c-text)' stroke-width='1' stroke-dasharray='4 3'/><text x='45' y='235' font-size='14' fill='var(--c-text)'>A1</text><line x1='320' y1='130' x2='320' y2='170' stroke='var(--c-text)' stroke-width='1' stroke-dasharray='4 3'/><text x='312' y='195' font-size='14' fill='var(--c-text)'>A2</text><text x='100' y='275' font-size='15' fill='var(--c-accent)'>Q = A1v1 = A2v2 (細いほど速い)</text><defs><marker id='a6' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-accent)'/></marker></defs></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "流量の定義",
          latex: "Q = A v",
          vars: [
            { sym: "Q", meaning: "流量", unit: "m³/s" },
            { sym: "A", meaning: "断面積", unit: "m²" },
            { sym: "v", meaning: "断面平均流速", unit: "m/s" }
          ],
          when: "流量・流速・断面積のうち2つが与えられたとき。あらゆる流れ計算の起点",
          intuition: "断面を1秒間に通り抜ける水の体積=断面積×進む距離",
          derivation: "1秒間に水は距離v進むので、体積はA×vの柱になる",
          blank: "Q = ? \\, v",
          blankAnswer: "A"
        },
        {
          id: "f2",
          name: "連続式(質量保存則)",
          latex: "A_1 v_1 = A_2 v_2",
          vars: [
            { sym: "A_1, A_2", meaning: "断面1・2の面積", unit: "m²" },
            { sym: "v_1, v_2", meaning: "断面1・2の流速", unit: "m/s" }
          ],
          when: "管の太さが変わる問題。ベルヌーイの定理とほぼ必ずセットで使う",
          intuition: "水は途中で消えない。細くなった分だけ速くなる",
          derivation: "非圧縮性流体では体積流量Qが一定。Q=A₁v₁=A₂v₂",
          blank: "A_1 v_1 = A_2 \\, ?",
          blankAnswer: "v_2"
        },
        {
          id: "f3",
          name: "円管の断面積",
          latex: "A = \\dfrac{\\pi d^2}{4}",
          vars: [
            { sym: "A", meaning: "断面積", unit: "m²" },
            { sym: "d", meaning: "管の直径", unit: "m" }
          ],
          when: "直径が与えられた管路問題の下ごしらえ。直径半分→面積1/4",
          intuition: "半径ではなく直径で書いた円の面積。πr²と混同しない",
          derivation: "A=πr²にr=d/2を代入するとπd²/4",
          blank: "A = \\dfrac{\\pi d^2}{?}",
          blankAnswer: "4"
        },
        {
          id: "f4",
          name: "フルード数",
          latex: "Fr = \\dfrac{v}{\\sqrt{gh}}",
          vars: [
            { sym: "Fr", meaning: "フルード数", unit: "無次元" },
            { sym: "v", meaning: "流速", unit: "m/s" },
            { sym: "h", meaning: "水深", unit: "m" }
          ],
          when: "開水路の流れを常流・射流に判別するとき",
          intuition: "流速が波の伝わる速さより遅ければ常流、速ければ射流",
          derivation: "浅水波の波速c=√(gh)との比v/cとして定義される",
          blank: "Fr = \\dfrac{v}{\\sqrt{g \\, ?}}",
          blankAnswer: "h"
        }
      ],
      selectQuiz: [
        {
          q: "直径0.2mの管を流速3m/sで水が流れている。流量を求めたい",
          choices: ["Q=Av", "A₁v₁=A₂v₂", "p=γh", "v=√(2gh)"],
          answer: 0,
          expl: "A=πd²/4=0.0314m²、Q=0.0314×3≒0.094m³/s",
          formulaRef: "f1"
        },
        {
          q: "管の直径が0.2mから0.1mに縮小する。縮小後の流速を求めたい",
          choices: ["連続式 A₁v₁=A₂v₂", "ベルヌーイの定理単独", "Q=Avのみ", "F=ρQv"],
          answer: 0,
          expl: "直径半分→面積1/4→流速4倍。連続式は質量保存則",
          formulaRef: "f2"
        },
        {
          q: "時間が経っても流速や水深が変化しない流れを何と呼ぶか確認したい",
          choices: ["定常流", "等流", "層流", "常流"],
          answer: 0,
          expl: "時間軸の分類が定常/非定常、空間(場所)軸の分類が等流/不等流",
          formulaRef: "f1"
        },
        {
          q: "直径dの円管の断面積を求めたい",
          choices: ["A=πd²/4", "A=πd²", "A=πd/2", "A=2πd"],
          answer: 0,
          expl: "直径ベースならπd²/4。半径ベースのπr²との使い分けに注意",
          formulaRef: "f3"
        },
        {
          q: "開水路で水深2.0m、流速1.0m/sの流れが常流か射流か判別したい",
          choices: ["Fr=v/√(gh)を計算して1と比較", "Re=vD/νを計算する", "p=γhを使う", "P=γh_GAを使う"],
          answer: 0,
          expl: "開水路の常流/射流はフルード数。Fr<1なら常流、Fr>1なら射流",
          formulaRef: "f4"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "流量と流速の計算(連続式)",
          variants: [
            {
              q: "直径0.2mの円管を平均流速3m/sで水が流れている。流量Qを求めよ。また管が直径0.1mに縮小したときの流速v₂を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$Q = Av$ と連続式 $A_1v_1 = A_2v_2$。円管は $A = \\pi d^2/4$" },
                { label: "② 代入", content: "$A_1 = \\dfrac{\\pi\\times0.2^2}{4} = 0.0314$ m²。$Q = 0.0314\\times3$" },
                { label: "③ 計算", content: "$Q = 0.0942$ m³/s。直径半分→面積1/4なので $v_2 = 4v_1 = 12$ m/s" },
                { label: "④ 単位・妥当性確認", content: "$A_2 = 0.00785$ m²、$Q/A_2 = 0.0942/0.00785 = 12$ m/s。検算一致" }
              ],
              answer: "Q ≒ 0.0942 m³/s、v₂ = 12 m/s"
            },
            {
              q: "直径0.3mの円管を平均流速2m/sで水が流れている。流量Qと、直径0.15mに縮小した断面での流速v₂を求めよ。",
              steps: [
                { label: "① 式の選択", content: "$Q = Av$、$A_1v_1 = A_2v_2$" },
                { label: "② 代入", content: "$A_1 = \\dfrac{\\pi\\times0.3^2}{4} = 0.0707$ m²。$Q = 0.0707\\times2$" },
                { label: "③ 計算", content: "$Q = 0.141$ m³/s。直径比1/2→面積比1/4→ $v_2 = 8$ m/s" },
                { label: "④ 単位・妥当性確認", content: "$A_2 = 0.0177$ m²、$0.141/0.0177 = 8.0$ m/s で一致" }
              ],
              answer: "Q ≒ 0.141 m³/s、v₂ = 8 m/s"
            }
          ],
          formulaRefs: ["f1", "f2", "f3"]
        },
        {
          id: "p2",
          pattern: "フルード数による常流・射流の判別",
          variants: [
            {
              q: "幅の広い開水路で、水深h=2.0m、流速v=1.0m/sである。フルード数を求め、常流か射流か判別せよ。(g=9.8m/s²)",
              steps: [
                { label: "① 式の選択", content: "開水路の水面特性は $Fr = \\dfrac{v}{\\sqrt{gh}}$ で判別する" },
                { label: "② 代入", content: "$Fr = \\dfrac{1.0}{\\sqrt{9.8\\times2.0}}$" },
                { label: "③ 計算", content: "$\\sqrt{19.6}=4.43$ より $Fr=0.226$" },
                { label: "④ 単位・妥当性確認", content: "$Fr<1$ なので常流。流速が波速より遅く、擾乱は上流へ伝わる" }
              ],
              answer: "Fr≒0.23、常流"
            },
            {
              q: "開水路で水深h=0.10m、流速v=2.0m/sである。フルード数を求め、常流か射流か判別せよ。(g=9.8m/s²)",
              steps: [
                { label: "① 式の選択", content: "$Fr = \\dfrac{v}{\\sqrt{gh}}$" },
                { label: "② 代入", content: "$Fr = \\dfrac{2.0}{\\sqrt{9.8\\times0.10}}$" },
                { label: "③ 計算", content: "$\\sqrt{0.98}=0.99$ より $Fr\\approx2.02$" },
                { label: "④ 単位・妥当性確認", content: "$Fr>1$ なので射流。浅く速い流れらしい判定" }
              ],
              answer: "Fr≒2.02、射流"
            }
          ],
          formulaRefs: ["f4"]
        }
      ],
      quiz: [
        {
          q: "「定常流」と「等流」の違いは?",
          choices: ["同じ意味", "定常流は時間、等流は場所に関する分類", "定常流は場所、等流は時間に関する分類", "どちらも粘性の分類"],
          answer: 1,
          expl: "定常流=時間が経っても変わらない流れ。等流=場所が変わっても流速・水深が同じ流れ",
          sectionRef: 0
        },
        {
          q: "管水路と開水路の違いとして正しいのは?",
          choices: ["管水路は水で満たされ、開水路は自由水面を持つ", "管水路だけ粘性がない", "開水路には流量がない", "どちらも必ず射流"],
          answer: 0,
          expl: "上水道管のように満管なら管水路、河川のように水面が大気に接していれば開水路",
          sectionRef: 0
        },
        {
          q: "ホースの先をつぶすと水が速く飛び出す理由は?",
          choices: ["圧力が増えるから", "連続式により断面積が減った分流速が増すから", "粘性が減るから", "水の密度が変わるから"],
          answer: 1,
          expl: "Q一定でAが小さくなればvが大きくなる。A₁v₁=A₂v₂",
          sectionRef: 1
        },
        {
          q: "円管の直径を半分にすると、同じ流量での流速は何倍?",
          choices: ["2倍", "4倍", "8倍", "1/2倍"],
          answer: 1,
          expl: "面積はd²に比例するので1/4になり、流速は4倍",
          sectionRef: 1
        },
        {
          q: "連続式の物理的な意味は?",
          choices: ["エネルギー保存則", "質量保存則", "運動量保存則", "角運動量保存則"],
          answer: 1,
          expl: "水が途中で消えたり湧いたりしないという質量保存の表現。エネルギー保存はベルヌーイ",
          sectionRef: 1
        }
      ]
    },
    // ================================================================
    // u6 ベルヌーイの定理とその応用
    // ================================================================
    {
      id: "u6",
      title: "ベルヌーイの定理とその応用",
      weeks: "第9〜10週",
      priority: 3,
      sections: [
        {
          heading: "エネルギーを「高さ」で測る:水頭",
          body: "<p>[[ベルヌーイの定理]]は完全流体のエネルギー保存則です。ポイントは、エネルギーを全部<b>水柱の高さ(m)=[[水頭]]</b>に換算して足すこと。</p><p>$$z + \\dfrac{p}{\\gamma} + \\dfrac{v^2}{2g} = \\text{一定}$$</p><p>$z$ が位置水頭、$p/\\gamma$ が圧力水頭、$v^2/2g$ が速度水頭。お金に例えると「現金・預金・ポイント」の3つの財布で、合計残高は流線に沿って常に同じ。片方が増えれば他方が減ります。管が細くなって流速が増える(速度水頭が増える)と圧力が下がる、というトレードオフが読み取れれば勝ちです。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='370' y2='60' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='7 4'/><text x='240' y='52' font-size='14' fill='var(--c-accent)'>エネルギー線(合計一定)</text><path d='M40 140 L170 140 Q210 140 210 155 Q210 165 250 165 L360 165' fill='none' stroke='var(--c-line)' stroke-width='2'/><path d='M40 220 L170 220 Q210 220 210 205 Q210 195 250 195 L360 195' fill='none' stroke='var(--c-line)' stroke-width='2'/><line x1='90' y1='140' x2='90' y2='60' stroke='var(--c-text)' stroke-width='1.5'/><text x='96' y='105' font-size='13' fill='var(--c-text)'>p/γ+v²/2g</text><line x1='300' y1='165' x2='300' y2='60' stroke='var(--c-text)' stroke-width='1.5'/><text x='306' y='110' font-size='13' fill='var(--c-text)'>速度水頭が増え</text><text x='306' y='128' font-size='13' fill='var(--c-text)'>圧力水頭が減る</text><line x1='30' y1='265' x2='370' y2='265' stroke='var(--c-line)' stroke-width='2'/><text x='40' y='288' font-size='14' fill='var(--c-text)'>基準面 (z)</text></svg>"
        },
        {
          heading: "トリチェリの定理:タンクの穴から吹き出す速さ",
          body: "<p>大きなタンクの側面の小さな穴(オリフィス)から水が噴き出す速さは、水面と穴にベルヌーイの定理を適用すると求まります。水面(v≈0、大気圧)と穴(大気圧)を比べると、位置水頭 $h$ がまるごと速度水頭に変わるので</p><p>$$v = \\sqrt{2gh}$$</p><p>これは高さ $h$ から物を自由落下させたときの速さと同じ。「水面からの深さ分だけ落下したのと同じ勢いで飛び出す」と覚えられます。h=4.9mなら $v=\\sqrt{2\\times9.8\\times4.9}=9.8$ m/s です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><path d='M70 60 L70 240 L240 240 L240 60' fill='none' stroke='var(--c-line)' stroke-width='3'/><rect x='72' y='90' width='166' height='148' fill='var(--c-fill1)'/><line x1='72' y1='90' x2='238' y2='90' stroke='var(--c-accent)' stroke-width='2'/><text x='120' y='82' font-size='14' fill='var(--c-text)'>水面 v≈0</text><line x1='255' y1='90' x2='255' y2='200' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='5 3'/><text x='262' y='150' font-size='15' fill='var(--c-text)'>h</text><circle cx='240' cy='200' r='6' fill='var(--c-fill2)' stroke='var(--c-line)' stroke-width='2'/><path d='M246 200 Q300 205 330 250' fill='none' stroke='var(--c-accent)' stroke-width='3'/><text x='290' y='230' font-size='15' fill='var(--c-accent)'>v=√(2gh)</text></svg>"
        },
        {
          heading: "実際のオリフィス:理論流量に係数を掛ける",
          body: "<p>レジュメでは、トリチェリの理論速度だけでなく、実際のオリフィスでは流量が少し小さくなることも扱っています。理由は、①摩擦などのエネルギー損失で実流速が理論値より小さくなる、②穴を出た直後に水脈が縮んで有効断面が小さくなる、の2つです。</p><p>そこで[[流量係数]] $C$ を使い、流出量は</p><p>$$Q = C a \\sqrt{2gH}$$</p><p>と書きます。$C=1$ が理想、実験では $0.6\\sim0.9$ 程度。問題文に $C$ が与えられたら、理論流量に最後に掛けるだけです。</p>"
        },
        {
          heading: "ピトー管とベンチュリ計:流れを測る道具",
          body: "<p>ベルヌーイの定理の応用として2つの計測器を押さえましょう。</p><p><b>[[ピトー管]]</b>は流れの正面に開口を向け、流れを堰き止めた「よどみ点」を作ります。よどみ点では速度水頭が全て圧力水頭に変わるので、圧力上昇分 $\\Delta h$ から $v = \\sqrt{2g\\Delta h}$ で流速がわかります。飛行機の速度計にも使われています。</p><p><b>ベンチュリ計</b>は管を一度くびれさせる装置。くびれで流速が増えて圧力が下がるので、太い所と細い所の圧力差を測れば、[[連続式]]とベルヌーイの定理の連立で流量 $Q$ が計算できます。「差を測って流れを知る」のが共通の発想です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "ベルヌーイの定理",
          latex: "z + \\dfrac{p}{\\gamma} + \\dfrac{v^2}{2g} = H = \\text{const.}",
          vars: [
            { sym: "z", meaning: "位置水頭(基準面からの高さ)", unit: "m" },
            { sym: "p/\\gamma", meaning: "圧力水頭", unit: "m" },
            { sym: "v^2/2g", meaning: "速度水頭", unit: "m" }
          ],
          when: "完全流体の流れで2断面のエネルギーを比較するとき。管路・オリフィス・計測器すべての親玉",
          intuition: "位置+圧力+速度の3つの水頭の合計が流線に沿って一定",
          derivation: "オイラーの運動方程式を流線に沿って積分するとエネルギー保存の形になる",
          blank: "z + \\dfrac{p}{\\gamma} + \\dfrac{?}{2g} = \\text{const.}",
          blankAnswer: "v^2"
        },
        {
          id: "f2",
          name: "トリチェリの定理",
          latex: "v = \\sqrt{2gh}",
          vars: [
            { sym: "v", meaning: "噴出流速", unit: "m/s" },
            { sym: "h", meaning: "水面から穴までの深さ", unit: "m" },
            { sym: "g", meaning: "重力加速度", unit: "m/s²" }
          ],
          when: "タンク・水槽の穴(オリフィス)からの噴出速度。「水面からの深さ」が与えられたら",
          intuition: "深さh分だけ自由落下したのと同じ速さで噴き出す",
          derivation: "水面(v≈0,大気圧)と穴(大気圧)にベルヌーイを適用。h=v²/2gを解く",
          blank: "v = \\sqrt{2g \\, ?}",
          blankAnswer: "h"
        },
        {
          id: "f3",
          name: "ピトー管の流速",
          latex: "v = \\sqrt{2g\\Delta h}",
          vars: [
            { sym: "v", meaning: "流速", unit: "m/s" },
            { sym: "\\Delta h", meaning: "よどみ点と静圧の水頭差", unit: "m" }
          ],
          when: "ピトー管で測った水頭差(水柱の高さの差)から流速を求めるとき",
          intuition: "流れを堰き止めると速度水頭の分だけ水柱が持ち上がる",
          derivation: "よどみ点でv=0となり、v²/2g=Δhにベルヌーイの定理を適用",
          blank: "v = \\sqrt{2g \\, ?}",
          blankAnswer: "\\Delta h"
        },
        {
          id: "f4",
          name: "ベンチュリ計の流量",
          latex: "Q = \\dfrac{A_2\\sqrt{2g\\Delta h}}{\\sqrt{1-(A_2/A_1)^2}}",
          vars: [
            { sym: "Q", meaning: "流量", unit: "m³/s" },
            { sym: "A_1, A_2", meaning: "上流部・くびれ部の断面積", unit: "m²" },
            { sym: "\\Delta h", meaning: "2断面のピエゾ水頭差", unit: "m" }
          ],
          when: "ベンチュリ計(くびれ管)の圧力差から流量を求めるとき",
          intuition: "くびれで速くなって圧力が下がる。その差が大きいほど流量が多い",
          derivation: "連続式A₁v₁=A₂v₂とベルヌーイの定理を連立してv₂を消去",
          blank: "Q = \\dfrac{? \\sqrt{2g\\Delta h}}{\\sqrt{1-(A_2/A_1)^2}}",
          blankAnswer: "A_2"
        },
        {
          id: "f5",
          name: "実オリフィスの流出量",
          latex: "Q = C a \\sqrt{2gH}",
          vars: [
            { sym: "Q", meaning: "流出量", unit: "m³/s" },
            { sym: "C", meaning: "流量係数", unit: "無次元" },
            { sym: "a", meaning: "オリフィス面積", unit: "m²" },
            { sym: "H", meaning: "水面からオリフィス中心までの高さ", unit: "m" }
          ],
          when: "オリフィス問題で流量係数Cが与えられたとき。理論流量にCを掛ける",
          intuition: "実際は損失と縮流で理論より少なく流れる。Cがその減り具合",
          derivation: "理論速度√(2gH)に流速係数、断面収縮係数をまとめたCを掛ける",
          blank: "Q = ? \\, a \\sqrt{2gH}",
          blankAnswer: "C"
        }
      ],
      selectQuiz: [
        {
          q: "水面下4.9mのタンク側面の小孔から噴き出す水の速さを求めたい",
          choices: ["トリチェリ v=√(2gh)", "連続式", "p=γh", "F=ρQv"],
          answer: 0,
          expl: "オリフィスからの噴出速度はトリチェリ。√(2×9.8×4.9)=9.8m/s",
          formulaRef: "f2"
        },
        {
          q: "流量係数C=0.65の小孔から出る実流量を求めたい",
          choices: ["Q=Ca√(2gH)", "v=√(2gH)だけ", "Q=AvでCは使わない", "F=ρQv"],
          answer: 0,
          expl: "実オリフィスでは損失と縮流をCでまとめ、理論流量a√(2gH)に掛ける",
          formulaRef: "f5"
        },
        {
          q: "河川にピトー管を立てたら水頭差0.2mだった。流速を求めたい",
          choices: ["v=√(2gΔh)", "Q=Av", "z+p/γ+v²/2g=const", "τ=μdu/dy"],
          answer: 0,
          expl: "ピトー管はよどみ点の水頭上昇Δh=v²/2gから流速を逆算する",
          formulaRef: "f3"
        },
        {
          q: "水平管の直径が変わる2断面で、片方の圧力からもう片方の圧力を求めたい",
          choices: ["連続式+ベルヌーイの定理", "トリチェリのみ", "p=γhのみ", "運動量の定理"],
          answer: 0,
          expl: "まず連続式で流速を出し、ベルヌーイで圧力差に換算する2段構え",
          formulaRef: "f1"
        },
        {
          q: "管のくびれ前後の圧力差から流量を測る装置の式を選びたい",
          choices: ["ベンチュリ計の式", "ピトー管の式", "トリチェリの定理", "マノメータの式"],
          answer: 0,
          expl: "ベンチュリ計=連続式×ベルヌーイの合わせ技。圧力差→流量",
          formulaRef: "f4"
        },
        {
          q: "「圧力をエネルギーの高さに直すといくらか」を計算したい",
          choices: ["圧力水頭 p/γ", "速度水頭 v²/2g", "位置水頭 z", "全水圧 P=γh_G A"],
          answer: 0,
          expl: "圧力pをγで割ると水柱の高さ(m)になる。単位をそろえる水頭の考え方",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "トリチェリの定理(オリフィスからの噴出)",
          variants: [
            {
              q: "大きな水槽の水面から4.9m下の側壁に小さな穴を開けた。噴出する水の流速を求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "水面と穴にベルヌーイ → トリチェリの定理 $v = \\sqrt{2gh}$" },
                { label: "② 代入", content: "$v = \\sqrt{2\\times9.8\\times4.9}$" },
                { label: "③ 計算", content: "$v = \\sqrt{96.04} = 9.8$ m/s" },
                { label: "④ 単位・妥当性確認", content: "4.9mの自由落下(t=1秒)後の速度gt=9.8m/sと一致。検算OK" }
              ],
              answer: "v = 9.8 m/s"
            },
            {
              q: "水面から2.5m下の穴から噴出する水の流速を求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "$v = \\sqrt{2gh}$" },
                { label: "② 代入", content: "$v = \\sqrt{2\\times9.8\\times2.5}$" },
                { label: "③ 計算", content: "$v = \\sqrt{49} = 7$ m/s" },
                { label: "④ 単位・妥当性確認", content: "きれいに√49=7。hが半分になるとvは1/√2倍という関係とも整合" }
              ],
              answer: "v = 7 m/s"
            }
          ],
          formulaRefs: ["f2"]
        },
        {
          id: "p2",
          pattern: "ピトー管による流速測定",
          variants: [
            {
              q: "河川の流れにピトー管を挿入したところ、よどみ点の水頭が静水位より0.2m高かった。流速を求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "ピトー管:速度水頭=水頭差なので $v = \\sqrt{2g\\Delta h}$" },
                { label: "② 代入", content: "$v = \\sqrt{2\\times9.8\\times0.2}$" },
                { label: "③ 計算", content: "$v = \\sqrt{3.92} \\approx 1.98$ m/s" },
                { label: "④ 単位・妥当性確認", content: "河川流速として約2m/sは妥当なオーダー。Δh=v²/2g=0.2mに戻して検算一致" }
              ],
              answer: "v ≒ 1.98 m/s"
            },
            {
              q: "管内の流れにピトー管を設置したところ水頭差が0.45mだった。流速を求めよ。(g=9.8 m/s²)",
              steps: [
                { label: "① 式の選択", content: "$v = \\sqrt{2g\\Delta h}$" },
                { label: "② 代入", content: "$v = \\sqrt{2\\times9.8\\times0.45}$" },
                { label: "③ 計算", content: "$v = \\sqrt{8.82} \\approx 2.97$ m/s" },
                { label: "④ 単位・妥当性確認", content: "2.97²/(2×9.8)=0.45mに戻り検算OK" }
              ],
              answer: "v ≒ 2.97 m/s"
            }
          ],
          formulaRefs: ["f3"]
        },
        {
          id: "p3",
          pattern: "管路のベルヌーイ(縮小管の圧力変化)",
          variants: [
            {
              q: "水平な管路で、直径0.2mの断面1では流速2m/s、圧力98 kN/m²である。直径0.1mに縮小した断面2の流速と圧力を求めよ。(ρ=1000 kg/m³)",
              steps: [
                { label: "① 式の選択", content: "連続式で$v_2$、ベルヌーイ(水平なのでz共通)で$p_2$:$p_2 = p_1 + \\dfrac{\\rho}{2}(v_1^2 - v_2^2)$" },
                { label: "② 代入", content: "直径半分→面積1/4→$v_2 = 4\\times2 = 8$ m/s。$p_2 = 98000 + \\dfrac{1000}{2}(2^2 - 8^2)$" },
                { label: "③ 計算", content: "$p_2 = 98000 + 500\\times(4-64) = 98000 - 30000 = 68000$ N/m²" },
                { label: "④ 単位・妥当性確認", content: "細くなって速くなった分、圧力は下がる(98→68 kN/m²)。ベルヌーイの直感と整合" }
              ],
              answer: "v₂ = 8 m/s、p₂ = 68 kN/m²"
            },
            {
              q: "水平な管路で、直径0.3mの断面1では流速1.5m/s、圧力50 kN/m²である。直径0.15mに縮小した断面2の流速と圧力を求めよ。(ρ=1000 kg/m³)",
              steps: [
                { label: "① 式の選択", content: "連続式 → $v_2$、ベルヌーイ → $p_2 = p_1 + \\dfrac{\\rho}{2}(v_1^2 - v_2^2)$" },
                { label: "② 代入", content: "$v_2 = 4\\times1.5 = 6$ m/s。$p_2 = 50000 + 500\\times(1.5^2 - 6^2)$" },
                { label: "③ 計算", content: "$p_2 = 50000 + 500\\times(2.25-36) = 50000 - 16875 = 33125$ N/m² $\\approx 33.1$ kN/m²" },
                { label: "④ 単位・妥当性確認", content: "圧力低下16.9 kN/m²は速度水頭差(36−2.25)/19.6≒1.72m相当。9.8×1.72≒16.9で整合" }
              ],
              answer: "v₂ = 6 m/s、p₂ ≒ 33.1 kN/m²"
            }
          ],
          formulaRefs: ["f1"]
        },
        {
          id: "p4",
          pattern: "流量係数を含むオリフィス流出量",
          variants: [
            {
              q: "大きな水槽の水面から2.0m下に、面積a=0.01m²の小孔がある。流量係数C=0.65として実流量Qを求めよ。(g=9.8m/s²)",
              steps: [
                { label: "① 式の選択", content: "実流量なので $Q = C a \\sqrt{2gH}$" },
                { label: "② 代入", content: "$Q = 0.65 \\times 0.01 \\times \\sqrt{2\\times9.8\\times2.0}$" },
                { label: "③ 計算", content: "$\\sqrt{39.2}=6.26$ より $Q=0.0407$ m³/s" },
                { label: "④ 単位・妥当性確認", content: "理論流量0.0626m³/sの65%なので、実流量が小さくなって妥当" }
              ],
              answer: "Q≒0.0407 m³/s"
            },
            {
              q: "水面高H=4.0m、オリフィス面積a=5.0×10⁻³m²、流量係数C=0.70のとき流出量を求めよ。(g=9.8m/s²)",
              steps: [
                { label: "① 式の選択", content: "$Q = C a \\sqrt{2gH}$" },
                { label: "② 代入", content: "$Q = 0.70 \\times 5.0\\times10^{-3} \\times \\sqrt{2\\times9.8\\times4.0}$" },
                { label: "③ 計算", content: "$\\sqrt{78.4}=8.85$ より $Q=0.0310$ m³/s" },
                { label: "④ 単位・妥当性確認", content: "Cなしの理論流量は0.0443m³/s。C=0.70を掛けて0.0310m³/sになっている" }
              ],
              answer: "Q≒0.0310 m³/s"
            }
          ],
          formulaRefs: ["f5"]
        }
      ],
      quiz: [
        {
          q: "ベルヌーイの定理を構成する3つの水頭は?",
          choices: ["位置・圧力・速度", "圧力・温度・速度", "位置・浮力・粘性", "流量・流速・断面積"],
          answer: 0,
          expl: "z(位置水頭)+p/γ(圧力水頭)+v²/2g(速度水頭)=一定",
          sectionRef: 0
        },
        {
          q: "管が細くなって流速が増えると圧力はどうなる?",
          choices: ["上がる", "下がる", "変わらない", "ゼロになる"],
          answer: 1,
          expl: "合計エネルギーが一定なので、速度水頭が増えた分圧力水頭が減る",
          sectionRef: 0
        },
        {
          q: "エネルギーを水頭(高さ)で表すメリットは?",
          choices: ["数字が大きくなる", "単位がそろい各エネルギーを直接比較できる", "粘性を無視できる", "常に圧力が最大になる"],
          answer: 1,
          expl: "J/Nの次元=mですべて高さに換算され、足し算・比較が一目でできる",
          sectionRef: 0
        },
        {
          q: "トリチェリの定理v=√(2gh)が物理的に意味するのは?",
          choices: ["深さhの静水圧と同じ力", "高さhの自由落下と同じ速さで噴出する", "hに比例した流量", "hに反比例する速度"],
          answer: 1,
          expl: "位置エネルギーが全て運動エネルギーに変わる。自由落下の式v=√(2gh)と同形",
          sectionRef: 1
        },
        {
          q: "実際のオリフィス流量が理論値より小さくなる主な理由は?",
          choices: ["エネルギー損失と縮流があるから", "重力がないから", "水面が必ず上がるから", "圧力水頭が消えるから"],
          answer: 0,
          expl: "損失で速度が下がり、縮流で有効断面も小さくなる。その効果を流量係数Cでまとめる",
          sectionRef: 2
        },
        {
          q: "ピトー管の「よどみ点」で起きていることは?",
          choices: ["流速が最大になる", "流速がゼロになり速度水頭が圧力水頭に変わる", "圧力がゼロになる", "水が蒸発する"],
          answer: 1,
          expl: "正面で流れが堰き止められv=0。その分圧力が上がり、上昇分から流速を逆算する",
          sectionRef: 3
        }
      ]
    },
    // ================================================================
    // u7 運動量の定理とその応用
    // ================================================================
    {
      id: "u7",
      title: "運動量の定理とその応用",
      weeks: "第11〜12週",
      priority: 3,
      sections: [
        {
          heading: "流れの向きを変えるには力がいる",
          body: "<p>ホースの水を手のひらで受けると、押される力を感じます。水の[[運動量]](質量×速度)の向きや大きさが変わるとき、そこには必ず力が働いています。流れでは1秒間に $\\rho Q$ の質量が速度 $v$ で通過するので、単位時間の運動量は $\\rho Q v$。運動量の定理は</p><p>$$F = \\rho Q (v_2 - v_1)$$</p><p>「流体が受けた力=運動量の変化率」です。壁や板が<b>流体から受ける力</b>はこの反作用。ベルヌーイが「エネルギーの帳簿」なら、運動量は「力の帳簿」。噴流が板を押す力や曲がり管を支える力など、<b>力そのものを問われたら運動量の定理</b>の出番です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='80' width='240' height='140' fill='none' stroke='var(--c-text)' stroke-width='1.5' stroke-dasharray='7 4'/><text x='70' y='72' font-size='14' fill='var(--c-text)'>検査体積</text><line x1='10' y1='150' x2='90' y2='150' stroke='var(--c-accent)' stroke-width='4' marker-end='url(#a7)'/><text x='14' y='138' font-size='14' fill='var(--c-text)'>ρQv1</text><rect x='285' y='95' width='14' height='110' fill='var(--c-fill2)' stroke='var(--c-line)' stroke-width='2'/><text x='262' y='240' font-size='14' fill='var(--c-text)'>板</text><path d='M280 148 Q260 110 250 92' fill='none' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a7)'/><path d='M280 152 Q260 190 250 208' fill='none' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a7)'/><line x1='299' y1='150' x2='360' y2='150' stroke='var(--c-text)' stroke-width='3' marker-end='url(#a7b)'/><text x='310' y='138' font-size='14' fill='var(--c-text)'>F=ρQv</text><defs><marker id='a7' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-accent)'/></marker><marker id='a7b' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 z' fill='var(--c-text)'/></marker></defs><text x='60' y='285' font-size='14' fill='var(--c-text)'>噴流の運動量が消える分、板は押される</text></svg>"
        },
        {
          heading: "検査体積:出入りだけ見ればいい",
          body: "<p>運動量の定理を使うコツは[[検査体積]]の設定です。流れの中に仮想の箱を描き、<b>箱に入る運動量と出る運動量、箱に働く外力(圧力・壁からの力)だけ</b>を数えます。箱の中で水がどんな複雑な動きをしていても関係ない――ここがこの定理の強力なところです。</p><p>手順は、①検査体積を描く、②座標軸を決める、③各方向で $\\sum F = \\rho Q(v_{out} - v_{in})$ を立てる、の3ステップ。<b>向きが変わる問題では必ずx方向・y方向に分けて</b>成分計算します。噴流が板に垂直に当たって左右に散る場合、x方向の運動量が全て消えるので $F = \\rho Q v$ です。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "運動量の定理",
          latex: "F = \\rho Q (v_2 - v_1)",
          vars: [
            { sym: "F", meaning: "流体に働く力の合計", unit: "N" },
            { sym: "\\rho Q", meaning: "単位時間の通過質量", unit: "kg/s" },
            { sym: "v_1, v_2", meaning: "流入・流出速度", unit: "m/s" }
          ],
          when: "「板・壁・曲がり管が受ける力を求めよ」。力を問われたら運動量、エネルギーならベルヌーイ",
          intuition: "1秒あたりの運動量の変化がそのまま力。向きの変化も含む(ベクトル)",
          derivation: "ニュートンの第2法則 F=d(mv)/dt を定常流の検査体積に適用",
          blank: "F = \\rho Q (? - v_1)",
          blankAnswer: "v_2"
        },
        {
          id: "f2",
          name: "噴流が垂直な固定板に当たる力",
          latex: "F = \\rho Q v = \\rho A v^2",
          vars: [
            { sym: "F", meaning: "板が受ける力", unit: "N" },
            { sym: "Q", meaning: "噴流の流量", unit: "m³/s" },
            { sym: "v", meaning: "噴流の速度", unit: "m/s" }
          ],
          when: "噴流が板に垂直に衝突し、板に沿って流れ去る問題",
          intuition: "板に垂直な運動量が全部消えるので、その変化率がそのまま板を押す",
          derivation: "運動量の定理でv₂のx成分=0とすると F=ρQ(v−0)=ρQv",
          blank: "F = \\rho Q \\, ?",
          blankAnswer: "v"
        },
        {
          id: "f3",
          name: "曲がり(90°)による合力",
          latex: "F = \\sqrt{F_x^2 + F_y^2}",
          vars: [
            { sym: "F_x", meaning: "x方向分力 ρQ(v_{1x}-v_{2x})+圧力項", unit: "N" },
            { sym: "F_y", meaning: "y方向分力", unit: "N" }
          ],
          when: "曲がり管・曲面板で流れの向きが変わる問題。成分ごとに運動量の定理を立てて合成",
          intuition: "x方向とy方向で別々に帳簿をつけ、最後に三平方の定理で合成する",
          derivation: "90°曲がりで圧力を無視できる噴流なら Fx=Fy=ρQv、F=√2ρQv",
          blank: "F = \\sqrt{F_x^2 + ?^2}",
          blankAnswer: "F_y"
        }
      ],
      selectQuiz: [
        {
          q: "噴流が固定平板に垂直に当たるとき、板が受ける力を求めたい",
          choices: ["F=ρQv", "v=√(2gh)", "P=γh_G A", "Q=Av"],
          answer: 0,
          expl: "垂直衝突では噴流方向の運動量が全て消える。F=ρQv=ρAv²",
          formulaRef: "f2"
        },
        {
          q: "90°曲がり管が流れから受ける力を求めたい",
          choices: ["x・y成分ごとに運動量の定理→合成", "ベルヌーイのみ", "連続式のみ", "トリチェリの定理"],
          answer: 0,
          expl: "向きが変わる問題は成分分解が鉄則。各方向でF=ρQΔvを立てて√(Fx²+Fy²)",
          formulaRef: "f3"
        },
        {
          q: "「力を求めよ」と「圧力(エネルギー)を求めよ」で使う定理を区別したい",
          choices: ["力→運動量の定理、エネルギー→ベルヌーイ", "どちらもベルヌーイ", "どちらも連続式", "力→連続式、エネルギー→運動量"],
          answer: 0,
          expl: "運動量=力の帳簿、ベルヌーイ=エネルギーの帳簿。問われている量で使い分ける",
          formulaRef: "f1"
        },
        {
          q: "単位時間に断面を通過する運動量を表す量は?",
          choices: ["ρQv", "γhA", "μdu/dy", "v²/2g"],
          answer: 0,
          expl: "質量流量ρQ(kg/s)×速度v(m/s)=ρQv(N相当)。運動量の定理の基本部品",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "噴流が固定平板に当たる力",
          variants: [
            {
              q: "直径0.05m、速度10m/sの水の噴流が固定平板に垂直に当たる。板が受ける力を求めよ。(ρ=1000 kg/m³)",
              steps: [
                { label: "① 式の選択", content: "垂直衝突なので $F = \\rho Q v = \\rho A v^2$" },
                { label: "② 代入", content: "$A = \\dfrac{\\pi\\times0.05^2}{4} = 1.96\\times10^{-3}$ m²、$Q = A v = 0.0196$ m³/s" },
                { label: "③ 計算", content: "$F = 1000\\times0.0196\\times10 = 196$ N" },
                { label: "④ 単位・妥当性確認", content: "kg/s×m/s=N で単位OK。約20 kgf相当で、消防ホース級の噴流として妥当" }
              ],
              answer: "F ≒ 196 N"
            },
            {
              q: "直径0.1m、速度8m/sの水の噴流が固定平板に垂直に当たる。板が受ける力を求めよ。(ρ=1000 kg/m³)",
              steps: [
                { label: "① 式の選択", content: "$F = \\rho A v^2$" },
                { label: "② 代入", content: "$A = \\dfrac{\\pi\\times0.1^2}{4} = 7.85\\times10^{-3}$ m²" },
                { label: "③ 計算", content: "$F = 1000\\times7.85\\times10^{-3}\\times8^2 = 503$ N" },
                { label: "④ 単位・妥当性確認", content: "Q=0.0628 m³/s、ρQv=1000×0.0628×8=503 Nで一致。検算OK" }
              ],
              answer: "F ≒ 503 N"
            }
          ],
          formulaRefs: ["f2"]
        },
        {
          id: "p2",
          pattern: "90°曲面板・曲がりが受ける力",
          variants: [
            {
              q: "流量0.02 m³/s、速度10 m/sの噴流が曲面板で直角(90°)に向きを変える。板が受ける合力を求めよ。(ρ=1000 kg/m³、圧力の影響は無視)",
              steps: [
                { label: "① 式の選択", content: "x・y方向別々に運動量の定理。$F_x = \\rho Q v$、$F_y = \\rho Q v$、合力 $F = \\sqrt{F_x^2+F_y^2}$" },
                { label: "② 代入", content: "$\\rho Q v = 1000\\times0.02\\times10 = 200$ N" },
                { label: "③ 計算", content: "$F_x = F_y = 200$ N、$F = \\sqrt{200^2+200^2} = 200\\sqrt{2} \\approx 283$ N" },
                { label: "④ 単位・妥当性確認", content: "90°曲がりは√2倍がお約束。283Nは単方向の200Nより大きく2倍未満で妥当" }
              ],
              answer: "F = 200√2 ≒ 283 N"
            },
            {
              q: "流量0.05 m³/s、速度6 m/sの噴流が曲面板で直角に向きを変える。板が受ける合力を求めよ。(ρ=1000 kg/m³、圧力の影響は無視)",
              steps: [
                { label: "① 式の選択", content: "$F_x = F_y = \\rho Q v$、$F = \\sqrt{2}\\,\\rho Q v$" },
                { label: "② 代入", content: "$\\rho Q v = 1000\\times0.05\\times6 = 300$ N" },
                { label: "③ 計算", content: "$F = 300\\sqrt{2} \\approx 424$ N" },
                { label: "④ 単位・妥当性確認", content: "各分力300Nの直角合成。√(300²+300²)=424.3Nで一致" }
              ],
              answer: "F = 300√2 ≒ 424 N"
            }
          ],
          formulaRefs: ["f1", "f3"]
        }
      ],
      quiz: [
        {
          q: "運動量の定理が表す保存則は?",
          choices: ["質量保存則", "エネルギー保存則", "運動量保存則(ニュートンの第2法則)", "角運動量保存則"],
          answer: 2,
          expl: "F=d(mv)/dtを流れに適用したもの。力と運動量変化の関係",
          sectionRef: 0
        },
        {
          q: "検査体積を使う利点は?",
          choices: ["内部の複雑な流れを無視して出入りと外力だけで計算できる", "粘性を正確に計算できる", "エネルギー損失が求まる", "圧力が不要になる"],
          answer: 0,
          expl: "境界での運動量の出入りと外力のつり合いだけ見ればよい。内部はブラックボックスでOK",
          sectionRef: 1
        },
        {
          q: "噴流が板に垂直に当たり板に沿って散るとき、力の計算に使う運動量変化は?",
          choices: ["噴流方向の運動量が全て消える", "運動量は変化しない", "噴流方向の運動量が2倍になる", "垂直方向の運動量だけ増える"],
          answer: 0,
          expl: "板に沿って散る=噴流方向成分が0になる。だからF=ρQ(v−0)=ρQv",
          sectionRef: 0
        },
        {
          q: "「曲がり管を支える力」を求めるのに適した定理は?",
          choices: ["ベルヌーイの定理", "運動量の定理", "トリチェリの定理", "パスカルの原理"],
          answer: 1,
          expl: "力を問う問題は運動量の定理。ベルヌーイは圧力・エネルギー用",
          sectionRef: 0
        }
      ]
    },
    // ================================================================
    // u8 粘性流体の流れとレイノルズ数
    // ================================================================
    {
      id: "u8",
      title: "粘性流体の流れとレイノルズ数",
      weeks: "第13〜14週",
      priority: 3,
      sections: [
        {
          heading: "層流と乱流:整列行進か満員電車か",
          body: "<p>実際の水には[[粘性]]があり、流れ方に2つのモードが生まれます。<b>[[層流]]</b>は水の粒子が層をなして整然と流れる状態(整列行進)、<b>[[乱流]]</b>は粒子が不規則に混ざり合う状態(満員電車の人の流れ)です。蛇口を少しだけ開けると透明な糸のような水(層流)、大きく開けると白く乱れた水(乱流)になるのが身近な例。レイノルズの実験では、管内の流れに色素を流し、色素が1本の筋のまま流れれば層流、混ざって拡散すれば乱流と観察しました。自然界の河川や管路の流れはほとんどが乱流です。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='50' width='320' height='70' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><line x1='60' y1='70' x2='340' y2='70' stroke='var(--c-accent)' stroke-width='2'/><line x1='60' y1='85' x2='340' y2='85' stroke='var(--c-accent)' stroke-width='2'/><line x1='60' y1='100' x2='340' y2='100' stroke='var(--c-accent)' stroke-width='2'/><text x='40' y='42' font-size='15' fill='var(--c-text)'>層流:流線が平行(Re小)</text><rect x='40' y='170' width='320' height='70' fill='var(--c-fill1)' stroke='var(--c-line)' stroke-width='2'/><path d='M60 190 Q90 210 120 190 T180 195 T240 185 T300 200 T340 190' fill='none' stroke='var(--c-accent)' stroke-width='2'/><path d='M60 215 Q100 195 130 220 T200 210 T260 225 T340 210' fill='none' stroke='var(--c-accent)' stroke-width='2'/><circle cx='180' cy='205' r='9' fill='none' stroke='var(--c-accent)' stroke-width='1.5'/><circle cx='280' cy='215' r='12' fill='none' stroke='var(--c-accent)' stroke-width='1.5'/><text x='40' y='162' font-size='15' fill='var(--c-text)'>乱流:渦を伴って混ざる(Re大)</text><text x='40' y='275' font-size='14' fill='var(--c-text)'>Re=vD/ν が約2000を超えると乱流へ</text></svg>"
        },
        {
          heading: "レイノルズ数:流れの性格診断テスト",
          body: "<p>層流か乱流かを判別する指標が[[レイノルズ数]]です。</p><p>$$Re = \\dfrac{vD}{\\nu}$$</p><p>($v$:流速、$D$:管径、$\\nu$:[[動粘性係数]])。意味は<b>慣性力と粘性力の比</b>。流れを乱そうとする勢い(慣性)と、乱れを抑えるねばり(粘性)の綱引きで、$Re$ が大きいほど乱れが勝ちます。円管では<b>限界レイノルズ数 約2000</b>を境に、それ以下なら層流、大きく超えると乱流です。無次元数なので、管の大小や流体の種類が違っても同じ $Re$ なら同じ流れ方になる――模型実験が成立するのはこのおかげです。</p>"
        },
        {
          heading: "流れの中の物体が受ける抵抗",
          body: "<p>流れの中に置かれた物体は、流れから力(抵抗)を受けます。橋脚が受ける流水の力もこれです。抵抗は摩擦によるものと、物体の前後の圧力差によるものの和で、まとめて</p><p>$$D_f = C_D A \\dfrac{\\rho v^2}{2}$$</p><p>と書けます。$C_D$ は抗力係数(形で決まる無次元数)、$A$ は流れに直角な投影面積。$\\rho v^2/2$ は動圧(速度水頭×γ)で、<b>流速の2乗で効く</b>のが要点です。流速が2倍になると橋脚に働く力は4倍。洪水時の流れが構造物に危険な理由がこの式に表れています。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "レイノルズ数",
          latex: "Re = \\dfrac{vD}{\\nu}",
          vars: [
            { sym: "Re", meaning: "レイノルズ数", unit: "無次元" },
            { sym: "v", meaning: "流速", unit: "m/s" },
            { sym: "D", meaning: "管径(代表長さ)", unit: "m" },
            { sym: "\\nu", meaning: "動粘性係数(水は約1.0×10⁻⁶)", unit: "m²/s" }
          ],
          when: "層流か乱流かの判別。管径・流速・動粘性係数が与えられたら",
          intuition: "慣性力(乱すカ)と粘性力(整えるカ)の比。大きいほど乱流",
          derivation: "慣性項ρv²/Lと粘性項μv/L²の比を作るとρvL/μ=vL/νになる",
          blank: "Re = \\dfrac{v \\, ?}{\\nu}",
          blankAnswer: "D"
        },
        {
          id: "f2",
          name: "限界レイノルズ数による判別",
          latex: "Re \\lesssim 2000 : \\text{層流}, \\quad Re \\gg 2000 : \\text{乱流}",
          vars: [
            { sym: "2000", meaning: "円管の限界レイノルズ数(目安)", unit: "無次元" }
          ],
          when: "Reを計算した後の判定。円管の目安は約2000",
          intuition: "2000という「合格ライン」を超えたら乱流モードに切り替わる",
          derivation: "レイノルズの色素実験による経験値。教科書により2000〜2300",
          blank: "Re \\lesssim \\, ? : \\text{層流}",
          blankAnswer: "2000"
        },
        {
          id: "f3",
          name: "物体に働く抗力",
          latex: "D_f = C_D A \\dfrac{\\rho v^2}{2}",
          vars: [
            { sym: "D_f", meaning: "抗力(抵抗)", unit: "N" },
            { sym: "C_D", meaning: "抗力係数", unit: "無次元" },
            { sym: "A", meaning: "流れ直角方向の投影面積", unit: "m²" },
            { sym: "\\rho v^2/2", meaning: "動圧", unit: "N/m²" }
          ],
          when: "橋脚・水中の物体が流れから受ける力を問われたとき",
          intuition: "動圧×面積×形の係数。流速2倍で力4倍",
          derivation: "力を動圧ρv²/2と面積で無次元化した実験式。C_Dは形とReで決まる",
          blank: "D_f = C_D A \\dfrac{\\rho \\, ?}{2}",
          blankAnswer: "v^2"
        }
      ],
      selectQuiz: [
        {
          q: "管径と流速と動粘性係数から、流れが層流か乱流か判別したい",
          choices: ["Re=vD/νを計算して2000と比較", "ベルヌーイの定理", "フルード数", "連続式"],
          answer: 0,
          expl: "層流・乱流の判別はレイノルズ数。円管の限界値は約2000",
          formulaRef: "f1"
        },
        {
          q: "橋脚が洪水流から受ける力を見積もりたい",
          choices: ["D_f=C_D Aρv²/2", "Re=vD/ν", "p=γh", "Q=Av"],
          answer: 0,
          expl: "流れの中の物体の抵抗は抗力の式。動圧×投影面積×抗力係数",
          formulaRef: "f3"
        },
        {
          q: "Re=1500と計算された円管内の流れの状態を判定したい",
          choices: ["層流", "乱流", "常流", "射流"],
          answer: 0,
          expl: "1500<2000なので層流。常流・射流はフルード数による開水路の分類で別物",
          formulaRef: "f2"
        },
        {
          q: "同じ管で流速を10倍にしたときのReの変化を知りたい",
          choices: ["Reも10倍", "Reは変わらない", "Reは100倍", "Reは1/10"],
          answer: 0,
          expl: "Re=vD/νはvに比例。流速10倍でRe10倍、層流から乱流に転じ得る",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
          id: "p1",
          pattern: "レイノルズ数による層流・乱流の判別",
          variants: [
            {
              q: "直径0.02mの円管内を流速0.05 m/sで水が流れている。レイノルズ数を求め、層流か乱流か判別せよ。(ν=1.0×10⁻⁶ m²/s)",
              steps: [
                { label: "① 式の選択", content: "$Re = \\dfrac{vD}{\\nu}$ を計算し、限界値2000と比較する" },
                { label: "② 代入", content: "$Re = \\dfrac{0.05\\times0.02}{1.0\\times10^{-6}}$" },
                { label: "③ 計算", content: "$Re = \\dfrac{0.001}{10^{-6}} = 1000$" },
                { label: "④ 単位・妥当性確認", content: "無次元になっているか確認(m/s×m÷m²/s=無次元)。1000<2000で層流" }
              ],
              answer: "Re = 1000 → 層流"
            },
            {
              q: "直径0.05mの円管内を流速1.2 m/sで水が流れている。レイノルズ数を求め、層流か乱流か判別せよ。(ν=1.0×10⁻⁶ m²/s)",
              steps: [
                { label: "① 式の選択", content: "$Re = \\dfrac{vD}{\\nu}$" },
                { label: "② 代入", content: "$Re = \\dfrac{1.2\\times0.05}{1.0\\times10^{-6}}$" },
                { label: "③ 計算", content: "$Re = \\dfrac{0.06}{10^{-6}} = 6.0\\times10^4$" },
                { label: "④ 単位・妥当性確認", content: "60000≫2000で完全に乱流。実用的な管路流れはほぼ乱流という常識とも整合" }
              ],
              answer: "Re = 6.0×10⁴ → 乱流"
            }
          ],
          formulaRefs: ["f1", "f2"]
        },
        {
          id: "p2",
          pattern: "物体に働く抗力の計算",
          variants: [
            {
              q: "流速2 m/sの流れの中に、投影面積0.5 m²、抗力係数C_D=1.2の橋脚模型がある。働く抗力を求めよ。(ρ=1000 kg/m³)",
              steps: [
                { label: "① 式の選択", content: "$D_f = C_D A \\dfrac{\\rho v^2}{2}$" },
                { label: "② 代入", content: "$D_f = 1.2\\times0.5\\times\\dfrac{1000\\times2^2}{2}$" },
                { label: "③ 計算", content: "$D_f = 1.2\\times0.5\\times2000 = 1200$ N" },
                { label: "④ 単位・妥当性確認", content: "動圧2000 N/m²×面積0.5×係数1.2。約120 kgf相当で構造設計上リアルな値" }
              ],
              answer: "D_f = 1200 N (1.2 kN)"
            },
            {
              q: "同じ橋脚模型(A=0.5 m²、C_D=1.2)で流速が4 m/sに倍増した。抗力を求め、流速2 m/sのときと比較せよ。(ρ=1000 kg/m³)",
              steps: [
                { label: "① 式の選択", content: "$D_f = C_D A \\dfrac{\\rho v^2}{2}$。v²に注目" },
                { label: "② 代入", content: "$D_f = 1.2\\times0.5\\times\\dfrac{1000\\times4^2}{2}$" },
                { label: "③ 計算", content: "$D_f = 1.2\\times0.5\\times8000 = 4800$ N" },
                { label: "④ 単位・妥当性確認", content: "流速2倍で4800/1200=4倍。v²則の確認になっており妥当" }
              ],
              answer: "D_f = 4800 N(流速2倍で抗力4倍)"
            }
          ],
          formulaRefs: ["f3"]
        }
      ],
      quiz: [
        {
          q: "レイノルズ数が表す力の比は?",
          choices: ["重力と慣性力", "慣性力と粘性力", "圧力と浮力", "遠心力と重力"],
          answer: 1,
          expl: "Re=慣性力/粘性力。大きいほど乱れを抑えられず乱流になる",
          sectionRef: 1
        },
        {
          q: "円管流れの限界レイノルズ数の目安は?",
          choices: ["約20", "約200", "約2000", "約200000"],
          answer: 2,
          expl: "Re≒2000が層流と乱流の境目(教科書により2000〜2300)",
          sectionRef: 1
        },
        {
          q: "レイノルズの実験で色素の筋が1本のまま流れた。この流れは?",
          choices: ["乱流", "層流", "射流", "非定常流"],
          answer: 1,
          expl: "色素が混ざらず筋のまま=粒子が層をなして流れる層流",
          sectionRef: 0
        },
        {
          q: "流速が2倍になると物体に働く抗力は?",
          choices: ["2倍", "4倍", "8倍", "変わらない"],
          answer: 1,
          expl: "D_f∝v²なので4倍。洪水時に構造物への力が急増する理由",
          sectionRef: 2
        },
        {
          q: "レイノルズ数が無次元であることの実用的な意義は?",
          choices: ["計算が楽になるだけ", "スケールの違う模型実験でも同じReなら流れが相似になる", "粘性を無視できる", "単位系を気にしなくてよい"],
          answer: 1,
          expl: "無次元数が同じなら力学的に相似。模型実験で実物の流れを再現できる根拠",
          sectionRef: 1
        }
      ]
    }
  ]
};
