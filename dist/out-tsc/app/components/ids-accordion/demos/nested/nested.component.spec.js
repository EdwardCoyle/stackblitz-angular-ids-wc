import { TestBed } from '@angular/core/testing';
import { NestedComponent } from './nested.component';
describe('NestedComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NestedComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NestedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nested.component.spec.js.map