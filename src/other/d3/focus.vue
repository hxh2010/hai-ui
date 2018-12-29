<!---->
<template>
  <div class="focus">
    <div id="container" style="width: 1200px;height: 800px;background: #003a74"></div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        graph: {
          "links": [{
            "id": "7149aa19cabb4289aa1ac397f2ddd969",
            "source": "013f229c82354218a800a41b79babdb8",
            "target": "71efba283cee4e1dafa808979e3310da",
            "text": "参与"
          }, {
            "id": "0e2686bce285415e8abbf3cd519db798",
            "source": "48d22a3fcf2d4bab9d0772aed7b78989",
            "target": "71efba283cee4e1dafa808979e3310da",
            "text": "参与"
          }],
          "nodes": [{
            "id": "71efba283cee4e1dafa808979e3310da",
            "label": ["虚拟账号", "QQ群号"],
            "name": "75002",
            "type": "QQ群号",
            "value": "75002"
          }, {
            "id": "013f229c82354218a800a41b79babdb8",
            "label": ["事", "专题"],
            "name": "1",
            "obj": {
              "alarmLevel": 0,
              "attribute": 2,
              "beginDate": 1491009802000,
              "category": 18,
              "createTime": 1501212288000,
              "dataSource": -1,
              "depId": 7,
              "description": "网约车，已经成了很多人出行的一种方式，它方便了我们的生活，却又饱受争议，一直在合法与不合法之间徘徊不定。一边是网约车公司公开而合法的存在，一边却给网约车司机贴上“非法运营”的标签，使得网约车司机不得不东躲西藏，却又逃不过执法部门“钓鱼执法”的怪圈，使部分司机承受了沉重的经济损失。\n     如果网约车不合法，能不能从源头上去控制网约车公司的存在，如果合法， 相关部门能否从规范机制，建立配套的管理制度出发，使网约车司机成为一种有尊严而阳光的职业，而不是某些执法部门的“提款机”？",
              "endDate": 1548372205000,
              "eventId": 1,
              "filterType": 2,
              "lastModify": 1530780308000,
              "name": "网约车维权",
              "pubLevel": 2,
              "sourceSys": 0,
              "status": 1,
              "updateUserId": 99,
              "userId": 99
            },
            "type": "专题",
            "value": "网约车维权"
          }, {
            "id": "48d22a3fcf2d4bab9d0772aed7b78989",
            "label": ["事", "专题"],
            "name": "2",
            "obj": {
              "alarmLevel": 0,
              "attribute": 2,
              "beginDate": 1491043348000,
              "category": 1,
              "createTime": 1489461891000,
              "dataSource": -1,
              "depId": 7,
              "description": "胖胖生活APP[1]  是由深圳市擎天柱信息技术有限公司研发的一款O2O同城生活服务应用平台。该软件承诺消费返现返还款却迟迟未到，连日来，记者多次拨打“胖胖生活”APP软件中山代理处电话，电话终于在昨日下午拨通，接听电话的是一名女性工作人员。在记者表明身份并询问返现情况后，该女性工作人员表示，最近“胖胖生活”APP软件的确存在返现暂停的情况，此前许多客户都曾电话咨询他们。而他们从公司得到的答复是，此前有不少商户利用返现的功能，进行大批量刷单骗现，导致公司出现损失。为了查清这些不合理的销售行为，公司对部分资金进行了冻结，目的是规范管理。“胖胖生活”APP软件总部是否真的作出了承诺，记者随后打开了“胖胖生活”APP软件的官方网站，在页面上多次搜索，并未发现任何有关本次推迟返现的说法。而在官网上的“胖胖新闻”栏目下，最后更新的新闻还是今年5月12日的一条官方企业宣传片",
              "endDate": 1551350552000,
              "eventId": 2,
              "filterType": 2,
              "lastModify": 1530861063000,
              "name": "胖胖生活网维权",
              "pubLevel": 2,
              "sourceSys": 0,
              "status": 1,
              "updateUserId": 99,
              "userId": 99
            },
            "type": "专题",
            "value": "胖胖生活网维权"
          }, {
            "id": "2f3506f9c4c24e76b75bc2d312f12f57",
            "label": ["事", "专题"],
            "name": "3",
            "obj": {
              "alarmLevel": 0,
              "attribute": 2,
              "beginDate": 1490976000000,
              "category": 1,
              "createTime": 1506073540000,
              "dataSource": -1,
              "depId": 7,
              "description": "善心汇是一个传销组织[1-2]  ，大型传销组织“善心汇”被查处[2]  。\n2016年5月以来，张天明等人通过搭建“善心汇众扶互生大系统”平台，大肆发展会员。截至目前，善心汇共有500多万会员，遍布全国31个省区市，涉案金额数百亿元，是近年来较为罕见的特大涉嫌传销组织。[3] \n2017年7月，按照公安部统一部署，全国各地公安机关依法对广东深圳市善心汇文化传播有限公司法定代表人张天明等人涉嫌组织、领导传销活动等犯罪问题进行查处，张天明等多名犯罪嫌疑人已被依法采取刑事强制措施。",
              "endDate": 1546185600000,
              "eventId": 3,
              "filterType": 2,
              "lastModify": 1527144886000,
              "name": "善心汇",
              "pubLevel": 1,
              "sourceSys": 0,
              "status": 1,
              "updateUserId": 99,
              "userId": 101
            },
            "type": "专题",
            "value": "善心汇"
          }]
        },
        all: null,
        svg: null,
        simulation: null,
        brush: null,
        link: null,
        node: null,
        svgNode: null,
        svgNodeImg: null,
        svgLink: null,
        svgLinkPath: null,
        svgLinkText: null,
        nodes: [],
        links: [],
        scale: null,
        translate: null,
        gBrush: null,
        brushMode: null,
        brushing: null,
        shiftKey: null,
        flagAll: -1,
        flagNow: -1,
        flagArray: [],
      }
    },
    methods: {
      initSvg() {
        this.nodes = [];
        this.links = [];
        this.link = null;
        this.node = null;
        this.svgNode = null;
        this.svgNodeImg = null;
        this.svgLink = null;
        this.svgLinkPath = null;
        this.svgLinkText = null;
        this.all = d3.select("#container").append('svg')
          .attr('width', '100%')
          .attr('height', '100%')
          .attr('class', 'neo4jd3')
          .call(d3.zoom().on('zoom', ()=> { //设置鼠标缩放
            let scale = d3.event.transform.k;
            let translate = [d3.event.transform.x, d3.event.transform.y];
            this.svg.attr('transform', 'translate(' + translate[0] + ', ' + translate[1] + ') scale(' + scale + ')');
          }))
          .on('dblclick.zoom', null);

        this.svg = this.all.append('g')
          .attr('width', '100%')
          .attr('height', '100%');

        this.node = this.svg.append("g").attr("class", "nodes");
        this.link = this.svg.append("g").attr("class", "links");

        this.simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id((d)=> {
            return d.id;
          }))
          .force('collide', d3.forceCollide().radius(()=> {
            return 60;
          }).iterations(2))
          .force("charge", d3.forceManyBody())
          .force("center", d3.forceCenter(1000 / 2, 825 / 2))
          .on('tick', ()=> {
            this.tick(); //秒监测
          })
          .on('end', ()=> {
          });

        // //创建笔刷
        // this.brush = d3.brush()
        //   .on("start", this.brushstarted)
        //   .on("brush", this.brushed)
        //   .on("end", this.brushended);
      },
      drawGraph(n, l) {
        this.drawNode(n);
        this.drawLink(l);
        //simulation

        this.simulation.nodes(this.nodes);
        this.simulation.force("link").links(this.links);
        this.simulation.restart();
      },
      drawNode(n) {
        this.nodes.forEach(d => {
          n.forEach(v => {
            if (v.id === d.id) {
              n.splice(n.indexOf(v), 1)
            }
          })
        });

        Array.prototype.push.apply(this.nodes, n);

        let tempNode = this.node.selectAll(".node")
          .data(this.nodes, (d)=> {
            return d.id;
          });

        this.svgNode = tempNode.enter().append('g')
          .attr("class", "node")
          .attr("cursor", "pointer")
          .on('click', (d)=> { //节点点击事件
            debugger
            if (d3.event.ctrlKey) {
              if (d.selected) {
                d.selected = false;
              } else {
                d.selected = true;
              }
            } else {
              this.svgNode.each((d)=> {
                d.selected = false
              });
              d.selected = true;
              this.onNodeClick(d);
            }

            this.svgNode.classed("selectNode", false);
            this.svgNode.classed("selectNode", p=> {
              return p.selected;
            });

          })
          .on('mouseenter', (d)=> { //节点enter事件
            this.onNodeMouseEnter(d);
          })
          .on('mouseleave', (d)=> { //节点鼠标离开事件
            this.onNodeMouseLeave(d);
          })
          .call(d3.drag()
            .on("start", this.dragStarted)
            .on("drag", this.dragged)
            .on("end", this.dragEnded));

        this.svgNode.append('circle')
          .attr('class', 'circle')
          .attr('stroke', '#fff')
          .attr('stroke-width', '1px')
          .attr('fill', '#5e9ffd')
          .attr('opacity', 1)
          .attr('r', 25)
          .append('title').text((d)=> {
          return d.name;
        });

        this.svgNodeImg = this.svgNode.append("g").attr("class", "img")

        this.svgNodeImg.append('image')
          .attr('height', (d)=> {
            return '25px';
          })
          .attr('width', (d)=> {
            return '25px';
          })
          .attr('x', (d)=> {
            return '0';
          })
          .attr('xlink:href', (d)=> { //根据图片路径加载对应的图片
            //return d.img;
            return 'QQGroup.svg';
            //return '1.jpg';
          })
          .attr('y', (d)=> {
            return '0';
          });


        this.svgNode.append('text')
          .attr('fill', '#fff')
          //.attr('font-weight', 'bolder')
          .attr('font-size', (d)=> {
            return '10px';
          })
          .attr('pointer-events', 'none')
          .attr('text-anchor', 'middle')
          .attr('y', (d)=> {
            return '20px';
          })
          .html((d)=> {
            return d.value; //node节点显示其name
          });
        this.svgNode = tempNode.merge(this.svgNode);
      },
      drawLink(l) {
        debugger
        this.links.forEach(d => { //过滤已有关系线
          l.forEach(v => {
            if (v.id === d.id) {
              l.splice(l.indexOf(v), 1)
            }
          })
        });
        Array.prototype.push.apply(this.links, l);
        let tempLink = this.link.selectAll(".link")
          .data(this.links, (d)=> {
            return d.id;
          });

        debugger
        this.svgLink = tempLink.enter()
          .append('g')
          .attr('class', 'link')
          .on('dblclick', (d)=> { //双击事件

          })
          //.on('click', (d)=> { //单击事件
          .on('mouseenter', (d)=> { //鼠标hover方法

          })
          .on('mouseleave', (d)=> {

          });

        this.svgLinkPath = this.svgLink.append('path')
          .attr('class', 'path')
          .attr('data-lineType', (d)=> {
            return 0
          })
          .attr('stroke', (d)=> {
            return '#A9A9A9'
          })
          .attr('stroke-dasharray', (d)=> {
            return '5,5'
          })
          .attr('stroke-linecap', (d)=> {
            return 'butt'
          })
          .attr('stroke-width', '1');


        this.svgLinkText = this.svgLink.append('text')
          .attr('class', 'text')
          .attr('fill', '#bababa')
          .attr('font-size', '12px')
          .attr('pointer-events', 'none')
          .attr('text-anchor', 'middle')
          .html((d)=> {
            return d.text;
          });
        debugger

        this.svgLink = tempLink.merge(this.svgLink);
        debugger

      },
      tick() {
        if (this.svgNode) {
          this.svgNode.attr('transform', (d)=> {
            return 'translate(' + d.x + ', ' + d.y + ')';
          });

          this.svgLink.attr('transform', (d)=> {
            let angle = this.rotation(d.source, d.target);
            return 'translate(' + d.source.x + ', ' + d.source.y + ') rotate(' + angle + ')';
          });


          this.svgNodeImg.attr('transform', (d)=> {
            //return 'translate(' + d.x + ', ' + d.y + ')';
            return 'translate(-13,-20)';
          });


          this.svgLinkText.attr('transform', (d)=> {
            let angle = (this.rotation(d.source, d.target) + 360) % 360,
              mirror = angle > 90 && angle < 270,
              center = {
                x: 0,
                y: 0
              },
              n = this.unitaryNormalVector(d.source, d.target),
              nWeight = mirror ? 2 : -3,
              point = {
                x: (d.target.x - d.source.x) * 0.5 + n.x * nWeight,
                y: (d.target.y - d.source.y) * 0.5 + n.y * nWeight
              },
              rotatedPoint = this.rotatePoint(center, point, angle);

            return 'translate(' + rotatedPoint.x + ', ' + rotatedPoint.y + ') rotate(' + (mirror ? 180 : 0) + ')';
          });

          this.svgLink.each(()=> {
            let rel = d3.select(this);
            let path = rel.select('.path');
            let text = rel.select('.text');

            path.attr('d', (d)=> {
              let center = {
                  x: 0,
                  y: 0
                },
                angle = this.rotation(d.source, d.target),
                textBoundingBox = text.node().getBBox(),
                textPadding = 5,
                u = this.unitaryVector(d.source, d.target),
                textMargin = {
                  x: (d.target.x - d.source.x - (textBoundingBox.width + textPadding) * u.x) * 0.5,
                  y: (d.target.y - d.source.y - (textBoundingBox.width + textPadding) * u.y) * 0.5
                },
                n = this.unitaryNormalVector(d.source, d.target),
                rotatedPointA1 = this.rotatePoint(center, {
                  x: (25 + 1) * u.x - n.x,
                  y: (25 + 1) * u.y - n.y
                }, angle),
                rotatedPointB1 = this.rotatePoint(center, {
                  x: textMargin.x - n.x,
                  y: textMargin.y - n.y
                }, angle),
                rotatedPointC1 = this.rotatePoint(center, {
                  x: textMargin.x,
                  y: textMargin.y
                }, angle),
                rotatedPointD1 = this.rotatePoint(center, {
                  x: (25 + 1) * u.x,
                  y: (25 + 1) * u.y
                }, angle),
                rotatedPointA2 = this.rotatePoint(center, {
                  x: d.target.x - d.source.x - textMargin.x - n.x,
                  y: d.target.y - d.source.y - textMargin.y - n.y
                }, angle),
                rotatedPointB2 = this.rotatePoint(center, {
                  x: d.target.x - d.source.x - (25 + 1) * u.x - n.x - u.x * 4,
                  y: d.target.y - d.source.y - (25 + 1) * u.y - n.y - u.y * 4
                }, angle),
                rotatedPointC2 = this.rotatePoint(center, {
                  x: d.target.x - d.source.x - (25 + 1) * u.x - n.x + (n.x - u.x) * 4,
                  y: d.target.y - d.source.y - (25 + 1) * u.y - n.y + (n.y - u.y) * 4
                }, angle),
                rotatedPointD2 = this.rotatePoint(center, {
                  x: d.target.x - d.source.x - (25 + 1) * u.x,
                  y: d.target.y - d.source.y - (25 + 1) * u.y
                }, angle),
                rotatedPointE2 = this.rotatePoint(center, {
                  x: d.target.x - d.source.x - (25 + 1) * u.x + (-n.x - u.x) * 4,
                  y: d.target.y - d.source.y - (25 + 1) * u.y + (-n.y - u.y) * 4
                }, angle),
                rotatedPointF2 = this.rotatePoint(center, {
                  x: d.target.x - d.source.x - (25 + 1) * u.x - u.x * 4,
                  y: d.target.y - d.source.y - (25 + 1) * u.y - u.y * 4
                }, angle),
                rotatedPointG2 = this.rotatePoint(center, {
                  x: d.target.x - d.source.x - textMargin.x,
                  y: d.target.y - d.source.y - textMargin.y
                }, angle);

              return 'M ' + rotatedPointA1.x + ' ' + rotatedPointA1.y +
                ' L ' + rotatedPointB1.x + ' ' + rotatedPointB1.y +
                ' L ' + rotatedPointC1.x + ' ' + rotatedPointC1.y +
                ' L ' + rotatedPointD1.x + ' ' + rotatedPointD1.y +
                ' Z M ' + rotatedPointA2.x + ' ' + rotatedPointA2.y +
                ' L ' + rotatedPointB2.x + ' ' + rotatedPointB2.y +
                ' L ' + rotatedPointC2.x + ' ' + rotatedPointC2.y +
                ' L ' + rotatedPointD2.x + ' ' + rotatedPointD2.y +
                ' L ' + rotatedPointE2.x + ' ' + rotatedPointE2.y +
                ' L ' + rotatedPointF2.x + ' ' + rotatedPointF2.y +
                ' L ' + rotatedPointG2.x + ' ' + rotatedPointG2.y +
                ' Z';
            });
          });
        }
      },
      onNodeClick(d) {
        this.onNodeMouseEnter(d) //节点相连的关系高亮
        this.appendCircle(d) //添加半圆功能选择
      },
      appendCircle(d) {
        let that = this;
        let cirData = [{
          name: '解锁',
          title: '解锁'
        }, {
          name: '扩展',
          title: '扩展'
        }, {
          name: '删除',
          title: '删除'
        }]
        let data = [5, 5, 5]; //弧形分段数据
        let outerRadius = 80, //外弧度
          innerRadius = outerRadius / 2.5, //内弧度
          cornerRadius = 10; //中心角度
        let pie = d3.pie() //创建一个新的饼图生成器
          .padAngle(.02); //为填充的弧设置相邻弧之间的角度。
        let arc = d3.arc() //创建一个新的电弧发生器
          .padRadius(outerRadius)
          .innerRadius(innerRadius); //设置内半径。
        if (this.circle) { //判断是否已存在半圆，如果存在则删除
          this.circle.remove()
        }
        let svg = this.svg.append("g")
          .attr('class', 'nodeCircle')
          .attr("transform", "translate(" + d.x + "," + d.y + ")") //绘图的位置
          .on('mouseleave', (d)=> { //节点鼠标离开事件
            if (that.circle) { //判断是否已存在半圆，如果存在则删除
              that.circle.remove()
            }
          })
        svg.selectAll("path")
          .data(pie(data)) //生成对应分区的圆饼 计算给定数据集的弧角
          .enter().append("path")
          .attr('fill', (d)=> {
            switch (d.index) {
              case 0:
                return '#37bab7'
                break;
              case 1:
                return '#c9903e'
                break;
              case 2:
                return '#b7b927'
                break;
              case 3:
                return '#fe8767'
                break;
              case 4:
                return '#30c159'
                break;
              default:
                return '#30c159'
                break;
            }
          })
          .attr('name', (d)=> {
            return cirData[d.index].name
          })
          .each(function (d, i) {
            //遍历 设置每个分区的属性
            addtext(svg, cirData, i)
            d.outerRadius = outerRadius - 20;
          })
          .attr("d", arc) //叠加圆弧
          .on("mouseover", arcTween(outerRadius - 5, 0))
          .on("click", arcClick)
          .on("mouseout", arcTween(outerRadius - 20, 150));
        this.circle = svg ////外环

        //圆弧单击事件
        function arcClick(d) {
          let thatArc = this
          let clickName = d3.select(thatArc).attr('name')

          if (clickName === '解锁') {
            let node = this.svgNode.filter((d)=> {
              return d.selected === true
            });
            let data2 = node.data();
            node.data()[0].fx = node.data()[0].fy = null;
          } else if (clickName === '删除') {



          } else if (clickName === '扩展') {

          }
        }

        //半圆增加文字
        function addtext(element, cirData, i) {
          element.append('text')
            .attr('class', (d)=> {
              return 'circleText' + i
            })
            .attr('transform', (d)=> {
              switch (i) {
                case 0:
                  return 'rotate(65, -5 0)'
                  break;
                case 1:
                  return 'translate(-40,30)'
                  break;
                case 2:
                  return 'translate(-5,-35)'
                  break;
                case 3:
                  return 'rotate(250, -42 12)'
                  break;
                case 4:
                  return 'rotate(320, -20 -40)'
                  break;
                default:
                  return ''
                  break;
              }
            })
            .attr('fill', '#8bf1d7')
            .attr('font-size', (d)=> {
              return '12.5px';
            })
            .attr('pointer-events', 'none')
            .attr('text-anchor', 'middle')
            .attr('y', (d)=> {
              // 计算 对应的文字的位置坐标
              let y = Math.sin(Math.PI / 180 * (360 / cirData.length) * (i - 0.8)) * 1.8 * 25
              return y + 'px';
            })
            .attr('x', (d)=> {
              let x = Math.cos(Math.PI / 180 * (360 / cirData.length) * (i - 0.8)) * 1.8 * 25
              return x + 'px';
            })
            .html((d)=> {
              return cirData[i].name
            });
        }

        //鼠标hover变大效果
        function arcTween(outerRadius, delay) {
          return ()=> {
            d3.select(this).transition().delay(delay).attrTween("d", (d)=> {
              let i = d3.interpolate(d.outerRadius, outerRadius);
              return function (t) {
                d.outerRadius = i(t);
                return arc(d);
              };
            });
          };
        }
      },
      rotation(source, target) {
        return Math.atan2(target.y - source.y, target.x - source.x) * 180 / Math.PI;
      },
      rotate(cx, cy, x, y, angle) {
        let radians = (Math.PI / 180) * angle,
          cos = Math.cos(radians),
          sin = Math.sin(radians),
          nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
          ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;

        return {
          x: nx,
          y: ny
        };
      },
      rotatePoint(c, p, angle) {
        return this.rotate(c.x, c.y, p.x, p.y, angle);
      },
      unitaryVector(source, target, newLength) {
        let length = Math.sqrt(Math.pow(target.x - source.x, 2) + Math.pow(target.y - source.y, 2)) / Math.sqrt(newLength || 1);

        return {
          x: (target.x - source.x) / length,
          y: (target.y - source.y) / length,
        };
      },
      unitaryNormalVector(source, target, newLength) {
        let center = {
            x: 0,
            y: 0
          },
          vector = this.unitaryVector(source, target, newLength);

        return this.rotatePoint(center, vector, 90);
      },
      onNodeMouseEnter(d) {
        //高亮所选节点相连的线的功能
        this.svgLink.classed("hover", false)
        this.svgLink.classed("hover", p=> {
          return p.hover = d === p.source || d === p.target
        });
      },
      onNodeMouseLeave(d) {
        //取消高亮所选节点相连的线的功能
        if (!d.selected) { //如果未被选择 则取消hover效果
          this.svgLink.classed("hover", false)
        }
      },
      dragStarted(d) {
        if (!d3.event.active) {
          this.simulation.alphaTarget(0.1).restart();
        }
        d.fx = d.x;
        d.fy = d.y;


      },
      dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;

      },
      dragEnded(d) {
        if (!d3.event.active) {
          this.simulation.alphaTarget(0);
        }

      },
    },
    computed: {},
    components: {},
    mounted() {
      this.$nextTick(() => {
        this.initSvg();
        this.drawGraph(this.graph.nodes, this.graph.links);
      })
    }
  }
</script>
<style scoped lang="stylus">
  .focus
    padding 20px

  .selectLink path {
    stroke: #09ddff !important;
    opacity: 1;
    stroke-width: 2;
    stroke-dasharray: 0;
  }

  .selectLink text {
    fill: #09ddff !important;
  }

  .selectNode circle {
    fill: rgba(68, 133, 199, 0.69) !important;
    opacity: 1;
    stroke: #9fafa4;
    stroke-width: 1px;
  }

  .selectList {
    background: #3189b5 !important;
  }

  .hover path {
    opacity: 1;
    stroke-width: 2;
    stroke-dasharray: 0;
    storke: #ffd142;
  }

  .noSee {
    display: none !important;
  }
</style>
