import { TestBed } from '@angular/core/testing';
import { SwappableComponent } from './swappable.component';
describe('SwappableComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SwappableComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SwappableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=swappable.component.spec.js.map