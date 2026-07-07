window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA["kozo2"] = {
  "id": "kozo2",
  "name": "構造力学2(再)",
  "teacher": "葛 漢彬",
  "year": "2年・必修",
  "examInfo": "定期試験70% / レポート30%",
  "examTips": "到達目標より、曲げ応力・せん断応力の計算、たわみの計算(微分方程式・モールの定理・共役はり法)、不静定構造の解法が最重要。特に「はりのたわみ公式を使った数値計算」と「σ=M/W の曲げ応力計算」は毎年の定番。電卓必携なので、単位換算(kN·m→N·mm)を確実に。 教科書4章のねじり部材も、T=GJ dφ/dx、φ=TL/GJ、τ=Tr/Jの3式を押さえると短時間で復習できる。",
  "glossary": [
    {
      "term": "応力",
      "reading": "おうりょく",
      "def": "部材内部の単位面積あたりに働く力。N/mm²(=MPa)で表す。外力に抵抗して材料内部に生じる「力の密度」のこと。"
    },
    {
      "term": "ひずみ",
      "reading": "ひずみ",
      "def": "変形量を元の長さで割った無次元量。ε=ΔL/L。材料が「どれだけの割合で伸び縮みしたか」を表す。"
    },
    {
      "term": "フックの法則",
      "reading": "ふっくのほうそく",
      "def": "応力とひずみが比例する関係 σ=Eε。弾性範囲内の材料で成り立つ、構造力学の最重要法則。"
    },
    {
      "term": "ヤング率",
      "reading": "やんぐりつ",
      "def": "弾性係数E。応力とひずみの比例定数で、材料の硬さ(変形しにくさ)を表す。鋼は約200GPa=2.0×10⁵N/mm²。"
    },
    {
      "term": "軸力",
      "reading": "じくりょく",
      "def": "部材の軸方向(長さ方向)に働く断面力N。引張を正とすることが多い。柱やトラス部材の主要な断面力。"
    },
    {
      "term": "曲げモーメント",
      "reading": "まげもーめんと",
      "def": "部材を曲げようとする断面力M。はりの設計で最も重要な断面力で、曲げ応力の原因になる。"
    },
    {
      "term": "せん断力",
      "reading": "せんだんりょく",
      "def": "部材を断面に沿ってずらそうとする断面力S(またはQ)。曲げモーメントの変化率 dM/dx に等しい。"
    },
    {
      "term": "たわみ",
      "reading": "たわみ",
      "def": "はりが荷重を受けて鉛直方向に変位する量v。橋の設計では、たわみが大きすぎると使用上の支障が出るため制限される。"
    },
    {
      "term": "たわみ角",
      "reading": "たわみかく",
      "def": "たわみ曲線の接線の傾きθ=dv/dx。はりの各点で断面がどれだけ回転したかを表す。"
    },
    {
      "term": "曲げ剛性",
      "reading": "まげごうせい",
      "def": "EI(ヤング率×断面二次モーメント)。はりの曲がりにくさを表す量で、たわみ公式の分母に必ず登場する。"
    },
    {
      "term": "中立軸",
      "reading": "ちゅうりつじく",
      "def": "曲げを受ける断面内で、伸びも縮みもしない(応力ゼロの)軸。断面の図心を通る。この軸から離れるほど曲げ応力は大きくなる。"
    },
    {
      "term": "断面二次モーメント",
      "reading": "だんめんにじもーめんと",
      "def": "断面の曲げにくさを表す幾何学量I(mm⁴)。中立軸から遠くに面積があるほど大きい。長方形ならbh³/12。"
    },
    {
      "term": "断面係数",
      "reading": "だんめんけいすう",
      "def": "W=I/y_max(mm³)。最大曲げ応力を σ=M/W で一発計算できる便利な量。長方形ならbh²/6。"
    },
    {
      "term": "断面一次モーメント",
      "reading": "だんめんいちじもーめんと",
      "def": "Q=∫y dA(mm³)。せん断応力の式 τ=SQ/(Ib) に登場。着目位置より外側の面積×図心距離で計算する。"
    },
    {
      "term": "曲げ応力",
      "reading": "まげおうりょく",
      "def": "曲げモーメントによって断面に生じる垂直応力σ。中立軸でゼロ、縁で最大となる直線分布(三角形分布)。"
    },
    {
      "term": "せん断応力",
      "reading": "せんだんおうりょく",
      "def": "せん断力によって断面に生じるずれ方向の応力τ。曲げ応力と逆で、縁でゼロ・中立軸で最大の放物線分布になる。"
    },
    {
      "term": "静定構造",
      "reading": "せいていこうぞう",
      "def": "力のつりあい条件式(ΣH=0, ΣV=0, ΣM=0)だけで反力と断面力が全部決まる構造。"
    },
    {
      "term": "不静定構造",
      "reading": "ふせいていこうぞう",
      "def": "つりあい条件だけでは反力・断面力が決まらない構造。未知数が式より多いため、変形の条件(変位適合条件)を追加して解く。"
    },
    {
      "term": "変位適合条件",
      "reading": "へんいてきごうじょうけん",
      "def": "「支点では変位がゼロ」「部材はつながったまま」など、変形が満たすべき幾何学的条件。不静定構造を解く鍵になる。"
    },
    {
      "term": "モールの定理",
      "reading": "もーるのていり",
      "def": "M/EI を仮想の荷重(弾性荷重)とみなして載荷すると、そのせん断力がたわみ角、曲げモーメントがたわみに一致するという定理。"
    },
    {
      "term": "弾性荷重",
      "reading": "だんせいかじゅう",
      "def": "モールの定理・共役はり法で使う仮想の分布荷重 w*=M/EI。曲げモーメント図をEIで割った形の荷重。"
    },
    {
      "term": "共役はり",
      "reading": "きょうやくばり",
      "def": "モールの定理を使うために支点条件を変換した仮想のはり。固定端⇔自由端、中間支点⇔中間ヒンジのように入れ替える。"
    },
    {
      "term": "断面の核",
      "reading": "だんめんのかく",
      "def": "圧縮力の作用点がこの範囲内にあれば断面に引張応力が生じない、という断面内の領域。長方形断面では中央のひし形(縁からb/6)。"
    },
    {
      "term": "偏心荷重",
      "reading": "へんしんかじゅう",
      "def": "断面の図心からずれた位置に作用する軸力。軸力N＋曲げモーメントM=N·e と等価になり、組合せ応力が生じる。"
    },
    {
      "term": "縁応力",
      "reading": "えんおうりょく",
      "def": "断面の上下端(縁)に生じる応力。曲げ応力は縁で最大になるため、設計ではまず縁応力を照査する。"
    },
    {
      "term": "支点反力",
      "reading": "してんはんりょく",
      "def": "支点が構造物を支えるために発生する力。ピン支点は水平・鉛直2成分、ローラーは1成分、固定端は3成分をもつ。"
    },
    {
      "term": "片持ちばり",
      "reading": "かたもちばり",
      "def": "一端が固定端、他端が自由端のはり。バルコニーや看板の腕のような構造。先端のたわみが最大になる。"
    },
    {
      "term": "単純ばり",
      "reading": "たんじゅんばり",
      "def": "一端ピン・他端ローラーで支えられた最も基本的なはり。多くのたわみ公式・応力公式の出発点。"
    },
    {
      "term": "ねじりモーメント",
      "reading": "ねじりもーめんと",
      "def": "部材軸まわりに部材をねじろうとする断面力。記号Tで表し、トルクとも呼ばれる。"
    },
    {
      "term": "ねじり角",
      "reading": "ねじりかく",
      "def": "部材端や断面が軸まわりに回転した角度。記号φで表し、単位はrad。"
    },
    {
      "term": "せん断弾性係数",
      "reading": "せんだんだんせいけいすう",
      "def": "せん断応力とせん断ひずみの比例定数G。ヤング率Eのせん断版で、ねじり剛性に入る。"
    },
    {
      "term": "極断面二次モーメント",
      "reading": "きょくだんめんにじもーめんと",
      "def": "円形断面のねじれにくさを表す断面性能J。中立軸ではなく中心からの距離rの2乗で面積を足し合わせる。"
    },
    {
      "term": "ねじり剛性",
      "reading": "ねじりごうせい",
      "def": "GJのこと。せん断弾性係数Gと極断面二次モーメントJの積で、部材のねじれにくさを表す。"
    },
    {
      "term": "トルク",
      "reading": "とるく",
      "def": "軸まわりの回転作用。構造力学ではねじりモーメントTとして扱う。"
    }
  ],
  "units": [
    {
      "id": "u1",
      "title": "復習:静定構造の反力・断面力と部材の分類",
      "weeks": "第1〜2週",
      "priority": 1,
      "sections": [
        {
          "heading": "構造力学2で何を学ぶか",
          "body": "<p>構造力学1では[[静定構造]]の[[支点反力]]と断面力([[軸力]]・[[せん断力]]・[[曲げモーメント]])の求め方を学んだ。構造力学2はその続きで、<b>断面力が部材内部にどんな応力を生み、部材がどれだけ変形するか</b>を計算する。橋を設計するとき「壊れないか(応力)」と「たわみすぎないか(変形)」の両方を確認する必要があり、本科目はその計算技術そのものである。健康診断でいえば、構造力学1が「体にかかる負担の把握」、構造力学2が「内臓への影響の診断」にあたる。</p>",
          "svg": "<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='120' x2='340' y2='120' stroke='var(--c-text)' stroke-width='4'/><polygon points='60,120 48,145 72,145' fill='none' stroke='var(--c-line)' stroke-width='2'/><circle cx='340' cy='132' r='9' fill='none' stroke='var(--c-line)' stroke-width='2'/><line x1='325' y1='145' x2='355' y2='145' stroke='var(--c-line)' stroke-width='2'/><line x1='200' y1='60' x2='200' y2='112' stroke='var(--c-accent)' stroke-width='3' marker-end='url(#a1)'/><defs><marker id='a1' markerWidth='10' markerHeight='10' refX='5' refY='8' orient='auto'><path d='M0,0 L5,8 L10,0' fill='var(--c-accent)'/></marker></defs><text x='208' y='70' font-size='16' fill='var(--c-accent)'>P</text><path d='M60,120 Q200,175 340,120' fill='none' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='6 4'/><text x='150' y='195' font-size='15' fill='var(--c-accent)'>たわみ(変形)を求める</text><text x='90' y='50' font-size='15' fill='var(--c-text)'>単純ばり:反力→断面力→応力・変形</text></svg>"
        },
        {
          "heading": "応力とひずみ:材料内部の「力の密度」と「変形の割合」",
          "body": "<p>[[応力]]σは断面1mm²あたりに働く力で、$\\sigma = N/A$ で求める。同じ100kNでも細い棒ほど応力は大きい。満員電車で同じ人数でも狭い車両ほど「圧」が高いのと同じで、力そのものより<b>面積あたりの力</b>が材料の限界を決める。一方[[ひずみ]]εは変形量を元の長さで割った割合 $\\varepsilon = \\Delta L / L$ で、単位はない。そして弾性範囲では両者が比例するのが[[フックの法則]] $\\sigma = E\\varepsilon$ であり、比例定数Eが[[ヤング率]]である。鋼はE=200GPaと非常に硬い。</p>"
        },
        {
          "heading": "断面力による部材の分類",
          "body": "<p>部材は主にどの断面力を受けるかで分類される。<b>軸力部材</b>は[[軸力]]N(引張・圧縮)が支配的な部材でトラスの弦材や柱が代表例。<b>曲げ部材</b>は[[曲げモーメント]]Mと[[せん断力]]Sを受ける部材で、はりが代表例。<b>ねじり部材</b>はねじりモーメントを受ける。本科目は第3〜5週で軸力部材、第6週以降で曲げ部材を扱う。断面力図を正しく描けることが全ての前提なので、M図・S図の復習は必須。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "力のつりあい条件",
          "latex": "\\sum H = 0, \\quad \\sum V = 0, \\quad \\sum M = 0",
          "vars": [
            {
              "sym": "H",
              "meaning": "水平方向の力",
              "unit": "kN"
            },
            {
              "sym": "V",
              "meaning": "鉛直方向の力",
              "unit": "kN"
            },
            {
              "sym": "M",
              "meaning": "任意点まわりのモーメント",
              "unit": "kN·m"
            }
          ],
          "when": "反力を求めるとき必ず最初に使う。静定構造ならこの3式だけで反力が全部決まる",
          "intuition": "動かない構造物は、押す力も回す力も完全に打ち消し合っている",
          "derivation": "静止している物体に働く力の合力と合モーメントはゼロ、という力学の大原則",
          "blank": "\\sum H = 0, \\quad \\sum V = 0, \\quad \\sum ? = 0",
          "blankAnswer": "M"
        },
        {
          "id": "f2",
          "name": "垂直応力の定義",
          "latex": "\\sigma = \\dfrac{N}{A}",
          "vars": [
            {
              "sym": "\\sigma",
              "meaning": "垂直応力",
              "unit": "N/mm²"
            },
            {
              "sym": "N",
              "meaning": "軸力",
              "unit": "N"
            },
            {
              "sym": "A",
              "meaning": "断面積",
              "unit": "mm²"
            }
          ],
          "when": "軸力と断面積が与えられて応力を求めるとき。強度照査の第一歩",
          "intuition": "力を面積で割った「力の密度」。細い棒ほど同じ力でも厳しい",
          "derivation": "断面に一様に力が分布すると仮定すれば、単位面積あたりの力=N/A",
          "blank": "\\sigma = \\dfrac{N}{?}",
          "blankAnswer": "A"
        },
        {
          "id": "f3",
          "name": "ひずみの定義",
          "latex": "\\varepsilon = \\dfrac{\\Delta L}{L}",
          "vars": [
            {
              "sym": "\\varepsilon",
              "meaning": "ひずみ",
              "unit": "無次元"
            },
            {
              "sym": "\\Delta L",
              "meaning": "伸び(変形量)",
              "unit": "mm"
            },
            {
              "sym": "L",
              "meaning": "元の長さ",
              "unit": "mm"
            }
          ],
          "when": "変形量から材料の状態を評価するとき。フックの法則とセットで使う",
          "intuition": "「何mm伸びたか」でなく「元の何%伸びたか」。長い棒ほど同じ伸びでも余裕がある",
          "derivation": "定義式。変形を長さで正規化して材料固有の量にしたもの",
          "blank": "\\varepsilon = \\dfrac{?}{L}",
          "blankAnswer": "\\Delta L"
        },
        {
          "id": "f4",
          "name": "フックの法則",
          "latex": "\\sigma = E \\varepsilon",
          "vars": [
            {
              "sym": "\\sigma",
              "meaning": "垂直応力",
              "unit": "N/mm²"
            },
            {
              "sym": "E",
              "meaning": "ヤング率(弾性係数)",
              "unit": "N/mm²"
            },
            {
              "sym": "\\varepsilon",
              "meaning": "ひずみ",
              "unit": "無次元"
            }
          ],
          "when": "応力⇔ひずみの換算全般。伸びの公式 δ=NL/EA の導出にも使う",
          "intuition": "バネのF=kxの材料版。Eが大きい=硬い材料(鋼:2.0×10⁵N/mm²)",
          "derivation": "弾性範囲の実験結果(比例関係)を法則化したもの。応力-ひずみ図の直線部分の傾きがE",
          "blank": "\\sigma = ? \\varepsilon",
          "blankAnswer": "E"
        }
      ],
      "selectQuiz": [
        {
          "q": "断面積400mm²の鋼棒に80kNの引張力が働く。棒に生じる応力を求めたい",
          "choices": [
            "σ = N/A",
            "ε = ΔL/L",
            "σ = Eε",
            "ΣM = 0"
          ],
          "answer": 0,
          "expl": "力÷断面積=応力。単位をNとmm²に揃えるのがポイント",
          "formulaRef": "f2"
        },
        {
          "q": "応力150N/mm²が生じている鋼棒(E=2.0×10⁵N/mm²)のひずみを求めたい",
          "choices": [
            "ε = ΔL/L",
            "σ = N/A",
            "σ = Eε",
            "ΣV = 0"
          ],
          "answer": 2,
          "expl": "応力→ひずみの換算はフックの法則。ε = σ/E = 150/200000",
          "formulaRef": "f4"
        },
        {
          "q": "単純ばりに集中荷重が作用している。支点反力を求めたい",
          "choices": [
            "つりあい条件 ΣH=0, ΣV=0, ΣM=0",
            "フックの法則",
            "応力の定義式",
            "ひずみの定義式"
          ],
          "answer": 0,
          "expl": "反力計算は常につりあい条件から。支点まわりのΣM=0で片方の反力が出る",
          "formulaRef": "f1"
        },
        {
          "q": "長さ2mの棒が1.5mm伸びた。ひずみを求めたい",
          "choices": [
            "ε = ΔL/L",
            "σ = Eε",
            "σ = N/A",
            "δ = NL/EA"
          ],
          "answer": 0,
          "expl": "伸び÷元の長さ。単位を揃えて 1.5/2000 = 7.5×10⁻⁴",
          "formulaRef": "f3"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "応力・ひずみ・伸びの基本計算",
          "variants": [
            {
              "q": "断面積A=400mm²、長さL=2mの鋼棒(E=2.0×10⁵N/mm²)に軸力N=80kNの引張力が作用する。応力σ、ひずみε、伸びΔLを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "応力は $\\sigma = N/A$、ひずみはフックの法則 $\\varepsilon = \\sigma/E$、伸びは $\\Delta L = \\varepsilon L$ の順に求める"
                },
                {
                  "label": "② 単位換算と代入",
                  "content": "N = 80kN = 80000N。$\\sigma = \\dfrac{80000}{400} = 200$ N/mm²"
                },
                {
                  "label": "③ ひずみと伸び",
                  "content": "$\\varepsilon = \\dfrac{200}{2.0\\times10^5} = 1.0\\times10^{-3}$、$\\Delta L = 1.0\\times10^{-3} \\times 2000 = 2.0$ mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "鋼の降伏応力(235N/mm²程度)以下で弾性範囲。伸び2mm/2mも常識的な値"
                }
              ],
              "answer": "σ = 200 N/mm²、ε = 1.0×10⁻³、ΔL = 2.0 mm"
            },
            {
              "q": "断面積A=500mm²、長さL=2mの鋼棒(E=2.0×10⁵N/mm²)に軸力N=75kNが作用する。応力σ、ひずみε、伸びΔLを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\sigma = N/A$ → $\\varepsilon = \\sigma/E$ → $\\Delta L = \\varepsilon L$ の3段構え"
                },
                {
                  "label": "② 代入",
                  "content": "$\\sigma = \\dfrac{75000}{500} = 150$ N/mm²"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\varepsilon = \\dfrac{150}{2.0\\times10^5} = 7.5\\times10^{-4}$、$\\Delta L = 7.5\\times10^{-4} \\times 2000 = 1.5$ mm"
                },
                {
                  "label": "④ 単位・妥当性確認",
                  "content": "応力はN/mm²、伸びはmm。ひずみ0.075%は鋼の弾性範囲内で妥当"
                }
              ],
              "answer": "σ = 150 N/mm²、ε = 7.5×10⁻⁴、ΔL = 1.5 mm"
            }
          ],
          "formulaRefs": [
            "f2",
            "f3",
            "f4"
          ]
        },
        {
          "id": "p2",
          "pattern": "単純ばりの反力と最大曲げモーメント(復習)",
          "variants": [
            {
              "q": "スパンL=6mの単純ばりの中央に集中荷重P=12kNが作用する。支点反力と最大曲げモーメントを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "つりあい条件 $\\sum V = 0$, $\\sum M = 0$。対称なので反力は等分される"
                },
                {
                  "label": "② 反力計算",
                  "content": "$R_A = R_B = \\dfrac{P}{2} = \\dfrac{12}{2} = 6$ kN"
                },
                {
                  "label": "③ 最大曲げモーメント",
                  "content": "中央で最大。$M_{max} = R_A \\times \\dfrac{L}{2} = 6 \\times 3 = 18$ kN·m(公式 $PL/4 = 12\\times6/4 = 18$ でも一致)"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "M図は中央が頂点の三角形。単位kN·mでOK"
                }
              ],
              "answer": "R_A = R_B = 6 kN、M_max = 18 kN·m"
            },
            {
              "q": "スパンL=6mの単純ばり全長に等分布荷重w=4kN/mが作用する。支点反力と最大曲げモーメントを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "全荷重 $wL$ を対称に分担。最大モーメントは中央で $wL^2/8$"
                },
                {
                  "label": "② 反力計算",
                  "content": "$R_A = R_B = \\dfrac{wL}{2} = \\dfrac{4 \\times 6}{2} = 12$ kN"
                },
                {
                  "label": "③ 最大曲げモーメント",
                  "content": "$M_{max} = \\dfrac{wL^2}{8} = \\dfrac{4 \\times 36}{8} = 18$ kN·m"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "M図は放物線で中央最大。等分布のwL²/8は最頻出公式なので即答できるように"
                }
              ],
              "answer": "R_A = R_B = 12 kN、M_max = 18 kN·m"
            }
          ],
          "formulaRefs": [
            "f1"
          ]
        }
      ],
      "quiz": [
        {
          "q": "応力の単位として正しいものはどれ?",
          "choices": [
            "kN",
            "N/mm²",
            "mm",
            "kN·m"
          ],
          "answer": 1,
          "expl": "応力=力÷面積なのでN/mm²(=MPa)。kNは力、kN·mはモーメントの単位",
          "sectionRef": 1
        },
        {
          "q": "ひずみεの説明として正しいものは?",
          "choices": [
            "変形量そのもの(mm)",
            "変形量を元の長さで割った無次元量",
            "力を面積で割った量",
            "モーメントを長さで割った量"
          ],
          "answer": 1,
          "expl": "ε=ΔL/L。長さ÷長さなので単位が消えて無次元になる",
          "sectionRef": 1
        },
        {
          "q": "トラスの部材のように、主に引張・圧縮を受ける部材の分類は?",
          "choices": [
            "曲げ部材",
            "軸力部材",
            "ねじり部材",
            "せん断部材"
          ],
          "answer": 1,
          "expl": "軸方向の力(軸力)が支配的な部材が軸力部材。はりは曲げ部材",
          "sectionRef": 2
        },
        {
          "q": "静定構造の特徴として正しいものは?",
          "choices": [
            "つりあい条件だけで反力が全部求まる",
            "変位適合条件が必要",
            "反力が求められない",
            "必ず不安定である"
          ],
          "answer": 0,
          "expl": "静定=未知数の数とつりあい式の数が一致。不静定は式が足りず変形条件を追加する",
          "sectionRef": 0
        }
      ]
    },
    {
      "id": "u2",
      "title": "軸力部材:伸びの計算と不静定軸力部材",
      "weeks": "第3〜5週",
      "priority": 2,
      "sections": [
        {
          "heading": "軸力部材のつりあいの微分方程式",
          "body": "<p>軸方向の変位をu(x)とすると、[[ひずみ]]は $\\varepsilon = du/dx$、[[フックの法則]]より[[応力]]は $\\sigma = E\\,du/dx$、[[軸力]]は $N = EA\\,du/dx$ となる。微小区間のつりあいから、分布軸荷重p(x)があるとき $EA\\dfrac{d^2u}{dx^2} = -p(x)$ が得られる。これが<b>変位で表したつりあいの微分方程式</b>で、境界条件(固定端でu=0、自由端でN=0など)を与えて積分すれば変位と応力が同時に求まる。曲げ部材のたわみの微分方程式と同じ発想の「1次元版」であり、まずここで解法の型を身につける。</p>"
        },
        {
          "heading": "伸びの公式 δ=NL/EA",
          "body": "<p>軸力Nが一定の棒では、微分方程式を解くまでもなく伸びは $\\delta = \\dfrac{NL}{EA}$ で求まる。導出は簡単で、$\\sigma = N/A$、$\\varepsilon = \\sigma/E = N/EA$、伸び$= \\varepsilon L$ をつなぐだけ。<b>EAは「軸剛性」</b>と呼ばれ、輪ゴムと鉄棒の違いはこのEAの違いである。断面や材料が途中で変わる棒は、区間ごとに計算して足し合わせればよい。この公式は不静定問題でも変形計算の基本部品として何度も使う。</p>",
          "svg": "<svg viewBox='0 0 400 230' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='20' height='170' fill='var(--c-fill1)' stroke='var(--c-line)'/><rect x='60' y='95' width='240' height='40' fill='var(--c-fill2)' stroke='var(--c-text)' stroke-width='2'/><rect x='300' y='95' width='40' height='40' fill='none' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='5 3'/><line x1='340' y1='115' x2='385' y2='115' stroke='var(--c-accent)' stroke-width='3'/><polygon points='385,115 372,108 372,122' fill='var(--c-accent)'/><text x='355' y='100' font-size='16' fill='var(--c-accent)'>N</text><line x1='300' y1='150' x2='300' y2='175' stroke='var(--c-line)' stroke-width='1'/><line x1='340' y1='150' x2='340' y2='175' stroke='var(--c-line)' stroke-width='1'/><line x1='300' y1='165' x2='340' y2='165' stroke='var(--c-text)' stroke-width='2'/><text x='305' y='192' font-size='15' fill='var(--c-text)'>δ = NL/EA</text><text x='140' y='85' font-size='15' fill='var(--c-text)'>長さL、断面積A、ヤング率E</text><text x='150' y='122' font-size='15' fill='var(--c-text)'>軸力 N</text></svg>"
        },
        {
          "heading": "不静定軸力部材:変位適合条件で解く",
          "body": "<p>両端を固定された棒に途中で荷重をかけると、反力が2つあるのにつりあい式は1本しかなく、[[不静定構造]]になる。そこで<b>「棒全体の伸び=0(両端が動かない)」</b>という[[変位適合条件]]を追加する。手順は、①片方の反力を未知数Rとおく → ②各区間の軸力をRで表す → ③各区間の伸びをδ=NL/EAで計算し合計 → ④合計=0からRを決定。つっぱり棒を壁の間に入れると、押した分だけ反対側も押し返してくる——その「帳尻合わせ」を式にしたのが適合条件である。この解法パターンは第14週の不静定ばりでそのまま再登場する。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "軸力部材のつりあいの微分方程式",
          "latex": "EA\\dfrac{d^2u}{dx^2} = -p(x)",
          "vars": [
            {
              "sym": "u",
              "meaning": "軸方向変位",
              "unit": "mm"
            },
            {
              "sym": "EA",
              "meaning": "軸剛性",
              "unit": "N"
            },
            {
              "sym": "p(x)",
              "meaning": "分布軸荷重",
              "unit": "N/mm"
            }
          ],
          "when": "自重など分布軸荷重が作用する棒の変位分布を求めるとき。境界条件とセットで積分する",
          "intuition": "変位の「曲がり具合」が荷重に比例する。たわみの微分方程式の1次元版",
          "derivation": "N = EA du/dx と微小区間のつりあい dN/dx = -p(x) を合体させる",
          "blank": "EA\\dfrac{d^2u}{dx^2} = -?",
          "blankAnswer": "p(x)"
        },
        {
          "id": "f2",
          "name": "軸力部材の伸び",
          "latex": "\\delta = \\dfrac{NL}{EA}",
          "vars": [
            {
              "sym": "\\delta",
              "meaning": "伸び(縮み)",
              "unit": "mm"
            },
            {
              "sym": "N",
              "meaning": "軸力",
              "unit": "N"
            },
            {
              "sym": "L",
              "meaning": "部材長",
              "unit": "mm"
            },
            {
              "sym": "EA",
              "meaning": "軸剛性",
              "unit": "N"
            }
          ],
          "when": "軸力一定の棒の伸びを求めるとき。不静定問題の適合条件でも変形の部品として使う",
          "intuition": "力と長さに比例、硬さEAに反比例。輪ゴム(EA小)はよく伸び、鉄棒(EA大)は伸びない",
          "derivation": "σ=N/A → ε=N/EA → δ=εL とフックの法則をつなぐだけ",
          "blank": "\\delta = \\dfrac{NL}{?}",
          "blankAnswer": "EA"
        },
        {
          "id": "f3",
          "name": "多区間の棒の伸び(重ね合わせ)",
          "latex": "\\delta = \\sum_i \\dfrac{N_i L_i}{E_i A_i}",
          "vars": [
            {
              "sym": "N_i",
              "meaning": "区間iの軸力",
              "unit": "N"
            },
            {
              "sym": "L_i",
              "meaning": "区間iの長さ",
              "unit": "mm"
            },
            {
              "sym": "E_i A_i",
              "meaning": "区間iの軸剛性",
              "unit": "N"
            }
          ],
          "when": "断面・材料・軸力が途中で変わる棒。区間ごとに計算して合計する",
          "intuition": "直列につないだバネの伸びは各バネの伸びの和、と同じ考え方",
          "derivation": "各区間でδ=NL/EAが成り立つので、全体の伸びはその総和",
          "blank": "\\delta = \\sum_i \\dfrac{N_i ?}{E_i A_i}",
          "blankAnswer": "L_i"
        },
        {
          "id": "f4",
          "name": "不静定軸力部材の変位適合条件",
          "latex": "\\delta_{AB} = \\sum \\dfrac{N_i L_i}{EA} = 0",
          "vars": [
            {
              "sym": "\\delta_{AB}",
              "meaning": "両固定端間の全伸び",
              "unit": "mm"
            },
            {
              "sym": "N_i",
              "meaning": "区間ごとの軸力(未知反力を含む)",
              "unit": "N"
            }
          ],
          "when": "両端固定の棒など、つりあいだけで反力が決まらない軸力部材を解くとき",
          "intuition": "両端が壁なら棒全体は1mmも伸び縮みできない。その制約が反力を決める",
          "derivation": "幾何学的条件(両端の変位ゼロ)を伸びの式で表現したもの",
          "blank": "\\delta_{AB} = \\sum \\dfrac{N_i L_i}{EA} = ?",
          "blankAnswer": "0"
        }
      ],
      "selectQuiz": [
        {
          "q": "長さ2m、EA=1.0×10⁸Nの棒に軸力100kNが働く。伸びを求めたい",
          "choices": [
            "δ = NL/EA",
            "σ = Eε",
            "EIv'' = -M",
            "ΣM = 0"
          ],
          "answer": 0,
          "expl": "軸力一定の棒の伸びはNL/EA一発。単位をN, mmに揃える",
          "formulaRef": "f2"
        },
        {
          "q": "両端固定の棒の中間に荷重Pが作用。両端の反力を求めたい",
          "choices": [
            "変位適合条件 Σ(NL/EA)=0",
            "つりあい条件のみ",
            "たわみの微分方程式",
            "断面係数の式"
          ],
          "answer": 0,
          "expl": "反力2つ・つりあい式1本の不静定。全伸び=0の条件を追加して解く",
          "formulaRef": "f4"
        },
        {
          "q": "断面積が途中で変わる棒の全伸びを求めたい",
          "choices": [
            "区間ごとのNL/EAの合計",
            "太い区間だけで計算",
            "平均断面積で1回計算",
            "細い区間だけで計算"
          ],
          "answer": 0,
          "expl": "直列バネと同じで区間ごとに計算して足す。平均断面積では誤差が出る",
          "formulaRef": "f3"
        },
        {
          "q": "自重(分布軸荷重)を受けて吊り下げられた棒の変位分布u(x)を求めたい",
          "choices": [
            "EA u'' = -p(x) を積分",
            "δ = NL/EA に一括代入",
            "モールの定理",
            "断面の核の式"
          ],
          "answer": 0,
          "expl": "軸力が場所で変わるので微分方程式から。境界条件は固定端u=0、自由端N=0",
          "formulaRef": "f1"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "軸力部材の伸び計算",
          "variants": [
            {
              "q": "長さL=2m、断面積A=500mm²、E=2.0×10⁵N/mm²の鋼棒に引張軸力N=100kNが作用する。伸びδを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "軸力一定なので $\\delta = \\dfrac{NL}{EA}$ を使う"
                },
                {
                  "label": "② 単位換算",
                  "content": "N = 100000 N、L = 2000 mm。EA = 2.0×10⁵ × 500 = 1.0×10⁸ N"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = \\dfrac{100000 \\times 2000}{1.0\\times10^8} = \\dfrac{2.0\\times10^8}{1.0\\times10^8} = 2.0$ mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "応力は100000/500=200N/mm²で弾性範囲。2m の棒で2mmは妥当"
                }
              ],
              "answer": "δ = 2.0 mm"
            },
            {
              "q": "長さL=3m、断面積A=600mm²、E=2.0×10⁵N/mm²の鋼棒に引張軸力N=60kNが作用する。伸びδを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\delta = \\dfrac{NL}{EA}$"
                },
                {
                  "label": "② 単位換算",
                  "content": "N = 60000 N、L = 3000 mm、EA = 2.0×10⁵ × 600 = 1.2×10⁸ N"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = \\dfrac{60000 \\times 3000}{1.2\\times10^8} = \\dfrac{1.8\\times10^8}{1.2\\times10^8} = 1.5$ mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "応力は60000/600=100N/mm²で余裕あり。伸び1.5mmは妥当"
                }
              ],
              "answer": "δ = 1.5 mm"
            }
          ],
          "formulaRefs": [
            "f2"
          ]
        },
        {
          "id": "p2",
          "pattern": "不静定軸力部材(両端固定棒)の反力計算",
          "variants": [
            {
              "q": "長さL=3mの棒が両端A(上)・B(下)で固定され、上端から1mの点Cに下向き荷重P=90kNが作用する。EAは一定。両端の反力を求めよ。",
              "steps": [
                {
                  "label": "① 未知数の設定",
                  "content": "上端反力を $R_A$(上向き)とおく。AC間の軸力は $N_1 = R_A$(引張)、CB間は $N_2 = R_A - 90$"
                },
                {
                  "label": "② 変位適合条件",
                  "content": "両端固定なので全伸び=0:$\\dfrac{N_1 \\times 1000}{EA} + \\dfrac{N_2 \\times 2000}{EA} = 0$"
                },
                {
                  "label": "③ 計算",
                  "content": "$1000 R_A + 2000(R_A - 90) = 0$ → $3000 R_A = 180000$ → $R_A = 60$ kN"
                },
                {
                  "label": "④ 検算",
                  "content": "$R_B = 90 - 60 = 30$ kN。長い区間(2m)側の反力が小さい:$R_A = P\\cdot b/L = 90×2/3 = 60$ kN と一致"
                }
              ],
              "answer": "R_A = 60 kN、R_B = 30 kN"
            },
            {
              "q": "長さL=4mの棒が両端A(上)・B(下)で固定され、上端から1mの点Cに下向き荷重P=80kNが作用する。EAは一定。両端の反力を求めよ。",
              "steps": [
                {
                  "label": "① 未知数の設定",
                  "content": "$R_A$ を上端反力とすると、AC間 $N_1 = R_A$、CB間 $N_2 = R_A - 80$"
                },
                {
                  "label": "② 変位適合条件",
                  "content": "$\\dfrac{N_1 \\times 1000}{EA} + \\dfrac{N_2 \\times 3000}{EA} = 0$"
                },
                {
                  "label": "③ 計算",
                  "content": "$1000 R_A + 3000(R_A - 80) = 0$ → $4000 R_A = 240000$ → $R_A = 60$ kN"
                },
                {
                  "label": "④ 検算",
                  "content": "$R_B = 80 - 60 = 20$ kN。公式 $R_A = P\\cdot b/L = 80×3/4 = 60$ kN と一致。合計もP=80kNでOK"
                }
              ],
              "answer": "R_A = 60 kN、R_B = 20 kN"
            }
          ],
          "formulaRefs": [
            "f2",
            "f4"
          ]
        }
      ],
      "quiz": [
        {
          "q": "伸びの公式 δ=NL/EA で、EAが表すものは?",
          "choices": [
            "曲げ剛性",
            "軸剛性(伸びにくさ)",
            "せん断剛性",
            "ねじり剛性"
          ],
          "answer": 1,
          "expl": "EAは軸剛性。大きいほど伸びにくい。曲げ剛性はEI",
          "sectionRef": 1
        },
        {
          "q": "両端固定の棒が不静定になる理由は?",
          "choices": [
            "荷重が大きすぎるから",
            "反力の未知数がつりあい式より多いから",
            "材料が非弾性だから",
            "断面が変化するから"
          ],
          "answer": 1,
          "expl": "反力2つに対し軸方向のつりあい式は1本。足りない分を変位適合条件で補う",
          "sectionRef": 2
        },
        {
          "q": "不静定軸力部材で追加する変位適合条件の内容は?",
          "choices": [
            "応力が降伏応力以下",
            "両固定端間の全伸びがゼロ",
            "軸力が全区間で等しい",
            "ひずみが一定"
          ],
          "answer": 1,
          "expl": "両端が固定=棒全体として伸び縮みできない。Σ(NL/EA)=0",
          "sectionRef": 2
        },
        {
          "q": "断面積が半分になると、同じ軸力での伸びはどうなる?",
          "choices": [
            "半分になる",
            "変わらない",
            "2倍になる",
            "4倍になる"
          ],
          "answer": 2,
          "expl": "δ=NL/EAはAに反比例。断面半分→伸び2倍",
          "sectionRef": 1
        }
      ]
    },
    {
      "id": "u3",
      "title": "はりのたわみ(1):たわみの微分方程式",
      "weeks": "第6〜7週",
      "priority": 3,
      "sections": [
        {
          "heading": "たわみの微分方程式 EIv''=-M",
          "body": "<p>はりの[[たわみ]]v(x)と[[曲げモーメント]]M(x)は $EI\\dfrac{d^2v}{dx^2} = -M(x)$ で結ばれる。EIは[[曲げ剛性]]で、はりの曲がりにくさを表す。導出の流れは、曲げによる断面の回転→曲率 $1/\\rho = M/EI$ →曲率はたわみの2階微分、というもの。<b>M図さえ描ければ、2回積分するだけでたわみが求まる</b>のがこの方法の強みである。積分定数は境界条件(支点でv=0、固定端でさらにθ=0)から決める。定規を両手で曲げたとき、強く曲げるほど(M大)、薄い定規ほど(EI小)大きくしなるイメージ。</p>",
          "svg": "<svg viewBox='0 0 400 240' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='100' x2='350' y2='100' stroke='var(--c-line)' stroke-width='2' stroke-dasharray='4 4'/><polygon points='50,100 38,125 62,125' fill='none' stroke='var(--c-line)' stroke-width='2'/><circle cx='350' cy='112' r='9' fill='none' stroke='var(--c-line)' stroke-width='2'/><path d='M50,100 Q200,180 350,100' fill='none' stroke='var(--c-accent)' stroke-width='3'/><line x1='200' y1='40' x2='200' y2='92' stroke='var(--c-text)' stroke-width='3'/><polygon points='200,98 193,84 207,84' fill='var(--c-text)'/><text x='208' y='55' font-size='16' fill='var(--c-text)'>P</text><line x1='200' y1='100' x2='200' y2='140' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='3 3'/><text x='210' y='132' font-size='16' fill='var(--c-accent)'>たわみ v</text><line x1='50' y1='100' x2='95' y2='125' stroke='var(--c-text)' stroke-width='2'/><path d='M80,100 A30,30 0 0,1 77,115' fill='none' stroke='var(--c-text)' stroke-width='1.5'/><text x='88' y='95' font-size='15' fill='var(--c-text)'>たわみ角 θ</text><text x='120' y='215' font-size='15' fill='var(--c-text)'>たわみ曲線:EIv&quot;=-M を2回積分</text></svg>"
        },
        {
          "heading": "境界条件と積分の手順",
          "body": "<p>解法手順は、①M(x)を区間ごとに式で表す → ②$EIv'' = -M$ に代入して1回積分($EIv' = EI\\theta$、[[たわみ角]]が出る) → ③もう1回積分(たわみvが出る) → ④境界条件で積分定数を決定。境界条件は<b>[[単純ばり]]なら両支点でv=0</b>、<b>[[片持ちばり]]なら固定端でv=0かつθ=0</b>。荷重点で区間が分かれる場合は「連続条件」(たわみとたわみ角が両区間で一致)も使う。積分定数の決定こそが試験の採点ポイントになりやすい。</p>"
        },
        {
          "heading": "覚えるべき代表的なたわみ公式",
          "body": "<p>毎回積分するのは大変なので、代表的な結果は公式として暗記する。<b>片持ちばり先端集中荷重:$\\delta = PL^3/3EI$</b>、<b>単純ばり中央集中:$\\delta = PL^3/48EI$</b>、<b>単純ばり等分布:$\\delta = 5wL^4/384EI$</b>、<b>片持ちばり等分布:$\\delta = wL^4/8EI$</b>。集中荷重はL³、等分布はL⁴に比例する点に注目——スパンが2倍になるとたわみは8倍〜16倍に跳ね上がる。橋のスパンを伸ばすのが技術的に難しい理由がこの「3乗・4乗則」である。これらは[[不静定構造]]を解くときの部品にもなる。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "たわみの微分方程式",
          "latex": "EI\\dfrac{d^2v}{dx^2} = -M(x)",
          "vars": [
            {
              "sym": "v",
              "meaning": "たわみ(鉛直変位)",
              "unit": "mm"
            },
            {
              "sym": "EI",
              "meaning": "曲げ剛性",
              "unit": "N·mm²"
            },
            {
              "sym": "M(x)",
              "meaning": "曲げモーメント分布",
              "unit": "N·mm"
            }
          ],
          "when": "たわみを積分で求める全ての問題の出発点。M(x)の式を立ててから使う",
          "intuition": "曲げモーメントが大きい所ほどはりが強く曲がる(曲率が大きい)",
          "derivation": "曲率1/ρ=M/EI と、微小変形では曲率≈-v'' であることから",
          "blank": "EI\\dfrac{d^2v}{dx^2} = -?",
          "blankAnswer": "M(x)"
        },
        {
          "id": "f2",
          "name": "たわみ角の定義",
          "latex": "\\theta = \\dfrac{dv}{dx}",
          "vars": [
            {
              "sym": "\\theta",
              "meaning": "たわみ角",
              "unit": "rad"
            },
            {
              "sym": "v",
              "meaning": "たわみ",
              "unit": "mm"
            }
          ],
          "when": "微分方程式を1回積分した段階で得られる。支点の回転角を問う問題で",
          "intuition": "たわみ曲線の傾き。坂道の勾配と同じで、微小ならtanθ≈θ",
          "derivation": "微小変形理論では接線の傾きがそのまま回転角になる",
          "blank": "\\theta = \\dfrac{d?}{dx}",
          "blankAnswer": "v"
        },
        {
          "id": "f3",
          "name": "片持ちばり先端集中荷重のたわみ",
          "latex": "\\delta_{max} = \\dfrac{PL^3}{3EI}",
          "vars": [
            {
              "sym": "P",
              "meaning": "先端の集中荷重",
              "unit": "N"
            },
            {
              "sym": "L",
              "meaning": "スパン",
              "unit": "mm"
            },
            {
              "sym": "EI",
              "meaning": "曲げ剛性",
              "unit": "N·mm²"
            }
          ],
          "when": "片持ちばりの先端に集中荷重。先端たわみを即答するとき。不静定ばりの部品にも",
          "intuition": "分母の3が目印。Lの3乗なのでスパン2倍でたわみ8倍",
          "derivation": "M(x)=-P(L-x) を EIv''=-M に入れて2回積分、固定端でv=θ=0",
          "blank": "\\delta_{max} = \\dfrac{PL^3}{? EI}",
          "blankAnswer": "3"
        },
        {
          "id": "f4",
          "name": "片持ちばり先端集中荷重のたわみ角",
          "latex": "\\theta_{max} = \\dfrac{PL^2}{2EI}",
          "vars": [
            {
              "sym": "P",
              "meaning": "先端の集中荷重",
              "unit": "N"
            },
            {
              "sym": "L",
              "meaning": "スパン",
              "unit": "mm"
            },
            {
              "sym": "EI",
              "meaning": "曲げ剛性",
              "unit": "N·mm²"
            }
          ],
          "when": "片持ちばり先端の回転角を求めるとき",
          "intuition": "たわみがL³/3なら角はL²/2。1回微分した形と覚える",
          "derivation": "EIv'の段階(1回積分)で先端の値を評価すると得られる",
          "blank": "\\theta_{max} = \\dfrac{PL^2}{? EI}",
          "blankAnswer": "2"
        },
        {
          "id": "f5",
          "name": "単純ばり中央集中荷重のたわみ",
          "latex": "\\delta_{max} = \\dfrac{PL^3}{48EI}",
          "vars": [
            {
              "sym": "P",
              "meaning": "中央の集中荷重",
              "unit": "N"
            },
            {
              "sym": "L",
              "meaning": "スパン",
              "unit": "mm"
            },
            {
              "sym": "EI",
              "meaning": "曲げ剛性",
              "unit": "N·mm²"
            }
          ],
          "when": "単純ばりのスパン中央に集中荷重。中央たわみを即答するとき",
          "intuition": "分母48。同じPLでも片持ち(1/3)より単純ばり(1/48)はずっとたわまない",
          "derivation": "対称性から半分のはりで積分。中央でθ=0を使うと早い",
          "blank": "\\delta_{max} = \\dfrac{PL^3}{? EI}",
          "blankAnswer": "48"
        },
        {
          "id": "f6",
          "name": "単純ばり等分布荷重のたわみ",
          "latex": "\\delta_{max} = \\dfrac{5wL^4}{384EI}",
          "vars": [
            {
              "sym": "w",
              "meaning": "等分布荷重",
              "unit": "N/mm"
            },
            {
              "sym": "L",
              "meaning": "スパン",
              "unit": "mm"
            },
            {
              "sym": "EI",
              "meaning": "曲げ剛性",
              "unit": "N·mm²"
            }
          ],
          "when": "単純ばり全長に等分布荷重。中央たわみの定番公式",
          "intuition": "「5/384」はそのまま暗記。等分布はL⁴に比例する点に注意",
          "derivation": "M(x)=wx(L-x)/2 を2回積分し、両支点v=0で定数決定",
          "blank": "\\delta_{max} = \\dfrac{? wL^4}{384EI}",
          "blankAnswer": "5"
        },
        {
          "id": "f7",
          "name": "片持ちばり等分布荷重のたわみ",
          "latex": "\\delta_{max} = \\dfrac{wL^4}{8EI}",
          "vars": [
            {
              "sym": "w",
              "meaning": "等分布荷重",
              "unit": "N/mm"
            },
            {
              "sym": "L",
              "meaning": "スパン",
              "unit": "mm"
            },
            {
              "sym": "EI",
              "meaning": "曲げ剛性",
              "unit": "N·mm²"
            }
          ],
          "when": "片持ちばり全長に等分布荷重(自重など)。先端たわみを即答するとき",
          "intuition": "分母8。片持ち集中の1/3、単純等分布の5/384と混同しないこと",
          "derivation": "M(x)=-w(L-x)²/2 を2回積分、固定端でv=θ=0",
          "blank": "\\delta_{max} = \\dfrac{wL^4}{? EI}",
          "blankAnswer": "8"
        }
      ],
      "selectQuiz": [
        {
          "q": "片持ちばりの先端に集中荷重P。先端のたわみを求めたい",
          "choices": [
            "δ = PL³/3EI",
            "δ = PL³/48EI",
            "δ = 5wL⁴/384EI",
            "δ = wL⁴/8EI"
          ],
          "answer": 0,
          "expl": "片持ち+先端集中=PL³/3EI。単純ばり中央集中の48と混同注意",
          "formulaRef": "f3"
        },
        {
          "q": "単純ばりの中央に集中荷重P。中央のたわみを求めたい",
          "choices": [
            "δ = PL³/48EI",
            "δ = PL³/3EI",
            "δ = wL⁴/8EI",
            "δ = PL²/2EI"
          ],
          "answer": 0,
          "expl": "単純ばり+中央集中=PL³/48EI。両端で支えられる分たわみにくい",
          "formulaRef": "f5"
        },
        {
          "q": "単純ばり全長に等分布荷重w。中央のたわみを求めたい",
          "choices": [
            "δ = 5wL⁴/384EI",
            "δ = wL⁴/8EI",
            "δ = PL³/48EI",
            "δ = wL³/24EI"
          ],
          "answer": 0,
          "expl": "5/384は等分布単純ばりの代名詞。等分布はL⁴に比例",
          "formulaRef": "f6"
        },
        {
          "q": "任意の荷重を受けるはりのたわみを積分で求めたい。出発点となる式は?",
          "choices": [
            "EIv'' = -M(x)",
            "δ = NL/EA",
            "σ = M/W",
            "τ = SQ/(Ib)"
          ],
          "answer": 0,
          "expl": "たわみの微分方程式。M(x)を立てて2回積分し、境界条件で定数を決める",
          "formulaRef": "f1"
        },
        {
          "q": "片持ちばり先端集中荷重で、先端のたわみ角を求めたい",
          "choices": [
            "θ = PL²/2EI",
            "θ = PL³/3EI",
            "θ = wL³/6EI",
            "θ = PL/EI"
          ],
          "answer": 0,
          "expl": "たわみPL³/3EIとセットで、角はPL²/2EI。次数が1つ下がる",
          "formulaRef": "f4"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "片持ちばりの先端たわみ計算",
          "variants": [
            {
              "q": "スパンL=2mの片持ちばりの先端に集中荷重P=10kNが作用する。EI=2.0×10⁴kN·m²のとき、先端のたわみδとたわみ角θを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "片持ち+先端集中 → $\\delta = \\dfrac{PL^3}{3EI}$、$\\theta = \\dfrac{PL^2}{2EI}$"
                },
                {
                  "label": "② 代入",
                  "content": "$\\delta = \\dfrac{10 \\times 2^3}{3 \\times 2.0\\times10^4} = \\dfrac{80}{6.0\\times10^4}$(kN, m単位で統一)"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = 1.33\\times10^{-3}$ m = 1.33 mm。$\\theta = \\dfrac{10 \\times 4}{2 \\times 2.0\\times10^4} = 1.0\\times10^{-3}$ rad"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "たわみはスパンの1/1500程度で微小変形の前提OK。単位もm→mm換算済み"
                }
              ],
              "answer": "δ = 1.33 mm、θ = 1.0×10⁻³ rad"
            },
            {
              "q": "スパンL=3mの片持ちばりの先端に集中荷重P=20kNが作用する。EI=5.0×10⁴kN·m²のとき、先端のたわみδを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\delta = \\dfrac{PL^3}{3EI}$"
                },
                {
                  "label": "② 代入",
                  "content": "$\\delta = \\dfrac{20 \\times 3^3}{3 \\times 5.0\\times10^4} = \\dfrac{20 \\times 27}{1.5\\times10^5}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = \\dfrac{540}{1.5\\times10^5} = 3.6\\times10^{-3}$ m = 3.6 mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "スパン3mに対し3.6mm(約1/830)。片持ちばりとしては現実的な値"
                }
              ],
              "answer": "δ = 3.6 mm"
            }
          ],
          "formulaRefs": [
            "f3",
            "f4"
          ]
        },
        {
          "id": "p2",
          "pattern": "単純ばりの中央たわみ計算",
          "variants": [
            {
              "q": "スパンL=6mの単純ばりの中央に集中荷重P=40kNが作用する。EI=9.0×10⁴kN·m²のとき、中央のたわみδを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "単純ばり+中央集中 → $\\delta = \\dfrac{PL^3}{48EI}$"
                },
                {
                  "label": "② 代入",
                  "content": "$\\delta = \\dfrac{40 \\times 6^3}{48 \\times 9.0\\times10^4} = \\dfrac{40 \\times 216}{4.32\\times10^6}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = \\dfrac{8640}{4.32\\times10^6} = 2.0\\times10^{-3}$ m = 2.0 mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "スパンの1/3000でたわみ制限(通常L/600程度)内。単位換算もOK"
                }
              ],
              "answer": "δ = 2.0 mm"
            },
            {
              "q": "スパンL=4mの単純ばりの中央に集中荷重P=24kNが作用する。EI=2.0×10⁴kN·m²のとき、中央のたわみδを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\delta = \\dfrac{PL^3}{48EI}$"
                },
                {
                  "label": "② 代入",
                  "content": "$\\delta = \\dfrac{24 \\times 4^3}{48 \\times 2.0\\times10^4} = \\dfrac{24 \\times 64}{9.6\\times10^5}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = \\dfrac{1536}{9.6\\times10^5} = 1.6\\times10^{-3}$ m = 1.6 mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "L/2500で十分小さい。48EIの48を忘れると値が48倍になるので注意"
                }
              ],
              "answer": "δ = 1.6 mm"
            }
          ],
          "formulaRefs": [
            "f5"
          ]
        },
        {
          "id": "p3",
          "pattern": "等分布荷重を受ける単純ばりのたわみ計算",
          "variants": [
            {
              "q": "スパンL=4mの単純ばり全長に等分布荷重w=10kN/mが作用する。EI=4.0×10⁴kN·m²のとき、中央のたわみδを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "単純ばり+等分布 → $\\delta = \\dfrac{5wL^4}{384EI}$"
                },
                {
                  "label": "② 代入",
                  "content": "$\\delta = \\dfrac{5 \\times 10 \\times 4^4}{384 \\times 4.0\\times10^4} = \\dfrac{5 \\times 10 \\times 256}{1.536\\times10^7}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = \\dfrac{12800}{1.536\\times10^7} = 8.33\\times10^{-4}$ m ≈ 0.83 mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "L⁴の計算(4⁴=256)を検算。等分布はスパンの影響が大きいので指数ミスに注意"
                }
              ],
              "answer": "δ ≈ 0.83 mm"
            },
            {
              "q": "スパンL=6mの単純ばり全長に等分布荷重w=12kN/mが作用する。EI=1.0×10⁵kN·m²のとき、中央のたわみδを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\delta = \\dfrac{5wL^4}{384EI}$"
                },
                {
                  "label": "② 代入",
                  "content": "$\\delta = \\dfrac{5 \\times 12 \\times 6^4}{384 \\times 1.0\\times10^5} = \\dfrac{5 \\times 12 \\times 1296}{3.84\\times10^7}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\delta = \\dfrac{77760}{3.84\\times10^7} = 2.03\\times10^{-3}$ m ≈ 2.0 mm"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "6⁴=1296を検算。たわみ約L/3000で妥当"
                }
              ],
              "answer": "δ ≈ 2.0 mm"
            }
          ],
          "formulaRefs": [
            "f6"
          ]
        }
      ],
      "quiz": [
        {
          "q": "たわみの微分方程式 EIv''=-M のEIが表すものは?",
          "choices": [
            "軸剛性",
            "曲げ剛性",
            "せん断剛性",
            "断面係数"
          ],
          "answer": 1,
          "expl": "EI=ヤング率×断面二次モーメント=曲げ剛性。大きいほどたわみにくい",
          "sectionRef": 0
        },
        {
          "q": "片持ちばりの固定端での境界条件は?",
          "choices": [
            "v=0のみ",
            "θ=0のみ",
            "v=0 かつ θ=0",
            "M=0"
          ],
          "answer": 2,
          "expl": "固定端は動かず回転もしない。単純ばりの支点はv=0のみ(回転は自由)",
          "sectionRef": 1
        },
        {
          "q": "集中荷重を受けるはりのたわみはスパンLの何乗に比例する?",
          "choices": [
            "1乗",
            "2乗",
            "3乗",
            "4乗"
          ],
          "answer": 2,
          "expl": "集中荷重はL³、等分布はL⁴。スパン2倍でたわみ8倍(集中)・16倍(等分布)",
          "sectionRef": 2
        },
        {
          "q": "EIv''=-M を1回積分すると得られる量は?",
          "choices": [
            "たわみv",
            "たわみ角θ(EIθ)",
            "せん断力S",
            "軸力N"
          ],
          "answer": 1,
          "expl": "v''を1回積分するとv'=θ(たわみ角)、2回積分でv(たわみ)",
          "sectionRef": 1
        },
        {
          "q": "同じ荷重・スパンなら、片持ちばり(先端集中)と単純ばり(中央集中)のたわみが大きいのは?",
          "choices": [
            "片持ちばり(16倍)",
            "単純ばり(16倍)",
            "同じ",
            "片持ちばり(3倍)"
          ],
          "answer": 0,
          "expl": "PL³/3EI ÷ PL³/48EI = 16。片端支持の片持ちばりは圧倒的にたわみやすい",
          "sectionRef": 2
        }
      ]
    },
    {
      "id": "u4",
      "title": "はりのたわみ(2):モールの定理と共役はり法",
      "weeks": "第8〜9週",
      "priority": 3,
      "sections": [
        {
          "heading": "モールの定理:M/EIを「荷重」とみなす",
          "body": "<p>たわみの微分方程式 $EIv''=-M$ と、荷重とモーメントの関係 $M''=-w$ は<b>数学的に全く同じ形</b>をしている。そこで $w^* = M/EI$ という仮想の荷重([[弾性荷重]])を載せたはりを考えると、<b>そのはりのせん断力が元のはりの[[たわみ角]]、曲げモーメントが元のはりの[[たわみ]]に一致する</b>。これが[[モールの定理]]である。つまり「たわみ計算」を、慣れている「反力・断面力計算」に翻訳できる。M図を描く→EIで割って荷重とみなす→S図・M図を描く、という機械的な手順で積分いらず。</p>"
        },
        {
          "heading": "共役はり法:支点の変換ルール",
          "body": "<p>モールの定理を使うとき、境界条件を正しく再現するために支点条件を変換した仮想のはり([[共役はり]])に弾性荷重を載せる。変換ルールは、<b>固定端⇔自由端</b>、<b>単純支持端はそのまま</b>、<b>中間支点⇔中間ヒンジ</b>。例えば[[片持ちばり]](固定端+自由端)の共役はりは「自由端+固定端」に反転する。なぜなら固定端はθ=0, v=0なので、共役はり上でS*=0, M*=0つまり自由端でなければならないからだ。鏡写しの世界で計算して答えだけ持ち帰るイメージ。</p>",
          "svg": "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg'><text x='30' y='28' font-size='15' fill='var(--c-text)'>実ばり(片持ち)</text><rect x='40' y='40' width='12' height='60' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='52' y1='70' x2='210' y2='70' stroke='var(--c-text)' stroke-width='4'/><line x1='210' y1='30' x2='210' y2='62' stroke='var(--c-accent)' stroke-width='3'/><polygon points='210,68 203,54 217,54' fill='var(--c-accent)'/><text x='218' y='45' font-size='15' fill='var(--c-accent)'>P</text><text x='240' y='75' font-size='14' fill='var(--c-text)'>固定端│自由端</text><text x='30' y='150' font-size='15' fill='var(--c-text)'>共役はり(反転)+弾性荷重 M/EI</text><line x1='52' y1='195' x2='210' y2='195' stroke='var(--c-text)' stroke-width='4'/><rect x='210' y='165' width='12' height='60' fill='var(--c-fill1)' stroke='var(--c-line)'/><polygon points='52,195 210,195 52,165' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><text x='60' y='188' font-size='14' fill='var(--c-accent)'>w*=M/EI</text><text x='40' y='245' font-size='14' fill='var(--c-text)'>自由端│固定端 → S*=θ, M*=v</text></svg>"
        },
        {
          "heading": "どの方法を選ぶか",
          "body": "<p>たわみの求め方は3つ:①微分方程式(万能だが計算が長い)、②[[モールの定理]]・③共役はり法(M図が簡単な形なら速い)。<b>M図が三角形や放物線なら、弾性荷重の合力=M図の面積、作用点=図心</b>として扱えるので、共役はり法が圧倒的に速い。三角形の面積は「底辺×高さ÷2」、図心は「頂点から2/3」——この図形の知識だけでたわみが出せる。試験では「モールの定理(共役はり法)で解け」と指定されることが多いので、両方の手順を体で覚えること。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "弾性荷重の定義",
          "latex": "w^* = \\dfrac{M}{EI}",
          "vars": [
            {
              "sym": "w^*",
              "meaning": "弾性荷重(仮想の分布荷重)",
              "unit": "1/m"
            },
            {
              "sym": "M",
              "meaning": "実ばりの曲げモーメント",
              "unit": "kN·m"
            },
            {
              "sym": "EI",
              "meaning": "曲げ剛性",
              "unit": "kN·m²"
            }
          ],
          "when": "モールの定理・共役はり法の第一歩。M図を描いたらEIで割る",
          "intuition": "M図の形をした「見えない荷重」。曲げが強い所ほど重く載る",
          "derivation": "EIv''=-M と M''=-w の形の一致(アナロジー)から",
          "blank": "w^* = \\dfrac{?}{EI}",
          "blankAnswer": "M"
        },
        {
          "id": "f2",
          "name": "モールの定理(たわみ角)",
          "latex": "\\theta = S^*",
          "vars": [
            {
              "sym": "\\theta",
              "meaning": "実ばりのたわみ角",
              "unit": "rad"
            },
            {
              "sym": "S^*",
              "meaning": "共役はりのせん断力(弾性荷重による)",
              "unit": "rad"
            }
          ],
          "when": "共役はりに弾性荷重を載せ、せん断力を計算すればたわみ角が得られる",
          "intuition": "微分の階数が対応:荷重→せん断力の関係=M/EI→θの関係",
          "derivation": "θ = ∫(M/EI)dx がせん断力 S* = ∫w*dx と同じ積分だから",
          "blank": "\\theta = ?^*",
          "blankAnswer": "S"
        },
        {
          "id": "f3",
          "name": "モールの定理(たわみ)",
          "latex": "v = M^*",
          "vars": [
            {
              "sym": "v",
              "meaning": "実ばりのたわみ",
              "unit": "m"
            },
            {
              "sym": "M^*",
              "meaning": "共役はりの曲げモーメント(弾性荷重による)",
              "unit": "m"
            }
          ],
          "when": "共役はりの曲げモーメントを計算すればたわみが得られる",
          "intuition": "2回積分同士が対応:荷重→M の関係=M/EI→v の関係",
          "derivation": "v = ∬(M/EI)dxdx が M* = ∬w*dxdx と同じ二重積分だから",
          "blank": "v = ?^*",
          "blankAnswer": "M"
        }
      ],
      "selectQuiz": [
        {
          "q": "共役はり法で、実ばりのたわみ角に対応する共役はりの量は?",
          "choices": [
            "せん断力S*",
            "曲げモーメントM*",
            "反力R*",
            "軸力N*"
          ],
          "answer": 0,
          "expl": "θ=S*、v=M*。1階微分同士・2階微分同士が対応する",
          "formulaRef": "f2"
        },
        {
          "q": "共役はり法で、実ばりのたわみに対応する共役はりの量は?",
          "choices": [
            "曲げモーメントM*",
            "せん断力S*",
            "たわみ角θ*",
            "分布荷重w*"
          ],
          "answer": 0,
          "expl": "たわみv=共役はりの曲げモーメントM*。せん断力はたわみ角に対応",
          "formulaRef": "f3"
        },
        {
          "q": "共役はりに載せる仮想の荷重は?",
          "choices": [
            "w* = M/EI",
            "w* = S/EI",
            "w* = N/EA",
            "w* = M·EI"
          ],
          "answer": 0,
          "expl": "M図をEIで割ったものが弾性荷重。曲げが強い所ほど「重い」",
          "formulaRef": "f1"
        },
        {
          "q": "片持ちばり(固定端A・自由端B)の共役はりの支点条件は?",
          "choices": [
            "Aが自由端・Bが固定端",
            "そのまま変わらない",
            "両端固定",
            "両端自由"
          ],
          "answer": 0,
          "expl": "固定端⇔自由端に反転。固定端はθ=v=0なので共役はりではS*=M*=0の自由端",
          "formulaRef": "f1"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "共役はり法による片持ちばりのたわみ計算",
          "variants": [
            {
              "q": "スパンL=2mの片持ちばり(固定端A・自由端B)の先端に集中荷重P=10kNが作用する。EI=2.0×10⁴kN·m²。共役はり法で先端Bのたわみ角とたわみを求めよ。",
              "steps": [
                {
                  "label": "① M図と弾性荷重",
                  "content": "M図は固定端で $-PL = -20$ kN·m の三角形。弾性荷重は最大 $PL/EI = 20/2.0\\times10^4 = 1.0\\times10^{-3}$ 1/m の三角形分布"
                },
                {
                  "label": "② 共役はりへの変換",
                  "content": "固定端⇔自由端を入れ替え:共役はりはA自由端・B固定端。弾性荷重(三角形)を載せる"
                },
                {
                  "label": "③ たわみ角=S*",
                  "content": "B点のS* = 三角形の全面積 = $\\dfrac{1}{2} \\times 2 \\times 1.0\\times10^{-3} = 1.0\\times10^{-3}$ rad"
                },
                {
                  "label": "④ たわみ=M*",
                  "content": "三角形の図心はA端(頂点は固定端側が高い)から測ってBまで $\\dfrac{2}{3}L = 1.333$ m。$M^* = 1.0\\times10^{-3} \\times 1.333 = 1.33\\times10^{-3}$ m = 1.33 mm。公式 $PL^3/3EI$ = 10×8/(3×2×10⁴) = 1.33mm と一致"
                }
              ],
              "answer": "θ_B = 1.0×10⁻³ rad、v_B = 1.33 mm"
            },
            {
              "q": "スパンL=3mの片持ちばり(固定端A・自由端B)の先端に集中荷重P=12kNが作用する。EI=3.0×10⁴kN·m²。共役はり法で先端Bのたわみを求めよ。",
              "steps": [
                {
                  "label": "① M図と弾性荷重",
                  "content": "固定端モーメント $-PL = -36$ kN·m。弾性荷重の最大値 $36/3.0\\times10^4 = 1.2\\times10^{-3}$ 1/m の三角形"
                },
                {
                  "label": "② 共役はりへの変換",
                  "content": "A自由端・B固定端に反転し、三角形の弾性荷重を載せる"
                },
                {
                  "label": "③ 弾性荷重の合力",
                  "content": "面積 = $\\dfrac{1}{2} \\times 3 \\times 1.2\\times10^{-3} = 1.8\\times10^{-3}$。図心からBまでの距離 = $\\dfrac{2}{3} \\times 3 = 2.0$ m"
                },
                {
                  "label": "④ たわみ=M*",
                  "content": "$v_B = M^* = 1.8\\times10^{-3} \\times 2.0 = 3.6\\times10^{-3}$ m = 3.6 mm。公式 $PL^3/3EI = 12\\times27/(3\\times3\\times10^4) = 3.6$ mm と一致"
                }
              ],
              "answer": "v_B = 3.6 mm"
            }
          ],
          "formulaRefs": [
            "f1",
            "f2",
            "f3"
          ]
        },
        {
          "id": "p2",
          "pattern": "共役はり法による単純ばりのたわみ計算",
          "variants": [
            {
              "q": "スパンL=4mの単純ばりの中央に集中荷重P=16kNが作用する。EI=2.0×10⁴kN·m²。共役はり法で支点Aのたわみ角と中央Cのたわみを求めよ。",
              "steps": [
                {
                  "label": "① M図と弾性荷重",
                  "content": "M図は中央最大 $PL/4 = 16$ kN·m の三角形。弾性荷重最大値 $16/2.0\\times10^4 = 8.0\\times10^{-4}$ 1/m。単純ばりの共役はりは単純ばりのまま"
                },
                {
                  "label": "② 共役はりの反力=支点たわみ角",
                  "content": "弾性荷重の全合力 = $\\dfrac{1}{2} \\times 4 \\times 8.0\\times10^{-4} = 1.6\\times10^{-3}$。対称なので $R_A^* = 8.0\\times10^{-4}$ → $\\theta_A = 8.0\\times10^{-4}$ rad(公式 $PL^2/16EI = 16\\times16/(16\\times2\\times10^4)$ と一致)"
                },
                {
                  "label": "③ 中央のM*",
                  "content": "$M_C^* = R_A^* \\times 2 - (\\text{左半分の弾性荷重}) \\times (\\text{図心距離})$。左半分の合力 = $\\dfrac{1}{2}\\times2\\times8.0\\times10^{-4} = 8.0\\times10^{-4}$、図心はCから $\\dfrac{2}{3}$ m"
                },
                {
                  "label": "④ 計算",
                  "content": "$M_C^* = 8.0\\times10^{-4}\\times2 - 8.0\\times10^{-4}\\times\\dfrac{2}{3} = 1.6\\times10^{-3} - 5.33\\times10^{-4} = 1.07\\times10^{-3}$ m ≈ 1.07 mm。公式 $PL^3/48EI = 16\\times64/(48\\times2\\times10^4) = 1.07$ mm と一致"
                }
              ],
              "answer": "θ_A = 8.0×10⁻⁴ rad、v_C ≈ 1.07 mm"
            },
            {
              "q": "スパンL=8mの単純ばりの中央に集中荷重P=24kNが作用する。EI=1.2×10⁵kN·m²。共役はり法で中央Cのたわみを求めよ。",
              "steps": [
                {
                  "label": "① M図と弾性荷重",
                  "content": "中央最大 $PL/4 = 48$ kN·m。弾性荷重最大値 $48/1.2\\times10^5 = 4.0\\times10^{-4}$ 1/m の三角形"
                },
                {
                  "label": "② 共役はりの反力",
                  "content": "全合力 = $\\dfrac{1}{2}\\times8\\times4.0\\times10^{-4} = 1.6\\times10^{-3}$。$R_A^* = 8.0\\times10^{-4}$"
                },
                {
                  "label": "③ 中央のM*",
                  "content": "左半分の合力 = $\\dfrac{1}{2}\\times4\\times4.0\\times10^{-4} = 8.0\\times10^{-4}$、Cから図心まで $\\dfrac{4}{3}$ m"
                },
                {
                  "label": "④ 計算",
                  "content": "$v_C = 8.0\\times10^{-4}\\times4 - 8.0\\times10^{-4}\\times\\dfrac{4}{3} = 3.2\\times10^{-3} - 1.067\\times10^{-3} = 2.13\\times10^{-3}$ m ≈ 2.13 mm。公式 $PL^3/48EI = 24\\times512/(48\\times1.2\\times10^5) = 2.13$ mm と一致"
                }
              ],
              "answer": "v_C ≈ 2.13 mm"
            }
          ],
          "formulaRefs": [
            "f1",
            "f2",
            "f3"
          ]
        }
      ],
      "quiz": [
        {
          "q": "モールの定理が成り立つ理由は?",
          "choices": [
            "実験的に確かめられただけ",
            "EIv''=-M と M''=-w が同じ形の微分方程式だから",
            "エネルギー保存則から",
            "偶然の一致"
          ],
          "answer": 1,
          "expl": "同じ形の方程式なら解の対応関係も同じ。M/EIを荷重とみなすアナロジーが核心",
          "sectionRef": 0
        },
        {
          "q": "共役はりで「固定端」はどう変換される?",
          "choices": [
            "固定端のまま",
            "自由端になる",
            "ピン支点になる",
            "ローラー支点になる"
          ],
          "answer": 1,
          "expl": "固定端(θ=v=0)⇔自由端(S*=M*=0)。境界条件の対応で決まる",
          "sectionRef": 1
        },
        {
          "q": "単純ばりの共役はりはどうなる?",
          "choices": [
            "片持ちばりになる",
            "単純ばりのまま",
            "両端固定ばりになる",
            "ゲルバーばりになる"
          ],
          "answer": 1,
          "expl": "単純支持端(v=0, θ≠0)は共役はりでも(M*=0, S*≠0)の単純支持。変換不要",
          "sectionRef": 1
        },
        {
          "q": "三角形分布の弾性荷重を合力に置き換えるとき、作用点は?",
          "choices": [
            "三角形の中央",
            "高い方の端から1/3の図心位置",
            "低い方の端",
            "どこでもよい"
          ],
          "answer": 1,
          "expl": "三角形の図心は高さのある側から1/3(低い側から2/3)。合力=面積、作用点=図心が鉄則",
          "sectionRef": 2
        }
      ]
    },
    {
      "id": "u5",
      "title": "曲げ応力と断面の性質(I・W)",
      "weeks": "第10週",
      "priority": 3,
      "sections": [
        {
          "heading": "曲げ応力は中立軸からの距離に比例する",
          "body": "<p>はりが曲がると、凸側の繊維は伸び、凹側は縮む。その境目にある伸びも縮みもしない軸が[[中立軸]]である。平面保持の仮定(断面は変形後も平面)から、[[ひずみ]]は中立軸からの距離yに比例し、[[フックの法則]]を通して[[曲げ応力]]も $\\sigma = \\dfrac{M}{I}y$ と<b>yに比例する直線分布(三角形分布)</b>になる。食パンを曲げたとき外側が裂けるのは、縁の応力が最大になるからだ。Iは[[断面二次モーメント]]で、断面の曲げにくさを表す。</p>",
          "svg": "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='40' width='60' height='180' fill='var(--c-fill1)' stroke='var(--c-text)' stroke-width='2'/><line x1='40' y1='130' x2='320' y2='130' stroke='var(--c-line)' stroke-width='2' stroke-dasharray='6 4'/><text x='325' y='135' font-size='14' fill='var(--c-text)'>中立軸</text><line x1='200' y1='40' x2='200' y2='220' stroke='var(--c-line)' stroke-width='2'/><polygon points='200,40 290,40 200,130' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><polygon points='200,130 110,220 200,220' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2'/><text x='240' y='32' font-size='15' fill='var(--c-accent)'>圧縮 σ=M/W</text><text x='95' y='245' font-size='15' fill='var(--c-accent)'>引張 σ=M/W</text><text x='215' y='90' font-size='14' fill='var(--c-text)'>直線分布</text><text x='62' y='32' font-size='14' fill='var(--c-text)'>断面</text></svg>"
        },
        {
          "heading": "断面二次モーメントIと断面係数W",
          "body": "<p>[[断面二次モーメント]] $I = \\int y^2 dA$ は「中立軸から遠い所にどれだけ面積があるか」を表す。yの2乗で効くため、<b>同じ面積でも背の高い断面ほどIは劇的に大きい</b>。長方形なら $I = bh^3/12$ でhの3乗。本棚の棚板を縦置きにすると曲がらないのはこのためで、H形鋼がフランジを上下に離して配置するのも同じ理屈である。最大応力は縁(y=h/2)で生じるから、$W = I/y_{max}$([[断面係数]])を定義すれば $\\sigma_{max} = M/W$ と1行で書ける。設計では「必要W ≥ M/許容応力」の形で断面を選定する。</p>"
        },
        {
          "heading": "曲げ応力計算の実際",
          "body": "<p>計算手順は、①最大[[曲げモーメント]]Mを求める(M図の頂点) → ②断面のI・Wを計算 → ③$\\sigma_{max} = M/W$。<b>最大の敵は単位換算</b>で、MはkN·m、Wはmm³で出てくることが多いので、M[kN·m]×10⁶=[N·mm] に直してから割る。答えの[[縁応力]]がN/mm²(MPa)になれば正しい。許容応力(例:鋼140〜160N/mm²)と比較して安全性を判定するところまでが1セット。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "曲げ応力の一般式",
          "latex": "\\sigma = \\dfrac{M}{I}y",
          "vars": [
            {
              "sym": "\\sigma",
              "meaning": "曲げ応力",
              "unit": "N/mm²"
            },
            {
              "sym": "M",
              "meaning": "曲げモーメント",
              "unit": "N·mm"
            },
            {
              "sym": "I",
              "meaning": "断面二次モーメント",
              "unit": "mm⁴"
            },
            {
              "sym": "y",
              "meaning": "中立軸からの距離",
              "unit": "mm"
            }
          ],
          "when": "断面内の任意の高さの曲げ応力を求めるとき。応力分布を描く問題でも",
          "intuition": "中立軸でゼロ、縁で最大の三角形分布。yに比例が全て",
          "derivation": "平面保持→ε=y/ρ→σ=Ey/ρ と M=∫σy dA から 1/ρ=M/EI を消去",
          "blank": "\\sigma = \\dfrac{M}{I}?",
          "blankAnswer": "y"
        },
        {
          "id": "f2",
          "name": "最大曲げ応力(縁応力)",
          "latex": "\\sigma_{max} = \\dfrac{M}{W}",
          "vars": [
            {
              "sym": "\\sigma_{max}",
              "meaning": "縁の最大曲げ応力",
              "unit": "N/mm²"
            },
            {
              "sym": "M",
              "meaning": "曲げモーメント",
              "unit": "N·mm"
            },
            {
              "sym": "W",
              "meaning": "断面係数",
              "unit": "mm³"
            }
          ],
          "when": "曲げ応力の照査・断面選定。最頻出。単位換算(kN·m→N·mm)に注意",
          "intuition": "モーメント÷断面係数=縁の応力。Wが大きい断面ほど余裕がある",
          "derivation": "σ=My/I に y=y_max を代入し、W=I/y_max とまとめただけ",
          "blank": "\\sigma_{max} = \\dfrac{M}{?}",
          "blankAnswer": "W"
        },
        {
          "id": "f3",
          "name": "断面係数の定義",
          "latex": "W = \\dfrac{I}{y_{max}}",
          "vars": [
            {
              "sym": "W",
              "meaning": "断面係数",
              "unit": "mm³"
            },
            {
              "sym": "I",
              "meaning": "断面二次モーメント",
              "unit": "mm⁴"
            },
            {
              "sym": "y_{max}",
              "meaning": "中立軸から縁までの距離",
              "unit": "mm"
            }
          ],
          "when": "Iから最大応力用のWを作るとき。非対称断面では上縁用・下縁用の2つできる",
          "intuition": "Iを縁までの距離で割った「応力計算専用の性能値」",
          "derivation": "σmax=M·y_max/I を σmax=M/W の形にまとめるための定義",
          "blank": "W = \\dfrac{I}{?}",
          "blankAnswer": "y_{max}"
        },
        {
          "id": "f4",
          "name": "長方形断面の断面二次モーメント",
          "latex": "I = \\dfrac{bh^3}{12}",
          "vars": [
            {
              "sym": "b",
              "meaning": "断面の幅",
              "unit": "mm"
            },
            {
              "sym": "h",
              "meaning": "断面の高さ(曲げ方向)",
              "unit": "mm"
            }
          ],
          "when": "長方形断面のI。最も基本の公式で、T形・I形も長方形の組合せで計算する",
          "intuition": "高さhの3乗で効く。板は縦置きが圧倒的に曲がらない",
          "derivation": "I=∫y²dA を -h/2〜h/2 で積分すると bh³/12",
          "blank": "I = \\dfrac{bh^?}{12}",
          "blankAnswer": "3"
        },
        {
          "id": "f5",
          "name": "長方形断面の断面係数",
          "latex": "W = \\dfrac{bh^2}{6}",
          "vars": [
            {
              "sym": "b",
              "meaning": "断面の幅",
              "unit": "mm"
            },
            {
              "sym": "h",
              "meaning": "断面の高さ",
              "unit": "mm"
            }
          ],
          "when": "長方形断面の最大曲げ応力計算。σ=M/Wとセットで最頻出",
          "intuition": "I=bh³/12 を h/2 で割るとbh²/6。hの2乗で効く",
          "derivation": "W = I/y_max = (bh³/12)/(h/2) = bh²/6",
          "blank": "W = \\dfrac{bh^2}{?}",
          "blankAnswer": "6"
        },
        {
          "id": "f6",
          "name": "円形断面の断面二次モーメント",
          "latex": "I = \\dfrac{\\pi d^4}{64}",
          "vars": [
            {
              "sym": "d",
              "meaning": "直径",
              "unit": "mm"
            }
          ],
          "when": "円形断面(丸鋼・杭など)のI",
          "intuition": "直径の4乗。64という分母は「ロクヨン」で暗記",
          "derivation": "極座標で∫y²dAを実行。極断面二次モーメントπd⁴/32の半分",
          "blank": "I = \\dfrac{\\pi d^4}{?}",
          "blankAnswer": "64"
        },
        {
          "id": "f7",
          "name": "円形断面の断面係数",
          "latex": "W = \\dfrac{\\pi d^3}{32}",
          "vars": [
            {
              "sym": "d",
              "meaning": "直径",
              "unit": "mm"
            }
          ],
          "when": "円形断面の最大曲げ応力計算",
          "intuition": "I(πd⁴/64)をd/2で割ってπd³/32。「サンニー」で暗記",
          "derivation": "W = I/y_max = (πd⁴/64)/(d/2) = πd³/32",
          "blank": "W = \\dfrac{\\pi d^3}{?}",
          "blankAnswer": "32"
        }
      ],
      "selectQuiz": [
        {
          "q": "曲げモーメントMと断面係数Wが与えられ、最大曲げ応力を求めたい",
          "choices": [
            "σ = M/W",
            "σ = N/A",
            "τ = SQ/(Ib)",
            "σ = Eε"
          ],
          "answer": 0,
          "expl": "縁応力=M/W。kN·m→N·mmの単位換算(×10⁶)を忘れずに",
          "formulaRef": "f2"
        },
        {
          "q": "幅b、高さhの長方形断面の断面二次モーメントを求めたい",
          "choices": [
            "I = bh³/12",
            "I = bh²/6",
            "I = πd⁴/64",
            "I = bh³/6"
          ],
          "answer": 0,
          "expl": "長方形はbh³/12。hが3乗であることが最重要ポイント",
          "formulaRef": "f4"
        },
        {
          "q": "中立軸から距離yの位置の曲げ応力を求めたい",
          "choices": [
            "σ = My/I",
            "σ = M/W",
            "τ = SQ/(Ib)",
            "σ = N/A"
          ],
          "answer": 0,
          "expl": "任意位置の応力はMy/I。縁だけならM/Wでよい",
          "formulaRef": "f1"
        },
        {
          "q": "直径dの円形断面で最大曲げ応力を求めたい。使う断面係数は?",
          "choices": [
            "W = πd³/32",
            "W = πd⁴/64",
            "W = bh²/6",
            "W = πd²/4"
          ],
          "answer": 0,
          "expl": "円のWはπd³/32。πd⁴/64はI、πd²/4は面積。次数で見分ける",
          "formulaRef": "f7"
        },
        {
          "q": "断面二次モーメントIと縁までの距離y_maxから断面係数を作りたい",
          "choices": [
            "W = I/y_max",
            "W = I·y_max",
            "W = y_max/I",
            "W = I/2"
          ],
          "answer": 0,
          "expl": "WはIを縁距離で割ったもの。mm⁴÷mm=mm³と単位でも確認できる",
          "formulaRef": "f3"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "長方形断面の曲げ応力計算",
          "variants": [
            {
              "q": "幅b=200mm、高さh=300mmの長方形断面のはりに曲げモーメントM=45kN·mが作用する。最大曲げ応力を求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "縁応力なので $\\sigma_{max} = M/W$、長方形の $W = bh^2/6$"
                },
                {
                  "label": "② 断面係数",
                  "content": "$W = \\dfrac{200 \\times 300^2}{6} = \\dfrac{200 \\times 90000}{6} = 3.0\\times10^6$ mm³"
                },
                {
                  "label": "③ 単位換算と計算",
                  "content": "M = 45 kN·m = 45×10⁶ N·mm。$\\sigma_{max} = \\dfrac{45\\times10^6}{3.0\\times10^6} = 15$ N/mm²"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "鋼の許容応力(140N/mm²程度)より十分小さく安全。I=bh³/12=4.5×10⁸mm⁴からW=I/150=3.0×10⁶でも一致"
                }
              ],
              "answer": "σ_max = 15 N/mm²"
            },
            {
              "q": "幅b=150mm、高さh=400mmの長方形断面のはりに曲げモーメントM=80kN·mが作用する。最大曲げ応力を求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\sigma_{max} = M/W$、$W = bh^2/6$"
                },
                {
                  "label": "② 断面係数",
                  "content": "$W = \\dfrac{150 \\times 400^2}{6} = \\dfrac{150 \\times 160000}{6} = 4.0\\times10^6$ mm³"
                },
                {
                  "label": "③ 単位換算と計算",
                  "content": "M = 80×10⁶ N·mm。$\\sigma_{max} = \\dfrac{80\\times10^6}{4.0\\times10^6} = 20$ N/mm²"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "縁で±20N/mm²(上縁圧縮・下縁引張)。中立軸ではゼロの三角形分布"
                }
              ],
              "answer": "σ_max = 20 N/mm²"
            },
            {
              "q": "直径d=200mmの円形断面のはりに曲げモーメントM=30kN·mが作用する。最大曲げ応力を求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "円形断面なので $W = \\pi d^3/32$、$\\sigma_{max} = M/W$"
                },
                {
                  "label": "② 断面係数",
                  "content": "$W = \\dfrac{\\pi \\times 200^3}{32} = \\dfrac{\\pi \\times 8\\times10^6}{32} ≈ 7.85\\times10^5$ mm³"
                },
                {
                  "label": "③ 単位換算と計算",
                  "content": "M = 30×10⁶ N·mm。$\\sigma_{max} = \\dfrac{30\\times10^6}{7.85\\times10^5} ≈ 38.2$ N/mm²"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "円はWが小さめなので応力が大きくなりやすい。38N/mm²は許容内"
                }
              ],
              "answer": "σ_max ≈ 38.2 N/mm²"
            }
          ],
          "formulaRefs": [
            "f2",
            "f5",
            "f7"
          ]
        },
        {
          "id": "p2",
          "pattern": "断面二次モーメント・断面係数の計算",
          "variants": [
            {
              "q": "幅b=300mm、高さh=600mmの長方形断面のIとWを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$I = bh^3/12$、$W = bh^2/6$(またはW=I/(h/2))"
                },
                {
                  "label": "② Iの計算",
                  "content": "$I = \\dfrac{300 \\times 600^3}{12} = \\dfrac{300 \\times 2.16\\times10^8}{12} = 5.4\\times10^9$ mm⁴"
                },
                {
                  "label": "③ Wの計算",
                  "content": "$W = \\dfrac{300 \\times 600^2}{6} = \\dfrac{300 \\times 3.6\\times10^5}{6} = 1.8\\times10^7$ mm³"
                },
                {
                  "label": "④ 検算",
                  "content": "$W = I/y_{max} = 5.4\\times10^9 / 300 = 1.8\\times10^7$ mm³で一致。単位はIがmm⁴、Wがmm³"
                }
              ],
              "answer": "I = 5.4×10⁹ mm⁴、W = 1.8×10⁷ mm³"
            },
            {
              "q": "幅b=250mm、高さh=500mmの長方形断面のIとWを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$I = bh^3/12$、$W = bh^2/6$"
                },
                {
                  "label": "② Iの計算",
                  "content": "$I = \\dfrac{250 \\times 500^3}{12} = \\dfrac{250 \\times 1.25\\times10^8}{12} ≈ 2.60\\times10^9$ mm⁴"
                },
                {
                  "label": "③ Wの計算",
                  "content": "$W = \\dfrac{250 \\times 500^2}{6} = \\dfrac{250 \\times 2.5\\times10^5}{6} ≈ 1.04\\times10^7$ mm³"
                },
                {
                  "label": "④ 検算",
                  "content": "$W = I/250 = 2.60\\times10^9/250 ≈ 1.04\\times10^7$ mm³で一致"
                }
              ],
              "answer": "I ≈ 2.60×10⁹ mm⁴、W ≈ 1.04×10⁷ mm³"
            }
          ],
          "formulaRefs": [
            "f3",
            "f4",
            "f5"
          ]
        }
      ],
      "quiz": [
        {
          "q": "曲げ応力が最大になる位置は?",
          "choices": [
            "中立軸上",
            "断面の上下縁",
            "断面の中央と縁の中間",
            "どこでも同じ"
          ],
          "answer": 1,
          "expl": "σ=My/Iはyに比例。中立軸(y=0)でゼロ、縁(y=h/2)で最大",
          "sectionRef": 0
        },
        {
          "q": "中立軸の説明として正しいものは?",
          "choices": [
            "応力が最大の軸",
            "伸びも縮みもしない応力ゼロの軸",
            "せん断力がゼロの軸",
            "断面の一番下の軸"
          ],
          "answer": 1,
          "expl": "曲げの凸側は引張・凹側は圧縮、その境目が中立軸。図心を通る",
          "sectionRef": 0
        },
        {
          "q": "長方形断面の高さhを2倍にすると、Iは何倍になる?",
          "choices": [
            "2倍",
            "4倍",
            "8倍",
            "16倍"
          ],
          "answer": 2,
          "expl": "I=bh³/12はhの3乗。2³=8倍。板を縦置きにすると強い理由",
          "sectionRef": 1
        },
        {
          "q": "同じ断面積なら、曲げに最も強い(Iが大きい)のは?",
          "choices": [
            "正方形断面",
            "背の高い長方形断面(縦置き)",
            "横に寝かせた長方形断面",
            "どれも同じ"
          ],
          "answer": 1,
          "expl": "Iはy²の重みで面積を評価するので、中立軸から遠くに面積を置くほど大きい",
          "sectionRef": 1
        },
        {
          "q": "M=45kN·mをN·mmに換算すると?",
          "choices": [
            "45×10³ N·mm",
            "45×10⁶ N·mm",
            "45×10⁹ N·mm",
            "45 N·mm"
          ],
          "answer": 1,
          "expl": "kN→Nで10³倍、m→mmで10³倍、合わせて10⁶倍。単位換算ミスが失点の最大原因",
          "sectionRef": 2
        }
      ]
    },
    {
      "id": "u6",
      "title": "せん断応力",
      "weeks": "第11週",
      "priority": 3,
      "sections": [
        {
          "heading": "せん断応力の式 τ=SQ/(Ib)",
          "body": "<p>[[せん断力]]Sは断面にずれ方向の[[せん断応力]]τを生む。その分布は一様ではなく、$\\tau = \\dfrac{SQ}{Ib}$ で与えられる。Qは着目位置より外側の[[断面一次モーメント]](外側の面積×その図心までの距離)、bは着目位置の断面幅。トランプの束を曲げると1枚1枚が滑ってずれる——あのずれを防ごうとして材料内部に生じるのが水平せん断応力で、それが鉛直せん断応力と常に等しい(共役性)。</p>"
        },
        {
          "heading": "せん断応力分布は中立軸で最大の放物線",
          "body": "<p>長方形断面ではQが中立軸で最大、縁でゼロになるため、τは<b>縁でゼロ・[[中立軸]]で最大の放物線分布</b>になる。これは[[曲げ応力]](縁で最大・中立軸でゼロ)とちょうど逆の関係で、<b>「縁は曲げ、中立軸はせん断が受け持つ」</b>と覚えると整理しやすい。最大値は長方形断面で平均せん断応力(S/A)の1.5倍:$\\tau_{max} = \\dfrac{3S}{2A}$、円形断面では4/3倍になる。I形断面ではせん断のほとんどをウェブが受け持つ。</p>",
          "svg": "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='40' width='60' height='180' fill='var(--c-fill1)' stroke='var(--c-text)' stroke-width='2'/><line x1='40' y1='130' x2='330' y2='130' stroke='var(--c-line)' stroke-width='2' stroke-dasharray='6 4'/><text x='332' y='135' font-size='14' fill='var(--c-text)'>中立軸</text><line x1='200' y1='40' x2='200' y2='220' stroke='var(--c-line)' stroke-width='2'/><path d='M200,40 Q290,130 200,220' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2.5'/><line x1='200' y1='130' x2='245' y2='130' stroke='var(--c-accent)' stroke-width='2'/><text x='250' y='120' font-size='15' fill='var(--c-accent)'>τmax=3S/2A</text><text x='210' y='55' font-size='14' fill='var(--c-text)'>縁でゼロ</text><text x='210' y='215' font-size='14' fill='var(--c-text)'>縁でゼロ</text><text x='62' y='32' font-size='14' fill='var(--c-text)'>断面</text><text x='200' y='250' font-size='14' fill='var(--c-text)'>放物線分布(曲げ応力と逆)</text></svg>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "せん断応力の一般式",
          "latex": "\\tau = \\dfrac{SQ}{Ib}",
          "vars": [
            {
              "sym": "\\tau",
              "meaning": "せん断応力",
              "unit": "N/mm²"
            },
            {
              "sym": "S",
              "meaning": "せん断力",
              "unit": "N"
            },
            {
              "sym": "Q",
              "meaning": "着目位置より外側の断面一次モーメント",
              "unit": "mm³"
            },
            {
              "sym": "I",
              "meaning": "断面二次モーメント",
              "unit": "mm⁴"
            },
            {
              "sym": "b",
              "meaning": "着目位置の断面幅",
              "unit": "mm"
            }
          ],
          "when": "断面内の任意位置のせん断応力を求めるとき。I形断面のウェブ応力などにも",
          "intuition": "Qが大きい所(中立軸)ほどずれ止めの負担が大きい",
          "derivation": "微小区間の曲げ応力の差から水平方向のつりあいをとると導ける",
          "blank": "\\tau = \\dfrac{S?}{Ib}",
          "blankAnswer": "Q"
        },
        {
          "id": "f2",
          "name": "断面一次モーメントQ(長方形・中立軸)",
          "latex": "Q = \\dfrac{bh^2}{8}",
          "vars": [
            {
              "sym": "Q",
              "meaning": "中立軸に関する半断面の断面一次モーメント",
              "unit": "mm³"
            },
            {
              "sym": "b",
              "meaning": "断面幅",
              "unit": "mm"
            },
            {
              "sym": "h",
              "meaning": "断面高さ",
              "unit": "mm"
            }
          ],
          "when": "長方形断面の中立軸位置のτを τ=SQ/(Ib) で計算するとき",
          "intuition": "上半分の面積(bh/2)×その図心距離(h/4)=bh²/8",
          "derivation": "Q=A'·ȳ'。半断面A'=bh/2、図心までȳ'=h/4 を掛ける",
          "blank": "Q = \\dfrac{bh^2}{?}",
          "blankAnswer": "8"
        },
        {
          "id": "f3",
          "name": "長方形断面の最大せん断応力",
          "latex": "\\tau_{max} = \\dfrac{3S}{2A}",
          "vars": [
            {
              "sym": "\\tau_{max}",
              "meaning": "最大せん断応力(中立軸)",
              "unit": "N/mm²"
            },
            {
              "sym": "S",
              "meaning": "せん断力",
              "unit": "N"
            },
            {
              "sym": "A",
              "meaning": "断面積",
              "unit": "mm²"
            }
          ],
          "when": "長方形断面のせん断照査。平均値S/Aの1.5倍が最大値",
          "intuition": "「平均の1.5倍」。均等でなく中立軸に集中するペナルティ分",
          "derivation": "τ=SQ/(Ib)にQ=bh²/8, I=bh³/12を代入すると3S/(2bh)",
          "blank": "\\tau_{max} = \\dfrac{?S}{2A}",
          "blankAnswer": "3"
        },
        {
          "id": "f4",
          "name": "円形断面の最大せん断応力",
          "latex": "\\tau_{max} = \\dfrac{4S}{3A}",
          "vars": [
            {
              "sym": "\\tau_{max}",
              "meaning": "最大せん断応力(中立軸)",
              "unit": "N/mm²"
            },
            {
              "sym": "S",
              "meaning": "せん断力",
              "unit": "N"
            },
            {
              "sym": "A",
              "meaning": "断面積",
              "unit": "mm²"
            }
          ],
          "when": "円形断面のせん断照査。平均の4/3倍",
          "intuition": "長方形の3/2倍に対し円は4/3倍。丸い分だけ集中が緩い",
          "derivation": "τ=SQ/(Ib)を円形断面で評価した結果",
          "blank": "\\tau_{max} = \\dfrac{4S}{?A}",
          "blankAnswer": "3"
        }
      ],
      "selectQuiz": [
        {
          "q": "長方形断面のはりで中立軸位置のせん断応力を手早く求めたい",
          "choices": [
            "τ = 3S/(2A)",
            "τ = S/A",
            "σ = M/W",
            "τ = 4S/(3A)"
          ],
          "answer": 0,
          "expl": "長方形の最大せん断応力は平均の1.5倍。4S/3Aは円形断面用",
          "formulaRef": "f3"
        },
        {
          "q": "I形断面の任意の高さのせん断応力を求めたい",
          "choices": [
            "τ = SQ/(Ib)",
            "τ = 3S/(2A)",
            "σ = My/I",
            "τ = S/A"
          ],
          "answer": 0,
          "expl": "一般式SQ/(Ib)。Qは着目位置より外側の断面一次モーメント、bはその位置の幅",
          "formulaRef": "f1"
        },
        {
          "q": "τ=SQ/(Ib)のQを長方形断面の中立軸について計算したい",
          "choices": [
            "Q = bh²/8",
            "Q = bh³/12",
            "Q = bh²/6",
            "Q = bh/2"
          ],
          "answer": 0,
          "expl": "半断面(bh/2)×図心距離(h/4)=bh²/8。bh³/12はI、bh²/6はW",
          "formulaRef": "f2"
        },
        {
          "q": "円形断面のはりの最大せん断応力を求めたい",
          "choices": [
            "τ = 4S/(3A)",
            "τ = 3S/(2A)",
            "τ = S/A",
            "τ = 2S/A"
          ],
          "answer": 0,
          "expl": "円形は平均の4/3倍。長方形の3/2倍と混同しないこと",
          "formulaRef": "f4"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "長方形断面の最大せん断応力計算",
          "variants": [
            {
              "q": "幅b=200mm、高さh=300mmの長方形断面のはりにせん断力S=90kNが作用する。最大せん断応力を求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "長方形断面の最大せん断応力 $\\tau_{max} = \\dfrac{3S}{2A}$"
                },
                {
                  "label": "② 断面積",
                  "content": "$A = 200 \\times 300 = 6.0\\times10^4$ mm²。S = 90000 N"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\tau_{max} = \\dfrac{3 \\times 90000}{2 \\times 6.0\\times10^4} = \\dfrac{270000}{120000} = 2.25$ N/mm²"
                },
                {
                  "label": "④ 検算",
                  "content": "一般式でも確認:Q=bh²/8=2.25×10⁶mm³、I=bh³/12=4.5×10⁸mm⁴、τ=90000×2.25×10⁶/(4.5×10⁸×200)=2.25 N/mm²で一致"
                }
              ],
              "answer": "τ_max = 2.25 N/mm²"
            },
            {
              "q": "幅b=250mm、高さh=400mmの長方形断面のはりにせん断力S=120kNが作用する。最大せん断応力を求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\tau_{max} = \\dfrac{3S}{2A}$"
                },
                {
                  "label": "② 断面積",
                  "content": "$A = 250 \\times 400 = 1.0\\times10^5$ mm²。S = 120000 N"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\tau_{max} = \\dfrac{3 \\times 120000}{2 \\times 1.0\\times10^5} = \\dfrac{360000}{200000} = 1.8$ N/mm²"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "平均S/A=1.2N/mm²の1.5倍=1.8で整合。せん断は曲げより一桁小さいことが多い"
                }
              ],
              "answer": "τ_max = 1.8 N/mm²"
            }
          ],
          "formulaRefs": [
            "f3"
          ]
        },
        {
          "id": "p2",
          "pattern": "一般式τ=SQ/(Ib)による計算",
          "variants": [
            {
              "q": "幅b=100mm、高さh=200mmの長方形断面にせん断力S=60kNが作用する。中立軸位置のせん断応力を一般式τ=SQ/(Ib)で求めよ。",
              "steps": [
                {
                  "label": "① 各量の計算",
                  "content": "$I = \\dfrac{100 \\times 200^3}{12} = 6.67\\times10^7$ mm⁴、$Q = \\dfrac{100 \\times 200^2}{8} = 5.0\\times10^5$ mm³"
                },
                {
                  "label": "② 代入",
                  "content": "$\\tau = \\dfrac{60000 \\times 5.0\\times10^5}{6.67\\times10^7 \\times 100}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\tau = \\dfrac{3.0\\times10^{10}}{6.67\\times10^9} = 4.5$ N/mm²"
                },
                {
                  "label": "④ 検算",
                  "content": "簡便式:3S/2A = 3×60000/(2×20000) = 4.5 N/mm²で一致"
                }
              ],
              "answer": "τ = 4.5 N/mm²"
            },
            {
              "q": "幅b=150mm、高さh=300mmの長方形断面にせん断力S=135kNが作用する。中立軸位置のせん断応力を一般式で求めよ。",
              "steps": [
                {
                  "label": "① 各量の計算",
                  "content": "$I = \\dfrac{150 \\times 300^3}{12} = 3.375\\times10^8$ mm⁴、$Q = \\dfrac{150 \\times 300^2}{8} = 1.6875\\times10^6$ mm³"
                },
                {
                  "label": "② 代入",
                  "content": "$\\tau = \\dfrac{135000 \\times 1.6875\\times10^6}{3.375\\times10^8 \\times 150}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\tau = \\dfrac{2.278\\times10^{11}}{5.0625\\times10^{10}} = 4.5$ N/mm²"
                },
                {
                  "label": "④ 検算",
                  "content": "3S/2A = 3×135000/(2×45000) = 4.5 N/mm²で一致。どちらの式でも解けるように"
                }
              ],
              "answer": "τ = 4.5 N/mm²"
            }
          ],
          "formulaRefs": [
            "f1",
            "f2"
          ]
        }
      ],
      "quiz": [
        {
          "q": "長方形断面のせん断応力が最大になる位置は?",
          "choices": [
            "断面の上下縁",
            "中立軸上",
            "縁と中立軸の中間",
            "どこでも同じ"
          ],
          "answer": 1,
          "expl": "せん断応力は縁でゼロ・中立軸で最大の放物線分布。曲げ応力と逆",
          "sectionRef": 1
        },
        {
          "q": "長方形断面の最大せん断応力は平均(S/A)の何倍?",
          "choices": [
            "1倍",
            "1.5倍",
            "2倍",
            "3倍"
          ],
          "answer": 1,
          "expl": "τmax=3S/2A=1.5×(S/A)。円形なら4/3倍",
          "sectionRef": 1
        },
        {
          "q": "τ=SQ/(Ib)のQの意味は?",
          "choices": [
            "断面二次モーメント",
            "着目位置より外側の断面一次モーメント",
            "断面係数",
            "全断面積"
          ],
          "answer": 1,
          "expl": "外側面積×図心距離。中立軸で最大、縁でゼロになるためτも同じ傾向",
          "sectionRef": 0
        },
        {
          "q": "縁(断面の上下端)でせん断応力がゼロになる理由は?",
          "choices": [
            "縁より外側に面積がなくQ=0だから",
            "縁では曲げ応力が最大だから",
            "縁は自由表面で計算できないから",
            "経験則"
          ],
          "answer": 0,
          "expl": "Qは外側面積の一次モーメント。縁の外側には何もないのでQ=0→τ=0",
          "sectionRef": 1
        }
      ]
    },
    {
      "id": "u7",
      "title": "組合せ応力と断面の核",
      "weeks": "第12〜13週",
      "priority": 2,
      "sections": [
        {
          "heading": "軸力と曲げの重ね合わせ σ=N/A±M/W",
          "body": "<p>柱に[[軸力]]と[[曲げモーメント]]が同時に働くと、断面の応力は両者の単純な足し算(重ね合わせの原理)で $\\sigma = \\dfrac{N}{A} \\pm \\dfrac{M}{W}$ となる。一様分布(N/A)に三角形分布(±M/W)を上乗せするイメージで、<b>片側の縁は応力が増し、反対側は減る台形〜三角形分布</b>になる。M/WがN/Aを上回ると反対側の縁に引張が現れる。橋脚やダムのように「圧縮は強いが引張に弱い」コンクリート構造では、引張が出るかどうかが設計の分かれ目になる。</p>",
          "svg": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><text x='30' y='30' font-size='14' fill='var(--c-text)'>N/A(一様)</text><rect x='30' y='45' width='40' height='140' fill='var(--c-fill1)' stroke='var(--c-line)'/><text x='120' y='115' font-size='18' fill='var(--c-text)'>+</text><text x='150' y='30' font-size='14' fill='var(--c-text)'>±M/W(三角形)</text><polygon points='185,45 225,45 185,115' fill='var(--c-fill2)' stroke='var(--c-line)'/><polygon points='185,115 145,185 185,185' fill='var(--c-fill2)' stroke='var(--c-line)'/><text x='250' y='115' font-size='18' fill='var(--c-text)'>=</text><text x='285' y='30' font-size='14' fill='var(--c-accent)'>合成(台形)</text><polygon points='300,45 365,45 320,185 300,185' fill='var(--c-fill2)' stroke='var(--c-accent)' stroke-width='2.5'/><text x='285' y='215' font-size='14' fill='var(--c-text)'>σ=N/A±M/W</text><line x1='300' y1='45' x2='300' y2='185' stroke='var(--c-text)' stroke-width='1.5'/></svg>"
        },
        {
          "heading": "偏心荷重:ずれた圧縮は「軸力+曲げ」",
          "body": "<p>[[偏心荷重]]——図心から距離eずれた位置に働く圧縮力Nは、図心に働く軸力Nと曲げモーメント $M = N\\cdot e$ の組に置き換えられる。したがって縁応力は $\\sigma = \\dfrac{N}{A}\\left(1 \\pm \\dfrac{6e}{b}\\right)$(長方形断面、bは曲げ方向の辺長)。缶ジュースの縁を指1本で押すと反対側が浮き上がりそうになる——あれが偏心による引張である。e=b/6のとき反対側の縁応力がちょうどゼロになる。</p>"
        },
        {
          "heading": "断面の核:引張を出さない載荷範囲",
          "body": "<p>圧縮力の作用点が図心に十分近ければ断面全体が圧縮のままで、離れすぎると引張が生じる。<b>引張が生じない作用点の範囲</b>が[[断面の核]]である。長方形断面では中央の<b>ひし形(各辺方向に図心から±b/6、いわゆる「中央三分の一」)</b>、円形断面では半径d/8の円。石積みやコンクリートダムなど引張に弱い構造物では、合力の作用線を核内に収めることが設計の鉄則になる。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "組合せ応力(軸力+曲げ)",
          "latex": "\\sigma = \\dfrac{N}{A} \\pm \\dfrac{M}{W}",
          "vars": [
            {
              "sym": "N",
              "meaning": "軸力",
              "unit": "N"
            },
            {
              "sym": "A",
              "meaning": "断面積",
              "unit": "mm²"
            },
            {
              "sym": "M",
              "meaning": "曲げモーメント",
              "unit": "N·mm"
            },
            {
              "sym": "W",
              "meaning": "断面係数",
              "unit": "mm³"
            }
          ],
          "when": "柱に軸力と曲げが同時に作用するとき。両縁の応力を+側と−側で計算",
          "intuition": "一様分布+三角形分布の重ね合わせ。片縁は足し算、反対縁は引き算",
          "derivation": "線形弾性なので応力は単純に重ね合わせできる(重ね合わせの原理)",
          "blank": "\\sigma = \\dfrac{N}{A} \\pm \\dfrac{M}{?}",
          "blankAnswer": "W"
        },
        {
          "id": "f2",
          "name": "偏心荷重の縁応力(長方形断面)",
          "latex": "\\sigma = \\dfrac{N}{A}\\left(1 \\pm \\dfrac{6e}{b}\\right)",
          "vars": [
            {
              "sym": "N",
              "meaning": "偏心圧縮力",
              "unit": "N"
            },
            {
              "sym": "e",
              "meaning": "偏心距離",
              "unit": "mm"
            },
            {
              "sym": "b",
              "meaning": "偏心方向の断面辺長",
              "unit": "mm"
            },
            {
              "sym": "A",
              "meaning": "断面積",
              "unit": "mm²"
            }
          ],
          "when": "図心からeずれた圧縮力を受ける長方形断面の縁応力。基礎の接地圧でも頻出",
          "intuition": "6e/b=1(e=b/6)で片縁がゼロ。それより偏心すると引張が出る",
          "derivation": "M=N·e、W=bh²/6…ではなく偏心方向で W=hb²/6 を σ=N/A+M/W に代入して整理",
          "blank": "\\sigma = \\dfrac{N}{A}\\left(1 \\pm \\dfrac{?e}{b}\\right)",
          "blankAnswer": "6"
        },
        {
          "id": "f3",
          "name": "断面の核(長方形断面)",
          "latex": "e \\le \\dfrac{b}{6}",
          "vars": [
            {
              "sym": "e",
              "meaning": "偏心距離",
              "unit": "mm"
            },
            {
              "sym": "b",
              "meaning": "偏心方向の断面辺長",
              "unit": "mm"
            }
          ],
          "when": "「引張を生じない偏心の限界」を問われたとき。中央三分の一の法則",
          "intuition": "断面を3等分した真ん中の帯に載っていれば全断面圧縮",
          "derivation": "σ=N/A(1−6e/b)=0 となるeを求めると e=b/6",
          "blank": "e \\le \\dfrac{b}{?}",
          "blankAnswer": "6"
        },
        {
          "id": "f4",
          "name": "断面の核(円形断面)",
          "latex": "e \\le \\dfrac{d}{8}",
          "vars": [
            {
              "sym": "e",
              "meaning": "偏心距離",
              "unit": "mm"
            },
            {
              "sym": "d",
              "meaning": "直径",
              "unit": "mm"
            }
          ],
          "when": "円形断面(円柱・杭)の核の範囲を問われたとき",
          "intuition": "長方形はb/6、円はd/8。「ロクとハチ」で対で覚える",
          "derivation": "W=πd³/32、A=πd²/4 から σ=N/A−Ne/W=0 を解くと e=d/8",
          "blank": "e \\le \\dfrac{d}{?}",
          "blankAnswer": "8"
        }
      ],
      "selectQuiz": [
        {
          "q": "柱に圧縮力Nと曲げモーメントMが同時に作用。縁応力を求めたい",
          "choices": [
            "σ = N/A ± M/W",
            "σ = M/W のみ",
            "σ = N/A のみ",
            "τ = SQ/(Ib)"
          ],
          "answer": 0,
          "expl": "軸力と曲げの重ね合わせ。両縁で符号が変わる点に注意",
          "formulaRef": "f1"
        },
        {
          "q": "長方形断面の柱に偏心eの圧縮力。縁応力を一発で求めたい",
          "choices": [
            "σ = N/A(1±6e/b)",
            "σ = N/A(1±e/b)",
            "σ = M/W",
            "σ = N/A(1±8e/d)"
          ],
          "answer": 0,
          "expl": "偏心はM=N·eに置換した結果を整理した形。6e/bがキー",
          "formulaRef": "f2"
        },
        {
          "q": "長方形断面で引張応力を生じさせない偏心の限界は?",
          "choices": [
            "e = b/6",
            "e = b/2",
            "e = b/8",
            "e = b/3"
          ],
          "answer": 0,
          "expl": "核はb/6(中央三分の一)。円形はd/8",
          "formulaRef": "f3"
        },
        {
          "q": "直径dの円形断面の核の半径は?",
          "choices": [
            "d/8",
            "d/6",
            "d/4",
            "d/2"
          ],
          "answer": 0,
          "expl": "円形断面の核は半径d/8の同心円。長方形のb/6と区別",
          "formulaRef": "f4"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "軸力+曲げの組合せ応力計算",
          "variants": [
            {
              "q": "断面300mm×300mmの柱に圧縮軸力N=270kNと曲げモーメントM=54kN·mが作用する。両縁の応力を求めよ(圧縮を正とする)。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\sigma = \\dfrac{N}{A} \\pm \\dfrac{M}{W}$。$A = 300^2 = 9.0\\times10^4$ mm²、$W = \\dfrac{300\\times300^2}{6} = 4.5\\times10^6$ mm³"
                },
                {
                  "label": "② 各項の計算",
                  "content": "$\\dfrac{N}{A} = \\dfrac{270000}{9.0\\times10^4} = 3.0$ N/mm²、$\\dfrac{M}{W} = \\dfrac{54\\times10^6}{4.5\\times10^6} = 12.0$ N/mm²"
                },
                {
                  "label": "③ 重ね合わせ",
                  "content": "圧縮側縁:$3.0 + 12.0 = 15.0$ N/mm²(圧縮)。反対側縁:$3.0 - 12.0 = -9.0$ N/mm²(引張9.0)"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "M/W > N/A なので引張が出る。応力分布は中立軸が断面内に入る三角形2つの形"
                }
              ],
              "answer": "圧縮側 15.0 N/mm²、反対側 −9.0 N/mm²(引張)"
            },
            {
              "q": "断面300mm×300mmの柱に圧縮軸力N=450kNと曲げモーメントM=27kN·mが作用する。両縁の応力を求めよ(圧縮を正とする)。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\sigma = \\dfrac{N}{A} \\pm \\dfrac{M}{W}$。$A = 9.0\\times10^4$ mm²、$W = 4.5\\times10^6$ mm³"
                },
                {
                  "label": "② 各項の計算",
                  "content": "$\\dfrac{N}{A} = \\dfrac{450000}{9.0\\times10^4} = 5.0$ N/mm²、$\\dfrac{M}{W} = \\dfrac{27\\times10^6}{4.5\\times10^6} = 6.0$ N/mm²"
                },
                {
                  "label": "③ 重ね合わせ",
                  "content": "圧縮側縁:$5.0 + 6.0 = 11.0$ N/mm²。反対側縁:$5.0 - 6.0 = -1.0$ N/mm²(わずかに引張)"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "N/AとM/Wが拮抗するギリギリのケース。M/W≤N/Aなら全断面圧縮だった"
                }
              ],
              "answer": "圧縮側 11.0 N/mm²、反対側 −1.0 N/mm²(引張)"
            }
          ],
          "formulaRefs": [
            "f1"
          ]
        },
        {
          "id": "p2",
          "pattern": "偏心荷重の縁応力と核の判定",
          "variants": [
            {
              "q": "断面300mm×300mmの柱の図心から e=25mm ずれた位置に圧縮力N=180kNが作用する。両縁の応力を求め、引張が生じるか判定せよ。",
              "steps": [
                {
                  "label": "① 核の判定",
                  "content": "核の限界は $b/6 = 300/6 = 50$ mm。e=25mm < 50mm なので引張は生じないはず"
                },
                {
                  "label": "② 式の選択",
                  "content": "$\\sigma = \\dfrac{N}{A}\\left(1 \\pm \\dfrac{6e}{b}\\right)$。$\\dfrac{N}{A} = \\dfrac{180000}{9.0\\times10^4} = 2.0$ N/mm²、$\\dfrac{6e}{b} = \\dfrac{150}{300} = 0.5$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\sigma = 2.0(1+0.5) = 3.0$ N/mm²、$\\sigma = 2.0(1-0.5) = 1.0$ N/mm²"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "両縁とも圧縮(正)で核内載荷の判定と整合。台形分布になる"
                }
              ],
              "answer": "σ = 3.0 N/mm² と 1.0 N/mm²(全断面圧縮、引張なし)"
            },
            {
              "q": "断面300mm×300mmの柱の図心から e=75mm ずれた位置に圧縮力N=180kNが作用する。両縁の応力を求め、引張が生じるか判定せよ。",
              "steps": [
                {
                  "label": "① 核の判定",
                  "content": "$b/6 = 50$ mm < e=75mm。核の外なので引張が生じるはず"
                },
                {
                  "label": "② 式の選択",
                  "content": "$\\dfrac{N}{A} = 2.0$ N/mm²、$\\dfrac{6e}{b} = \\dfrac{450}{300} = 1.5$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\sigma = 2.0(1+1.5) = 5.0$ N/mm²(圧縮)、$\\sigma = 2.0(1-1.5) = -1.0$ N/mm²(引張)"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "e>b/6の判定どおり引張発生。コンクリートなら設計変更が必要なケース"
                }
              ],
              "answer": "σ = 5.0 N/mm²(圧縮)と −1.0 N/mm²(引張が生じる)"
            }
          ],
          "formulaRefs": [
            "f2",
            "f3"
          ]
        }
      ],
      "quiz": [
        {
          "q": "組合せ応力σ=N/A±M/Wの応力分布の形は?",
          "choices": [
            "常に一様分布",
            "一様分布+三角形分布=台形(または三角形2つ)",
            "放物線分布",
            "常に三角形分布"
          ],
          "answer": 1,
          "expl": "一様なN/Aに直線分布のM/Wを重ねるので台形。M/W>N/Aなら符号が変わる",
          "sectionRef": 0
        },
        {
          "q": "断面の核の意味として正しいものは?",
          "choices": [
            "断面の最も硬い部分",
            "圧縮合力がその中にあれば引張が生じない範囲",
            "せん断応力が最大の領域",
            "断面の図心そのもの"
          ],
          "answer": 1,
          "expl": "核内載荷なら全断面圧縮。引張に弱い材料の設計で重要",
          "sectionRef": 2
        },
        {
          "q": "長方形断面(辺長b)の核の範囲は図心から?",
          "choices": [
            "±b/2",
            "±b/3",
            "±b/6",
            "±b/8"
          ],
          "answer": 2,
          "expl": "±b/6、あわせて中央のb/3の帯=「中央三分の一の法則」。円はd/8",
          "sectionRef": 2
        },
        {
          "q": "偏心距離eの圧縮力Nが作る曲げモーメントは?",
          "choices": [
            "M = N/e",
            "M = N·e",
            "M = N·e²",
            "M = e/N"
          ],
          "answer": 1,
          "expl": "力×腕の長さ。偏心荷重=図心軸力N+曲げM=N·e に分解するのが出発点",
          "sectionRef": 1
        }
      ]
    },
    {
      "id": "u8",
      "title": "不静定ばりの解法(変位適合条件)",
      "weeks": "第14〜15週",
      "priority": 3,
      "sections": [
        {
          "heading": "不静定ばりはなぜ解けないか、どう解くか",
          "body": "<p>片持ちばりの先端をさらに支点で支えた「プロップ付き片持ちばり」は、反力が4つ(固定端3+ローラー1)に対しつりあい式は3本。[[不静定構造]]である。解く鍵は軸力部材と同じ[[変位適合条件]]:<b>①余分な支点(余力)を外して静定基本形にする → ②荷重によるその点のたわみδ₀を計算 → ③外した反力Rを荷重として単独で載せたたわみδ₁を計算 → ④実際はその点のたわみがゼロだから δ₀+Rδ₁=0 でRが決まる</b>。3人で持っていた荷物を2人で持たせてみて、3人目がどれだけ支えていたか逆算するイメージである。</p>",
          "svg": "<svg viewBox='0 0 400 270' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='12' height='55' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='52' y1='58' x2='230' y2='58' stroke='var(--c-text)' stroke-width='4'/><circle cx='230' cy='70' r='8' fill='none' stroke='var(--c-line)' stroke-width='2'/><line x1='216' y1='82' x2='244' y2='82' stroke='var(--c-line)' stroke-width='2'/><text x='70' y='40' font-size='14' fill='var(--c-text)'>w(等分布)</text><line x1='70' y1='44' x2='210' y2='44' stroke='var(--c-accent)' stroke-width='2'/><line x1='90' y1='44' x2='90' y2='54' stroke='var(--c-accent)' stroke-width='1.5'/><line x1='130' y1='44' x2='130' y2='54' stroke='var(--c-accent)' stroke-width='1.5'/><line x1='170' y1='44' x2='170' y2='54' stroke='var(--c-accent)' stroke-width='1.5'/><line x1='205' y1='44' x2='205' y2='54' stroke='var(--c-accent)' stroke-width='1.5'/><text x='255' y='62' font-size='14' fill='var(--c-text)'>不静定(1次)</text><text x='40' y='125' font-size='14' fill='var(--c-text)'>= 支点を外す(δ₀) + 反力Rだけ載せる(δ₁)</text><line x1='52' y1='160' x2='230' y2='160' stroke='var(--c-text)' stroke-width='3'/><rect x='40' y='133' width='12' height='55' fill='var(--c-fill1)' stroke='var(--c-line)'/><path d='M52,160 Q170,195 230,200' fill='none' stroke='var(--c-accent)' stroke-width='2' stroke-dasharray='5 3'/><text x='238' y='202' font-size='14' fill='var(--c-accent)'>δ₀</text><line x1='52' y1='230' x2='230' y2='230' stroke='var(--c-text)' stroke-width='3'/><rect x='40' y='203' width='12' height='55' fill='var(--c-fill1)' stroke='var(--c-line)'/><line x1='230' y1='262' x2='230' y2='236' stroke='var(--c-accent)' stroke-width='2.5'/><polygon points='230,230 223,244 237,244' fill='var(--c-accent)'/><text x='240' y='250' font-size='14' fill='var(--c-accent)'>R(δ₀+Rδ₁=0)</text></svg>"
        },
        {
          "heading": "代表例:プロップ付き片持ちばり(等分布荷重)",
          "body": "<p>全長に等分布荷重wを受けるプロップ付き[[片持ちばり]]で先端支点反力Rを求めよう。支点を外した片持ちばりの先端たわみは $\\delta_0 = \\dfrac{wL^4}{8EI}$(下向き)。先端に上向きRを載せたたわみは $\\delta_1 = \\dfrac{RL^3}{3EI}$(上向き)。適合条件 $\\delta_0 = \\delta_1$ より $R = \\dfrac{3wL}{8}$。<b>たわみ公式(u3で暗記したもの)がそのまま部品になる</b>ことが分かる。残りの反力は通常のつりあいで求まり、固定端モーメントは $wL^2/8$ になる。</p>"
        },
        {
          "heading": "解けたら断面力図まで描く",
          "body": "<p>反力が全部求まれば、あとは[[静定構造]]と同じ手順でS図・M図が描ける。プロップ付き片持ちばり(等分布)では、<b>スパン中間に正の曲げの極大、固定端に負の曲げ($-wL^2/8$)</b>が現れ、単純ばりとも片持ちばりとも違う分布になる。不静定構造は「荷重を複数の経路で分担する」ため一般に断面力が小さくなり経済的だが、支点沈下や温度変化でも応力が発生する敏感さも持つ。設計でどちらを選ぶかはこのトレードオフで決まる。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "不静定ばりの変位適合条件",
          "latex": "\\delta_0 + R\\,\\delta_1 = 0",
          "vars": [
            {
              "sym": "\\delta_0",
              "meaning": "余力を外した静定系での荷重によるたわみ",
              "unit": "m"
            },
            {
              "sym": "R",
              "meaning": "余分な支点反力(余力)",
              "unit": "kN"
            },
            {
              "sym": "\\delta_1",
              "meaning": "単位反力(R=1)によるたわみ",
              "unit": "m/kN"
            }
          ],
          "when": "1次不静定ばりを解くとき。余力を外す→2つのたわみを計算→合計ゼロ",
          "intuition": "支点がある以上その点は動けない。荷重のたわみを反力がちょうど打ち消す",
          "derivation": "重ね合わせの原理:実際のたわみ=荷重分+反力分=0(支点だから)",
          "blank": "\\delta_0 + R\\,\\delta_1 = ?",
          "blankAnswer": "0"
        },
        {
          "id": "f2",
          "name": "プロップ付き片持ちばり(等分布)の先端反力",
          "latex": "R = \\dfrac{3wL}{8}",
          "vars": [
            {
              "sym": "R",
              "meaning": "先端支点の反力",
              "unit": "kN"
            },
            {
              "sym": "w",
              "meaning": "等分布荷重",
              "unit": "kN/m"
            },
            {
              "sym": "L",
              "meaning": "スパン",
              "unit": "m"
            }
          ],
          "when": "等分布荷重のプロップ付き片持ちばり。適合条件の代表的な結果として暗記推奨",
          "intuition": "全荷重wLの3/8を先端支点、5/8を固定端が受け持つ",
          "derivation": "wL⁴/8EI = RL³/3EI を解くと R=3wL/8",
          "blank": "R = \\dfrac{?wL}{8}",
          "blankAnswer": "3"
        },
        {
          "id": "f3",
          "name": "プロップ付き片持ちばり(中央集中P)の先端反力",
          "latex": "R = \\dfrac{5P}{16}",
          "vars": [
            {
              "sym": "R",
              "meaning": "先端支点の反力",
              "unit": "kN"
            },
            {
              "sym": "P",
              "meaning": "スパン中央の集中荷重",
              "unit": "kN"
            }
          ],
          "when": "中央集中荷重のプロップ付き片持ちばり。固定端モーメントは3PL/16",
          "intuition": "Pの5/16を先端、11/16を固定端が分担。固定側が多めに受け持つ",
          "derivation": "中央集中による先端たわみ 5PL³/48EI と RL³/3EI を等置して解く",
          "blank": "R = \\dfrac{5P}{?}",
          "blankAnswer": "16"
        }
      ],
      "selectQuiz": [
        {
          "q": "プロップ付き片持ちばり(1次不静定)の先端支点反力を求めたい。最初にすることは?",
          "choices": [
            "支点を外して静定基本形を作り、たわみを重ね合わせる",
            "つりあい式を4本立てる",
            "断面係数を計算する",
            "モーメント分配法を使う"
          ],
          "answer": 0,
          "expl": "余力法の第一歩は余分な支点を外すこと。たわみの適合条件δ₀+Rδ₁=0で解く",
          "formulaRef": "f1"
        },
        {
          "q": "等分布荷重wを受けるプロップ付き片持ちばりの先端反力は?",
          "choices": [
            "R = 3wL/8",
            "R = wL/2",
            "R = 5wL/8",
            "R = wL/4"
          ],
          "answer": 0,
          "expl": "wL⁴/8EI=RL³/3EIから3wL/8。固定端側が5wL/8を受け持つ",
          "formulaRef": "f2"
        },
        {
          "q": "適合条件式に使うδ₀(荷重による先端たわみ)は、等分布荷重の片持ちばりなら?",
          "choices": [
            "wL⁴/8EI",
            "5wL⁴/384EI",
            "PL³/3EI",
            "wL³/24EI"
          ],
          "answer": 0,
          "expl": "支点を外せばただの片持ちばり。u3の公式wL⁴/8EIがそのまま部品になる",
          "formulaRef": "f1"
        },
        {
          "q": "中央集中荷重Pのプロップ付き片持ちばりの先端反力は?",
          "choices": [
            "R = 5P/16",
            "R = P/2",
            "R = 3P/8",
            "R = 11P/16"
          ],
          "answer": 0,
          "expl": "5P/16。残り11P/16と固定端モーメント3PL/16は固定端が負担",
          "formulaRef": "f3"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "プロップ付き片持ちばり(等分布)の反力計算",
          "variants": [
            {
              "q": "スパンL=4mのプロップ付き片持ちばり(固定端A・先端ローラーB)全長に等分布荷重w=8kN/mが作用する。先端反力R_B、固定端の鉛直反力V_Aと固定端モーメントM_Aを求めよ。",
              "steps": [
                {
                  "label": "① 適合条件で余力を解く",
                  "content": "Bを外した片持ちばりの先端たわみ $\\delta_0 = \\dfrac{wL^4}{8EI}$、R_Bによる上向きたわみ $\\delta_1 = \\dfrac{R_B L^3}{3EI}$。等置して $R_B = \\dfrac{3wL}{8} = \\dfrac{3\\times8\\times4}{8} = 12$ kN"
                },
                {
                  "label": "② 鉛直つりあい",
                  "content": "$V_A = wL - R_B = 32 - 12 = 20$ kN"
                },
                {
                  "label": "③ モーメントつりあい",
                  "content": "A点まわり:$M_A = \\dfrac{wL^2}{2} - R_B L = \\dfrac{8\\times16}{2} - 12\\times4 = 64 - 48 = 16$ kN·m"
                },
                {
                  "label": "④ 検算",
                  "content": "公式 $M_A = wL^2/8 = 8\\times16/8 = 16$ kN·m と一致。反力合計 12+20=32=wL でOK"
                }
              ],
              "answer": "R_B = 12 kN、V_A = 20 kN、M_A = 16 kN·m"
            },
            {
              "q": "スパンL=6mのプロップ付き片持ちばり全長に等分布荷重w=12kN/mが作用する。先端反力R_B、固定端の鉛直反力V_Aと固定端モーメントM_Aを求めよ。",
              "steps": [
                {
                  "label": "① 適合条件で余力を解く",
                  "content": "$R_B = \\dfrac{3wL}{8} = \\dfrac{3\\times12\\times6}{8} = 27$ kN"
                },
                {
                  "label": "② 鉛直つりあい",
                  "content": "$V_A = wL - R_B = 72 - 27 = 45$ kN"
                },
                {
                  "label": "③ モーメントつりあい",
                  "content": "$M_A = \\dfrac{wL^2}{2} - R_B L = \\dfrac{12\\times36}{2} - 27\\times6 = 216 - 162 = 54$ kN·m"
                },
                {
                  "label": "④ 検算",
                  "content": "$wL^2/8 = 12\\times36/8 = 54$ kN·m と一致。反力合計 27+45=72=wL"
                }
              ],
              "answer": "R_B = 27 kN、V_A = 45 kN、M_A = 54 kN·m"
            }
          ],
          "formulaRefs": [
            "f1",
            "f2"
          ]
        },
        {
          "id": "p2",
          "pattern": "プロップ付き片持ちばり(中央集中)の反力計算",
          "variants": [
            {
              "q": "スパンL=4mのプロップ付き片持ちばり(固定端A・先端ローラーB)の中央に集中荷重P=32kNが作用する。先端反力R_Bと固定端モーメントM_Aを求めよ。",
              "steps": [
                {
                  "label": "① 適合条件で余力を解く",
                  "content": "中央集中Pによる(支点を外した)先端たわみは $\\dfrac{5PL^3}{48EI}$。$\\dfrac{5PL^3}{48EI} = \\dfrac{R_B L^3}{3EI}$ より $R_B = \\dfrac{5P}{16} = \\dfrac{5\\times32}{16} = 10$ kN"
                },
                {
                  "label": "② 鉛直つりあい",
                  "content": "$V_A = P - R_B = 32 - 10 = 22$ kN"
                },
                {
                  "label": "③ モーメントつりあい",
                  "content": "$M_A = P\\times\\dfrac{L}{2} - R_B L = 32\\times2 - 10\\times4 = 64 - 40 = 24$ kN·m"
                },
                {
                  "label": "④ 検算",
                  "content": "公式 $M_A = 3PL/16 = 3\\times32\\times4/16 = 24$ kN·m と一致"
                }
              ],
              "answer": "R_B = 10 kN、V_A = 22 kN、M_A = 24 kN·m"
            },
            {
              "q": "スパンL=6mのプロップ付き片持ちばりの中央に集中荷重P=48kNが作用する。先端反力R_Bと固定端モーメントM_Aを求めよ。",
              "steps": [
                {
                  "label": "① 適合条件で余力を解く",
                  "content": "$R_B = \\dfrac{5P}{16} = \\dfrac{5\\times48}{16} = 15$ kN"
                },
                {
                  "label": "② 鉛直つりあい",
                  "content": "$V_A = 48 - 15 = 33$ kN"
                },
                {
                  "label": "③ モーメントつりあい",
                  "content": "$M_A = P\\times\\dfrac{L}{2} - R_B L = 48\\times3 - 15\\times6 = 144 - 90 = 54$ kN·m"
                },
                {
                  "label": "④ 検算",
                  "content": "$3PL/16 = 3\\times48\\times6/16 = 54$ kN·m と一致。反力合計15+33=48=P"
                }
              ],
              "answer": "R_B = 15 kN、V_A = 33 kN、M_A = 54 kN·m"
            }
          ],
          "formulaRefs": [
            "f1",
            "f3"
          ]
        }
      ],
      "quiz": [
        {
          "q": "プロップ付き片持ちばりが1次不静定である理由は?",
          "choices": [
            "反力4つに対しつりあい式が3本だから",
            "荷重が大きいから",
            "スパンが長いから",
            "材料が弾性だから"
          ],
          "answer": 0,
          "expl": "固定端3成分+ローラー1成分=4未知数、式は3本。差の1が不静定次数",
          "sectionRef": 0
        },
        {
          "q": "余力法(変位適合条件による方法)の手順として正しいものは?",
          "choices": [
            "余分な支点を外し、荷重と反力それぞれのたわみを重ね、支点位置でゼロとおく",
            "全支点を外して自由落下させる",
            "つりあい式を増やす",
            "断面を大きくする"
          ],
          "answer": 0,
          "expl": "δ₀+Rδ₁=0。静定系のたわみ公式が部品として使えるのがポイント",
          "sectionRef": 0
        },
        {
          "q": "不静定構造の長所は?",
          "choices": [
            "計算が簡単",
            "荷重を複数経路で分担し断面力が小さくなる",
            "支点沈下の影響を受けない",
            "温度変化で応力が出ない"
          ],
          "answer": 1,
          "expl": "分担効果で経済的。ただし支点沈下や温度変化でも応力が出る敏感さがある",
          "sectionRef": 2
        },
        {
          "q": "等分布荷重のプロップ付き片持ちばりで、全荷重wLのうち固定端が受け持つ割合は?",
          "choices": [
            "3/8",
            "1/2",
            "5/8",
            "全部"
          ],
          "answer": 2,
          "expl": "先端が3wL/8なので固定端は5wL/8。固定端の方が「硬い」ので多く受け持つ",
          "sectionRef": 1
        }
      ]
    },
    {
      "id": "u9",
      "title": "ねじり部材:トルク・ねじり角・せん断応力",
      "weeks": "補強:教科書4章",
      "priority": 2,
      "sections": [
        {
          "heading": "ねじりは軸力部材の回転版",
          "body": "<p>[[ねじりモーメント]]Tを受ける部材では、断面が部材軸まわりに少しずつ回転し、その回転量を[[ねじり角]]$\\phi$で表す。軸力部材で $N=EA\\,du/dx$ と書いたのと同じ構造で、ねじり部材では $$T=GJ\\dfrac{d\\phi}{dx}$$ となる。対応関係は <b>変位$u$→回転$\\phi$、軸力$N$→ねじりモーメント$T$、伸び剛性$EA$→[[ねじり剛性]]$GJ$</b>。形が似ていると分かると、微分方程式や境界条件を丸暗記しなくて済む。</p>"
        },
        {
          "heading": "円形断面では外側ほどせん断応力が大きい",
          "body": "<p>円形断面がねじられると、断面内には円周方向のせん断応力$\\tau$が生じる。中心から距離$r$の点では $$\\tau=\\dfrac{Tr}{J}$$ となり、中心では0、外周$r=R$で最大になる。ここでJは[[極断面二次モーメント]]で、充実円なら $J=\\pi d^4/32$。曲げ応力が中立軸から離れるほど大きいのと同じ感覚で、ねじり応力は中心から離れるほど大きい。丸棒やシャフトの設計では、まず外周の$\\tau_{max}$を見る。</p>",
          "svg": "<svg viewBox='0 0 420 260' xmlns='http://www.w3.org/2000/svg'><circle cx='145' cy='130' r='82' fill='var(--c-fill1)' stroke='var(--c-text)' stroke-width='3'/><line x1='145' y1='130' x2='225' y2='130' stroke='var(--c-line)' stroke-width='2'/><line x1='145' y1='130' x2='195' y2='95' stroke='var(--c-accent)' stroke-width='3'/><text x='170' y='92' font-size='15' fill='var(--c-accent)'>r</text><path d='M250 70 C300 75 315 105 303 137 C291 170 250 185 218 166' fill='none' stroke='var(--c-accent)' stroke-width='4'/><polygon points='214,162 232,160 221,176' fill='var(--c-accent)'/><text x='275' y='70' font-size='17' fill='var(--c-accent)'>T</text><text x='50' y='232' font-size='15' fill='var(--c-text)'>中心: τ=0</text><text x='210' y='232' font-size='15' fill='var(--c-text)'>外周: τmax=TR/J</text><line x1='305' y1='205' x2='380' y2='120' stroke='var(--c-accent)' stroke-width='3'/><text x='318' y='188' font-size='14' fill='var(--c-text)'>τはrに比例</text></svg>"
        },
        {
          "heading": "設計では強さとねじれ量を両方見る",
          "body": "<p>ねじり部材の確認は2段階で考える。1つ目は<b>強さ</b>で、外周最大応力 $\\tau_{max}=TR/J$ が許容せん断応力以下かを見る。2つ目は<b>使いやすさ</b>で、ねじり角 $\\phi=TL/(GJ)$ が大きすぎないかを見る。強度だけ満たしても、軸が大きくねじれると機械部材や橋梁付属部材では支障が出る。曲げ部材で「応力」と「たわみ」を両方見るのと同じ構図で、ねじりでは「せん断応力」と「ねじり角」がペアになる。</p>"
        }
      ],
      "formulas": [
        {
          "id": "f1",
          "name": "ねじりモーメントのつり合い微分式",
          "latex": "\\dfrac{dT}{dx}=-m_T(x)",
          "vars": [
            {
              "sym": "T",
              "meaning": "ねじりモーメント",
              "unit": "kN·m"
            },
            {
              "sym": "m_T(x)",
              "meaning": "単位長さあたりの分布トルク",
              "unit": "kN·m/m"
            }
          ],
          "when": "分布トルクを受ける軸のT図を作るとき。分布トルクがなければTは一定",
          "intuition": "はりの dQ/dx=-w と同じで、分布荷重が断面力の傾きを決める",
          "derivation": "微小区間dxのねじりモーメントのつり合いから得る",
          "blank": "\\dfrac{dT}{dx}=-?",
          "blankAnswer": "m_T(x)"
        },
        {
          "id": "f2",
          "name": "ねじりモーメントとねじり角の関係",
          "latex": "T=GJ\\dfrac{d\\phi}{dx}",
          "vars": [
            {
              "sym": "G",
              "meaning": "せん断弾性係数",
              "unit": "N/mm²"
            },
            {
              "sym": "J",
              "meaning": "極断面二次モーメント",
              "unit": "mm⁴"
            },
            {
              "sym": "\\phi",
              "meaning": "ねじり角",
              "unit": "rad"
            }
          ],
          "when": "Tからねじり角を求めるとき。軸力の N=EA du/dx に対応",
          "intuition": "同じTでもGJが大きいほどねじれにくい",
          "derivation": "円形断面のせん断ひずみとせん断応力の関係を断面全体で積分して得る",
          "blank": "T=?\\dfrac{d\\phi}{dx}",
          "blankAnswer": "GJ"
        },
        {
          "id": "f3",
          "name": "一様ねじりのねじり角",
          "latex": "\\phi=\\dfrac{TL}{GJ}",
          "vars": [
            {
              "sym": "L",
              "meaning": "部材長",
              "unit": "m または mm"
            }
          ],
          "when": "T,G,Jが一定の円形軸で、端部のねじり角を求めるとき",
          "intuition": "長いほどねじれ、トルクが大きいほどねじれ、GJが大きいほどねじれにくい",
          "derivation": "T=GJ dφ/dx を0からLまで積分する",
          "blank": "\\phi=\\dfrac{T?}{GJ}",
          "blankAnswer": "L"
        },
        {
          "id": "f4",
          "name": "円形断面のねじりせん断応力",
          "latex": "\\tau=\\dfrac{Tr}{J},\\quad \\tau_{max}=\\dfrac{TR}{J}",
          "vars": [
            {
              "sym": "r",
              "meaning": "中心からの距離",
              "unit": "mm"
            },
            {
              "sym": "R",
              "meaning": "外半径",
              "unit": "mm"
            }
          ],
          "when": "円形軸の任意半径位置のせん断応力、または外周最大応力を求めるとき",
          "intuition": "中心はねじれても距離がないのでτ=0。外側ほど大きい",
          "derivation": "せん断ひずみが半径rに比例し、断面全体の合モーメントがTになるように積分する",
          "blank": "\\tau=\\dfrac{T?}{J}",
          "blankAnswer": "r"
        },
        {
          "id": "f5",
          "name": "充実円断面のJと最大ねじり応力",
          "latex": "J=\\dfrac{\\pi d^4}{32},\\quad \\tau_{max}=\\dfrac{16T}{\\pi d^3}",
          "vars": [
            {
              "sym": "d",
              "meaning": "直径",
              "unit": "mm"
            }
          ],
          "when": "丸棒・円形シャフトのねじり応力を一発で求めたいとき",
          "intuition": "直径は3乗で応力に効く。少し太くするとねじりにかなり強くなる",
          "derivation": "J=πd⁴/32 と R=d/2 を τmax=TR/J に代入する",
          "blank": "J=\\dfrac{\\pi d^4}{?}",
          "blankAnswer": "32"
        }
      ],
      "selectQuiz": [
        {
          "q": "ねじりモーメントTから部材端のねじり角φを求めたい。対応する剛性はどれ?",
          "choices": [
            "GJ",
            "EA",
            "EI",
            "GA"
          ],
          "answer": 0,
          "expl": "ねじりの剛性はGJ。軸力のEA、曲げのEIと対応させて覚える",
          "formulaRef": "f2"
        },
        {
          "q": "円形断面のねじりせん断応力分布として正しいものは?",
          "choices": [
            "中心で0、外周で最大",
            "中心で最大、外周で0",
            "全断面で一定",
            "上縁だけに生じる"
          ],
          "answer": 0,
          "expl": "τ=Tr/Jなので半径rに比例する。外周r=Rでτmax",
          "formulaRef": "f4"
        },
        {
          "q": "充実円断面の極断面二次モーメントJを求めたい",
          "choices": [
            "J=πd⁴/32",
            "I=πd⁴/64",
            "W=πd³/32",
            "A=πd²/4"
          ],
          "answer": 0,
          "expl": "ねじりはJ=πd⁴/32。曲げのI=πd⁴/64の2倍になる",
          "formulaRef": "f5"
        },
        {
          "q": "分布トルクがない区間のT図はどうなる?",
          "choices": [
            "一定",
            "直線的に増える",
            "放物線になる",
            "必ずゼロになる"
          ],
          "answer": 0,
          "expl": "dT/dx=-mT。mT=0ならdT/dx=0なのでTは一定",
          "formulaRef": "f1"
        }
      ],
      "problems": [
        {
          "id": "p1",
          "pattern": "一様ねじりのねじり角計算",
          "variants": [
            {
              "q": "長さL=2m、ねじり剛性GJ=4000kN·m²の丸棒に一定トルクT=6kN·mが作用する。端部のねじり角φを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "T,GJが一定なので $\\phi=\\dfrac{TL}{GJ}$ を使う"
                },
                {
                  "label": "② 代入",
                  "content": "$\\phi=\\dfrac{6\\times2}{4000}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\phi=0.003$ rad"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "radは無次元角度。GJが大きいので小さな回転角になる"
                }
              ],
              "answer": "φ = 0.003 rad"
            },
            {
              "q": "長さL=3m、ねじり剛性GJ=9000kN·m²の丸棒に一定トルクT=12kN·mが作用する。端部のねじり角φを求めよ。",
              "steps": [
                {
                  "label": "① 式の選択",
                  "content": "$\\phi=TL/(GJ)$"
                },
                {
                  "label": "② 代入",
                  "content": "$\\phi=\\dfrac{12\\times3}{9000}$"
                },
                {
                  "label": "③ 計算",
                  "content": "$\\phi=0.004$ rad"
                },
                {
                  "label": "④ 妥当性確認",
                  "content": "LとTが大きいほどφは増え、GJが大きいほどφは減る"
                }
              ],
              "answer": "φ = 0.004 rad"
            }
          ],
          "formulaRefs": [
            "f2",
            "f3"
          ]
        },
        {
          "id": "p2",
          "pattern": "充実円断面の最大ねじり応力",
          "variants": [
            {
              "q": "直径d=80mmの充実円断面軸にトルクT=2.0kN·mが作用する。最大ねじりせん断応力τmaxを求めよ。",
              "steps": [
                {
                  "label": "① 単位換算",
                  "content": "$T=2.0$ kN·m $=2.0\\times10^6$ N·mm"
                },
                {
                  "label": "② 式の選択",
                  "content": "充実円なので $\\tau_{max}=\\dfrac{16T}{\\pi d^3}$"
                },
                {
                  "label": "③ 代入",
                  "content": "$\\tau_{max}=\\dfrac{16\\times2.0\\times10^6}{\\pi\\times80^3}$"
                },
                {
                  "label": "④ 計算",
                  "content": "$\\tau_{max}\\approx19.9$ N/mm²。中心では0、外周でこの値になる"
                }
              ],
              "answer": "τmax ≈ 19.9 N/mm²"
            },
            {
              "q": "直径d=100mmの充実円断面軸にトルクT=3.0kN·mが作用する。最大ねじりせん断応力τmaxを求めよ。",
              "steps": [
                {
                  "label": "① 単位換算",
                  "content": "$T=3.0\\times10^6$ N·mm"
                },
                {
                  "label": "② 式の選択",
                  "content": "$\\tau_{max}=16T/(\\pi d^3)$"
                },
                {
                  "label": "③ 代入",
                  "content": "$\\tau_{max}=\\dfrac{16\\times3.0\\times10^6}{\\pi\\times100^3}$"
                },
                {
                  "label": "④ 計算",
                  "content": "$\\tau_{max}\\approx15.3$ N/mm²。直径が大きいので、Tが大きくても応力は下がる"
                }
              ],
              "answer": "τmax ≈ 15.3 N/mm²"
            }
          ],
          "formulaRefs": [
            "f4",
            "f5"
          ]
        }
      ],
      "quiz": [
        {
          "q": "ねじり部材でT=GJ dφ/dxに対応する軸力部材の式は?",
          "choices": [
            "N=EA du/dx",
            "M=EI d²v/dx²",
            "Q=dM/dx",
            "σ=N/A"
          ],
          "answer": 0,
          "expl": "ねじりは軸力部材の回転版。u→φ、N→T、EA→GJと対応する",
          "sectionRef": 0
        },
        {
          "q": "円形軸のねじり応力が最大になる位置は?",
          "choices": [
            "中心",
            "外周",
            "半径の半分",
            "どこでも同じ"
          ],
          "answer": 1,
          "expl": "τ=Tr/Jなのでrが最大の外周で最大",
          "sectionRef": 1
        },
        {
          "q": "充実円断面で、ねじりに使うJと曲げに使うIの関係は?",
          "choices": [
            "J=2I",
            "J=I/2",
            "J=I",
            "J=I²"
          ],
          "answer": 0,
          "expl": "充実円ではJ=πd⁴/32、I=πd⁴/64なのでJ=2I",
          "sectionRef": 1
        },
        {
          "q": "ねじりの設計で確認する組み合わせとして自然なものは?",
          "choices": [
            "せん断応力とねじり角",
            "曲げ応力とたわみだけ",
            "軸応力と座屈長だけ",
            "水圧と流量"
          ],
          "answer": 0,
          "expl": "強さはτmax、使いやすさはφで見る。曲げの応力・たわみのペアに対応する",
          "sectionRef": 2
        }
      ]
    }
  ]
};
