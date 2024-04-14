import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { LumaSplatsThree, LumaSplatsSemantics } from '@lumaai/luma-web';

class SplatManager {
    constructor() {
        this.splatArray = [
            'https://lumalabs.ai/capture/d80d4876-cf71-4b8a-8b5b-49ffac44cd4a',
            "https://lumalabs.ai/embed/dda54514-b5b8-4675-8d4c-a2590acbe399",
            "https://lumalabs.ai/embed/66bcf4a4-ddbd-4c53-9d89-93f39a943dba",
            "https://lumalabs.ai/embed/2c100df7-a93d-4893-9430-fbf9715e012d",
            "https://lumalabs.ai/embed/f3fa6a0c-de07-4f58-b395-f75f993c1d6f",
            "https://lumalabs.ai/embed/2a7c971c-fb52-4aca-b7c3-117a9e1016a0",
        ];

        this.backgroundEnabled = true;
        this.renderer = new WebGLRenderer({ antialias: false });
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        document.body.appendChild(this.renderer.domElement);

        this.camera = new PerspectiveCamera(75, 1, 0.1, 1000);
        this.camera.position.z = -7;

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        this.scene = new Scene();

        this.splat = new LumaSplatsThree({
            source: this.splatArray[1],
            enableThreeShaderIntegration: false,
        });

        this.scene.add(this.splat);
        this.renderer.setAnimationLoop(this.frameLoop.bind(this));
    }

    frameLoop() {
        let canvas = this.renderer.domElement;
        let width = canvas.clientWidth;
        let height = canvas.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height, false);
        }
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    demoSplat() {
        this.scene.remove(splat);
        this.splat = new LumaSplatsThree({
            source: splatArray[0],
            enableThreeShaderIntegration:false
        });
        this.scene.add(splat)
    
        this.camera.position.z = 7;
    }

    catSplat() {
        this.scene.remove(splat);
        this.splat = new LumaSplatsThree({
            source: splatArray[1],
            enableThreeShaderIntegration: false
        });
        this.scene.add(splat);
        this.camera.position.z = -7;
    }

    catSplat2() { 
        this.scene.remove(splat);
        this.splat = new LumaSplatsThree({
            source: splatArray[2],
            enableThreeShaderIntegration:false
        });
        this.scene.add(splat)
    
        this.camera.position.z = 7;
    }
    
    deskSplat() {
        this.scene.remove(splat);
        this.splat = new LumaSplatsThree({
            source: splatArray[3],
            enableThreeShaderIntegration:false
        });
        this.scene.add(splat)
    
        this.camera.position.z = 7;
    }
    
    deskSplat2() {
        this.scene.remove(splat);
        this.splat = new LumaSplatsThree({
            source: splatArray[4],
            enableThreeShaderIntegration:false
        });
        this.scene.add(splat)
    
        this.camera.position.z = -7;
    }
    
    deskSplat3() {
        this.scene.remove(splat);
        this.splat = new LumaSplatsThree({
            source: splatArray[5],
            enableThreeShaderIntegration:false
        });
        this.scene.add(splat)
    
        this.camera.position.z = 7;
    }
    
    toggleBackground() {
        this.backgroundEnabled = !this.backgroundEnabled
    
        if (!this.backgroundEnabled) {
            this.splat.semanticsMask = LumaSplatsSemantics.FOREGROUND;
        }
    
        else if (this.backgroundEnabled) {
            this.splat.semanticsMask = LumaSplatsSemantics.FOREGROUND | LumaSplatsSemantics.BACKGROUND;
        }
    }

}

export default SplatManager;