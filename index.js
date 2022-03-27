function main() {
    const canvas = document.querySelector("#glCanvas");

    // GLコンテキストを初期化する
    // "webgl"を渡すことで :WebGLRenderingContext を取得している
    const gl = canvas.getContext("webgl");

    if (gl === null) {
        alert("WebGLを初期化できません");
    }

    // クリアカラーを黒に設定
    // clearColor(red, green, blue, alpha);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // クリアカラーでカラーバッファをクリア(背景色で再描画)
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
