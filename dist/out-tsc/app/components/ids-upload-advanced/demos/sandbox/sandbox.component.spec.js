import { TestBed } from '@angular/core/testing';
import { SandboxComponent } from './sandbox.component';
describe('SandboxComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SandboxComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SandboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sandbox.component.spec.js.map