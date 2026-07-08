window.STUDY_DATA = window.STUDY_DATA || {};
(function(){
  const DATA = window.STUDY_DATA;
  const LEVEL_BY_INDEX = ["basic", "standard", "advanced"];
  function unit(sid, uid){
    return DATA[sid]?.units?.find(u => u.id === uid);
  }
  function tagExisting(){
    Object.values(DATA).forEach(subject => {
      (subject.units || []).forEach(u => {
        (u.problems || []).forEach((p, i) => {
          if(!p.level) p.level = LEVEL_BY_INDEX[Math.min(i, 2)];
          if(!p.source) p.source = "既存演習";
        });
      });
    });
  }
  function addProblem(sid, uid, problem){
    const u = unit(sid, uid);
    if(!u) return;
    u.problems = u.problems || [];
    if(!u.problems.some(p => p.id === problem.id)) u.problems.push(problem);
  }
  function addConcept(sid, uid, concept){
    const u = unit(sid, uid);
    if(!u) return;
    u.concepts = u.concepts || [];
    if(!u.concepts.some(c => c.id === concept.id)) u.concepts.push(concept);
  }

  tagExisting();

  addConcept("suiri1", "u3", {
    id: "hydro_pressure_triangle",
    type: "hydroPressure",
    kind: "操作図",
    level: "standard",
    title: "静水圧の三角分布と圧力中心",
    description: "水深を変えると、圧力分布・全水圧・作用点が同時に変わります。図心より作用点が深くなる理由を目で確認します。",
    equation: "$P=\\gamma h_G A$, $h_R=h_G+I_G/(h_G A)$",
    controls: [
      { key: "H", label: "ゲート高さ H", value: 4, min: 1, max: 8, step: 0.1, unit: "m" },
      { key: "gamma", label: "単位体積重量 γ", value: 9.8, min: 7, max: 13, step: 0.1, unit: "kN/m3" },
      { key: "b", label: "幅 b", value: 2, min: 0.5, max: 5, step: 0.1, unit: "m" }
    ]
  });

  addProblem("suiri1", "u3", {
    id: "adv_submerged_rect_gate",
    level: "advanced",
    source: "水理学レジュメ",
    pattern: "水面下に沈んだ矩形ゲートの全水圧と圧力中心",
    goal: "図心の深さで合力を求め、圧力中心だけは断面二次モーメントで補正する。",
    reading: "圧力分布は台形だが、合力は P=γhG A で求められる。",
    trap: "上端が水面にある三角分布の公式 hR=2H/3 をそのまま使わない。",
    formulaRefs: ["f1", "f2", "f3"],
    variants: [
      {
        q: "幅 $b=2.4$ m、高さ $H=3.0$ m の鉛直長方形ゲートがあり、上端は水面下 $1.5$ m にある。水の $\\gamma=9.8$ kN/m³ として、全水圧 $P$ と水面からの圧力中心深さ $h_R$ を求めよ。",
        steps: [
          { label: "① 図心深さ", content: "$h_G=1.5+H/2=1.5+1.5=3.0$ m。" },
          { label: "② 面積と全水圧", content: "$A=bH=2.4\\times3.0=7.2$ m²。$P=\\gamma h_G A=9.8\\times3.0\\times7.2=211.68$ kN。" },
          { label: "③ 断面二次モーメント", content: "水面に平行な図心軸まわりに $I_G=bH^3/12=2.4\\times3.0^3/12=5.4$ m⁴。" },
          { label: "④ 圧力中心", content: "$h_R=h_G+I_G/(h_GA)=3.0+5.4/(3.0\\times7.2)=3.25$ m。" }
        ],
        answer: "$P=211.7$ kN、$h_R=3.25$ m"
      },
      {
        q: "幅 $b=1.8$ m、高さ $H=2.5$ m の鉛直ゲートの上端が水面下 $0.8$ m にある。$\\gamma=9.8$ kN/m³ として、全水圧と圧力中心深さを求めよ。",
        steps: [
          { label: "① 図心深さ", content: "$h_G=0.8+2.5/2=2.05$ m。" },
          { label: "② 全水圧", content: "$A=1.8\\times2.5=4.5$ m²、$P=9.8\\times2.05\\times4.5=90.405$ kN。" },
          { label: "③ $I_G$ の計算", content: "$I_G=bH^3/12=1.8\\times2.5^3/12=2.34375$ m⁴。" },
          { label: "④ 圧力中心", content: "$h_R=2.05+2.34375/(2.05\\times4.5)=2.304$ m。" }
        ],
        answer: "$P=90.4$ kN、$h_R\\simeq2.30$ m"
      }
    ]
  });

  addProblem("suiri1", "u6", {
    id: "adv_orifice_cd_flow",
    level: "advanced",
    source: "水理学レジュメ",
    pattern: "ベルヌーイと流量係数を含むオリフィス流量",
    goal: "理論流速をベルヌーイで出し、流量係数で実流量へ落とす。",
    reading: "エネルギー差 H が速度水頭に変換され、実際は Cd の分だけ小さくなる。",
    trap: "速度係数と流量係数を混同しない。ここでは $Q=C_d A\\sqrt{2gH}$。",
    formulaRefs: ["f1", "f4"],
    variants: [
      {
        q: "水槽の水面からオリフィス中心までの水頭差が $H=2.5$ m、オリフィス面積 $A=4.0\\times10^{-3}$ m²、流量係数 $C_d=0.62$ である。実流量 $Q$ を求めよ。",
        steps: [
          { label: "① 理論流速", content: "ベルヌーイより $v=\\sqrt{2gH}=\\sqrt{2\\times9.8\\times2.5}=7.0$ m/s。" },
          { label: "② 理論流量", content: "$Q_0=Av=4.0\\times10^{-3}\\times7.0=2.8\\times10^{-2}$ m³/s。" },
          { label: "③ 流量係数", content: "$Q=C_d Q_0=0.62\\times2.8\\times10^{-2}=1.736\\times10^{-2}$ m³/s。" },
          { label: "④ 単位確認", content: "1 m³/s = 1000 L/s なので、約17.4 L/s。" }
        ],
        answer: "$Q=1.74\\times10^{-2}$ m³/s $=17.4$ L/s"
      }
    ]
  });

  addConcept("kozo1", "u5", {
    id: "beam_moment_position",
    type: "beamMoment",
    kind: "操作図",
    level: "standard",
    title: "荷重位置と反力・M図の変化",
    description: "集中荷重を左右に動かすと、反力の分配と最大曲げモーメントがどう変わるかを確認します。",
    equation: "$R_A=P(L-a)/L$, $R_B=Pa/L$, $M_{max}=R_Aa$",
    controls: [
      { key: "L", label: "スパン L", value: 8, min: 3, max: 12, step: 0.1, unit: "m" },
      { key: "P", label: "荷重 P", value: 30, min: 5, max: 80, step: 1, unit: "kN" },
      { key: "a", label: "左端からの位置 a", value: 3, min: 0.2, max: 11.8, step: 0.1, unit: "m" }
    ]
  });

  addProblem("kozo1", "u5", {
    id: "adv_influence_line_section_moment",
    level: "advanced",
    source: "構造力学レジュメ",
    pattern: "影響線で移動荷重による断面曲げモーメント最大値を求める",
    goal: "固定された断面Cに対して、荷重位置を動かしたときのMの最大を読む。",
    reading: "M_Cの影響線はCで折れ曲がる三角形。集中荷重は影響線の最大縦距位置に置く。",
    trap: "荷重位置 a と断面位置 x_C を混同しない。",
    formulaRefs: ["f1", "f3"],
    variants: [
      {
        q: "単純ばり $L=8$ m の左端から $x_C=3$ m の断面Cについて、移動集中荷重 $P=40$ kN が作用する。断面Cの曲げモーメント $M_C$ が最大となる荷重位置と最大値を求めよ。",
        steps: [
          { label: "① 影響線の形", content: "単純ばりの断面曲げモーメント影響線は、断面Cで最大となる三角形。" },
          { label: "② 最大縦距", content: "Cでの影響線縦距は $x_C(L-x_C)/L=3(8-3)/8=15/8=1.875$ m。" },
          { label: "③ 荷重位置", content: "集中荷重は影響線縦距が最大の断面C直上に置く。" },
          { label: "④ 最大曲げモーメント", content: "$M_{C,max}=P\\times1.875=40\\times1.875=75$ kN m。" }
        ],
        answer: "荷重は断面C直上、$M_{C,max}=75$ kN m"
      }
    ]
  });

  addConcept("doshitsu3", "u1", {
    id: "infinite_slope_factor",
    type: "slopeStability",
    kind: "操作図",
    level: "advanced",
    title: "無限斜面の安全率",
    description: "斜面角・内部摩擦角・粘着力・地下水の影響を動かして、滑動力と抵抗力の大小を見ます。",
    equation: "$F=\\dfrac{c+\\gamma' z\\cos^2\\beta\\tan\\phi}{\\gamma z\\sin\\beta\\cos\\beta}$",
    controls: [
      { key: "beta", label: "斜面角 β", value: 30, min: 10, max: 50, step: 1, unit: "°" },
      { key: "phi", label: "内部摩擦角 φ", value: 35, min: 15, max: 45, step: 1, unit: "°" },
      { key: "c", label: "粘着力 c", value: 5, min: 0, max: 20, step: 0.5, unit: "kPa" },
      { key: "gamma", label: "単位体積重量 γ", value: 18, min: 14, max: 22, step: 0.5, unit: "kN/m3" },
      { key: "z", label: "すべり深さ z", value: 2, min: 0.5, max: 6, step: 0.1, unit: "m" },
      { key: "water", label: "水の影響 0-1", value: 0.4, min: 0, max: 1, step: 0.05, unit: "" }
    ]
  });

  addProblem("doshitsu3", "u1", {
    id: "adv_infinite_slope_seepage",
    level: "advanced",
    source: "土質力学3レジュメ",
    pattern: "浸透流を含む無限斜面の安全率",
    goal: "地下水があると有効単位体積重量が下がり、抵抗側が小さくなることを計算で見る。",
    reading: "斜面に平行なすべり面では、滑動力と抵抗力をすべり面方向・法線方向に分解する。",
    trap: "全重量γを抵抗側にも使うと危険側を見落とす。抵抗側は有効応力。",
    formulaRefs: ["f3", "f5", "f6"],
    variants: [
      {
        q: "斜面角 $\\beta=30^\\circ$、内部摩擦角 $\\phi=35^\\circ$、粘着力 $c=6$ kPa、湿潤単位体積重量 $\\gamma=18$ kN/m³、有効単位体積重量 $\\gamma'=10$ kN/m³、すべり深さ $z=2.5$ m の無限斜面を考える。斜面内に浸透流があるとして安全率 $F$ を求めよ。",
        steps: [
          { label: "① 滑動力", content: "$T=\\gamma z\\sin\\beta\\cos\\beta=18\\times2.5\\times\\sin30^\\circ\\cos30^\\circ=19.49$ kPa。" },
          { label: "② 抵抗力", content: "$S=c+\\gamma' z\\cos^2\\beta\\tan\\phi=6+10\\times2.5\\times\\cos^230^\\circ\\tan35^\\circ=19.13$ kPa。" },
          { label: "③ 安全率", content: "$F=S/T=19.13/19.49=0.98$。" },
          { label: "④ 判定", content: "$F<1$ なので、すべりに対して不安定側。地下水の影響が危険側に効いている。" }
        ],
        answer: "$F\\simeq0.98$、不安定側"
      }
    ]
  });

  addConcept("doshitsu3", "u5", {
    id: "mohr_circle_principal_stress",
    type: "mohrCircle",
    kind: "操作図",
    level: "standard",
    title: "モール円と主応力",
    description: "鉛直応力・水平応力・せん断応力を動かして、主応力と最大せん断応力が円から読めることを確認します。",
    equation: "$\\sigma_{1,3}=C\\pm R$, $R=\\sqrt{((\\sigma_x-\\sigma_y)/2)^2+\\tau^2}$",
    controls: [
      { key: "sigmaY", label: "鉛直応力 σz", value: 100, min: 20, max: 200, step: 5, unit: "kPa" },
      { key: "sigmaX", label: "水平応力 σx", value: 40, min: 0, max: 160, step: 5, unit: "kPa" },
      { key: "tau", label: "せん断応力 τ", value: 25, min: 0, max: 80, step: 1, unit: "kPa" }
    ]
  });

  addProblem("doshitsu3", "u5", {
    id: "adv_principal_stress_mohr",
    level: "advanced",
    source: "土質力学3レジュメ",
    pattern: "モール円から主応力と最大せん断応力を求める",
    goal: "応力円の中心と半径を出し、主応力を円の左右端として読む。",
    reading: "中心は平均応力、半径は偏差応力とせん断応力の合成。",
    trap: "最大主応力と鉛直応力は必ずしも同じではない。",
    formulaRefs: ["f4"],
    variants: [
      {
        q: "ある点で $\\sigma_z=120$ kPa、$\\sigma_x=50$ kPa、$\\tau=30$ kPa が作用している。モール円を用いて最大主応力 $\\sigma_1$、最小主応力 $\\sigma_3$、最大せん断応力を求めよ。",
        steps: [
          { label: "① 円の中心", content: "$C=(\\sigma_z+\\sigma_x)/2=(120+50)/2=85$ kPa。" },
          { label: "② 円の半径", content: "$R=\\sqrt{((120-50)/2)^2+30^2}=\\sqrt{35^2+30^2}=46.10$ kPa。" },
          { label: "③ 主応力", content: "$\\sigma_1=C+R=131.10$ kPa、$\\sigma_3=C-R=38.90$ kPa。" },
          { label: "④ 最大せん断応力", content: "モール円の半径そのものなので $\\tau_{max}=46.10$ kPa。" }
        ],
        answer: "$\\sigma_1=131.1$ kPa、$\\sigma_3=38.9$ kPa、$\\tau_{max}=46.1$ kPa"
      }
    ]
  });

  addConcept("oyosugaku1", "u4", {
    id: "characteristic_roots",
    type: "odeRoots",
    kind: "操作グラフ",
    level: "standard",
    title: "特性方程式の根と解の形",
    description: "係数を動かして、異なる実根・重根・複素根で解の形がどう変わるかを確認します。",
    equation: "$r^2+pr+q=0$, 判別式 $D=p^2-4q$",
    controls: [
      { key: "p", label: "p", value: 2, min: -6, max: 6, step: 0.1 },
      { key: "q", label: "q", value: 1, min: -6, max: 8, step: 0.1 }
    ]
  });

  addProblem("oyosugaku1", "u5", {
    id: "adv_resonance_undetermined",
    level: "advanced",
    source: "応用数学課題PDF",
    pattern: "共振する未定係数法",
    goal: "右辺が同次解と重なるとき、特解の仮定形を $t^2$ 倍する理由を確認する。",
    reading: "特性根が2重根で、右辺 $e^{2t}$ が同次解に含まれる。",
    trap: "$Ce^{2t}$ や $Cte^{2t}$ では同次解に吸収されて特解にならない。",
    formulaRefs: ["f1", "f3"],
    variants: [
      {
        q: "$y''-4y'+4y=e^{2t},\\ y(0)=0,\\ y'(0)=0$ を解け。",
        steps: [
          { label: "① 同次解", content: "特性方程式は $(r-2)^2=0$。したがって $y_h=(C_1+C_2t)e^{2t}$。" },
          { label: "② 共振の確認", content: "右辺 $e^{2t}$ は同次解に含まれる。重根なので特解は $At^2e^{2t}$ とおく。" },
          { label: "③ 置換で計算", content: "$y=e^{2t}z$ とおくと $(D-2)^2y=e^{2t}z''$。よって $z''=1$。" },
          { label: "④ 積分と初期条件", content: "$z=t^2/2+C_1t+C_2$。$y(0)=0$ から $C_2=0$、$y'(0)=0$ から $C_1=0$。" }
        ],
        answer: "$y=\\dfrac{1}{2}t^2e^{2t}$"
      }
    ]
  });

  addProblem("oyosugaku1", "u7", {
    id: "adv_shift_transform_separable",
    level: "advanced",
    source: "応用数学課題PDF",
    pattern: "置換で変数分離へ変える初期値問題",
    goal: "一見そのまま分離できない式を、$x=t+y$ と置いて分離形へ変える。",
    reading: "右辺が $(t+y)^2$ のような合成形なら、まとまりを新変数にする。",
    trap: "$x=t+y$ と置いたら $dx/dt=1+dy/dt$ になる。1を忘れない。",
    formulaRefs: ["f1", "f2"],
    variants: [
      {
        q: "$\\dfrac{dy}{dt}=(t+y)^2,\\ y(0)=1$ を、$x=t+y$ と置いて解け。",
        steps: [
          { label: "① 置換", content: "$x=t+y$ とおくと $dx/dt=1+dy/dt$。" },
          { label: "② 分離形へ", content: "$dy/dt=(t+y)^2=x^2$ なので、$dx/dt=1+x^2$。" },
          { label: "③ 積分", content: "$dx/(1+x^2)=dt$ より $\\arctan x=t+C$。" },
          { label: "④ 初期条件", content: "$t=0,y=1$ なので $x=1$、$C=\\arctan1=\\pi/4$。$x=\\tan(t+\\pi/4)$。" },
          { label: "⑤ 戻す", content: "$y=x-t=\\tan(t+\\pi/4)-t$。" }
        ],
        answer: "$y=\\tan(t+\\pi/4)-t$"
      }
    ]
  });
})();
