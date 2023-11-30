import { TestBed } from '@angular/core/testing';
import { DynamicComponent } from './dynamic.component';
describe('DynamicComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DynamicComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DynamicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dynamic.component.spec.js.map