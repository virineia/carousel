var O = o(446622)
          , q = o(432799)
          , H = o(543409)
          , W = o(656010);
        let Z = ({internalLabel: e, count: t, theme: o, percent: s=0, step: n=0, autoPlay: i=!1, handleStepClick: r, timeout: l, logData: c, accessibilityLabel: p})=>1 === t ? null : (0,
        u.jsx)(W.c, {
            className: "BusinessStoryProgressBars--grid",
            children: (0,
            u.jsx)(W.p, {
                colSpanDesktop: 20,
                colStartDesktop: 3,
                colSpanTablet: 10,
                colStartTablet: 2,
                colSpan: 8,
                children: (0,
                u.jsx)("div", {
                    className: "BusinessStoryProgressBars",
                    children: Array.from(Array(t), (t,d)=>(0,
                    u.jsx)("div", {
                        className: "BusinessProgressBar--wrapper",
                        children: (0,
                        u.jsx)(H.T, {
                            alwaysFocused: n === d,
                            onClick: ()=>r(d),
                            noFocusOutline: !0,
                            hasNoBorder: !0,
                            internalLabel: e,
                            componentLogData: c,
                            accessibilityLabel: p,
                            children: (0,
                            u.jsxs)(a.xu, {
                                children: [(0,
                                u.jsx)("div", {
                                    className: "BusinessProgressBar--background",
                                    style: {
                                        backgroundColor: o.text,
                                        opacity: d < n || d === n && !i ? "1" : "0.2"
                                    }
                                }), (0,
                                u.jsx)("div", {
                                    className: "BusinessProgressBar--active",
                                    style: {
                                        backgroundColor: o.text,
                                        width: n === d ? `${s}%` : "0%",
                                        transitionDuration: `${l}ms`
                                    }
                                })]
                            })
                        }, `business-featured-editorial-header-step-counter-${d}`)
                    }, `business-featured-editorial-header-div-${d}`))
                })
            })
        })
