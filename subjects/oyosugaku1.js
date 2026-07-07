window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA["oyosugaku1"] = {
  id: "oyosugaku1",
  name: "応用数学1",
  teacher: "石川 靖晃",
  year: "2年・必修",
  examInfo: "演習20% / 定期試験80%",
  examTips: "課題PDFの指定問題(問題1〜4)を計算演習へ反映済み。到達目標の5項目(一階斉次・一階非斉次・二階斉次・二階非斉次・変数分離/同次形)がそのまま出題の柱。特に特性方程式の3ケースの使い分けと、未定係数法の仮定形(共振でx倍)は毎年の定番。「複数の手法で解いても同じ解」が総括で強調されるので、解いたら必ず代入検算する習慣をつけること。",
  glossary: [
    { term: "微分方程式", reading: "びぶんほうていしき", def: "未知の関数とその導関数を含む方程式。解は数ではなく「関数」になるのが普通の方程式との最大の違い。" },
    { term: "常微分方程式", reading: "じょうびぶんほうていしき", def: "未知関数が1変数(例: y(x))で、常微分だけを含む微分方程式。多変数の偏微分を含むものは偏微分方程式と呼び区別する。" },
    { term: "階数", reading: "かいすう", def: "微分方程式に含まれる導関数の最高階数。y'までなら一階、y''までなら二階。" },
    { term: "一般解", reading: "いっぱんかい", def: "階数と同じ個数の任意定数を含む解。解の「全体像」を表し、条件を与えると特殊解が1つ決まる。" },
    { term: "特殊解", reading: "とくしゅかい", def: "一般解の任意定数に具体的な値を入れて得られる個々の解。初期条件を満たす解はその代表例。" },
    { term: "任意定数", reading: "にんいていすう", def: "一般解に含まれる自由な定数C。積分1回につき1個現れる。n階の方程式の一般解はn個持つ。" },
    { term: "初期値問題", reading: "しょきちもんだい", def: "微分方程式に「x=x₀のときy=y₀」のような条件を付けて、任意定数を確定させる問題。" },
    { term: "斉次", reading: "せいじ", def: "線形微分方程式で右辺(yを含まない項)が0のもの。y'+P(x)y=0 など。「同次」とも呼ぶ。" },
    { term: "非斉次", reading: "ひせいじ", def: "線形微分方程式で右辺に0でない関数Q(x)が付いたもの。解は「斉次解+特殊解」の形になる。" },
    { term: "線形", reading: "せんけい", def: "未知関数yとその導関数が1次(2乗や積がない)で現れること。線形なら解の重ね合わせが使える。" },
    { term: "定数変化法", reading: "ていすうへんかほう", def: "斉次解の任意定数Cを関数C(x)に置き換えて非斉次方程式に代入し、C(x)を決める方法。一階でも二階でも使える万能技。" },
    { term: "積分因子", reading: "せきぶんいんし", def: "方程式全体に掛けると左辺が「何かの導関数」にまとまる関数。一階線形では μ=e^(∫P dx) が積分因子。" },
    { term: "ベルヌイ型", reading: "べるぬいがた", def: "y'+P(x)y=Q(x)yⁿ の形。u=y^(1-n) と置換すると一階線形に変換できる。" },
    { term: "リッカチ型", reading: "りっかちがた", def: "y'=P(x)y²+Q(x)y+R(x) の形。特殊解y₁が1つ分かれば y=y₁+1/u で一階線形に帰着できる。" },
    { term: "特性方程式", reading: "とくせいほうていしき", def: "定数係数線形微分方程式に y=e^(λx) を代入して得られる λ の代数方程式。その根が解の形を決める。" },
    { term: "基本解", reading: "きほんかい", def: "二階線形斉次方程式の、互いに独立な2つの解 y₁, y₂。一般解はその線形結合 C₁y₁+C₂y₂ で書ける。" },
    { term: "重根", reading: "じゅうこん", def: "特性方程式が同じ根を2つ持つ場合。解が1つ足りなくなるので、xe^(λx) を2つ目の基本解として補う。" },
    { term: "共振", reading: "きょうしん", def: "非斉次項が斉次解と同じ形になってしまう場合。未定係数法では仮定形をx倍(重根ならx²倍)して回避する。" },
    { term: "未定係数法", reading: "みていけいすうほう", def: "非斉次項の形から特殊解の形を「係数未定のまま」仮定し、代入して係数を決める方法。右辺が多項式・e^(ax)・sin/cosのとき有効。" },
    { term: "求積法", reading: "きゅうせきほう", def: "微分方程式を式変形と積分だけで解く方法の総称。変数分離形・同次形・完全形などのパターンがある。" },
    { term: "変数分離形", reading: "へんすうぶんりけい", def: "y'=f(x)g(y) の形。xの項とyの項を左右に分けて両辺を積分すれば解ける、最も基本的な求積法。" },
    { term: "同次形", reading: "どうじけい", def: "y'=f(y/x) の形。u=y/x と置換すると変数分離形に変換できる。" },
    { term: "完全形", reading: "かんぜんけい", def: "P dx+Q dy=0 で ∂P/∂y=∂Q/∂x が成り立つ形。ある関数F(x,y)の全微分になっており、解は F(x,y)=C。" },
    { term: "オイラーの微分方程式", reading: "おいらーのびぶんほうていしき", def: "x²y''+axy'+by=R(x) の形。x=e^t と置換すると定数係数二階線形に変換できる。" },
    { term: "ロンスキアン", reading: "ろんすきあん", def: "W=y₁y₂'-y₁'y₂。2つの解が独立かどうかの判定と、二階の定数変化法の公式で使う行列式。" }
  ],
  units: [
    // ================================================================
    // u1: 微分方程式とは何か+微分積分の復習
    // ================================================================
    {
      id: "u1",
      title: "微分方程式とは何か・微分積分の復習",
      weeks: "第1〜2週",
      priority: 1,
      sections: [
        {
          heading: "微分方程式を「解く」とはどういうことか",
          body: "<p>普通の方程式 $x^2=4$ の答えは「数」だが、[[微分方程式]]の答えは<b>「関数」</b>である。たとえば $y'=y$ の解は「微分しても自分自身になる関数」、つまり $y=Ce^x$。貯金の利息を思い浮かべるとよい:「増える速さが今の残高に比例する」という<b>変化のルール</b>だけが分かっていて、そこから残高の推移そのもの(関数)を復元するのが「解く」ということ。解には[[任意定数]] $C$ が含まれ、これを含む解を[[一般解]]、$C$ を決めた個々の解を[[特殊解]]と呼ぶ。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><text x='200' y='24' text-anchor='middle' font-size='15' fill='var(--c-text)' font-weight='bold'>一般解 y=Ce^x は「曲線の族」</text><line x1='40' y1='260' x2='380' y2='260' stroke='var(--c-line)' stroke-width='2'/><line x1='60' y1='280' x2='60' y2='40' stroke='var(--c-line)' stroke-width='2'/><path d='M60,250 Q180,235 300,150 T380,60' fill='none' stroke='var(--c-accent)' stroke-width='3'/><path d='M60,255 Q180,246 300,200 T380,140' fill='none' stroke='var(--c-fill1)' stroke-width='2'/><path d='M60,258 Q180,252 300,230 T380,195' fill='none' stroke='var(--c-fill2)' stroke-width='2'/><text x='330' y='52' font-size='14' fill='var(--c-accent)'>C=2</text><text x='330' y='130' font-size='14' fill='var(--c-text)'>C=1</text><text x='330' y='188' font-size='14' fill='var(--c-text)'>C=0.5</text><circle cx='60' cy='250' r='5' fill='var(--c-accent)'/><text x='70' y='245' font-size='14' fill='var(--c-text)'>初期条件で1本に決まる=特殊解</text><text x='370' y='278' font-size='14' fill='var(--c-text)'>x</text><text x='44' y='50' font-size='14' fill='var(--c-text)'>y</text></svg>"
        },
        {
          heading: "解法は「形」で選ぶ — この科目の全体マップ",
          body: "<p>この授業で学ぶのは、方程式の<b>形を見分けて解法を選ぶ</b>技術。大分類は3つ。(1) 一階[[線形]]([[斉次]]なら公式一発、[[非斉次]]なら[[定数変化法]])、(2) 定数係数二階線形([[特性方程式]]で斉次解、[[未定係数法]]で特殊解)、(3) [[求積法]]([[変数分離形]]・[[同次形]]・[[完全形]])。料理と同じで、食材(方程式の形)を見て調理法を選ぶイメージ。まず「[[階数]]は?線形か?右辺は0か?」の3つを確認する癖をつけよう。</p>"
        },
        {
          heading: "微分積分の復習が土台になる理由",
          body: "<p>微分方程式を解く作業の実体は<b>ひたすら積分</b>である。斉次解では $\\int P\\,dx$、定数変化法では $\\int Q e^{\\int P dx}dx$ と、積分計算が連続する。特に頻出は、部分積分($xe^x$ や $x\\sin x$ 型)、$\\int \\frac{f'(x)}{f(x)}dx = \\ln|f(x)|+C$ 型、置換積分の3つ。シラバスにも「微分積分の基本問題を確実に解ける力を常に身に付けておくこと」と明記されている。ここで転ぶと全部転ぶので最初に固めておく。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "べき関数の微分・積分",
          latex: "(x^n)' = nx^{n-1}, \\quad \\int x^n dx = \\dfrac{x^{n+1}}{n+1} + C \\ (n \\neq -1)",
          vars: [
            { sym: "n", meaning: "指数(実数)", unit: "無次元" },
            { sym: "C", meaning: "積分定数", unit: "—" }
          ],
          when: "多項式を含む微分方程式の計算全般。未定係数法で多項式を仮定するときも毎回使う",
          intuition: "微分は指数が前に降りて1減る、積分はその逆再生",
          derivation: "定義から。n=-1のときだけ積分は ln|x|+C になることに注意",
          blank: "\\int x^n dx = \\dfrac{x^{n+1}}{?} + C",
          blankAnswer: "n+1"
        },
        {
          id: "f2",
          name: "指数・対数の微分",
          latex: "(e^{ax})' = ae^{ax}, \\quad (\\ln|x|)' = \\dfrac{1}{x}",
          vars: [
            { sym: "a", meaning: "定数", unit: "無次元" }
          ],
          when: "e^(λx) を特性方程式に代入するとき、斉次解を検算するとき。この科目で最頻出の微分",
          intuition: "e^(ax)は微分しても形が変わらず係数aが出るだけ。だから微分方程式の解の主役になる",
          derivation: "合成関数の微分。e^xの「微分しても不変」という性質が、線形微分方程式でe^(λx)を仮定する理由そのもの",
          blank: "(e^{ax})' = ? \\, e^{ax}",
          blankAnswer: "a"
        },
        {
          id: "f3",
          name: "三角関数の微分",
          latex: "(\\sin x)' = \\cos x, \\quad (\\cos x)' = -\\sin x",
          vars: [
            { sym: "x", meaning: "変数", unit: "rad" }
          ],
          when: "複素根の斉次解や、右辺が sin/cos の未定係数法で必ず使う",
          intuition: "sin→cos→−sin→−cos→sin と4回微分で一周する。この周期性が振動解のもと",
          derivation: "2回微分すると符号が反転する(y''=-y)ことが、y''+y=0 の解が sin, cos になる理由",
          blank: "(\\cos x)' = ?",
          blankAnswer: "-\\sin x"
        },
        {
          id: "f4",
          name: "部分積分",
          latex: "\\int u v' \\, dx = uv - \\int u' v \\, dx",
          vars: [
            { sym: "u", meaning: "微分すると簡単になる方(x, x²など)", unit: "—" },
            { sym: "v'", meaning: "積分しやすい方(e^x, sin xなど)", unit: "—" }
          ],
          when: "∫xe^x dx や ∫x sin x dx など「多項式×(指数or三角)」の積分。定数変化法の計算で頻出",
          intuition: "積の微分公式 (uv)'=u'v+uv' を積分して移項しただけ",
          derivation: "多項式の方をuに選ぶ(微分で次数が下がって消えるから)。覚え方は「微分したい方をu」",
          blank: "\\int u v' \\, dx = ? - \\int u' v \\, dx",
          blankAnswer: "uv"
        },
        {
          id: "f5",
          name: "f'/f 型の積分",
          latex: "\\int \\dfrac{f'(x)}{f(x)} dx = \\ln|f(x)| + C",
          vars: [
            { sym: "f(x)", meaning: "分母の関数", unit: "—" }
          ],
          when: "変数分離形で ∫dy/y が出たとき、∫dy/(y+a) など。斉次解の導出はこの積分そのもの",
          intuition: "分子が分母の微分になっていたら、答えは ln|分母|",
          derivation: "ln|f(x)| を合成関数の微分で微分すると f'/f に戻ることから",
          blank: "\\int \\dfrac{f'(x)}{f(x)} dx = ? + C",
          blankAnswer: "\\ln|f(x)|"
        }
      ],
      selectQuiz: [
        {
          q: "変数分離した後に ∫dy/y を計算したい",
          choices: ["f'/f 型の積分 → ln|y|+C", "部分積分", "べき関数の積分公式", "三角関数の微分"],
          answer: 0,
          expl: "分子1は分母yの微分。∫dy/y = ln|y|+C。変数分離形の計算で毎回出てくる",
          formulaRef: "f5"
        },
        {
          q: "定数変化法の途中で ∫xe^(2x) dx を計算する必要が出た",
          choices: ["部分積分(u=x, v'=e^(2x))", "置換積分", "f'/f 型", "そのまま積分できる"],
          answer: 0,
          expl: "多項式×指数関数は部分積分。微分で消えるxをuに選ぶ",
          formulaRef: "f4"
        },
        {
          q: "y=e^(3x) を微分方程式に代入して検算したい",
          choices: ["(e^(ax))'=ae^(ax) を使う", "部分積分を使う", "ln の微分を使う", "積の微分を使う"],
          answer: 0,
          expl: "(e^(3x))'=3e^(3x)。代入検算はこの公式の繰り返し",
          formulaRef: "f2"
        }
      ],
      problems: [
        {
                "id": "pdf1_integral_ivp",
                "pattern": "課題 問題1・演習1: 積分公式を使う初期値問題",
                "variants": [
                        {
                                "q": "課題 問題1 1.(10) 型: $\\dfrac{dy}{dt}=\\dfrac{1}{\\sqrt{t^2+4}},\\ y(0)=\\log 4$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 型の確認",
                                                "content": "$\\int \\dfrac{dt}{\\sqrt{t^2+A}}=\\log|t+\\sqrt{t^2+A}|+C$ 型。ここでは $A=4$。"
                                        },
                                        {
                                                "label": "② 積分",
                                                "content": "$y=\\log(t+\\sqrt{t^2+4})+C$。$t+\\sqrt{t^2+4}>0$ なので絶対値は省いてよい。"
                                        },
                                        {
                                                "label": "③ 初期条件",
                                                "content": "$t=0$ で $\\log(2)+C=\\log4$。したがって $C=\\log2$。"
                                        },
                                        {
                                                "label": "④ 整理",
                                                "content": "$y=\\log(t+\\sqrt{t^2+4})+\\log2=\\log\\{2(t+\\sqrt{t^2+4})\\}$。"
                                        }
                                ],
                                "answer": "$y=\\log\\{2(t+\\sqrt{t^2+4})\\}$"
                        },
                        {
                                "q": "演習1 型: $\\dfrac{dy}{dt}=\\dfrac{1}{t^2+5t+6},\\ y(0)=1$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 分母の因数分解",
                                                "content": "$t^2+5t+6=(t+2)(t+3)$。部分分数分解に持ち込む。"
                                        },
                                        {
                                                "label": "② 部分分数",
                                                "content": "$\\dfrac{1}{(t+2)(t+3)}=\\dfrac{1}{t+2}-\\dfrac{1}{t+3}$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$y=\\log|t+2|-\\log|t+3|+C=\\log\\left|\\dfrac{t+2}{t+3}\\right|+C$。"
                                        },
                                        {
                                                "label": "④ 初期条件",
                                                "content": "$1=\\log\\dfrac{2}{3}+C$ より $C=1-\\log\\dfrac{2}{3}$。"
                                        }
                                ],
                                "answer": "$y=1+\\log\\left|\\dfrac{3(t+2)}{2(t+3)}\\right|$"
                        },
                        {
                                "q": "演習1 型: $\\dfrac{dy}{dt}=e^t\\cos t,\\ y(0)=1$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 積分の型",
                                                "content": "$\\int e^t\\cos t\\,dt$ は部分積分を2回使う標準型。結果は $\\dfrac{e^t(\\sin t+\\cos t)}{2}$。"
                                        },
                                        {
                                                "label": "② 一般解",
                                                "content": "$y=\\dfrac{e^t(\\sin t+\\cos t)}{2}+C$。"
                                        },
                                        {
                                                "label": "③ 初期条件",
                                                "content": "$t=0$ で $1=\\dfrac12+C$。よって $C=\\dfrac12$。"
                                        },
                                        {
                                                "label": "④ 検算",
                                                "content": "$\\left\\{\\dfrac{e^t(\\sin t+\\cos t)}{2}\\right\\}'=e^t\\cos t$。"
                                        }
                                ],
                                "answer": "$y=\\dfrac{e^t(\\sin t+\\cos t)+1}{2}$"
                        }
                ],
                "formulaRefs": [
                        "f4",
                        "f5"
                ]
        },
        {
                "id": "pdf1_solution_check",
                "pattern": "課題 問題1 3.(5)-(8): 解であることの確認",
                "variants": [
                        {
                                "q": "課題 問題1 3.(5): $y=c_1e^{at}$ が $y''-ay'=0$ の解であることを確かめよ。",
                                "steps": [
                                        {
                                                "label": "① 微分",
                                                "content": "$y'=ac_1e^{at}$, $y''=a^2c_1e^{at}$。"
                                        },
                                        {
                                                "label": "② 代入",
                                                "content": "$y''-ay'=a^2c_1e^{at}-a(ac_1e^{at})$。"
                                        },
                                        {
                                                "label": "③ 整理",
                                                "content": "$a^2c_1e^{at}-a^2c_1e^{at}=0$。"
                                        },
                                        {
                                                "label": "④ 結論",
                                                "content": "任意の $t$ で方程式が成り立つので解である。"
                                        }
                                ],
                                "answer": "$y''-ay'=0$ が恒等的に成立する"
                        },
                        {
                                "q": "課題 問題1 3.(8): $y=(c_1t+c_2)e^{at}$ が $y''-2ay'+a^2y=0$ の解であることを確かめよ。",
                                "steps": [
                                        {
                                                "label": "① 見方",
                                                "content": "$y=e^{at}u(t)$ とおくと，左辺は $e^{at}u''$ にまとまる。ここで $u=c_1t+c_2$。"
                                        },
                                        {
                                                "label": "② uの微分",
                                                "content": "$u'=c_1$, $u''=0$。"
                                        },
                                        {
                                                "label": "③ 代入の意味",
                                                "content": "$(D-a)^2(e^{at}u)=e^{at}u''$ なので，$y''-2ay'+a^2y=e^{at}\\cdot0$。"
                                        },
                                        {
                                                "label": "④ 結論",
                                                "content": "重根のとき $e^{at}$ と $te^{at}$ が基本解になる理由もここから分かる。"
                                        }
                                ],
                                "answer": "$y''-2ay'+a^2y=0$ が恒等的に成立する"
                        }
                ],
                "formulaRefs": [
                        "f2",
                        "f3"
                ]
        }
],
      quiz: [
        {
          q: "微分方程式の解として正しい説明はどれ?",
          choices: ["解は特定の数値である", "解は関数である", "解は必ず1つに定まる", "解は必ず多項式になる"],
          answer: 1,
          expl: "微分方程式は「変化のルール」から関数を復元する問題。解は関数で、一般解は任意定数を含む曲線の族になる",
          sectionRef: 0
        },
        {
          q: "y''' + 2y' = x の階数はいくつ?",
          choices: ["一階", "二階", "三階", "階数は定義できない"],
          answer: 2,
          expl: "含まれる導関数の最高階で決まる。y'''があるので三階",
          sectionRef: 1
        },
        {
          q: "二階の微分方程式の一般解に含まれる任意定数の個数は?",
          choices: ["0個", "1個", "2個", "何個でもよい"],
          answer: 2,
          expl: "階数と同じ個数。積分を実質2回行うので定数が2つ(C₁, C₂)現れる",
          sectionRef: 0
        }
      ]
    },
    // ================================================================
    // u2: 一階線形常微分方程式(1) 斉次解
    // ================================================================
    {
      id: "u2",
      title: "一階線形常微分方程式(1) — 斉次解と初期値問題",
      weeks: "第3週",
      priority: 3,
      sections: [
        {
          heading: "一階線形の標準形と「斉次」の意味",
          body: "<p>一階[[線形]]常微分方程式の標準形は $y' + P(x)y = Q(x)$。右辺 $Q(x)$ が0のものを[[斉次]]、0でないものを[[非斉次]]と呼ぶ。まず土台になるのは斉次 $y'+P(x)y=0$。これは移項して $\\frac{dy}{y} = -P(x)dx$ と[[変数分離形]]にでき、両辺を積分すれば $\\ln|y| = -\\int P\\,dx + C$、つまり $y = Ce^{-\\int P dx}$。<b>斉次解は必ずこの指数関数の形</b>になる。バネの摩擦やコンデンサの放電など「今の量に比例して減る」現象すべての共通ルールである。</p>",
          svg: "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><text x='200' y='24' text-anchor='middle' font-size='15' fill='var(--c-text)' font-weight='bold'>y&#39;+ay=0 の解 y=Ce^(-ax) (a&gt;0: 減衰)</text><line x1='40' y1='250' x2='380' y2='250' stroke='var(--c-line)' stroke-width='2'/><line x1='60' y1='270' x2='60' y2='45' stroke='var(--c-line)' stroke-width='2'/><path d='M60,70 Q120,150 190,205 T380,242' fill='none' stroke='var(--c-accent)' stroke-width='3'/><path d='M60,140 Q120,190 190,225 T380,246' fill='none' stroke='var(--c-fill1)' stroke-width='2'/><circle cx='60' cy='70' r='5' fill='var(--c-accent)'/><text x='72' y='68' font-size='14' fill='var(--c-text)'>y(0)=C (初期値で決まる)</text><text x='250' y='190' font-size='14' fill='var(--c-accent)'>C=3</text><text x='250' y='238' font-size='14' fill='var(--c-text)'>C=1.8</text><text x='368' y='268' font-size='14' fill='var(--c-text)'>x</text><text x='44' y='58' font-size='14' fill='var(--c-text)'>y</text></svg>"
        },
        {
          heading: "初期値問題 — 任意定数Cを1つに決める",
          body: "<p>[[一般解]] $y=Ce^{-\\int P dx}$ は無数の曲線の集まり。「$x=0$ のとき $y=3$」のような条件を与えると $C$ が確定し、1本の曲線([[特殊解]])が選ばれる。これが[[初期値問題]]。手順は単純で、<b>一般解を出す → 条件を代入 → Cを解く</b> の3ステップ。到達目標(1)「一階線形常微分方程式の斉次解を求めることができる」はこの単元がそのまま対応するので、定数係数($P$が定数)の場合は反射で解けるまで練習しておくこと。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "一階線形の標準形",
          latex: "y' + P(x)y = Q(x)",
          vars: [
            { sym: "P(x)", meaning: "yの係数関数", unit: "—" },
            { sym: "Q(x)", meaning: "非斉次項(右辺)。0なら斉次", unit: "—" }
          ],
          when: "問題文の方程式をまずこの形に整理する。y'の係数が1になるよう割るのが第一歩",
          intuition: "「y'と yの1次の項だけ」が線形の証。y²やyy'があったら線形ではない",
          derivation: "定義。Q=0なら斉次、Q≠0なら非斉次と分類してから解法を選ぶ",
          blank: "y' + P(x)y = ?",
          blankAnswer: "Q(x)"
        },
        {
          id: "f2",
          name: "一階線形斉次の一般解",
          latex: "y' + P(x)y = 0 \\;\\Rightarrow\\; y = Ce^{-\\int P(x)\\,dx}",
          vars: [
            { sym: "C", meaning: "任意定数", unit: "—" },
            { sym: "P(x)", meaning: "yの係数関数", unit: "—" }
          ],
          when: "「斉次解を求めよ」のとき。非斉次を解くときも、まずこれで斉次解を作ってから定数変化法へ進む",
          intuition: "Pを積分してマイナスを付け、eの肩に乗せるだけ。減衰・成長の指数カーブ",
          derivation: "dy/y = -P dx と変数分離して積分。ln|y| = -∫P dx + C₁ から e を取る",
          blank: "y = Ce^{?}",
          blankAnswer: "-\\int P(x)\\,dx"
        },
        {
          id: "f3",
          name: "定数係数の斉次解(最重要の特別形)",
          latex: "y' + ay = 0 \\;\\Rightarrow\\; y = Ce^{-ax}",
          vars: [
            { sym: "a", meaning: "定数", unit: "—" },
            { sym: "C", meaning: "任意定数(初期値で決まる)", unit: "—" }
          ],
          when: "Pが定数のとき。試験ではまずこの形が問われる。y'=ky なら y=Ce^(kx)",
          intuition: "符号に注意:「+ay」なら e^(−ax)(減衰)、「y'=ay」なら e^(ax)(成長)",
          derivation: "f2 で P(x)=a とした場合。∫a dx = ax",
          blank: "y' + ay = 0 \\;\\Rightarrow\\; y = Ce^{?}",
          blankAnswer: "-ax"
        }
      ],
      selectQuiz: [
        {
          q: "y' + 5y = 0 の一般解を求めたい",
          choices: ["定数係数の斉次解 y=Ce^(-ax)", "定数変化法", "特性方程式", "部分積分"],
          answer: 0,
          expl: "一階・線形・斉次・定数係数 → y=Ce^(-5x) と即答できる形",
          formulaRef: "f3"
        },
        {
          q: "y' + (2/x)y = 0 (x>0) の一般解を求めたい",
          choices: ["y=Ce^(-∫P dx) にP=2/xを入れる", "特性方程式を立てる", "未定係数法", "完全形の判定"],
          answer: 0,
          expl: "Pがxの関数でも公式は同じ。∫(2/x)dx=2ln x なので y=Ce^(-2ln x)=C/x²",
          formulaRef: "f2"
        },
        {
          q: "xy' + 3y = 0 を解く前にまずやるべきことは?",
          choices: ["両辺をxで割って標準形 y'+P(x)y=Q(x) にする", "いきなり積分する", "u=y/xと置換する", "特性方程式を立てる"],
          answer: 0,
          expl: "y'の係数を1にして標準形に直すのが第一歩。P(x)=3/x が読み取れる",
          formulaRef: "f1"
        }
      ],
      problems: [
        {
                "id": "pdf2_homogeneous",
                "pattern": "課題 問題2 1.(7)(8)(10): 一階線形同次",
                "variants": [
                        {
                                "q": "課題 問題2 1.(7): $y'+\\dfrac{1}{t+1}y=0$ を解け。$(t>-1)$",
                                "steps": [
                                        {
                                                "label": "① 標準形",
                                                "content": "$y'+a(t)y=0$ の同次形。$a(t)=\\dfrac{1}{t+1}$。"
                                        },
                                        {
                                                "label": "② 公式",
                                                "content": "$y=C\\exp\\{-\\int a(t)dt\\}$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$\\int \\dfrac{dt}{t+1}=\\log(t+1)$。"
                                        },
                                        {
                                                "label": "④ 整理",
                                                "content": "$y=C e^{-\\log(t+1)}=\\dfrac{C}{t+1}$。"
                                        }
                                ],
                                "answer": "$y=\\dfrac{C}{t+1}$"
                        },
                        {
                                "q": "課題 問題2 1.(8): $y'+\\sin t\\,y=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 型",
                                                "content": "一階線形同次。$a(t)=\\sin t$。"
                                        },
                                        {
                                                "label": "② 積分",
                                                "content": "$\\int \\sin t\\,dt=-\\cos t$。"
                                        },
                                        {
                                                "label": "③ 符号注意",
                                                "content": "$y=C\\exp\\{-\\int \\sin t\\,dt\\}=C\\exp(\\cos t)$。"
                                        },
                                        {
                                                "label": "④ 検算",
                                                "content": "$y'=-C\\sin t\\,e^{\\cos t}$ なので $y'+\\sin t\\,y=0$。"
                                        }
                                ],
                                "answer": "$y=Ce^{\\cos t}$"
                        },
                        {
                                "q": "課題 問題2 1.(10): $y'-\\dfrac{1}{t^2+1}y=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 型",
                                                "content": "$y'+a(t)y=0$ と見ると $a(t)=-\\dfrac{1}{t^2+1}$。"
                                        },
                                        {
                                                "label": "② 公式",
                                                "content": "$y=C\\exp\\{-\\int a(t)dt\\}=C\\exp\\{\\int \\dfrac{dt}{t^2+1}\\}$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$\\int \\dfrac{dt}{t^2+1}=\\tan^{-1}t$。"
                                        },
                                        {
                                                "label": "④ 結論",
                                                "content": "$y=Ce^{\\tan^{-1}t}$。"
                                        }
                                ],
                                "answer": "$y=Ce^{\\tan^{-1}t}$"
                        }
                ],
                "formulaRefs": [
                        "f2",
                        "f3"
                ]
        }
],
      quiz: [
        {
          q: "「斉次」の意味として正しいのは?",
          choices: ["yの係数が定数", "右辺(yを含まない項)が0", "一階である", "解が存在しない"],
          answer: 1,
          expl: "y'+P(x)y=Q(x) で Q(x)=0 のものが斉次。斉次解は必ず Ce^(-∫P dx) の指数関数形になる",
          sectionRef: 0
        },
        {
          q: "初期条件を与えると何が起きる?",
          choices: ["方程式の階数が下がる", "任意定数が確定して特殊解が1つに決まる", "解が存在しなくなる", "一般解の形が変わる"],
          answer: 1,
          expl: "一般解=曲線の族から、初期条件を通る1本が選ばれる。C を解くだけ",
          sectionRef: 1
        },
        {
          q: "y' + ay = 0 (a>0) の解の挙動は?",
          choices: ["xとともに指数的に減衰する", "指数的に増大する", "振動する", "一定値のまま"],
          answer: 0,
          expl: "y=Ce^(-ax) で a>0 なら減衰。放電や冷却など「今の量に比例して減る」現象のモデル",
          sectionRef: 0
        }
      ]
    },
    // ================================================================
    // u3: 一階線形常微分方程式(2)(3) 非斉次・定数変化法・ベルヌイ/リッカチ
    // ================================================================
    {
      id: "u3",
      title: "一階線形常微分方程式(2)(3) — 非斉次・定数変化法・ベルヌイ型/リッカチ型",
      weeks: "第4〜5週",
      priority: 3,
      sections: [
        {
          heading: "非斉次の解 = 斉次解 + 特殊解",
          body: "<p>[[非斉次]]方程式 $y'+P(x)y=Q(x)$ の[[一般解]]は、<b>斉次解 $y_h$ と特殊解 $y_p$ の和</b> $y = y_h + y_p$ になる。エレベーターに例えると、$y_p$ は「目的の階までの移動(右辺 $Q$ に応える部分)」、$y_h$ は「そこからの自由なズレ(初期条件で調整する部分)」。この構造は二階でも全く同じなので、ここで腹落ちさせておくと後がすべて楽になる。特殊解の見つけ方の代表が[[定数変化法]]である。</p>"
        },
        {
          heading: "定数変化法 — Cを関数に「変化」させる",
          body: "<p>[[定数変化法]]の発想は大胆で、斉次解 $y=Ce^{-\\int P dx}$ の定数 $C$ を関数 $C(x)$ に置き換えて非斉次方程式に代入する。すると $C(x)$ だけの簡単な方程式 $C'(x) = Q e^{\\int P dx}$ が残り、積分すれば $C(x)$ が決まる。結果をまとめたのが一般解の公式 $$y = e^{-\\int P dx}\\left(\\int Q e^{\\int P dx} dx + C\\right)$$ この $e^{\\int P dx}$ を[[積分因子]]と呼ぶ。公式暗記でも解けるが、<b>手順(斉次解→C(x)化→代入→積分)を再現できる</b>ことが試験対策としては強い。</p>",
          svg: "<svg viewBox='0 0 400 320' xmlns='http://www.w3.org/2000/svg'><text x='200' y='22' text-anchor='middle' font-size='15' fill='var(--c-text)' font-weight='bold'>定数変化法の手順</text><rect x='70' y='36' width='260' height='44' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='200' y='54' text-anchor='middle' font-size='14' fill='var(--c-text)'>① 斉次解を求める</text><text x='200' y='72' text-anchor='middle' font-size='14' fill='var(--c-text)'>y = Ce^(-∫P dx)</text><line x1='200' y1='80' x2='200' y2='96' stroke='var(--c-accent)' stroke-width='2'/><rect x='70' y='96' width='260' height='44' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='200' y='114' text-anchor='middle' font-size='14' fill='var(--c-text)'>② C を C(x) に置き換える</text><text x='200' y='132' text-anchor='middle' font-size='14' fill='var(--c-text)'>y = C(x)e^(-∫P dx)</text><line x1='200' y1='140' x2='200' y2='156' stroke='var(--c-accent)' stroke-width='2'/><rect x='70' y='156' width='260' height='44' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='200' y='174' text-anchor='middle' font-size='14' fill='var(--c-text)'>③ 元の式に代入 → C&#39;だけ残る</text><text x='200' y='192' text-anchor='middle' font-size='14' fill='var(--c-text)'>C&#39;(x) = Q e^(∫P dx)</text><line x1='200' y1='200' x2='200' y2='216' stroke='var(--c-accent)' stroke-width='2'/><rect x='70' y='216' width='260' height='44' rx='8' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><text x='200' y='234' text-anchor='middle' font-size='14' fill='var(--c-text)'>④ 積分して C(x) を求め、戻す</text><text x='200' y='252' text-anchor='middle' font-size='14' fill='var(--c-text)'>y = e^(-∫P dx)(∫Qe^(∫P dx)dx + C)</text><text x='200' y='296' text-anchor='middle' font-size='14' fill='var(--c-accent)'>ポイント: ③で C(x) の項が必ず打ち消し合う</text></svg>"
        },
        {
          heading: "発展形 — ベルヌイ型とリッカチ型",
          body: "<p>線形でない一階方程式でも、置換で線形に戻せる型が2つある。<b>[[ベルヌイ型]]</b> $y'+P(x)y=Q(x)y^n$ は、$u=y^{1-n}$ と置くと $u$ の一階線形になる(両辺を $y^n$ で割ってから置換すると仕組みが見える)。<b>[[リッカチ型]]</b> $y'=P(x)y^2+Q(x)y+R(x)$ は一般には解けないが、特殊解 $y_1$ が1つ見つかれば $y=y_1+\\frac{1}{u}$ と置いて一階線形に帰着できる。どちらも「<b>非線形→置換→線形</b>」という流れ。試験では置換の式そのものがよく問われる。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "一階線形非斉次の一般解(公式)",
          latex: "y = e^{-\\int P\\,dx}\\left(\\int Q\\,e^{\\int P\\,dx}\\,dx + C\\right)",
          vars: [
            { sym: "P(x)", meaning: "yの係数", unit: "—" },
            { sym: "Q(x)", meaning: "非斉次項", unit: "—" },
            { sym: "C", meaning: "任意定数", unit: "—" }
          ],
          when: "y'+P(x)y=Q(x) を解くとき全般。到達目標(4)「一階非斉次解」の中心公式",
          intuition: "外側のe^(-∫P)は斉次解の形、括弧の中の積分が非斉次分の補正+C",
          derivation: "定数変化法の結果をまとめたもの。y=C(x)e^(-∫Pdx)を代入するとC'=Qe^(∫Pdx)が残る",
          blank: "y = e^{-\\int P dx}\\left(\\int ? \\,dx + C\\right)",
          blankAnswer: "Q\\,e^{\\int P\\,dx}"
        },
        {
          id: "f2",
          name: "積分因子",
          latex: "\\mu(x) = e^{\\int P\\,dx}, \\quad (\\mu y)' = \\mu Q",
          vars: [
            { sym: "\\mu", meaning: "積分因子", unit: "—" }
          ],
          when: "両辺にμを掛けると左辺が(μy)'にまとまり、あとは両辺を積分するだけになる",
          intuition: "左辺を「積の微分の展開形」に見せるための掛け算調味料",
          derivation: "(μy)'=μy'+μ'y。μ'=Pμ となるμを選べば μy'+Pμy=μ(y'+Py) と一致する",
          blank: "\\mu(x) = e^{?}",
          blankAnswer: "\\int P\\,dx"
        },
        {
          id: "f3",
          name: "定数変化法の核心式",
          latex: "y = C(x)e^{-\\int P dx} \\;\\Rightarrow\\; C'(x) = Q(x)\\,e^{\\int P\\,dx}",
          vars: [
            { sym: "C(x)", meaning: "定数を関数化したもの", unit: "—" }
          ],
          when: "公式を忘れたときの再導出、および「定数変化法で解け」と手法指定されたとき",
          intuition: "代入するとC(x)の項は斉次方程式を満たすので消え、C'の項だけが残る",
          derivation: "y'=C'e^(-∫Pdx)-CPe^(-∫Pdx) を代入。第2項と Py が打ち消し合うのがミソ",
          blank: "C'(x) = Q(x)\\,e^{?}",
          blankAnswer: "\\int P\\,dx"
        },
        {
          id: "f4",
          name: "ベルヌイ型の変換",
          latex: "y' + Py = Qy^n \\;\\xrightarrow{u=y^{1-n}}\\; u' + (1-n)Pu = (1-n)Q",
          vars: [
            { sym: "n", meaning: "yの指数(n≠0,1)", unit: "無次元" },
            { sym: "u", meaning: "新しい未知関数 y^(1-n)", unit: "—" }
          ],
          when: "右辺にy^nが付いた一階方程式を見たら。n=2ならu=1/y",
          intuition: "y^nで割ってからu=y^(1-n)と置くと、u'=(1-n)y^(-n)y' がちょうど現れて線形化する",
          derivation: "両辺をy^nで割る: y^(-n)y'+Py^(1-n)=Q。u'=(1-n)y^(-n)y'を使って書き換える",
          blank: "u = y^{?}",
          blankAnswer: "1-n"
        },
        {
          id: "f5",
          name: "リッカチ型の変換(特殊解既知)",
          latex: "y' = Py^2 + Qy + R,\\; y_1\\text{が特殊解} \\;\\Rightarrow\\; y = y_1 + \\dfrac{1}{u}\\text{で }u\\text{の一階線形へ}",
          vars: [
            { sym: "y_1", meaning: "既知の特殊解(問題で与えられる)", unit: "—" },
            { sym: "u", meaning: "新しい未知関数", unit: "—" }
          ],
          when: "y²の項がある一階方程式で「y=y₁が解であることを確かめ、一般解を求めよ」という誘導つき問題",
          intuition: "特殊解からのズレの逆数を新変数にすると、2次の項が消えて線形になる",
          derivation: "y=y₁+1/u を代入し、y₁が方程式を満たすことを使って整理すると u'+(2Py₁+Q)u=-P",
          blank: "y = y_1 + ?",
          blankAnswer: "\\dfrac{1}{u}"
        }
      ],
      selectQuiz: [
        {
          q: "y' + y = e^x のような非斉次方程式の一般解を一発で書きたい",
          choices: ["一般解公式 y=e^(-∫Pdx)(∫Qe^(∫Pdx)dx+C)", "斉次解の公式だけ", "特性方程式", "変数分離"],
          answer: 0,
          expl: "一階線形非斉次はこの公式で機械的に解ける。P=1, Q=e^x を代入するだけ",
          formulaRef: "f1"
        },
        {
          q: "y' + 2y = y³ を見た。どう料理する?",
          choices: ["ベルヌイ型: u=y^(1-3)=y^(-2)と置換", "そのまま変数分離", "特性方程式", "完全形の判定"],
          answer: 0,
          expl: "右辺がy^nの形はベルヌイ型。n=3なのでu=y^(-2)で一階線形に変換",
          formulaRef: "f4"
        },
        {
          q: "「定数変化法で解け」と指定された。最初にやることは?",
          choices: ["斉次解を求めてCをC(x)に置き換える", "いきなり両辺を積分", "u=y/xと置換", "未定係数法で仮定"],
          answer: 0,
          expl: "定数変化法は必ず「斉次解→C(x)化→代入」の順。代入するとC'だけが残る",
          formulaRef: "f3"
        },
        {
          q: "y'=y²-2xy+x²+1 で「y=xが解であることを確かめてから一般解を求めよ」と誘導された",
          choices: ["リッカチ型: y=x+1/uと置換", "ベルヌイ型: u=y^(1-n)", "同次形: u=y/x", "積分因子を掛ける"],
          answer: 0,
          expl: "y²の項+特殊解の誘導=リッカチ型のサイン。y=y₁+1/uで線形化する",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
                "id": "pdf2_linear_ivp",
                "pattern": "課題 問題2 2.(3)(5)(8): 一階線形非同次の初期値問題",
                "variants": [
                        {
                                "q": "課題 問題2 2.(3): $y'-2y=5\\sin t,\\ y(0)=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 積分因子",
                                                "content": "$y'-2y=5\\sin t$ なので積分因子は $\\mu=e^{-2t}$。"
                                        },
                                        {
                                                "label": "② 左辺をまとめる",
                                                "content": "$(e^{-2t}y)'=5e^{-2t}\\sin t$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$\\int 5e^{-2t}\\sin t\\,dt=e^{-2t}(-2\\sin t-\\cos t)$。"
                                        },
                                        {
                                                "label": "④ 一般解",
                                                "content": "$e^{-2t}y=e^{-2t}(-2\\sin t-\\cos t)+C$ より $y=-2\\sin t-\\cos t+Ce^{2t}$。"
                                        },
                                        {
                                                "label": "⑤ 初期条件",
                                                "content": "$0=-1+C$ なので $C=1$。"
                                        }
                                ],
                                "answer": "$y=e^{2t}-2\\sin t-\\cos t$"
                        },
                        {
                                "q": "課題 問題2 2.(5): $y'+ty=e^{-t^2/2},\\ y(0)=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 積分因子",
                                                "content": "$\\mu=e^{\\int tdt}=e^{t^2/2}$。"
                                        },
                                        {
                                                "label": "② かける",
                                                "content": "$e^{t^2/2}y'+te^{t^2/2}y=(e^{t^2/2}y)'$。右辺は $1$ になる。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$(e^{t^2/2}y)'=1$ より $e^{t^2/2}y=t+C$。"
                                        },
                                        {
                                                "label": "④ 初期条件",
                                                "content": "$y(0)=0$ から $C=0$。"
                                        }
                                ],
                                "answer": "$y=te^{-t^2/2}$"
                        },
                        {
                                "q": "課題 問題2 2.(8): $y'-(\\tan t)y=1,\\ y(0)=0,\\ 0\\le t<\\pi/2$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 積分因子",
                                                "content": "$\\mu=e^{\\int -\\tan t\\,dt}=e^{\\log\\cos t}=\\cos t$。"
                                        },
                                        {
                                                "label": "② 左辺",
                                                "content": "$(y\\cos t)'=\\cos t$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$y\\cos t=\\sin t+C$。"
                                        },
                                        {
                                                "label": "④ 初期条件",
                                                "content": "$0=0+C$ より $C=0$。したがって $y=\\tan t$。"
                                        }
                                ],
                                "answer": "$y=\\tan t$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f2",
                        "f3"
                ]
        },
        {
                "id": "pdf2_resonance_linear",
                "pattern": "課題 問題2 3.(3)(4): 右辺と係数でひっかかる一階線形",
                "variants": [
                        {
                                "q": "課題 問題2 3.(3): $y'-y=e^t$ を解け。右辺が同次解と重なる点に注意。",
                                "steps": [
                                        {
                                                "label": "① 同次解",
                                                "content": "$y'-y=0$ の解は $Ce^t$。右辺も $e^t$ なので，特解は単なる $Ae^t$ では足りない。"
                                        },
                                        {
                                                "label": "② 積分因子",
                                                "content": "$\\mu=e^{-t}$ をかけると $(e^{-t}y)'=1$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$e^{-t}y=t+C$。"
                                        },
                                        {
                                                "label": "④ 結論",
                                                "content": "$y=e^t(t+C)$。$t e^t$ が出るのが共振のサイン。"
                                        }
                                ],
                                "answer": "$y=e^t(t+C)$"
                        },
                        {
                                "q": "課題 問題2 3.(4): $y'+\\dfrac{1}{t}y=\\sin t,\\ t>0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 積分因子",
                                                "content": "$\\mu=e^{\\int (1/t)dt}=t$。$t>0$ なので絶対値を気にせず使える。"
                                        },
                                        {
                                                "label": "② 左辺",
                                                "content": "$(ty)'=t\\sin t$。"
                                        },
                                        {
                                                "label": "③ 部分積分",
                                                "content": "$\\int t\\sin t\\,dt=-t\\cos t+\\sin t$。"
                                        },
                                        {
                                                "label": "④ 整理",
                                                "content": "$ty=-t\\cos t+\\sin t+C$。"
                                        }
                                ],
                                "answer": "$y=-\\cos t+\\dfrac{\\sin t}{t}+\\dfrac{C}{t}$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f2"
                ]
        },
        {
                "id": "pdf2_bernoulli",
                "pattern": "課題 問題2 6.(2): ベルヌーイ型",
                "variants": [
                        {
                                "q": "課題 問題2 6.(2): $y'+y=(t+1)y^3,\\ t>0$ を解け。$z=y^{-2}$ とおく。",
                                "steps": [
                                        {
                                                "label": "① 型の確認",
                                                "content": "$y'+P(t)y=Q(t)y^n$ のベルヌーイ型。ここでは $n=3$。"
                                        },
                                        {
                                                "label": "② 置換",
                                                "content": "$z=y^{1-n}=y^{-2}$ とおく。$z'=-2y^{-3}y'$。"
                                        },
                                        {
                                                "label": "③ zの方程式",
                                                "content": "$y'=(t+1)y^3-y$ を代入すると $z'= -2(t+1)+2z$。つまり $z'-2z=-2t-2$。"
                                        },
                                        {
                                                "label": "④ zを解く",
                                                "content": "一次式の特解を $z=at+b$ とおくと $a=1$, $b=\\dfrac32$。よって $z=Ce^{2t}+t+\\dfrac32$。"
                                        },
                                        {
                                                "label": "⑤ yへ戻す",
                                                "content": "$z=y^{-2}$ なので $y=\\pm\\dfrac{1}{\\sqrt{Ce^{2t}+t+3/2}}$。"
                                        }
                                ],
                                "answer": "$y=\\pm\\left(Ce^{2t}+t+\\dfrac32\\right)^{-1/2}$"
                        }
                ],
                "formulaRefs": [
                        "f4"
                ]
        },
        {
                "id": "pdf2_riccati",
                "pattern": "課題 問題2 7.(2): リッカチ型",
                "variants": [
                        {
                                "q": "課題 問題2 7.(2): $y'+y^2=\\dfrac{2}{t^2},\\ t>0$ を解け。既知解 $y_1=-1/t$ を使う。",
                                "steps": [
                                        {
                                                "label": "① 既知解の確認",
                                                "content": "$y_1=-1/t$ なら $y_1'=1/t^2$, $y_1^2=1/t^2$ で $y_1'+y_1^2=2/t^2$。"
                                        },
                                        {
                                                "label": "② リッカチ置換",
                                                "content": "$y=y_1+1/u=-1/t+1/u$ とおく。"
                                        },
                                        {
                                                "label": "③ uの線形方程式",
                                                "content": "リッカチの標準変形より $u'+\\dfrac{2}{t}u=1$。"
                                        },
                                        {
                                                "label": "④ 積分因子",
                                                "content": "$\\mu=t^2$。したがって $(t^2u)'=t^2$。"
                                        },
                                        {
                                                "label": "⑤ 戻す",
                                                "content": "$u=\\dfrac{t}{3}+\\dfrac{C}{t^2}$。よって $y=-\\dfrac1t+\\dfrac{1}{t/3+C/t^2}$。"
                                        }
                                ],
                                "answer": "$y=-\\dfrac1t+\\dfrac{1}{t/3+C/t^2}$"
                        }
                ],
                "formulaRefs": [
                        "f5"
                ]
        },
        {
                "id": "ex23_extra",
                "pattern": "演習2・3追加: 置換が効く一階線形",
                "variants": [
                        {
                                "q": "演習追加: $\\dfrac{dy}{dx}-3x^2y=x^2,\\ y(0)=\\dfrac23$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 積分因子",
                                                "content": "$\\mu=e^{\\int -3x^2dx}=e^{-x^3}$。"
                                        },
                                        {
                                                "label": "② 左辺",
                                                "content": "$(e^{-x^3}y)'=x^2e^{-x^3}$。"
                                        },
                                        {
                                                "label": "③ 置換積分",
                                                "content": "$u=-x^3$ とおくと $du=-3x^2dx$。よって $\\int x^2e^{-x^3}dx=-\\dfrac13e^{-x^3}$。"
                                        },
                                        {
                                                "label": "④ 一般解",
                                                "content": "$e^{-x^3}y=-\\dfrac13e^{-x^3}+C$ なので $y=-\\dfrac13+Ce^{x^3}$。"
                                        },
                                        {
                                                "label": "⑤ 初期条件",
                                                "content": "$2/3=-1/3+C$ より $C=1$。"
                                        }
                                ],
                                "answer": "$y=e^{x^3}-\\dfrac13$"
                        },
                        {
                                "q": "演習追加: $\\dfrac{dy}{dx}-y\\cos x=\\cos x,\\ y(0)=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 積分因子",
                                                "content": "$\\mu=e^{\\int -\\cos xdx}=e^{-\\sin x}$。"
                                        },
                                        {
                                                "label": "② 左辺",
                                                "content": "$(e^{-\\sin x}y)'=e^{-\\sin x}\\cos x$。"
                                        },
                                        {
                                                "label": "③ 置換",
                                                "content": "$u=-\\sin x$ とおくと $du=-\\cos xdx$。積分は $-e^{-\\sin x}$。"
                                        },
                                        {
                                                "label": "④ 一般解",
                                                "content": "$e^{-\\sin x}y=-e^{-\\sin x}+C$ なので $y=-1+Ce^{\\sin x}$。"
                                        },
                                        {
                                                "label": "⑤ 初期条件",
                                                "content": "$0=-1+C$ より $C=1$。"
                                        }
                                ],
                                "answer": "$y=e^{\\sin x}-1$"
                        }
                ],
                "formulaRefs": [
                        "f2",
                        "f3"
                ]
        }
],
      quiz: [
        {
          q: "非斉次方程式の一般解の構造として正しいのは?",
          choices: ["斉次解のみ", "特殊解のみ", "斉次解+特殊解", "斉次解×特殊解"],
          answer: 2,
          expl: "y = y_h + y_p。特殊解が右辺Qに応え、斉次解が初期条件の自由度を担う",
          sectionRef: 0
        },
        {
          q: "定数変化法で y=C(x)e^(-∫Pdx) を代入すると何が起きる?",
          choices: ["C(x)の項が消えてC'(x)だけの式が残る", "C'(x)が消える", "解けなくなる", "二階方程式になる"],
          answer: 0,
          expl: "C(x)の項は斉次方程式を満たすので打ち消し合い、C'=Qe^(∫Pdx)という積分するだけの式が残る",
          sectionRef: 1
        },
        {
          q: "リッカチ型を解くために必要な「追加情報」は?",
          choices: ["初期条件", "特殊解が1つ", "積分因子", "特性方程式の根"],
          answer: 1,
          expl: "リッカチ型は一般には求積できないが、特殊解y₁が1つ分かれば y=y₁+1/u で線形化できる",
          sectionRef: 2
        },
        {
          q: "ベルヌイ型 y'+Py=Qy^n で n=2 のときの置換は?",
          choices: ["u=y²", "u=1/y", "u=y/x", "u=ln y"],
          answer: 1,
          expl: "u=y^(1-n)=y^(-1)=1/y。これでuの一階線形方程式に変換される",
          sectionRef: 2
        }
      ]
    },
    // ================================================================
    // u4: 定数係数二階線形(1) 特性方程式と斉次解
    // ================================================================
    {
      id: "u4",
      title: "定数係数二階線形常微分方程式(1) — 特性方程式と基本解系",
      weeks: "第6週",
      priority: 3,
      sections: [
        {
          heading: "e^(λx) を仮定すると代数方程式になる",
          body: "<p>$y'' + ay' + by = 0$ を解く鍵は「微分しても形が変わらない関数」$y=e^{\\lambda x}$ を試すこと。代入すると $(\\lambda^2 + a\\lambda + b)e^{\\lambda x} = 0$、$e^{\\lambda x} \\neq 0$ なので $$\\lambda^2 + a\\lambda + b = 0$$ という2次方程式に化ける。これが[[特性方程式]]。<b>微分方程式が中学レベルの2次方程式に変わる</b>のがこの方法の凄さで、あとは根の種類(判別式)によって解の形が3パターンに分かれるだけ。</p>"
        },
        {
          heading: "3ケースの一般解 — 判別式で分岐する",
          body: "<p>特性方程式の根 $\\lambda_1, \\lambda_2$ により、[[一般解]]は次の3通り。<b>(i) 相異なる実根</b>: $y=C_1e^{\\lambda_1 x}+C_2e^{\\lambda_2 x}$(2つの指数関数の重ね合わせ)。<b>(ii) [[重根]]</b> $\\lambda$: 解が1つ足りないので $xe^{\\lambda x}$ を補い $y=(C_1+C_2x)e^{\\lambda x}$。<b>(iii) 複素根</b> $\\alpha \\pm \\beta i$: オイラーの公式経由で $y=e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$(振動)。車のサスペンションで言えば、(i)はゆっくり沈む、(iii)はボヨンボヨン揺れる、(ii)はその境目(最速で収まる)に対応する。独立な2解 $y_1, y_2$ を[[基本解]]といい、独立性は[[ロンスキアン]] $W=y_1y_2'-y_1'y_2 \\neq 0$ で確認できる。</p>",
          svg: "<svg viewBox='0 0 400 330' xmlns='http://www.w3.org/2000/svg'><text x='200' y='20' text-anchor='middle' font-size='15' fill='var(--c-text)' font-weight='bold'>特性方程式の3ケースと解の挙動</text><text x='70' y='44' font-size='14' fill='var(--c-accent)'>(i) 相異なる実根(負)</text><line x1='30' y1='100' x2='190' y2='100' stroke='var(--c-line)' stroke-width='1'/><path d='M35,55 Q80,85 120,95 T190,99' fill='none' stroke='var(--c-accent)' stroke-width='2.5'/><text x='70' y='128' font-size='13' fill='var(--c-text)'>単調に減衰</text><text x='250' y='44' font-size='14' fill='var(--c-accent)'>(ii) 重根</text><line x1='215' y1='100' x2='380' y2='100' stroke='var(--c-line)' stroke-width='1'/><path d='M220,90 Q240,55 265,70 Q310,95 380,99' fill='none' stroke='var(--c-accent)' stroke-width='2.5'/><text x='255' y='128' font-size='13' fill='var(--c-text)'>xe^(λx): 一度ふくらんで減衰</text><text x='70' y='168' font-size='14' fill='var(--c-accent)'>(iii) 複素根 α±βi (α&lt;0)</text><line x1='30' y1='240' x2='380' y2='240' stroke='var(--c-line)' stroke-width='1'/><path d='M35,185 Q55,185 70,240 T105,285 Q120,290 135,240 T170,210 Q185,205 200,240 T235,262 Q250,265 265,240 T300,228 Q320,225 340,240 T380,242' fill='none' stroke='var(--c-accent)' stroke-width='2.5'/><path d='M35,185 Q120,205 240,232 T380,239' fill='none' stroke='var(--c-fill1)' stroke-width='1.5' stroke-dasharray='6 4'/><path d='M35,295 Q120,275 240,248 T380,241' fill='none' stroke='var(--c-fill1)' stroke-width='1.5' stroke-dasharray='6 4'/><text x='90' y='318' font-size='13' fill='var(--c-text)'>e^(αx)の包絡線の中で cos/sin が振動(減衰振動)</text></svg>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "特性方程式",
          latex: "y'' + ay' + by = 0 \\;\\xrightarrow{y=e^{\\lambda x}}\\; \\lambda^2 + a\\lambda + b = 0",
          vars: [
            { sym: "\\lambda", meaning: "特性根(解の指数を決める)", unit: "—" },
            { sym: "a, b", meaning: "定数係数", unit: "—" }
          ],
          when: "定数係数二階線形斉次を見たら最初に書く式。y''→λ², y'→λ, y→1 と機械的に置き換え",
          intuition: "微分方程式を2次方程式に翻訳する辞書。根の種類=解の性格",
          derivation: "y=e^(λx)を代入。(λ²+aλ+b)e^(λx)=0 で e^(λx)≠0 だから係数部分が0",
          blank: "\\lambda^2 + a\\lambda + ? = 0",
          blankAnswer: "b"
        },
        {
          id: "f2",
          name: "ケース1: 相異なる実根",
          latex: "\\lambda_1 \\neq \\lambda_2 \\;(\\text{実数}) \\;\\Rightarrow\\; y = C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}",
          vars: [
            { sym: "\\lambda_1, \\lambda_2", meaning: "特性方程式の2つの実根", unit: "—" },
            { sym: "C_1, C_2", meaning: "任意定数", unit: "—" }
          ],
          when: "判別式 a²-4b>0 のとき。因数分解できる特性方程式はほぼこのケース",
          intuition: "2つの指数関数の重ね合わせ。過減衰(ゆっくり戻るサスペンション)",
          derivation: "e^(λ₁x)とe^(λ₂x)はロンスキアン≠0で独立 → 線形結合が一般解",
          blank: "y = C_1 e^{\\lambda_1 x} + C_2 e^{?}",
          blankAnswer: "\\lambda_2 x"
        },
        {
          id: "f3",
          name: "ケース2: 重根",
          latex: "\\lambda_1 = \\lambda_2 = \\lambda \\;\\Rightarrow\\; y = (C_1 + C_2 x)e^{\\lambda x}",
          vars: [
            { sym: "\\lambda", meaning: "重根", unit: "—" }
          ],
          when: "判別式 a²-4b=0 のとき。特性方程式が(λ-λ₀)²に因数分解されたら",
          intuition: "解が1本足りないので「x倍した相棒」xe^(λx)を連れてくる。臨界減衰",
          derivation: "xe^(λx)が2つ目の解になることは代入で確認できる(重根のときだけ成立)",
          blank: "y = (C_1 + ?)e^{\\lambda x}",
          blankAnswer: "C_2 x"
        },
        {
          id: "f4",
          name: "ケース3: 複素根",
          latex: "\\lambda = \\alpha \\pm \\beta i \\;\\Rightarrow\\; y = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)",
          vars: [
            { sym: "\\alpha", meaning: "実部(減衰・増幅を決める)", unit: "—" },
            { sym: "\\beta", meaning: "虚部(振動数を決める)", unit: "—" }
          ],
          when: "判別式 a²-4b<0 のとき。y''+ω²y=0 なら α=0, β=ω で純粋な振動",
          intuition: "実部=e^(αx)の包絡線、虚部=振動の速さ。減衰振動そのもの",
          derivation: "オイラーの公式 e^(iβx)=cos βx + i sin βx で複素指数を実関数に書き直す",
          blank: "y = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 ?)",
          blankAnswer: "\\sin\\beta x"
        },
        {
          id: "f5",
          name: "ロンスキアン(基本解の独立性判定)",
          latex: "W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\neq 0 \\;\\Leftrightarrow\\; y_1, y_2 \\text{ は独立}",
          vars: [
            { sym: "W", meaning: "ロンスキアン", unit: "—" },
            { sym: "y_1, y_2", meaning: "2つの解", unit: "—" }
          ],
          when: "「基本解系であることを示せ」という証明問題、および二階の定数変化法の分母",
          intuition: "2つの解が「本質的に別の動き」をしているかのチェッカー。比例していたらW=0",
          derivation: "行列式 |y₁ y₂; y₁' y₂'| の展開。W≠0なら任意の初期条件をC₁,C₂で満たせる",
          blank: "W = y_1 y_2' - ?",
          blankAnswer: "y_1' y_2"
        }
      ],
      selectQuiz: [
        {
          q: "y'' - 5y' + 6y = 0 を解く。最初に立てる式は?",
          choices: ["特性方程式 λ²-5λ+6=0", "積分因子 e^(∫Pdx)", "u=y/x の置換", "完全形の判定"],
          answer: 0,
          expl: "定数係数二階線形斉次 → 特性方程式一択。λ=2,3(相異なる実根)",
          formulaRef: "f1"
        },
        {
          q: "特性方程式が (λ-3)²=0 になった。一般解の形は?",
          choices: ["C₁e^(3x)+C₂e^(3x)", "(C₁+C₂x)e^(3x)", "e^(3x)(C₁cos x+C₂sin x)", "C₁e^(3x)"],
          answer: 1,
          expl: "重根はx倍の相棒を補う。C₁e^(3x)+C₂e^(3x)=(C₁+C₂)e^(3x)は定数1個分にしかならずNG",
          formulaRef: "f3"
        },
        {
          q: "特性方程式の根が λ=-1±2i になった。一般解は?",
          choices: ["e^(-x)(C₁cos 2x+C₂sin 2x)", "C₁e^(-x)+C₂e^(2x)", "(C₁+C₂x)e^(-x)", "e^(2x)(C₁cos x+C₂sin x)"],
          answer: 0,
          expl: "複素根 α±βi は e^(αx)(C₁cos βx+C₂sin βx)。実部が肩、虚部が角振動数",
          formulaRef: "f4"
        },
        {
          q: "e^x と xe^x が独立な基本解であることを確かめたい",
          choices: ["ロンスキアン W=y₁y₂'-y₁'y₂ を計算する", "特性方程式を解き直す", "両方を足してみる", "初期条件を代入する"],
          answer: 0,
          expl: "W = e^x(e^x+xe^x) - e^x·xe^x = e^(2x) ≠ 0 で独立と分かる",
          formulaRef: "f5"
        }
      ],
      problems: [
        {
                "id": "pdf3_homogeneous_ivp",
                "pattern": "課題 問題3 1.(5)(6)(9): 二階同次の3ケース",
                "variants": [
                        {
                                "q": "課題 問題3 1.(5): $y''-y'-y=0,\\ y(0)=2,\\ y'(0)=1$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 特性方程式",
                                                "content": "$\\lambda^2-\\lambda-1=0$。根は $\\alpha=\\dfrac{1+\\sqrt5}{2}$, $\\beta=\\dfrac{1-\\sqrt5}{2}$。"
                                        },
                                        {
                                                "label": "② 一般解",
                                                "content": "$y=C_1e^{\\alpha t}+C_2e^{\\beta t}$。"
                                        },
                                        {
                                                "label": "③ 初期条件1",
                                                "content": "$C_1+C_2=2$。"
                                        },
                                        {
                                                "label": "④ 初期条件2",
                                                "content": "$\\alpha C_1+\\beta C_2=1$。この連立を解くと $C_1=1$, $C_2=1$。"
                                        }
                                ],
                                "answer": "$y=e^{\\frac{1+\\sqrt5}{2}t}+e^{\\frac{1-\\sqrt5}{2}t}$"
                        },
                        {
                                "q": "課題 問題3 1.(6): $y''+4y'+4y=0,\\ y(0)=3,\\ y'(0)=5$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 特性方程式",
                                                "content": "$\\lambda^2+4\\lambda+4=(\\lambda+2)^2=0$。重根 $\\lambda=-2$。"
                                        },
                                        {
                                                "label": "② 一般解",
                                                "content": "重根なので $y=(C_1+C_2t)e^{-2t}$。"
                                        },
                                        {
                                                "label": "③ 初期条件1",
                                                "content": "$y(0)=C_1=3$。"
                                        },
                                        {
                                                "label": "④ 初期条件2",
                                                "content": "$y'=(C_2-2C_1-2C_2t)e^{-2t}$ より $y'(0)=C_2-6=5$。したがって $C_2=11$。"
                                        }
                                ],
                                "answer": "$y=(3+11t)e^{-2t}$"
                        },
                        {
                                "q": "課題 問題3 1.(9): $y''+2y'+2y=0,\\ y(0)=1,\\ y'(0)=1$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 特性方程式",
                                                "content": "$\\lambda^2+2\\lambda+2=0$。根は $-1\\pm i$。"
                                        },
                                        {
                                                "label": "② 一般解",
                                                "content": "$y=e^{-t}(C_1\\cos t+C_2\\sin t)$。"
                                        },
                                        {
                                                "label": "③ 初期条件1",
                                                "content": "$y(0)=C_1=1$。"
                                        },
                                        {
                                                "label": "④ 初期条件2",
                                                "content": "$y'(0)=-C_1+C_2=1$。$C_1=1$ より $C_2=2$。"
                                        }
                                ],
                                "answer": "$y=e^{-t}(\\cos t+2\\sin t)$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f2",
                        "f3",
                        "f4"
                ]
        }
],
      quiz: [
        {
          q: "特性方程式はどうやって作る?",
          choices: ["y''→λ², y'→λ, y→1 と置き換える", "両辺を積分する", "u=y/xと置換する", "右辺を0とおく"],
          answer: 0,
          expl: "y=e^(λx)を代入した結果がこの置き換えルール。微分方程式が2次方程式に翻訳される",
          sectionRef: 0
        },
        {
          q: "重根のとき2つ目の基本解にxe^(λx)を使う理由は?",
          choices: ["計算が楽だから", "e^(λx)だけでは独立な解が1つ足りないから", "xが好まれるから", "重根では解が存在しないから"],
          answer: 1,
          expl: "二階には独立な解が2つ必要。重根ではe^(λx)が1つしか取れないので、代入して成立するxe^(λx)を補う",
          sectionRef: 1
        },
        {
          q: "特性根が複素数 α±βi のとき、解の「振動の速さ」を決めるのは?",
          choices: ["実部α", "虚部β", "任意定数C₁", "判別式"],
          answer: 1,
          expl: "cos βx, sin βx の β が角振動数。実部αは e^(αx) として減衰(α<0)か増幅(α>0)を決める",
          sectionRef: 1
        }
      ]
    },
    // ================================================================
    // u5: 定数係数二階線形(2)(3)(4) 非斉次: 定数変化法・未定係数法・オイラー
    // ================================================================
    {
      id: "u5",
      title: "定数係数二階線形常微分方程式(2)〜(4) — 定数変化法・未定係数法・オイラーの微分方程式",
      weeks: "第7〜9週",
      priority: 3,
      sections: [
        {
          heading: "未定係数法 — 右辺の形から特殊解を「予約」する",
          body: "<p>非斉次 $y''+ay'+by=R(x)$ の一般解も一階と同じく $y=y_h+y_p$。特殊解 $y_p$ を効率よく見つけるのが[[未定係数法]]で、<b>右辺 $R(x)$ と同じ種類の関数を係数未定で仮定して代入する</b>。$R$ が多項式なら同次数の多項式、$e^{ax}$ なら $Ae^{ax}$、$\\sin\\beta x$ や $\\cos\\beta x$ なら $A\\cos\\beta x + B\\sin\\beta x$(<b>必ず両方仮定</b>)。注文の形を見て同じ型の器を用意するイメージ。代入して係数比較すれば $A, B$ が決まる。</p>",
          svg: "<svg viewBox='0 0 400 340' xmlns='http://www.w3.org/2000/svg'><text x='200' y='22' text-anchor='middle' font-size='15' fill='var(--c-text)' font-weight='bold'>未定係数法: 仮定形の選び方</text><rect x='20' y='40' width='170' height='34' rx='6' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='105' y='62' text-anchor='middle' font-size='14' fill='var(--c-text)'>右辺 R(x) の形</text><rect x='210' y='40' width='170' height='34' rx='6' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='295' y='62' text-anchor='middle' font-size='14' fill='var(--c-text)'>仮定する y_p</text><rect x='20' y='84' width='170' height='34' rx='6' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='105' y='106' text-anchor='middle' font-size='14' fill='var(--c-text)'>n次多項式</text><rect x='210' y='84' width='170' height='34' rx='6' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='295' y='106' text-anchor='middle' font-size='14' fill='var(--c-text)'>ax^n+…+c (同次数)</text><rect x='20' y='128' width='170' height='34' rx='6' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='105' y='150' text-anchor='middle' font-size='14' fill='var(--c-text)'>e^(ax)</text><rect x='210' y='128' width='170' height='34' rx='6' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='295' y='150' text-anchor='middle' font-size='14' fill='var(--c-text)'>Ae^(ax)</text><rect x='20' y='172' width='170' height='34' rx='6' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='105' y='194' text-anchor='middle' font-size='14' fill='var(--c-text)'>sin βx / cos βx</text><rect x='210' y='172' width='170' height='34' rx='6' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='295' y='194' text-anchor='middle' font-size='14' fill='var(--c-text)'>A cos βx + B sin βx</text><rect x='20' y='224' width='360' height='52' rx='8' fill='none' stroke='var(--c-accent)' stroke-width='2'/><text x='200' y='246' text-anchor='middle' font-size='14' fill='var(--c-accent)' font-weight='bold'>共振チェック: 仮定形が斉次解とかぶったら x 倍!</text><text x='200' y='266' text-anchor='middle' font-size='13' fill='var(--c-text)'>(重根とかぶったら x² 倍)</text><text x='200' y='308' text-anchor='middle' font-size='13' fill='var(--c-text)'>手順: 仮定 → 代入 → 係数比較 → y = y_h + y_p</text></svg>"
        },
        {
          heading: "共振 — 仮定形が斉次解とかぶったら x 倍",
          body: "<p>未定係数法の最大の落とし穴が[[共振]]。たとえば $y''-y=e^x$ で $y_p=Ae^x$ と仮定すると、$e^x$ は斉次解なので代入した瞬間に左辺が0になり、係数が決められない。ブランコを固有のリズムで押すと揺れがどんどん大きくなるのと同じで、このとき解は $x$ 倍で成長する形 $y_p=Axe^x$ になる。<b>ルール: 仮定形が斉次解に含まれていたら $x$ 倍、それも重根でかぶるなら $x^2$ 倍</b>。仮定する前に必ず斉次解を先に求めて照合すること。</p>"
        },
        {
          heading: "定数変化法(二階)とオイラーの微分方程式",
          body: "<p>右辺が $\\tan x$ や $1/x$ など未定係数法が効かない形では、二階版の[[定数変化法]]を使う。斉次解 $y_h=C_1y_1+C_2y_2$ の定数を関数化し、[[ロンスキアン]] $W$ を使った公式 $y_p = -y_1\\int\\frac{y_2 R}{W}dx + y_2\\int\\frac{y_1 R}{W}dx$ で特殊解が得られる。また、係数が $x^2, x$ の[[オイラーの微分方程式]] $x^2y''+axy'+by=0$ は、$x=e^t$ と置換すると定数係数に変身する(実戦では $y=x^m$ を代入して $m$ の2次方程式を解くのが速い)。「見た目が違っても定数係数に帰着できる」代表例として総括でも強調される。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "非斉次の一般解の構造",
          latex: "y = y_h + y_p \\quad (y_h: \\text{斉次解}, \\; y_p: \\text{特殊解})",
          vars: [
            { sym: "y_h", meaning: "斉次方程式の一般解(任意定数2個)", unit: "—" },
            { sym: "y_p", meaning: "非斉次方程式を満たす特殊解1つ", unit: "—" }
          ],
          when: "非斉次問題の答案の骨組み。y_hとy_pを別々に求めて最後に足す",
          intuition: "y_pが右辺の注文に応え、y_hが初期条件の自由度を担う分業体制",
          derivation: "y, ỹが共に非斉次を満たすと y-ỹ は斉次を満たす → 解全体=特殊解+斉次解全体",
          blank: "y = y_h + ?",
          blankAnswer: "y_p"
        },
        {
          id: "f2",
          name: "未定係数法: 多項式型",
          latex: "R(x) = \\text{n次多項式} \\;\\Rightarrow\\; y_p = a_n x^n + \\cdots + a_1 x + a_0",
          vars: [
            { sym: "a_i", meaning: "未定係数(代入して係数比較で決める)", unit: "—" }
          ],
          when: "右辺が x, x², 3x+1 などのとき。次数を落とさず全次数の項を仮定する",
          intuition: "多項式を微分しても多項式。同じ次数の器を用意して係数比較",
          derivation: "R=xでも y_p=ax+b と定数項まで仮定するのがコツ(y'から定数が出るため)",
          blank: "R(x)=x \\;\\Rightarrow\\; y_p = ax + ?",
          blankAnswer: "b"
        },
        {
          id: "f3",
          name: "未定係数法: 指数関数型と共振",
          latex: "R(x) = e^{ax} \\;\\Rightarrow\\; y_p = Ae^{ax} \\;(\\text{共振なら } Axe^{ax},\\; \\text{重根共振なら } Ax^2e^{ax})",
          vars: [
            { sym: "a", meaning: "右辺の指数", unit: "—" },
            { sym: "A", meaning: "未定係数", unit: "—" }
          ],
          when: "右辺がe^(ax)のとき。aが特性根と一致していたら共振 → x倍",
          intuition: "斉次解とかぶった注文はそのままでは受けられない。x倍して「別の形」にする",
          derivation: "aが特性根だとAe^(ax)の代入で左辺が恒等的に0になり係数が決まらない、が理由",
          blank: "\\text{共振のとき } y_p = A ? e^{ax}",
          blankAnswer: "x"
        },
        {
          id: "f4",
          name: "未定係数法: 三角関数型",
          latex: "R(x) = \\sin\\beta x \\text{ or } \\cos\\beta x \\;\\Rightarrow\\; y_p = A\\cos\\beta x + B\\sin\\beta x",
          vars: [
            { sym: "\\beta", meaning: "右辺の角振動数", unit: "—" },
            { sym: "A, B", meaning: "未定係数(両方必要)", unit: "—" }
          ],
          when: "右辺がsinまたはcosのとき。片方しかなくても必ず両方仮定する",
          intuition: "微分でsinとcosは入れ替わるので、ペアで仮定しないと係数比較が破綻する",
          derivation: "±βiが特性根なら共振 → x(A cos βx+B sin βx) に格上げ",
          blank: "y_p = A\\cos\\beta x + B\\,?",
          blankAnswer: "\\sin\\beta x"
        },
        {
          id: "f5",
          name: "定数変化法(二階)",
          latex: "y_p = -y_1\\!\\int\\!\\dfrac{y_2 R}{W}dx + y_2\\!\\int\\!\\dfrac{y_1 R}{W}dx, \\quad W = y_1y_2' - y_1'y_2",
          vars: [
            { sym: "y_1, y_2", meaning: "斉次方程式の基本解", unit: "—" },
            { sym: "R(x)", meaning: "非斉次項", unit: "—" },
            { sym: "W", meaning: "ロンスキアン", unit: "—" }
          ],
          when: "右辺が tan x, 1/x など未定係数法の型に当てはまらないとき。万能だが計算は重い",
          intuition: "C₁, C₂を両方関数化した二階版の定数変化法。Wで割るのは連立を解いた名残",
          derivation: "y=C₁(x)y₁+C₂(x)y₂ と置き、条件 C₁'y₁+C₂'y₂=0 を課して連立を解く",
          blank: "W = y_1 y_2' - ?",
          blankAnswer: "y_1' y_2"
        },
        {
          id: "f6",
          name: "オイラーの微分方程式",
          latex: "x^2y'' + axy' + by = 0 \\;\\xrightarrow{x=e^t}\\; \\ddot{y} + (a-1)\\dot{y} + by = 0",
          vars: [
            { sym: "x=e^t", meaning: "独立変数の置換(t=ln x)", unit: "—" },
            { sym: "\\dot{y}", meaning: "dy/dt", unit: "—" }
          ],
          when: "係数が x², x, 1 と次数を揃えて並ぶ形を見たら。y=x^m の代入でも同じ結果",
          intuition: "xの世界の「掛け算的な変化」をtの世界の「足し算的な変化」に翻訳すると定数係数になる",
          derivation: "実戦は y=x^m 代入 → m(m-1)+am+b=0 の2次方程式(特性方程式のx^m版)を解くのが速い",
          blank: "x = e^{?} \\text{ と置換する}",
          blankAnswer: "t"
        }
      ],
      selectQuiz: [
        {
          q: "y'' - 3y' + 2y = e^(3x) の特殊解を仮定したい(斉次解は e^x, e^(2x))",
          choices: ["y_p = Ae^(3x)(共振なし)", "y_p = Axe^(3x)", "y_p = A cos 3x", "y_p = ax+b"],
          answer: 0,
          expl: "3は特性根(1, 2)ではないので共振なし。素直にAe^(3x)でよい",
          formulaRef: "f3"
        },
        {
          q: "y'' - y = e^x の特殊解を仮定したい(斉次解は e^x, e^(-x))",
          choices: ["y_p = Ae^x", "y_p = Axe^x(共振なのでx倍)", "y_p = Ax²e^x", "y_p = A"],
          answer: 1,
          expl: "e^xは斉次解とかぶる=共振。x倍してAxe^xと仮定する",
          formulaRef: "f3"
        },
        {
          q: "y'' + y = sin 2x の特殊解の仮定形は?",
          choices: ["A sin 2x のみ", "A cos 2x + B sin 2x", "x(A cos 2x + B sin 2x)", "Ae^(2x)"],
          answer: 1,
          expl: "sin/cosは必ずペアで仮定。±2iは特性根(±i)と違うので共振なし、x倍は不要",
          formulaRef: "f4"
        },
        {
          q: "y'' + y = tan x を解きたい。未定係数法が使えない。どうする?",
          choices: ["二階の定数変化法(ロンスキアン公式)", "あきらめる", "u=y/xと置換", "ベルヌイ型の変換"],
          answer: 0,
          expl: "tan xは未定係数法の型にない。基本解cos x, sin xとW=1で定数変化法を使う",
          formulaRef: "f5"
        },
        {
          q: "x²y'' - xy' - 3y = 0 の形を見た。何と判断する?",
          choices: ["オイラーの微分方程式(y=x^m を代入)", "定数係数(特性方程式)", "変数分離形", "完全形"],
          answer: 0,
          expl: "係数がx², x, 1と並ぶのがオイラー型のサイン。y=x^mでmの2次方程式に落ちる",
          formulaRef: "f6"
        }
      ],
      problems: [
        {
                "id": "pdf3_variation_nonhom",
                "pattern": "課題 問題3 2.(4): 二階非同次の初期値問題",
                "variants": [
                        {
                                "q": "課題 問題3 2.(4): $y''-2y'+y=te^t,\\ y(0)=0,\\ y'(0)=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 演算子で見る",
                                                "content": "左辺は $(D-1)^2y$。$y=e^tz$ とおくと $(D-1)^2y=e^tz''$。"
                                        },
                                        {
                                                "label": "② zの方程式",
                                                "content": "$e^tz''=te^t$ より $z''=t$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$z=\\dfrac{t^3}{6}+C_1t+C_2$。"
                                        },
                                        {
                                                "label": "④ 初期条件",
                                                "content": "$y(0)=C_2=0$。また $y'=e^t(z+z')$ なので $y'(0)=C_1=0$。"
                                        }
                                ],
                                "answer": "$y=\\dfrac{t^3}{6}e^t$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f5"
                ]
        },
        {
                "id": "pdf3_undetermined",
                "pattern": "課題 問題3 3.(3)(5): 未定係数法と共振",
                "variants": [
                        {
                                "q": "課題 問題3 3.(3): $y''+5y'+4y=18e^{2t}$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 同次解",
                                                "content": "$\\lambda^2+5\\lambda+4=(\\lambda+1)(\\lambda+4)$。$y_h=C_1e^{-t}+C_2e^{-4t}$。"
                                        },
                                        {
                                                "label": "② 特解の仮定",
                                                "content": "右辺が $18e^{2t}$ なので $y_p=Ae^{2t}$ とおく。"
                                        },
                                        {
                                                "label": "③ 代入",
                                                "content": "$y_p''+5y_p'+4y_p=(4+10+4)Ae^{2t}=18Ae^{2t}$。"
                                        },
                                        {
                                                "label": "④ 係数決定",
                                                "content": "$18A=18$ より $A=1$。"
                                        }
                                ],
                                "answer": "$y=C_1e^{-t}+C_2e^{-4t}+e^{2t}$"
                        },
                        {
                                "q": "課題 問題3 3.(5): $y''-4y'+4y=e^{2t}$ を解け。右辺が同次解と重なる。",
                                "steps": [
                                        {
                                                "label": "① 同次解",
                                                "content": "$\\lambda^2-4\\lambda+4=(\\lambda-2)^2$。$y_h=(C_1+C_2t)e^{2t}$。"
                                        },
                                        {
                                                "label": "② 共振の判断",
                                                "content": "右辺 $e^{2t}$ は重根の同次解と重なるので，特解は $Ae^{2t}$ でも $Ate^{2t}$ でも足りない。"
                                        },
                                        {
                                                "label": "③ 仮定",
                                                "content": "$y_p=At^2e^{2t}$ とおく。$(D-2)^2(e^{2t}At^2)=e^{2t}\\cdot 2A$。"
                                        },
                                        {
                                                "label": "④ 係数決定",
                                                "content": "$2Ae^{2t}=e^{2t}$ より $A=\\dfrac12$。"
                                        }
                                ],
                                "answer": "$y=(C_1+C_2t)e^{2t}+\\dfrac12t^2e^{2t}$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f3"
                ]
        },
        {
                "id": "ex68_extra",
                "pattern": "演習6・8追加: 比較用の二階非同次",
                "variants": [
                        {
                                "q": "演習追加: $y''-4y'+5y=e^{2t}$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 同次解",
                                                "content": "$\\lambda^2-4\\lambda+5=0$ の根は $2\\pm i$。$y_h=e^{2t}(C_1\\cos t+C_2\\sin t)$。"
                                        },
                                        {
                                                "label": "② 特解",
                                                "content": "右辺 $e^{2t}$ は同次解そのものではないので $y_p=Ae^{2t}$ とおく。"
                                        },
                                        {
                                                "label": "③ 代入",
                                                "content": "$(4-8+5)Ae^{2t}=Ae^{2t}$。右辺と比べて $A=1$。"
                                        },
                                        {
                                                "label": "④ 結論",
                                                "content": "複素根の実部が2でも，$e^{2t}$ 単体は同次解ではない点に注意。"
                                        }
                                ],
                                "answer": "$y=e^{2t}(C_1\\cos t+C_2\\sin t)+e^{2t}$"
                        },
                        {
                                "q": "演習追加: $y''+4y=8-4t$ を解け。未定係数法で求めよ。",
                                "steps": [
                                        {
                                                "label": "① 同次解",
                                                "content": "$\\lambda^2+4=0$ より $y_h=C_1\\cos2t+C_2\\sin2t$。"
                                        },
                                        {
                                                "label": "② 特解の仮定",
                                                "content": "右辺が一次式なので $y_p=at+b$ とおく。"
                                        },
                                        {
                                                "label": "③ 代入",
                                                "content": "$y_p''+4y_p=4at+4b$。これを $8-4t$ に合わせる。"
                                        },
                                        {
                                                "label": "④ 係数",
                                                "content": "$4a=-4$ より $a=-1$，$4b=8$ より $b=2$。"
                                        }
                                ],
                                "answer": "$y=C_1\\cos2t+C_2\\sin2t+2-t$"
                        },
                        {
                                "q": "演習追加: $t^2y''-2ty'+2y=\\dfrac{6}{t},\\ t>0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① オイラー型",
                                                "content": "同次部では $y=t^m$ とおく。$m(m-1)-2m+2=m^2-3m+2$。"
                                        },
                                        {
                                                "label": "② 同次解",
                                                "content": "$(m-1)(m-2)=0$ より $y_h=C_1t+C_2t^2$。"
                                        },
                                        {
                                                "label": "③ 特解",
                                                "content": "右辺が $6/t$ なので $y_p=A/t$ とおく。"
                                        },
                                        {
                                                "label": "④ 代入",
                                                "content": "$t^2(2A/t^3)-2t(-A/t^2)+2(A/t)=6A/t$。$6A/t=6/t$ より $A=1$。"
                                        }
                                ],
                                "answer": "$y=C_1t+C_2t^2+\\dfrac1t$"
                        }
                ],
                "formulaRefs": [
                        "f2",
                        "f3",
                        "f6"
                ]
        }
],
      quiz: [
        {
          q: "未定係数法で右辺が sin x のとき、cos x も一緒に仮定する理由は?",
          choices: ["見栄えのため", "微分でsinとcosが入れ替わるため", "任意定数を増やすため", "共振を防ぐため"],
          answer: 1,
          expl: "A sin xだけ仮定するとy'からcos xが出て係数比較が合わなくなる。必ずペアで仮定",
          sectionRef: 0
        },
        {
          q: "「共振」が起きるのはどんなとき?",
          choices: ["右辺が多項式のとき", "仮定した特殊解が斉次解に含まれるとき", "初期条件が2つあるとき", "判別式が負のとき"],
          answer: 1,
          expl: "仮定形が斉次解とかぶると代入で左辺が0になり係数が決まらない。x倍(重根ならx²倍)で回避",
          sectionRef: 1
        },
        {
          q: "右辺が tan x のとき未定係数法が使えない理由は?",
          choices: ["tan xは微分しても有限個の関数型に閉じないから", "tan xは連続だから", "特性方程式が解けないから", "斉次解が存在しないから"],
          answer: 0,
          expl: "未定係数法は「微分して同じ型に閉じる関数(多項式・e^ax・sin/cos)」専用。閉じない右辺は定数変化法",
          sectionRef: 2
        },
        {
          q: "オイラーの微分方程式を定数係数に変える置換は?",
          choices: ["x = e^t", "u = y/x", "u = y^(1-n)", "y = y₁ + 1/u"],
          answer: 0,
          expl: "x=e^t(t=ln x)。xの掛け算的スケールをtの足し算に変換すると係数が定数になる",
          sectionRef: 2
        }
      ]
    },
    // ================================================================
    // u6: 求積法(1)(2) 変数分離形・同次形・分数関数形
    // ================================================================
    {
      id: "u6",
      title: "求積法(1)(2) — 変数分離形・同次形・分数関数形の変換",
      weeks: "第10〜11週",
      priority: 3,
      sections: [
        {
          heading: "変数分離形 — 求積法の出発点",
          body: "<p>[[求積法]]とは式変形と積分だけで解を求める方法の総称で、その基本が[[変数分離形]] $y' = f(x)g(y)$。<b>xの成分とyの成分を左右に完全に分けて</b> $\\frac{dy}{g(y)} = f(x)dx$ とし、両辺を積分するだけ。荷物の仕分けと同じで、「x行き」と「y行き」に完全に分けられるかが判定基準。分けた後の積分で $\\int dy/y = \\ln|y|$ 型が頻出するので、u1の積分公式がそのまま効いてくる。積分後に $y$ について解けない場合は、$F(y)=G(x)+C$ の陰関数表示のままで解としてよい。</p>",
          svg: "<svg viewBox='0 0 400 360' xmlns='http://www.w3.org/2000/svg'><text x='200' y='22' text-anchor='middle' font-size='15' fill='var(--c-text)' font-weight='bold'>一階微分方程式の解法分岐マップ</text><rect x='115' y='36' width='170' height='36' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='200' y='59' text-anchor='middle' font-size='14' fill='var(--c-text)'>y&#39; = (式) を観察</text><line x1='200' y1='72' x2='90' y2='104' stroke='var(--c-accent)' stroke-width='2'/><line x1='200' y1='72' x2='200' y2='104' stroke='var(--c-accent)' stroke-width='2'/><line x1='200' y1='72' x2='320' y2='104' stroke='var(--c-accent)' stroke-width='2'/><rect x='20' y='104' width='140' height='52' rx='8' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='90' y='126' text-anchor='middle' font-size='13' fill='var(--c-text)'>f(x)g(y)に分けられる?</text><text x='90' y='144' text-anchor='middle' font-size='13' fill='var(--c-accent)'>→ 変数分離形</text><rect x='170' y='104' width='120' height='52' rx='8' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='230' y='126' text-anchor='middle' font-size='13' fill='var(--c-text)'>y/xだけの式?</text><text x='230' y='144' text-anchor='middle' font-size='13' fill='var(--c-accent)'>→ 同次形 u=y/x</text><rect x='300' y='104' width='90' height='52' rx='8' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='345' y='126' text-anchor='middle' font-size='13' fill='var(--c-text)'>y&#39;+Py=Q?</text><text x='345' y='144' text-anchor='middle' font-size='13' fill='var(--c-accent)'>→ 線形</text><line x1='230' y1='156' x2='230' y2='188' stroke='var(--c-accent)' stroke-width='2'/><rect x='120' y='188' width='220' height='52' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='230' y='210' text-anchor='middle' font-size='13' fill='var(--c-text)'>(ax+by+c)/(px+qy+r) の分数形は</text><text x='230' y='228' text-anchor='middle' font-size='13' fill='var(--c-accent)'>平行移動 or v=ax+by で上の形へ</text><line x1='90' y1='156' x2='90' y2='268' stroke='var(--c-accent)' stroke-width='2'/><line x1='230' y1='240' x2='200' y2='268' stroke='var(--c-accent)' stroke-width='2'/><rect x='40' y='268' width='320' height='40' rx='8' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><text x='200' y='293' text-anchor='middle' font-size='14' fill='var(--c-text)'>最終的にみんな「積分するだけ」の形になる</text><text x='200' y='340' text-anchor='middle' font-size='13' fill='var(--c-accent)'>どの経路でも同じ一般解にたどり着く(解の一意性)</text></svg>"
        },
        {
          heading: "同次形 — u=y/x で変数分離に持ち込む",
          body: "<p>$y' = f\\!\\left(\\frac{y}{x}\\right)$ のように<b>右辺が $y/x$ のかたまりだけ</b>で書ける形を[[同次形]]という(例: $y'=\\frac{x^2+y^2}{xy}$ は分母分子を $x^2$ で割ると $\\frac{1+(y/x)^2}{y/x}$)。$u = \\frac{y}{x}$ と置くと $y = ux$、$y' = u + xu'$ なので、方程式は $x\\frac{du}{dx} = f(u) - u$ という[[変数分離形]]に変わる。縮尺を変えても形が同じ図形のように、「比率 $y/x$ だけで決まる」構造を $u$ という1文字に圧縮するのがポイント。到達目標(3)の後半はこの型。</p>"
        },
        {
          heading: "分数関数形 — 平行移動と v=ax+by の二刀流",
          body: "<p>$y' = \\dfrac{ax+by+c}{px+qy+r}$ の形は定数 $c, r$ が邪魔で同次形にならない。対処は2通り。<b>(i) 2直線が交わる場合</b>: 交点 $(x_0, y_0)$ を求め、$X=x-x_0$, $Y=y-y_0$ と平行移動すると定数項が消えて[[同次形]]になる。<b>(ii) 分母分子の1次部分が平行($aq=bp$)な場合</b>: 交点がないので、共通のかたまり $v = ax+by$ を新変数にすると[[変数分離形]]になる。「まず交点を探す→なければ $v$ 置換」の順で判断する。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "変数分離形の解法",
          latex: "y' = f(x)g(y) \\;\\Rightarrow\\; \\int\\dfrac{dy}{g(y)} = \\int f(x)\\,dx + C",
          vars: [
            { sym: "f(x)", meaning: "xだけの因子", unit: "—" },
            { sym: "g(y)", meaning: "yだけの因子", unit: "—" }
          ],
          when: "右辺が「xの式×yの式」に分解できるとき。求積法の第一候補として必ず最初に疑う",
          intuition: "xとyを左右に仕分けして両辺積分。積分定数Cは片側に1個だけでよい",
          derivation: "dy/dx=f g を形式的に分数として扱い、g(y)で割ってdxを掛ける。g(y)=0になる定数解の存在にも注意",
          blank: "\\int\\dfrac{dy}{?} = \\int f(x)\\,dx + C",
          blankAnswer: "g(y)"
        },
        {
          id: "f2",
          name: "同次形の置換",
          latex: "y' = f\\!\\left(\\dfrac{y}{x}\\right) \\;\\xrightarrow{u=y/x}\\; x\\dfrac{du}{dx} = f(u) - u",
          vars: [
            { sym: "u", meaning: "y/x(新しい未知関数)", unit: "—" }
          ],
          when: "右辺がy/xのかたまりだけで書けるとき。分母分子が同じ次数の多項式のときに疑う",
          intuition: "y=uxと置くとy'=u+xu'。「比率」を変数にすると変数分離形に落ちる",
          derivation: "y=ux の積の微分から y'=u+xu'。これを f(u) と等しいと置いて u を移項",
          blank: "u = \\dfrac{?}{x}",
          blankAnswer: "y"
        },
        {
          id: "f3",
          name: "分数関数形(交点あり): 平行移動",
          latex: "y' = \\dfrac{ax+by+c}{px+qy+r} \\;\\xrightarrow{X=x-x_0,\\;Y=y-y_0}\\; \\dfrac{dY}{dX} = \\dfrac{aX+bY}{pX+qY}",
          vars: [
            { sym: "(x_0, y_0)", meaning: "2直線 ax+by+c=0, px+qy+r=0 の交点", unit: "—" }
          ],
          when: "分母分子が1次式の分数形で、2直線が交わる(aq≠bp)とき",
          intuition: "原点を交点までずらすと定数項が消え、きれいな同次形が現れる",
          derivation: "X, Yの世界では dY/dX = dy/dx。定数c, rが交点条件でちょうど消える",
          blank: "X = x - x_0, \\; Y = ?",
          blankAnswer: "y - y_0"
        },
        {
          id: "f4",
          name: "分数関数形(平行): v=ax+by の置換",
          latex: "aq = bp \\text{ のとき } v = ax+by \\;\\Rightarrow\\; \\dfrac{dv}{dx} = a + b\\,y' \\text{ で変数分離形へ}",
          vars: [
            { sym: "v", meaning: "共通の1次式 ax+by", unit: "—" }
          ],
          when: "分母分子の1次部分が平行(交点なし)のとき。例: y'=(x+y)/(x+y+2)",
          intuition: "分母も分子も同じかたまりvで書けるなら、vを主役にすれば1変数の式になる",
          derivation: "v=ax+byを微分して v'=a+by'。y'をvの式で表すと dv/dx=(vの式) の変数分離形",
          blank: "\\dfrac{dv}{dx} = a + b\\,?",
          blankAnswer: "y'"
        }
      ],
      selectQuiz: [
        {
          q: "y' = xy を解く。最初に選ぶ解法は?",
          choices: ["変数分離形: dy/y = x dx", "特性方程式", "未定係数法", "オイラーの方程式"],
          answer: 0,
          expl: "右辺がxの式×yの式に分解できる → 変数分離。dy/y=x dxとして両辺積分",
          formulaRef: "f1"
        },
        {
          q: "y' = (x² + y²)/(xy) を見た。どう攻める?",
          choices: ["分母分子をx²で割って u=y/x の同次形", "そのまま変数分離", "積分因子を掛ける", "特性方程式"],
          answer: 0,
          expl: "分母分子が2次の同次式 → y/xだけの式に書ける → 同次形。u=y/xで変数分離に落ちる",
          formulaRef: "f2"
        },
        {
          q: "y' = (x+y-1)/(x-y+1)。分母分子の直線は交わる。どうする?",
          choices: ["交点(0,1)へ平行移動して同次形に", "v=x+yと置く", "そのまま積分", "ベルヌイ型の変換"],
          answer: 0,
          expl: "交点がある分数形は平行移動X=x-x₀, Y=y-y₀で定数項を消してから同次形として解く",
          formulaRef: "f3"
        },
        {
          q: "y' = (x+y)/(x+y+2)。分母分子の1次部分が同じ(平行)。どうする?",
          choices: ["v=x+yと置いて変数分離形に", "交点へ平行移動", "u=y/x", "特性方程式"],
          answer: 0,
          expl: "平行なら交点がないので平行移動は不可。共通のかたまりv=x+yを新変数にする",
          formulaRef: "f4"
        }
      ],
      problems: [
        {
                "id": "pdf4_separable",
                "pattern": "課題 問題4 1.(2)(4)(6)(7)(9): 変数分離",
                "variants": [
                        {
                                "q": "課題 問題4 1.(2): $\\dfrac{dy}{dt}=(t^2+1)y$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 分離",
                                                "content": "$\\dfrac{dy}{y}=(t^2+1)dt$。"
                                        },
                                        {
                                                "label": "② 積分",
                                                "content": "$\\log|y|=\\dfrac{t^3}{3}+t+C$。"
                                        },
                                        {
                                                "label": "③ 指数化",
                                                "content": "$y=C\\exp\\left(\\dfrac{t^3}{3}+t\\right)$。"
                                        }
                                ],
                                "answer": "$y=Ce^{t^3/3+t}$"
                        },
                        {
                                "q": "課題 問題4 1.(4): $\\dfrac{dy}{dt}=t(y^2+1)$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 分離",
                                                "content": "$\\dfrac{dy}{y^2+1}=t\\,dt$。"
                                        },
                                        {
                                                "label": "② 積分",
                                                "content": "$\\tan^{-1}y=\\dfrac{t^2}{2}+C$。"
                                        },
                                        {
                                                "label": "③ 解く",
                                                "content": "$y=\\tan\\left(\\dfrac{t^2}{2}+C\\right)$。"
                                        }
                                ],
                                "answer": "$y=\\tan\\left(\\dfrac{t^2}{2}+C\\right)$"
                        },
                        {
                                "q": "課題 問題4 1.(6): $\\dfrac{dy}{dt}+\\dfrac{t}{y}=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 分離",
                                                "content": "$\\dfrac{dy}{dt}=-\\dfrac{t}{y}$ なので $y\\,dy=-t\\,dt$。"
                                        },
                                        {
                                                "label": "② 積分",
                                                "content": "$\\dfrac{y^2}{2}=-\\dfrac{t^2}{2}+C$。"
                                        },
                                        {
                                                "label": "③ 整理",
                                                "content": "$y^2+t^2=C$。円の族になる。"
                                        }
                                ],
                                "answer": "$y^2+t^2=C$"
                        },
                        {
                                "q": "課題 問題4 1.(7): $\\dfrac{dy}{dt}=e^{t+y}$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 分離",
                                                "content": "$e^{-y}dy=e^tdt$。"
                                        },
                                        {
                                                "label": "② 注意",
                                                "content": "$\\int e^{-y}dy=-e^{-y}$。符号を落としやすい。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$-e^{-y}=e^t+C$。"
                                        },
                                        {
                                                "label": "④ 整理",
                                                "content": "定数を置き直して $e^{-y}+e^t=C$。"
                                        }
                                ],
                                "answer": "$e^{-y}+e^t=C$"
                        },
                        {
                                "q": "課題 問題4 1.(9): $\\dfrac{dy}{dt}=\\dfrac{y}{t(y-2)}$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 分離",
                                                "content": "$\\dfrac{y-2}{y}dy=\\dfrac{dt}{t}$。"
                                        },
                                        {
                                                "label": "② 左辺",
                                                "content": "$\\dfrac{y-2}{y}=1-\\dfrac{2}{y}$。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$y-2\\log|y|=\\log|t|+C$。"
                                        },
                                        {
                                                "label": "④ 形",
                                                "content": "この問題は陽に $y=$ と解くより，陰関数形で答えるのが自然。"
                                        }
                                ],
                                "answer": "$y-2\\log|y|=\\log|t|+C$"
                        }
                ],
                "formulaRefs": [
                        "f1"
                ]
        }
],
      quiz: [
        {
          q: "変数分離形かどうかの判定基準は?",
          choices: ["右辺が(xだけの式)×(yだけの式)に分解できる", "右辺が多項式", "yの係数が定数", "二階以下である"],
          answer: 0,
          expl: "f(x)g(y)に分けられれば変数分離形。dy/g(y)=f(x)dxにして両辺積分",
          sectionRef: 0
        },
        {
          q: "同次形で u=y/x と置換したとき y' は何になる?",
          choices: ["u'", "u + xu'", "xu'", "u/x"],
          answer: 1,
          expl: "y=uxの積の微分。y'=u+xu'。この形を覚えていないと置換が進まない",
          sectionRef: 1
        },
        {
          q: "分数関数形で「平行移動」が使えないのはどんなとき?",
          choices: ["分母分子の1次部分が平行で交点がないとき", "定数項が大きいとき", "xが負のとき", "常に使える"],
          answer: 0,
          expl: "aq=bpで2直線が平行だと交点がない。このときはv=ax+byの置換で変数分離形にする",
          sectionRef: 2
        },
        {
          q: "積分した結果 y について解けない場合はどうする?",
          choices: ["解なしと答える", "F(y)=G(x)+C の陰関数表示のまま解とする", "微分し直す", "Cを0とする"],
          answer: 1,
          expl: "陰関数表示も立派な一般解。無理にyについて解く必要はない",
          sectionRef: 0
        }
      ]
    },
    // ================================================================
    // u7: 求積法(3)(4) 完全形・総括
    // ================================================================
    {
      id: "u7",
      title: "求積法(3)(4) — 完全形と総括",
      weeks: "第12〜14週",
      priority: 2,
      sections: [
        {
          heading: "完全形 — 全微分の「復元」問題",
          body: "<p>$P(x,y)dx + Q(x,y)dy = 0$ の形で、ある関数 $F(x,y)$ の全微分 $dF = \\frac{\\partial F}{\\partial x}dx + \\frac{\\partial F}{\\partial y}dy$ にちょうど一致するものを[[完全形]]という。このとき解は <b>$F(x,y) = C$</b>(等高線)で終わり。地形図に例えると、各地点の傾き($P$と$Q$)の情報から山の形 $F$ を復元し、「同じ標高の線」が解曲線になる。完全形かどうかは<b>判定条件 $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$</b> で確認できる($F_{xy}=F_{yx}$ に由来)。</p>",
          svg: "<svg viewBox='0 0 400 310' xmlns='http://www.w3.org/2000/svg'><text x='200' y='22' text-anchor='middle' font-size='15' fill='var(--c-text)' font-weight='bold'>完全形の解法フロー</text><rect x='90' y='36' width='220' height='40' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='200' y='61' text-anchor='middle' font-size='14' fill='var(--c-text)'>P dx + Q dy = 0 の形にする</text><line x1='200' y1='76' x2='200' y2='96' stroke='var(--c-accent)' stroke-width='2'/><rect x='70' y='96' width='260' height='44' rx='8' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><text x='200' y='114' text-anchor='middle' font-size='14' fill='var(--c-text)'>判定: ∂P/∂y = ∂Q/∂x ?</text><text x='200' y='132' text-anchor='middle' font-size='13' fill='var(--c-accent)'>Yes → 完全形 / No → 積分因子を検討</text><line x1='200' y1='140' x2='200' y2='160' stroke='var(--c-accent)' stroke-width='2'/><rect x='70' y='160' width='260' height='44' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='200' y='178' text-anchor='middle' font-size='14' fill='var(--c-text)'>F = ∫P dx + g(y) と仮に積分</text><text x='200' y='196' text-anchor='middle' font-size='13' fill='var(--c-text)'>(yは定数扱い、g(y)は積分の「定数」)</text><line x1='200' y1='204' x2='200' y2='224' stroke='var(--c-accent)' stroke-width='2'/><rect x='70' y='224' width='260' height='44' rx='8' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='200' y='242' text-anchor='middle' font-size='14' fill='var(--c-text)'>∂F/∂y = Q から g&#39;(y) を決めて積分</text><text x='200' y='260' text-anchor='middle' font-size='13' fill='var(--c-accent)'>解: F(x, y) = C</text><text x='200' y='296' text-anchor='middle' font-size='13' fill='var(--c-text)'>イメージ: 傾きの情報から山の形Fを復元し、等高線が解</text></svg>"
        },
        {
          heading: "解法の全体総括 — どの道でも同じ山頂へ",
          body: "<p>最終回で強調されるのは2点。<b>(1) 解の一意性</b>: 初期条件を与えれば解は1つに決まる。<b>(2) 複数の手法で解いても同じ解になる</b>: たとえば $y'+2y=0$ は[[変数分離形]]としても一階[[線形]]の公式でも解け、答えはどちらも $Ce^{-2x}$。試験では「別解で検算する」武器になる。判定の優先順位は「①変数分離できる? ②[[同次形]]? ③線形? ④[[完全形]]?」の順に見るのが実戦的。完全形でない場合も、[[積分因子]]を掛けて完全形に直せることがある(一階線形の $e^{\\int P dx}$ はその代表例)。</p>"
        }
      ],
      formulas: [
        {
          id: "f1",
          name: "完全形の判定条件",
          latex: "P\\,dx + Q\\,dy = 0 \\text{ が完全形} \\iff \\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}",
          vars: [
            { sym: "P(x,y)", meaning: "dxの係数", unit: "—" },
            { sym: "Q(x,y)", meaning: "dyの係数", unit: "—" }
          ],
          when: "P dx+Q dy=0 の形を見たら最初に必ずこの判定をする",
          intuition: "F_xy=F_yx(偏微分の順序交換)が成り立つための整合性チェック",
          derivation: "完全形ならP=F_x, Q=F_y。P_y=F_xy, Q_x=F_yx で両者は一致するはず",
          blank: "\\dfrac{\\partial P}{\\partial y} = ?",
          blankAnswer: "\\dfrac{\\partial Q}{\\partial x}"
        },
        {
          id: "f2",
          name: "完全形の解法",
          latex: "F(x,y) = \\int P\\,dx + g(y), \\quad \\dfrac{\\partial F}{\\partial y} = Q \\text{ から } g(y) \\text{ を決定} \\;\\Rightarrow\\; F(x,y) = C",
          vars: [
            { sym: "F(x,y)", meaning: "ポテンシャル関数(復元したい山の形)", unit: "—" },
            { sym: "g(y)", meaning: "xで積分したときの「定数」(yの関数)", unit: "—" }
          ],
          when: "判定条件をパスした後の実行手順。解は F=C の陰関数表示",
          intuition: "Pをxで積分→足りないyの成分をQと見比べて補う。2方向の情報から山を復元",
          derivation: "F_x=P を満たすFの候補が∫P dx+g(y)。g'(y)はF_y=Qとの比較で一意に決まる",
          blank: "F(x,y) = \\int P\\,dx + ?",
          blankAnswer: "g(y)"
        },
        {
          id: "f3",
          name: "積分因子による完全形化",
          latex: "\\mu(P\\,dx + Q\\,dy) = 0 \\text{ が完全形になる } \\mu \\text{ を探す}",
          vars: [
            { sym: "\\mu", meaning: "積分因子(x だけ、または y だけの関数を試す)", unit: "—" }
          ],
          when: "判定条件が不成立のとき。(P_y-Q_x)/Q がxだけの関数なら μ=e^(∫(P_y-Q_x)/Q dx)",
          intuition: "一階線形のe^(∫Pdx)と同じ発想。掛け算1つで「積分できる形」に化ける",
          derivation: "一階線形 y'+Py=Q を (Py-Q)dx+dy=0 と見てμ=e^(∫Pdx)を掛けると完全形になる",
          blank: "? \\,(P\\,dx + Q\\,dy) = 0",
          blankAnswer: "\\mu"
        }
      ],
      selectQuiz: [
        {
          q: "(2xy+3x²)dx + (x²+2y)dy = 0 を見た。最初にやることは?",
          choices: ["∂P/∂y と ∂Q/∂x を比べる(完全形の判定)", "u=y/xと置換", "特性方程式", "両辺をyで割る"],
          answer: 0,
          expl: "P dx+Q dy=0の形はまず完全形判定。P_y=2x=Q_xで完全形と分かる",
          formulaRef: "f1"
        },
        {
          q: "完全形と確認できた。次の手順は?",
          choices: ["F=∫P dx+g(y) と積分し、F_y=Q で g を決める", "特性方程式を解く", "定数変化法", "x=e^tと置換"],
          answer: 0,
          expl: "Pをxで積分(yは定数扱い)し、足りないy成分をQとの比較で補う。解はF=C",
          formulaRef: "f2"
        },
        {
          q: "判定条件が成り立たなかった。あきらめる前に試すことは?",
          choices: ["積分因子μを掛けて完全形にできないか調べる", "解なしと答える", "二階に上げる", "初期条件を変える"],
          answer: 0,
          expl: "μ(xだけ or yだけの関数)を掛けると完全形になる場合がある。一階線形はその代表例",
          formulaRef: "f3"
        }
      ],
      problems: [
        {
                "id": "pdf4_homogeneous_exact",
                "pattern": "課題 問題4 2.(4), 3.(2): 同次形と完全形",
                "variants": [
                        {
                                "q": "課題 問題4 2.(4): $\\dfrac{dy}{dt}=\\dfrac{2t+y}{t+2y}$ を解け。$u=y/t$ とおく。",
                                "steps": [
                                        {
                                                "label": "① 同次形の確認",
                                                "content": "分子分母を $t$ で割ると $\\dfrac{2+u}{1+2u}$。$u=y/t$ が使える。"
                                        },
                                        {
                                                "label": "② 置換",
                                                "content": "$y=ut$ より $y'=u+tu'$。"
                                        },
                                        {
                                                "label": "③ 分離",
                                                "content": "$tu'=\\dfrac{2+u}{1+2u}-u=\\dfrac{2(1-u^2)}{1+2u}$。"
                                        },
                                        {
                                                "label": "④ 積分",
                                                "content": "$\\dfrac{1+2u}{2(1-u^2)}du=\\dfrac{dt}{t}$。部分分数で $-\\dfrac34\\log|1-u|-\\dfrac14\\log|1+u|=\\log|t|+C$。"
                                        },
                                        {
                                                "label": "⑤ 戻す",
                                                "content": "$u=y/t$ を代入して陰関数形で表す。"
                                        }
                                ],
                                "answer": "$-\\dfrac34\\log\\left|1-\\dfrac{y}{t}\\right|-\\dfrac14\\log\\left|1+\\dfrac{y}{t}\\right|=\\log|t|+C$"
                        },
                        {
                                "q": "課題 問題4 3.(2): $(x^2+y)dx+(x+e^y)dy=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 完全形判定",
                                                "content": "$P=x^2+y$, $Q=x+e^y$。$P_y=1$, $Q_x=1$ なので完全形。"
                                        },
                                        {
                                                "label": "② ポテンシャル",
                                                "content": "$F_x=P$ より $F=\\dfrac{x^3}{3}+xy+\\phi(y)$。"
                                        },
                                        {
                                                "label": "③ yで微分",
                                                "content": "$F_y=x+\\phi'(y)$。これが $Q=x+e^y$ と一致するので $\\phi'(y)=e^y$。"
                                        },
                                        {
                                                "label": "④ 結論",
                                                "content": "$\\phi(y)=e^y$。したがって $F(x,y)=C$。"
                                        }
                                ],
                                "answer": "$\\dfrac{x^3}{3}+xy+e^y=C$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f2"
                ]
        },
        {
                "id": "pdf4_transform_ivp",
                "pattern": "課題 問題4 4.(1)(3): 置換で変数分離へ",
                "variants": [
                        {
                                "q": "課題 問題4 4.(1): $y'+t^2y^2=t^2,\\ y(0)=0$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 分離形へ",
                                                "content": "$y'=t^2(1-y^2)$。よって $\\dfrac{dy}{1-y^2}=t^2dt$。"
                                        },
                                        {
                                                "label": "② 積分",
                                                "content": "$\\int \\dfrac{dy}{1-y^2}=\\operatorname{artanh}y$。右辺は $t^3/3+C$。"
                                        },
                                        {
                                                "label": "③ 初期条件",
                                                "content": "$y(0)=0$ より $C=0$。"
                                        },
                                        {
                                                "label": "④ 解く",
                                                "content": "$\\operatorname{artanh}y=t^3/3$ なので $y=\\tanh(t^3/3)$。"
                                        }
                                ],
                                "answer": "$y=\\tanh\\left(\\dfrac{t^3}{3}\\right)$"
                        },
                        {
                                "q": "課題 問題4 4.(3): $y'=(t+y)^2,\\ y(0)=1$ を解け。$x=t+y$ とおく。",
                                "steps": [
                                        {
                                                "label": "① 置換",
                                                "content": "$x=t+y$ とおくと $x'=1+y'$。"
                                        },
                                        {
                                                "label": "② xの方程式",
                                                "content": "$y'=x^2$ なので $x'=1+x^2$。"
                                        },
                                        {
                                                "label": "③ 分離",
                                                "content": "$\\dfrac{dx}{1+x^2}=dt$。よって $\\tan^{-1}x=t+C$。"
                                        },
                                        {
                                                "label": "④ 初期条件",
                                                "content": "$t=0$ で $x=0+y(0)=1$。したがって $C=\\pi/4$。"
                                        },
                                        {
                                                "label": "⑤ 戻す",
                                                "content": "$x=\\tan(t+\\pi/4)$, $y=x-t$。"
                                        }
                                ],
                                "answer": "$y=\\tan\\left(t+\\dfrac{\\pi}{4}\\right)-t$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f2"
                ]
        },
        {
                "id": "ex91112_extra",
                "pattern": "演習9・11・12追加: 同次形の比較問題",
                "variants": [
                        {
                                "q": "演習追加: $\\dfrac{dy}{dt}=\\dfrac{y^2-t^2}{2ty}$ を解け。$u=y/t$ とおく。",
                                "steps": [
                                        {
                                                "label": "① 同次形",
                                                "content": "$y=ut$ とおくと $y'=u+tu'$。右辺は $\\dfrac{u^2-1}{2u}$。"
                                        },
                                        {
                                                "label": "② uの方程式",
                                                "content": "$tu'=\\dfrac{u^2-1}{2u}-u=-\\dfrac{u^2+1}{2u}$。"
                                        },
                                        {
                                                "label": "③ 分離",
                                                "content": "$\\dfrac{2u}{u^2+1}du=-\\dfrac{dt}{t}$。"
                                        },
                                        {
                                                "label": "④ 積分",
                                                "content": "$\\log(u^2+1)=-\\log|t|+C$。"
                                        },
                                        {
                                                "label": "⑤ 戻す",
                                                "content": "$u=y/t$ より $t\\left(1+\\dfrac{y^2}{t^2}\\right)=C$。"
                                        }
                                ],
                                "answer": "$\\dfrac{y^2+t^2}{t}=C$"
                        },
                        {
                                "q": "演習追加: $\\dfrac{dy}{dt}=\\dfrac{2t(y^3+1)}{3y^2}$ を解け。",
                                "steps": [
                                        {
                                                "label": "① 左へ寄せる",
                                                "content": "$\\dfrac{3y^2}{y^3+1}dy=2t\\,dt$。"
                                        },
                                        {
                                                "label": "② f'/f型",
                                                "content": "左辺は $f(y)=y^3+1$ の $f'/f$ 型。"
                                        },
                                        {
                                                "label": "③ 積分",
                                                "content": "$\\log|y^3+1|=t^2+C$。"
                                        },
                                        {
                                                "label": "④ 形",
                                                "content": "$y^3+1=Ce^{t^2}$ とまとめてもよい。"
                                        }
                                ],
                                "answer": "$\\log|y^3+1|=t^2+C$"
                        }
                ],
                "formulaRefs": [
                        "f1",
                        "f2"
                ]
        }
],
      quiz: [
        {
          q: "完全形の判定条件は?",
          choices: ["∂P/∂x = ∂Q/∂y", "∂P/∂y = ∂Q/∂x", "P = Q", "P_x + Q_y = 0"],
          answer: 1,
          expl: "たすき掛けの向きに注意。Pをyで、Qをxで偏微分して比べる。F_xy=F_yxが由来",
          sectionRef: 0
        },
        {
          q: "完全形の解 F(x,y)=C の幾何学的なイメージは?",
          choices: ["山の斜面", "山の等高線", "山の頂上", "谷底の一点"],
          answer: 1,
          expl: "Fは傾き情報(P,Q)から復元した「山の形」。解曲線はその等高線に沿って進む",
          sectionRef: 0
        },
        {
          q: "「複数の手法で解いても同じ解が得られる」ことの試験での使い道は?",
          choices: ["時間の無駄なので使わない", "別解で解き直して検算に使う", "解が2種類あると答える", "採点者へのアピール"],
          answer: 1,
          expl: "総括で強調されるポイント。変数分離でも線形公式でも同じ答えになるはず=強力な検算手段",
          sectionRef: 1
        },
        {
          q: "F=∫P dx+g(y) の g(y) はなぜ「yの関数」なのか?",
          choices: ["xで積分するとき、yだけの項は微分で消えるため定数の代わりになる", "計算を難しくするため", "g(y)は常に0だから", "Qと等しいから"],
          answer: 0,
          expl: "xでの偏微分ではyだけの関数は0になる。つまり積分定数の役割をyの関数g(y)が担う",
          sectionRef: 0
        }
      ]
    }
  ]
};
